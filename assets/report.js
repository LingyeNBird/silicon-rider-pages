(function renderSingleReportPage() {
  const app = document.getElementById('report-app');
  const reportId = document.body.getAttribute('data-report-id');
  const manifest = window.reportManifest;

  if (!app || !reportId || !manifest || !Array.isArray(manifest.reports)) {
    return;
  }

  const reportMeta = manifest.reports.find((item) => item.id === reportId);
  if (!reportMeta) {
    app.innerHTML = '<div class="report-layout"><p>Report not found in manifest.</p></div>';
    return;
  }

  document.title = `${reportMeta.displayName} · Silicon Rider Bench Report`;

  function splitSections(markdown) {
    const lines = markdown.split(/\r?\n/);
    const sections = {};
    let current = '__intro__';
    sections[current] = [];

    for (const line of lines) {
      const headingMatch = line.match(/^##\s+(.+)$/);
      if (headingMatch) {
        current = headingMatch[1].trim();
        sections[current] = [];
        continue;
      }
      sections[current].push(line);
    }

    return sections;
  }

  function extractBoldKeyValues(sectionLines) {
    const result = {};
    for (const line of sectionLines) {
      const match = line.match(/^-\s+\*\*(.+?)\*\*:\s*(.+)$/);
      if (match) {
        result[match[1].trim()] = match[2].trim();
      }
    }
    return result;
  }

  function parseRoundCount(detailMarkdown) {
    const matches = detailMarkdown.match(/^###\s+对话轮次\s+#\d+/gm);
    return matches ? matches.length : 0;
  }

  function renderKVList(kvObject) {
    return Object.entries(kvObject)
      .map(([k, v]) => `<li><span>${k}</span><strong>${v}</strong></li>`)
      .join('');
  }

  function toPercentValue(value) {
    const number = Number(String(value).replace(/[^\d.]/g, ''));
    return Number.isFinite(number) ? number : 0;
  }

  function toNumericValue(value) {
    const number = Number(String(value).replace(/[^\d.-]/g, ''));
    return Number.isFinite(number) ? number : 0;
  }

  Promise.all([
    fetch(reportMeta.summaryPath).then((res) => res.text()),
    fetch(reportMeta.detailPath).then((res) => res.text()),
  ])
    .then(([summaryMd, detailMd]) => {
      const sections = splitSections(summaryMd);
      const basicInfo = extractBoldKeyValues(sections['基本信息'] || []);
      const coreMetrics = extractBoldKeyValues(sections['核心指标'] || []);
      const detailStats = extractBoldKeyValues(sections['详细统计'] || []);
      const orderMix = extractBoldKeyValues(sections['订单类型分布'] || []);
      const evaluation = (sections['评价总结'] || []).filter((line) => /^\s*(✅|❌|⚠)/.test(line));
      const rounds = parseRoundCount(detailMd);

      app.innerHTML = `
        <div class="container report-page">
          <nav class="standalone-nav report-nav" aria-label="Standalone site navigation">
            <a href="../index.html">← 返回对比页</a>
            <a href="./index.html">查看全部报告</a>
          </nav>

          <header class="header report-header">
            <div class="header-badge"><span class="dot"></span>Standalone Single Report</div>
            <h1><span class="${reportMeta.toneClass}">${reportMeta.displayName}</span><span class="header-separator"> · </span>单模型报告</h1>
            <p class="subtitle">从 markdown 自动解析并可视化：基本信息、核心指标、详细统计、订单类型分布、评价总结。</p>
          </header>

          <section class="model-card report-hero-card" style="--report-accent:${reportMeta.accent}">
            <div class="report-hero-top">
              <div>
                <div class="model-meta">seed ${reportMeta.seed} · ${reportMeta.runtime} · ${reportMeta.stats.calls} calls · ${reportMeta.stats.totalTokens.toLocaleString()} tokens</div>
                <div class="profit report-hero-profit">${coreMetrics['总利润'] || `¥${reportMeta.stats.profit.toFixed(2)}`}</div>
              </div>
              <div class="report-pill-row">
                <div class="report-pill"><span>路径效率</span><strong>${coreMetrics['路径效率'] || reportMeta.stats.pathEfficiency}</strong></div>
                <div class="report-pill"><span>平均每单利润</span><strong>${detailStats['平均每单利润'] || `¥${reportMeta.stats.avgProfitPerOrder.toFixed(2)}`}</strong></div>
                <div class="report-pill"><span>平均超时时长</span><strong>${detailStats['平均超时时长'] || `${reportMeta.stats.avgOvertimeMinutes} 分钟`}</strong></div>
              </div>
            </div>
          </section>

          <section class="report-kpi-grid">
            <article class="stat-item report-kpi-card"><div class="stat-label">总利润</div><div class="stat-value">${coreMetrics['总利润'] || `¥${reportMeta.stats.profit.toFixed(2)}`}</div></article>
            <article class="stat-item report-kpi-card"><div class="stat-label">完成订单</div><div class="stat-value">${coreMetrics['完成订单数'] || reportMeta.stats.completedOrders}</div></article>
            <article class="stat-item report-kpi-card"><div class="stat-label">准时率</div><div class="stat-value">${coreMetrics['准时率'] || `${reportMeta.stats.onTimeRate}%`}</div></article>
            <article class="stat-item report-kpi-card"><div class="stat-label">API 违规率</div><div class="stat-value">${coreMetrics['API 违规率'] || `${reportMeta.stats.apiViolationRate}%`}</div></article>
          </section>

          <section class="report-main-grid">
            <article class="radar-overlay-wrapper report-panel">
              <h2 class="section-title">指标可视化</h2>
              <p class="section-desc">柱图展示关键业务指标，环图展示订单类型结构。</p>
              <div class="chart-card">
                <canvas id="report-metric-chart"></canvas>
              </div>
              <div class="chart-card list-block">
                <canvas id="order-mix-chart"></canvas>
              </div>
            </article>

            <aside class="table-wrapper report-panel report-side-panel">
              <div class="list-block">
                <h3 class="list-title">基本信息</h3>
                <ul class="kv-list">${renderKVList(basicInfo)}</ul>
              </div>
              <div class="list-block">
                <h3 class="list-title">详细统计</h3>
                <ul class="kv-list">${renderKVList(detailStats)}</ul>
              </div>
            </aside>
          </section>

          <section class="table-wrapper report-panel report-summary-panel">
            <h2 class="section-title">评价总结</h2>
            <ul class="evaluation-list">
              ${evaluation
                .map((line) => {
                  const stateClass = line.includes('✅') ? 'is-good' : line.includes('❌') ? 'is-bad' : 'is-warn';
                  return `<li class="${stateClass}"><span>${line}</span></li>`;
                })
                .join('')}
            </ul>
            <div class="report-meta-grid">
              <div class="report-meta-item"><div class="stat-label">Conversation rounds</div><div class="stat-value mono">${rounds}</div></div>
              <div class="report-meta-item"><div class="stat-label">Summary file</div><div class="stat-value mono">${reportMeta.summaryPath}</div></div>
              <div class="report-meta-item"><div class="stat-label">Detail file</div><div class="stat-value mono">${reportMeta.detailPath}</div></div>
            </div>
          </section>
        </div>
      `;

      const rootStyle = getComputedStyle(document.documentElement);
      const textSecondary = rootStyle.getPropertyValue('--text-secondary').trim() || 'rgba(232,232,240,0.7)';
      const gridColor = rootStyle.getPropertyValue('--border').trim() || 'rgba(232,232,240,0.12)';
      const cardBg = rootStyle.getPropertyValue('--bg-card').trim() || '#16161f';

      const metricCanvas = document.getElementById('report-metric-chart');
      if (metricCanvas) {
        const onTime = toPercentValue(coreMetrics['准时率'] || reportMeta.stats.onTimeRate);
        const apiRate = toPercentValue(coreMetrics['API 违规率'] || reportMeta.stats.apiViolationRate);
        const path = toNumericValue(coreMetrics['路径效率'] || reportMeta.stats.pathEfficiency);
        const avgProfit = toNumericValue(detailStats['平均每单利润'] || reportMeta.stats.avgProfitPerOrder);
        const overtime = toNumericValue(detailStats['平均超时时长'] || reportMeta.stats.avgOvertimeMinutes);

        new Chart(metricCanvas, {
          type: 'bar',
          data: {
            labels: ['准时率', 'API规范性', '路径效率(反向)', '平均单利', '抗超时能力'],
            datasets: [
              {
                label: reportMeta.displayName,
                data: [onTime, 100 - apiRate, (2 - path) * 100, avgProfit * 5, (40 - overtime) * 2.5],
                backgroundColor: `${reportMeta.accent}88`,
                borderColor: reportMeta.accent,
                borderWidth: 1.5,
                borderRadius: 8,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                   color: textSecondary,
                   backdropColor: 'transparent',
                 },
                 grid: { color: gridColor },
               },
               x: {
                 ticks: { color: textSecondary },
                 grid: { color: gridColor },
               },
             },
             plugins: {
              legend: { display: false },
            },
          },
        });
      }

      const mixCanvas = document.getElementById('order-mix-chart');
      if (mixCanvas) {
        const food = toNumericValue(orderMix['餐饮订单'] || reportMeta.stats.orders.food);
        const supermarket = toNumericValue(orderMix['超市订单'] || reportMeta.stats.orders.supermarket);
        const pharmacy = toNumericValue(orderMix['药店订单'] || reportMeta.stats.orders.pharmacy);

        new Chart(mixCanvas, {
          type: 'doughnut',
          data: {
            labels: ['餐饮订单', '超市订单', '药店订单'],
            datasets: [
              {
                data: [food, supermarket, pharmacy],
                 backgroundColor: [reportMeta.accent, '#22d3ee', '#eab308'],
                 borderColor: cardBg,
                 borderWidth: 2,
               },
             ],
          },
          options: {
            plugins: {
              legend: {
                 labels: {
                   color: textSecondary,
                 },
               },
             },
          },
        });
      }
    })
    .catch((error) => {
      app.innerHTML = `
        <div class="container report-page">
          <nav class="standalone-nav report-nav"><a href="../index.html">← 返回对比页</a><a href="./index.html">查看全部报告</a></nav>
          <section class="table-wrapper report-panel">
            <h2 class="section-title">Failed to load report markdown files.</h2>
            <pre class="mono report-error">${String(error)}</pre>
          </section>
        </div>
      `;
    });
})();
