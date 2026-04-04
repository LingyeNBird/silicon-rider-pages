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
      <article class="model-card report-list-card" style="--report-accent:${report.accent}">
        <div class="model-name-line">
          <div class="model-name">${report.displayName}</div>
        </div>
        <div class="model-meta">Seed: ${report.seed} · ${report.runtime} · ${s.calls} calls</div>
        <div class="profit">${toCurrency(s.profit)}</div>
        <div class="stats-grid">
          <div class="stat-item"><div class="stat-label">准时率</div><div class="stat-value">${s.onTimeRate}%</div></div>
          <div class="stat-item"><div class="stat-label">路径效率</div><div class="stat-value">${s.pathEfficiency}</div></div>
          <div class="stat-item"><div class="stat-label">完成订单</div><div class="stat-value">${s.completedOrders}</div></div>
          <div class="stat-item"><div class="stat-label">API 违规率</div><div class="stat-value">${s.apiViolationRate}%</div></div>
        </div>
        <div class="report-actions">
          <a class="report-primary-link" href="./${report.id}.html">查看可视化页</a>
          <div class="report-secondary-links">
            <a class="report-secondary-link" href="../${report.summaryPath.replace(/^\.\.\//, '')}">摘要 Markdown</a>
            <a class="report-secondary-link" href="../${report.detailPath.replace(/^\.\.\//, '')}">详细 Markdown</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  app.innerHTML = `
    <nav class="standalone-nav" aria-label="Standalone site navigation">
      <a href="../index.html">比较首页</a>
      <a class="active" href="./index.html">报告列表</a>
    </nav>
    <div class="container">
      <header class="header">
        <div class="header-badge"><span class="dot"></span>Standalone Report Browser</div>
        <h1>全部报告</h1>
        <p class="subtitle">查看每个模型的单独可视化页，也可以直接打开复制进项目内的原始 Markdown 报告。</p>
      </header>
      <section class="model-cards">
        ${cards}
      </section>
    </div>
  `;
})();
