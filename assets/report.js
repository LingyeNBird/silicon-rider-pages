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
        <div class="report-layout">
          <nav class="report-nav"><a href="../index.html">← 返回对比页</a><a href="./index.html">查看全部报告</a></nav>
          <header>
            <h1 class="report-title ${reportMeta.toneClass}">${reportMeta.displayName} · 单模型报告</h1>
            <p class="report-sub">从 markdown 自动解析：基本信息、核心指标、详细统计、订单类型分布、评价总结。</p>
          </header>

          <section class="kpi-grid">
            <article class="kpi-card"><div class="kpi-key">总利润</div><div class="kpi-val">${coreMetrics['总利润'] || `¥${reportMeta.stats.profit.toFixed(2)}`}</div></article>
            <article class="kpi-card"><div class="kpi-key">完成订单</div><div class="kpi-val">${coreMetrics['完成订单数'] || reportMeta.stats.completedOrders}</div></article>
            <article class="kpi-card"><div class="kpi-key">准时率</div><div class="kpi-val">${coreMetrics['准时率'] || `${reportMeta.stats.onTimeRate}%`}</div></article>
            <article class="kpi-card"><div class="kpi-key">API 违规率</div><div class="kpi-val">${coreMetrics['API 违规率'] || `${reportMeta.stats.apiViolationRate}%`}</div></article>
          </section>

          <section class="report-grid">
            <div class="panel">
              <h2 class="section-title">指标可视化</h2>
              <p class="section-desc">柱图：关键业务指标。饼图：订单类型分布。</p>
              <canvas id="report-metric-chart"></canvas>
              <div class="list-block">
                <canvas id="order-mix-chart"></canvas>
              </div>
            </div>

            <aside class="panel">
              <div class="list-block">
                <div class="list-title">基本信息</div>
                <ul class="kv-list">${renderKVList(basicInfo)}</ul>
              </div>
              <div class="list-block">
                <div class="list-title">详细统计</div>
                <ul class="kv-list">${renderKVList(detailStats)}</ul>
              </div>
            </aside>
          </section>

          <section class="panel">
            <h2 class="section-title">评价总结</h2>
            <ul class="kv-list">
              ${evaluation.map((line) => `<li><span>${line}</span><strong></strong></li>`).join('')}
            </ul>
            <div class="report-meta">
              <p>Conversation rounds in detail report: <strong class="mono">${rounds}</strong></p>
              <p>Summary file: <span class="mono">${reportMeta.summaryPath}</span></p>
              <p>Detail file: <span class="mono">${reportMeta.detailPath}</span></p>
            </div>
          </section>
        </div>
      `;

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
                  color: 'rgba(235,239,255,0.6)',
                  backdropColor: 'transparent',
                },
                grid: { color: 'rgba(235,239,255,0.12)' },
              },
              x: {
                ticks: { color: 'rgba(235,239,255,0.7)' },
                grid: { color: 'rgba(235,239,255,0.04)' },
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
                backgroundColor: [reportMeta.accent, '#60a5fa', '#f59e0b'],
                borderColor: '#111524',
                borderWidth: 2,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                labels: {
                  color: 'rgba(235,239,255,0.75)',
                },
              },
            },
          },
        });
      }
    })
    .catch((error) => {
      app.innerHTML = `
        <div class="report-layout">
          <nav class="report-nav"><a href="../index.html">← 返回对比页</a><a href="./index.html">查看全部报告</a></nav>
          <p>Failed to load report markdown files.</p>
          <pre class="mono">${String(error)}</pre>
        </div>
      `;
    });
})();
