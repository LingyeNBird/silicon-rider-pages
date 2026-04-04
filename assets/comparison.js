(function renderComparisonPage() {
  const app = document.getElementById('comparison-app');
  const manifest = window.reportManifest;

  if (!app || !manifest || !Array.isArray(manifest.reports)) {
    return;
  }

  const reports = manifest.reports;
  document.title = manifest.pageTitle;

  function toCurrency(value) {
    return `¥${Number(value).toFixed(2)}`;
  }

  function modelCardsMarkup() {
    return reports
      .map((report) => {
        const s = report.stats;
        return `
          <article class="model-card" style="--tone:${report.accent}">
            <div class="model-name">${report.displayName}</div>
            <div class="model-meta">seed ${report.seed} · ${report.runtime} · ${s.calls} calls</div>
            <div class="profit-value">${toCurrency(s.profit)}</div>
            <div class="metric-pair">
              <div class="metric-box">
                <div class="metric-label">准时率</div>
                <div class="metric-value">${s.onTimeRate}%</div>
              </div>
              <div class="metric-box">
                <div class="metric-label">路径效率</div>
                <div class="metric-value">${s.pathEfficiency}</div>
              </div>
              <div class="metric-box">
                <div class="metric-label">完成订单</div>
                <div class="metric-value">${s.completedOrders}</div>
              </div>
              <div class="metric-box">
                <div class="metric-label">违规率</div>
                <div class="metric-value">${s.apiViolationRate}%</div>
              </div>
            </div>
            <div class="card-actions">
              <a class="link-button" href="${report.reportPage}">查看报告页</a>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function renderTopNav() {
    return `
      <nav class="top-nav">
        <a class="top-nav-link active" href="./index.html">比较首页</a>
        <a class="top-nav-link" href="./reports/index.html">报告列表</a>
        <a class="top-nav-link" href="${manifest.sourceArchive.comparisonPage}">原始比较文档</a>
      </nav>
    `;
  }

  function comparisonRows() {
    const rows = [
      { key: 'profit', title: '总利润', formatter: (v) => toCurrency(v), best: 'max' },
      { key: 'completedOrders', title: '完成订单数', formatter: (v) => `${v}`, best: 'max' },
      { key: 'onTimeRate', title: '准时率', formatter: (v) => `${v}%`, best: 'max' },
      { key: 'pathEfficiency', title: '路径效率', formatter: (v) => `${v}`, best: 'min' },
      { key: 'apiViolationRate', title: 'API 违规率', formatter: (v) => `${v}%`, best: 'min' },
      { key: 'avgProfitPerOrder', title: '平均每单利润', formatter: (v) => toCurrency(v), best: 'max' },
      { key: 'avgOvertimeMinutes', title: '平均超时时长', formatter: (v) => `${v} min`, best: 'min' },
    ];

    return rows
      .map((row) => {
        const values = reports.map((r) => Number(r.stats[row.key]));
        const target = row.best === 'max' ? Math.max(...values) : Math.min(...values);
        const cells = reports
          .map((r) => {
            const val = Number(r.stats[row.key]);
            const bestClass = val === target ? 'best' : '';
            return `<td class="${bestClass}">${row.formatter(val)}</td>`;
          })
          .join('');
        return `<tr><td>${row.title}</td>${cells}</tr>`;
      })
      .join('');
  }

  app.innerHTML = `
    <div class="site-shell">
      ${renderTopNav()}
      <header class="hero">
        <div class="hero-badge">Silicon Rider Bench · Level 1 · 24h</div>
        <h1 class="hero-title">${reports.map((r) => r.displayName).join(' vs ')}</h1>
        <p class="hero-subtitle">${manifest.subtitle}</p>
      </header>

      <section class="model-grid">${modelCardsMarkup()}</section>

      <section class="section">
        <div class="section-head">
          <h2 class="section-title">六维雷达图</h2>
          <p class="section-desc">盈利能力、准时率、路径效率、API 规范性、单均利润、抗超时能力</p>
        </div>
        <div class="radar-grid">
          ${reports
            .map(
              (r, idx) => `
                <div class="radar-card">
                  <h3 class="${r.toneClass}">${r.displayName}</h3>
                  <canvas id="radar-${idx}"></canvas>
                </div>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2 class="section-title">核心指标对比</h2>
          <p class="section-desc">每个指标自动高亮最优值（路径效率与违规率为越低越好）</p>
        </div>
        <div class="panel">
          <table>
            <thead>
              <tr>
                <th>指标</th>
                ${reports.map((r) => `<th><a href="${r.reportPage}">${r.displayName}</a></th>`).join('')}
              </tr>
            </thead>
            <tbody>${comparisonRows()}</tbody>
          </table>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2 class="section-title">叠加雷达</h2>
          <p class="section-desc">同一坐标系观察模型策略差异</p>
        </div>
        <div class="panel"><canvas id="radar-overlay"></canvas></div>
      </section>
    </div>
  `;

  const radarLabels = ['盈利能力', '准时率', '路径效率', 'API规范性', '单均利润', '抗超时能力'];

  function asRadarData(stats) {
    return [
      (stats.profit / 600) * 100,
      stats.onTimeRate,
      (2 - stats.pathEfficiency) * 100,
      100 - stats.apiViolationRate,
      (stats.avgProfitPerOrder / 20) * 100,
      ((40 - stats.avgOvertimeMinutes) / 40) * 100,
    ];
  }

  const baseOptions = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: 'rgba(235,239,255,0.3)',
          backdropColor: 'transparent',
          font: { family: 'JetBrains Mono', size: 10 },
        },
        pointLabels: {
          color: 'rgba(235,239,255,0.75)',
          font: { family: 'Noto Sans SC', size: 12 },
        },
        grid: { color: 'rgba(235,239,255,0.11)' },
        angleLines: { color: 'rgba(235,239,255,0.11)' },
      },
    },
    plugins: { legend: { display: false } },
  };

  reports.forEach((report, idx) => {
    const canvas = document.getElementById(`radar-${idx}`);
    if (!canvas) {
      return;
    }

    new Chart(canvas, {
      type: 'radar',
      data: {
        labels: radarLabels,
        datasets: [
          {
            data: asRadarData(report.stats),
            borderColor: report.accent,
            backgroundColor: `${report.accent}2a`,
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: report.accent,
          },
        ],
      },
      options: baseOptions,
    });
  });

  const overlay = document.getElementById('radar-overlay');
  if (!overlay) {
    return;
  }

  new Chart(overlay, {
    type: 'radar',
    data: {
      labels: radarLabels,
      datasets: reports.map((report) => ({
        label: report.displayName,
        data: asRadarData(report.stats),
        borderColor: report.accent,
        backgroundColor: `${report.accent}1e`,
        borderWidth: 2,
        pointRadius: 3,
      })),
    },
    options: {
      ...baseOptions,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'rgba(235,239,255,0.72)',
            font: { family: 'Noto Sans SC' },
          },
        },
      },
    },
  });
})();
