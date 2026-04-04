(function bootstrapComparisonReport() {
  const report = window.comparisonReportData;
  const app = document.getElementById('comparison-report-app');

  if (!report || !app) {
    return;
  }

  document.title = report.pageTitle;

  const modelById = new Map(report.models.map((model) => [model.id, model]));

  function renderHeader() {
    const modelNameMarkup = report.models
      .map((model, index) => {
        const name = `<span class="${model.toneTextClass}">${model.name}</span>`;
        if (index === 0) {
          return name;
        }
        return `<span class="header-separator">vs</span> ${name}`;
      })
      .join(' ');

    return `
      <div class="header">
        <div class="header-badge"><span class="dot"></span>${report.headerBadge}</div>
        <h1>${modelNameMarkup}</h1>
        <p class="subtitle">${report.subtitle}</p>
      </div>
    `;
  }

  function renderModelCards() {
    const cards = report.models
      .map((model) => {
        const stats = model.cardStats
          .map((stat) => {
            const toneClass = stat.valueTone ? ` value-${stat.valueTone}` : '';
            return `
              <div class="stat-item">
                <div class="stat-label">${stat.label}</div>
                <div class="stat-value${toneClass}">${stat.value}</div>
              </div>
            `;
          })
          .join('');

        return `
          <div class="model-card ${model.toneClass}">
            <div class="model-name-line">
              <div class="model-name">${model.name}</div>
              ${model.winnerBadge ? `<span class="winner-badge">${model.winnerBadge}</span>` : ''}
            </div>
            <div class="model-meta">Seed: ${model.seed} · ${model.runtime} · ${model.calls} calls</div>
            <div class="profit">${model.profit}</div>
            <div class="stats-grid">${stats}</div>
          </div>
        `;
      })
      .join('');

    return `<div class="model-cards">${cards}</div>`;
  }

  function renderRadarSection() {
    const wrappers = report.models
      .map(
        (model) => `
          <div class="radar-chart-wrapper">
            <h3 class="${model.tableToneClass}">${model.name}</h3>
            <canvas id="radar-${model.id}"></canvas>
          </div>
        `,
      )
      .join('');

    return `
      <div class="radar-section">
        <div class="section-title">${report.sections.radar.title}</div>
        <div class="section-desc">${report.sections.radar.desc}</div>
        <div class="radar-container">${wrappers}</div>
      </div>
    `;
  }

  function renderRadarOverlaySection() {
    const legendItems = report.models
      .map(
        (model) => `
          <div class="legend-item">
            <span class="legend-dot" style="background:${model.chart.color}"></span>
            ${model.name}
          </div>
        `,
      )
      .join('');

    return `
      <div class="radar-overlay-section">
        <div class="section-title">${report.sections.radarOverlay.title}</div>
        <div class="section-desc">${report.sections.radarOverlay.desc}</div>
        <div class="radar-overlay-wrapper">
          <div class="legend-row">${legendItems}</div>
          <canvas id="radar-overlay" class="radar-overlay-canvas"></canvas>
        </div>
      </div>
    `;
  }

  function renderCoreMetricsSection() {
    const headers = report.models
      .map((model) => `<th><span class="${model.tableToneClass}">${model.name}</span></th>`)
      .join('');

    const rows = report.sections.coreMetrics.rows
      .map((row) => {
        const cells = report.models
          .map((model, index) => {
            const isBest = model.id === row.bestModelId;
            const className = isBest ? `best-cell ${row.bestTone}` : '';
            return `<td class="${className}">${row.values[index]}</td>`;
          })
          .join('');

        return `
          <tr>
            <td>${row.metric}</td>
            ${cells}
            <td><span class="change-badge ${row.conclusion.tone}">${row.conclusion.text}</span></td>
          </tr>
        `;
      })
      .join('');

    return `
      <div class="comparison-table">
        <div class="section-title">${report.sections.coreMetrics.title}</div>
        <div class="section-desc">${report.sections.coreMetrics.desc}</div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>指标</th>
                ${headers}
                <th>${report.sections.coreMetrics.conclusionTitle}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderInsightsSection() {
    const cards = report.sections.insights.items
      .map(
        (item) => `
          <div class="insight-card">
            <div class="insight-icon">${item.icon}</div>
            <h4>${item.title}</h4>
            <div class="big-number ${item.bigNumberClass}">${item.bigNumber}</div>
            <p>${item.text}</p>
          </div>
        `,
      )
      .join('');

    return `
      <div class="insights">
        <div class="section-title">${report.sections.insights.title}</div>
        <div class="section-desc">${report.sections.insights.desc}</div>
        <div class="insight-grid">${cards}</div>
      </div>
    `;
  }

  function renderTokenSection() {
    const cards = report.models
      .map(
        (model) => `
          <div class="token-card">
            <div class="token-label">${model.name}</div>
            <div class="token-value ${model.tableToneClass}">${model.tokenUsage.value}</div>
            <div class="token-sub">${model.tokenUsage.sub}</div>
          </div>
        `,
      )
      .join('');

    return `
      <div class="comparison-table">
        <div class="section-title">${report.sections.tokenConsumption.title}</div>
        <div class="table-wrapper tokens-wrapper">
          <div class="token-grid">${cards}</div>
        </div>
      </div>
    `;
  }

  function renderBehaviorSection() {
    const cards = report.models
      .map(
        (model) => `
          <div class="behavior-card ${model.toneClass}">
            <h3><span class="tag">${model.behaviorTag}</span>${model.name}</h3>
            <ul class="behavior-list">
              ${model.behaviorItems.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        `,
      )
      .join('');

    return `
      <div class="behavior-section">
        <div class="section-title">${report.sections.behavior.title}</div>
        <div class="section-desc">${report.sections.behavior.desc}</div>
        <div class="behavior-grid">${cards}</div>
      </div>
    `;
  }

  function renderOrderTypeSection() {
    const headers = report.models
      .map((model) => `<th><span class="${model.tableToneClass}">${model.name}</span></th>`)
      .join('');

    const rows = report.sections.orderTypes.rows
      .map(
        (row) => `
          <tr>
            <td>${row.orderType}</td>
            ${row.values.map((value) => `<td>${value}</td>`).join('')}
          </tr>
        `,
      )
      .join('');

    return `
      <div class="comparison-table">
        <div class="section-title">${report.sections.orderTypes.title}</div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>订单类型</th>
                ${headers}
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderFooter() {
    return `
      <div class="footer">
        <div class="note">${report.sections.footer.note}</div>
        <p>${report.sections.footer.text}</p>
      </div>
    `;
  }

  app.innerHTML = `
    <div class="container">
      ${renderHeader()}
      ${renderModelCards()}
      ${renderRadarSection()}
      ${renderRadarOverlaySection()}
      ${renderCoreMetricsSection()}
      ${renderInsightsSection()}
      ${renderTokenSection()}
      ${renderBehaviorSection()}
      ${renderOrderTypeSection()}
      ${renderFooter()}
    </div>
  `;

  const radarLabels = report.sections.radar.labels;
  const normalizers = report.sections.radar.normalizers;

  function buildRadarData(model) {
    const metrics = model.radarInputs;
    return [
      (metrics.profit / normalizers.profitDenominator) * 100,
      metrics.onTimeRate,
      (normalizers.pathEfficiencyMax - metrics.pathEfficiency) * 100,
      100 - metrics.apiViolationRate,
      (metrics.avgProfitPerOrder / normalizers.avgProfitDenominator) * 100,
      ((normalizers.overtimeUpperBound - metrics.avgOvertimeMinutes) / normalizers.overtimeUpperBound) * 100,
    ];
  }

  const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: 'rgba(255,255,255,0.2)',
          backdropColor: 'transparent',
          font: { size: 10, family: 'JetBrains Mono' },
        },
        grid: { color: 'rgba(255,255,255,0.06)', circular: true },
        angleLines: { color: 'rgba(255,255,255,0.06)' },
        pointLabels: { color: 'rgba(255,255,255,0.6)', font: { size: 12, weight: '600', family: 'Inter' } },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(10,10,15,0.95)',
        titleFont: { family: 'Inter', weight: '700' },
        bodyFont: { family: 'JetBrains Mono' },
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label(context) {
            return `${context.parsed.r.toFixed(1)} / 100`;
          },
        },
      },
    },
  };

  function createRadarChart(canvasId, model) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      return;
    }

    new Chart(canvas, {
      type: 'radar',
      data: {
        labels: radarLabels,
        datasets: [
          {
            data: buildRadarData(model),
            backgroundColor: model.chart.bg,
            borderColor: model.chart.border,
            borderWidth: 2.5,
            pointBackgroundColor: model.chart.color,
            pointBorderColor: model.chart.color,
            pointRadius: 5,
            pointHoverRadius: 7,
            fill: true,
          },
        ],
      },
      options: commonChartOptions,
    });
  }

  report.models.forEach((model) => {
    createRadarChart(`radar-${model.id}`, model);
  });

  const overlayCanvas = document.getElementById('radar-overlay');
  if (!overlayCanvas) {
    return;
  }

  const overlayOptions = JSON.parse(JSON.stringify(commonChartOptions));
  overlayOptions.plugins.legend = {
    display: true,
    position: 'bottom',
    labels: {
      color: 'rgba(255,255,255,0.7)',
      font: { family: 'Inter', size: 12 },
      boxWidth: 12,
      padding: 20,
    },
  };

  const overlayDatasets = report.models.map((model) => {
    const isGpt54 = model.id === 'gpt54';
    return {
      label: model.name,
      data: buildRadarData(model),
      backgroundColor: model.chart.overlayBg,
      borderColor: model.chart.overlayBorder,
      borderWidth: isGpt54 ? 2.5 : 2,
      pointBackgroundColor: model.chart.color,
      pointRadius: isGpt54 ? 5 : 4,
      fill: true,
    };
  });

  new Chart(overlayCanvas, {
    type: 'radar',
    data: {
      labels: radarLabels,
      datasets: overlayDatasets,
    },
    options: overlayOptions,
  });

  const coreRows = report.sections.coreMetrics.rows;
  const modelCount = report.models.length;
  const hasCompleteCoreRows = coreRows.every((row) => row.values.length === modelCount && modelById.has(row.bestModelId));
  const hasCompleteOrderRows = report.sections.orderTypes.rows.every((row) => row.values.length === modelCount);

  if (!hasCompleteCoreRows || !hasCompleteOrderRows) {
    console.warn('comparison-report data integrity check failed: value lengths do not match model count.');
  }
})();
