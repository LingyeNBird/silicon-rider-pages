# silicon-rider-pages

一个可独立发布的静态展示站点，用于展示 **Silicon Rider Bench** 的模型比较结果与单次运行报告。

## 包含内容

- `index.html`：比较首页
- `reports/index.html`：报告列表页
- `reports/*.html`：每个模型对应的可视化报告页
- `data/raw-reports/*.md`：从主仓库复制进来的原始报告 Markdown
- `source-comparison/`：从主仓库复制进来的原始比较文档及其资源

## 当前已收录模型

- GLM-5-Turbo
- GLM-5.1
- GPT-5.4
- MiniMax-M2.7
- Grok 4.20 Beta

## 本地预览

这是纯静态站点，直接用任意静态文件服务器启动即可。

例如：

```bash
npx serve .
```

然后打开：

- `http://localhost:3000/` 或工具输出的本地地址

## 目录结构

```text
silicon-rider-pages/
├─ index.html
├─ README.md
├─ assets/
│  ├─ comparison.js
│  ├─ report.js
│  ├─ reports-list.js
│  └─ styles.css
├─ data/
│  ├─ reports-manifest.js
│  └─ raw-reports/
├─ reports/
│  ├─ index.html
│  ├─ glm-5-turbo.html
│  ├─ glm-5-1.html
│  ├─ gpt-5-4.html
│  ├─ minimax-m2-7.html
│  └─ grok-420-beta.html
└─ source-comparison/
```

## 如何新增一个报告

1. 把新的摘要报告和详细报告放进 `data/raw-reports/`
2. 在 `data/reports-manifest.js` 里新增一个条目
3. 复制一个 `reports/*.html`，改成新的 `data-report-id`

如果新报告仍然遵循当前 Markdown 结构（`基本信息 / 核心指标 / 详细统计 / 订单类型分布 / 评价总结`），单报告可视化页会继续工作。

## 部署到 GitHub Pages

这个目录本身可以直接作为单独仓库使用。把它推到一个独立仓库后：

1. 在 GitHub 仓库设置里打开 **Pages**
2. 选择从默认分支部署
3. 根目录作为发布目录

即可直接发布。
