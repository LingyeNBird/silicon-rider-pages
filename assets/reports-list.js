(function renderReportsListPage() {
  const app = document.getElementById('reports-list-app');
  const manifest = window.reportManifest;

  if (!app || !manifest || !Array.isArray(manifest.reports)) {
    return;
  }

  document.title = 'Silicon Rider Bench · Reports';

  function toCurrency(value) {
    return `¥${Number(value).toFixed(2)}`;
  }

  const cards = manifest.reports.map((report) => {
    const s = report.stats;
    return `
      <article class="report-list-card" style="--tone:${report.accent}">
        <div class="report-list-title">${report.displayName}</div>
        <div class="report-list-meta">seed ${report.seed} · ${report.runtime} · ${s.calls} calls</div>
        <div class="report-list-kpis">
          <div class="report-list-kpi"><div class="metric-label">总利润</div><div class="metric-value">${toCurrency(s.profit)}</div></div>
          <div class="report-list-kpi"><div class="metric-label">准时率</div><div class="metric-value">${s.onTimeRate}%</div></div>
          <div class="report-list-kpi"><div class="metric-label">完成订单</div><div class="metric-value">${s.completedOrders}</div></div>
        </div>
        <div class="report-list-actions">
          <a class="link-button" href="./${report.id}.html">查看可视化页</a>
          <a class="secondary-link" href="../${report.summaryPath.replace(/^\.\.\//, '')}">摘要 Markdown</a>
          <a class="secondary-link" href="../${report.detailPath.replace(/^\.\.\//, '')}">详细 Markdown</a>
        </div>
      </article>
    `;
  }).join('');

  app.innerHTML = `
    <div class="site-shell">
      <nav class="top-nav">
        <a class="top-nav-link" href="../index.html">比较首页</a>
        <a class="top-nav-link active" href="./index.html">报告列表</a>
        <a class="top-nav-link" href="../source-comparison/comparison-report.html">原始比较文档</a>
      </nav>
      <header class="hero">
        <div class="hero-badge">Standalone Report Browser</div>
        <h1 class="hero-title">全部报告</h1>
        <p class="hero-subtitle">查看每个模型的单独可视化页，也可以直接打开复制进项目内的原始 Markdown 报告。</p>
      </header>
      <section class="report-list-grid">${cards}</section>
    </div>
  `;
})();
