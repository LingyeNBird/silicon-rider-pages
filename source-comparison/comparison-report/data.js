window.comparisonReportData = {
  "pageTitle": "GLM-5-Turbo vs GLM-5.1 vs GPT-5.4 vs GPT-5.5(none) vs DeepSeek V4 Pro vs DeepSeek V4 Flash vs GPT-5.4（high） vs GPT-5.6-sol(none) vs GPT-5.6-sol（high） vs mimo-v2.5(high) vs mimo-v2.5-pro(high) vs MiniMax-M2.7 vs Grok 4.20 Beta | Silicon Rider Bench",
  "headerBadge": "Silicon Rider Bench — Level 1 · 24h Simulation",
  "subtitle": "十三款 AI 外卖骑手智能体全维度性能对比 · 最新加入 GPT-5.6-sol 双版本",
  "models": [
    {
      "id": "turbo",
      "toneClass": "turbo",
      "name": "GLM-5-Turbo",
      "toneTextClass": "turbo-text",
      "tableToneClass": "turbo-color",
      "seed": 54039,
      "runtime": "~27min",
      "calls": 444,
      "profit": "¥347.27",
      "chart": {
        "color": "#f97316",
        "bg": "rgba(249,115,22,0.15)",
        "border": "rgba(249,115,22,0.85)",
        "overlayBg": "rgba(249,115,22,0.08)",
        "overlayBorder": "rgba(249,115,22,0.7)"
      },
      "radarInputs": {
        "profit": 347.27,
        "onTimeRate": 29.4,
        "pathEfficiency": 1.94,
        "apiViolationRate": 1.8,
        "avgProfitPerOrder": 10.21,
        "avgOvertimeMinutes": 27.1
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "34"
        },
        {
          "label": "准时率",
          "value": "29.4%",
          "valueTone": "red"
        },
        {
          "label": "路径效率",
          "value": "1.94"
        },
        {
          "label": "总惩罚",
          "value": "¥228.87",
          "valueTone": "red"
        }
      ],
      "behaviorTag": "TURBO",
      "behaviorItems": [
        "偏爱大量距离计算",
        "分析多但落地慢",
        "时效管理明显偏弱",
        "利润与效率都处于中下游"
      ],
      "tokenUsage": {
        "value": "1.05M",
        "sub": "444 calls · 2362 tokens/call"
      }
    },
    {
      "id": "glm51",
      "toneClass": "glm51",
      "name": "GLM-5.1",
      "toneTextClass": "glm51-text",
      "tableToneClass": "glm51-color",
      "seed": 116063,
      "runtime": "~97min",
      "calls": 495,
      "profit": "¥485.23",
      "chart": {
        "color": "#06b6d4",
        "bg": "rgba(6,182,212,0.15)",
        "border": "rgba(6,182,212,0.85)",
        "overlayBg": "rgba(6,182,212,0.08)",
        "overlayBorder": "rgba(6,182,212,0.7)"
      },
      "radarInputs": {
        "profit": 485.23,
        "onTimeRate": 43.2,
        "pathEfficiency": 1.38,
        "apiViolationRate": 0.6,
        "avgProfitPerOrder": 13.11,
        "avgOvertimeMinutes": 12.7
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "37"
        },
        {
          "label": "准时率",
          "value": "43.2%",
          "valueTone": "yellow"
        },
        {
          "label": "路径效率",
          "value": "1.38"
        },
        {
          "label": "总惩罚",
          "value": "¥117.17",
          "valueTone": "yellow"
        }
      ],
      "behaviorTag": "GLM-5.1",
      "behaviorItems": [
        "路径规划最好",
        "接单/换电协同更成熟",
        "完成单数最多",
        "但时效不够稳定，惩罚仍偏高"
      ],
      "tokenUsage": {
        "value": "1.10M",
        "sub": "495 calls · 2225 tokens/call"
      }
    },
    {
      "id": "gpt54",
      "toneClass": "gpt54",
      "name": "GPT-5.4",
      "toneTextClass": "gpt54-text",
      "tableToneClass": "gpt54-color",
      "seed": 923608,
      "runtime": "~27min",
      "calls": 562,
      "profit": "¥552.19",
      "chart": {
        "color": "#a855f7",
        "bg": "rgba(168,85,247,0.15)",
        "border": "rgba(168,85,247,0.85)",
        "overlayBg": "rgba(168,85,247,0.08)",
        "overlayBorder": "rgba(168,85,247,0.7)"
      },
      "radarInputs": {
        "profit": 552.19,
        "onTimeRate": 90.3,
        "pathEfficiency": 1.46,
        "apiViolationRate": 1.1,
        "avgProfitPerOrder": 17.81,
        "avgOvertimeMinutes": 0.3
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "31"
        },
        {
          "label": "准时率",
          "value": "90.3%",
          "valueTone": "green"
        },
        {
          "label": "路径效率",
          "value": "1.46"
        },
        {
          "label": "总惩罚",
          "value": "¥0.00",
          "valueTone": "green"
        }
      ],
      "behaviorTag": "GPT-5.4",
      "behaviorItems": [
        "强时效意识，极少超时",
        "会放弃低性价比风险单",
        "每单利润最高",
        "整体表现最像\"职业骑手\""
      ],
      "tokenUsage": {
        "value": "1.03M",
        "sub": "562 calls · 1838 tokens/call"
      }
    },
    {
      "id": "gpt55nt",
      "toneClass": "gpt55nt",
      "name": "GPT-5.5(none)",
      "toneTextClass": "gpt55nt-text",
      "tableToneClass": "gpt55nt-color",
      "seed": 91997,
      "runtime": "~25min",
      "calls": 579,
      "profit": "¥451.26",
      "chart": {
        "color": "#fb7185",
        "bg": "rgba(251,113,133,0.15)",
        "border": "rgba(251,113,133,0.85)",
        "overlayBg": "rgba(251,113,133,0.08)",
        "overlayBorder": "rgba(251,113,133,0.7)"
      },
      "radarInputs": {
        "profit": 451.26,
        "onTimeRate": 51.5,
        "pathEfficiency": 1.86,
        "apiViolationRate": 0.5,
        "avgProfitPerOrder": 13.67,
        "avgOvertimeMinutes": 12.3
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "33"
        },
        {
          "label": "准时率",
          "value": "51.5%",
          "valueTone": "yellow"
        },
        {
          "label": "路径效率",
          "value": "1.86"
        },
        {
          "label": "总惩罚",
          "value": "¥85.31",
          "valueTone": "yellow"
        }
      ],
      "behaviorTag": "GPT-5.5",
      "behaviorItems": [
        "API 违规率最低（0.5%）",
        "总惩罚仅 ¥85.31，明显优于多数模型",
        "准时率 51.5%，处于中上水平",
        "但路径效率 1.86，路线规划仍偏弱"
      ],
      "tokenUsage": {
        "value": "0.98M",
        "sub": "579 calls · 1699 tokens/call"
      }
    },
    {
      "id": "deepseekv4pro",
      "toneClass": "deepseekv4pro",
      "name": "DeepSeek V4 Pro",
      "toneTextClass": "deepseekv4pro-text",
      "tableToneClass": "deepseekv4pro-color",
      "seed": 333619,
      "runtime": "~69min",
      "calls": 518,
      "profit": "¥380.58",
      "chart": {
        "color": "#6366f1",
        "bg": "rgba(99,102,241,0.15)",
        "border": "rgba(99,102,241,0.85)",
        "overlayBg": "rgba(99,102,241,0.08)",
        "overlayBorder": "rgba(99,102,241,0.7)"
      },
      "radarInputs": {
        "profit": 380.58,
        "onTimeRate": 42.9,
        "pathEfficiency": 1.22,
        "apiViolationRate": 1,
        "avgProfitPerOrder": 13.59,
        "avgOvertimeMinutes": 16.7
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "28"
        },
        {
          "label": "准时率",
          "value": "42.9%",
          "valueTone": "yellow"
        },
        {
          "label": "路径效率",
          "value": "1.22"
        },
        {
          "label": "总惩罚",
          "value": "¥124.18",
          "valueTone": "yellow"
        }
      ],
      "behaviorTag": "DEEPSEEK",
      "behaviorItems": [
        "路径效率最佳（1.22）",
        "总行驶距离仅 350.9 km，路线非常紧凑",
        "总调用 518 次但 token 消耗最高",
        "利润中游，强规划但收益转化一般"
      ],
      "tokenUsage": {
        "value": "2.04M",
        "sub": "518 calls · 3939 tokens/call"
      }
    },
    {
      "id": "deepseekv4flash",
      "toneClass": "deepseekv4flash",
      "name": "DeepSeek V4 Flash",
      "toneTextClass": "deepseekv4flash-text",
      "tableToneClass": "deepseekv4flash-color",
      "seed": 871899,
      "runtime": "~36min",
      "calls": 575,
      "profit": "¥106.30",
      "chart": {
        "color": "#38bdf8",
        "bg": "rgba(56,189,248,0.15)",
        "border": "rgba(56,189,248,0.85)",
        "overlayBg": "rgba(56,189,248,0.08)",
        "overlayBorder": "rgba(56,189,248,0.7)"
      },
      "radarInputs": {
        "profit": 106.3,
        "onTimeRate": 42.9,
        "pathEfficiency": 1.04,
        "apiViolationRate": 0.7,
        "avgProfitPerOrder": 15.19,
        "avgOvertimeMinutes": 4.1
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "7"
        },
        {
          "label": "准时率",
          "value": "42.9%",
          "valueTone": "yellow"
        },
        {
          "label": "路径效率",
          "value": "1.04"
        },
        {
          "label": "总惩罚",
          "value": "¥14.53",
          "valueTone": "green"
        }
      ],
      "behaviorTag": "FLASH",
      "behaviorItems": [
        "路径效率极高（1.04）",
        "总行驶距离仅 69.8 km，路线几乎贴近理论最优",
        "但只完成 7 单，利润明显偏低",
        "像是保守样本而非完整高收益策略"
      ],
      "tokenUsage": {
        "value": "2.92M",
        "sub": "575 calls · 5084 tokens/call"
      }
    },
    {
      "id": "gpt54high",
      "toneClass": "gpt54high",
      "name": "GPT-5.4（high）",
      "toneTextClass": "gpt54high-text",
      "tableToneClass": "gpt54high-color",
      "seed": 253255,
      "runtime": "~65min",
      "calls": 631,
      "profit": "¥530.47",
      "chart": {
        "color": "#c026d3",
        "bg": "rgba(192,38,211,0.15)",
        "border": "rgba(192,38,211,0.85)",
        "overlayBg": "rgba(192,38,211,0.08)",
        "overlayBorder": "rgba(192,38,211,0.7)"
      },
      "radarInputs": {
        "profit": 530.47,
        "onTimeRate": 76.7,
        "pathEfficiency": 1.32,
        "apiViolationRate": 0.3,
        "avgProfitPerOrder": 17.68,
        "avgOvertimeMinutes": 0.7
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "30"
        },
        {
          "label": "准时率",
          "value": "76.7%",
          "valueTone": "green"
        },
        {
          "label": "路径效率",
          "value": "1.32"
        },
        {
          "label": "总惩罚",
          "value": "¥6.41",
          "valueTone": "green"
        }
      ],
      "behaviorTag": "GPT-5.4H",
      "behaviorItems": [
        "API 违规率最低（0.3%）",
        "总利润 530.47，仅次于基础版 GPT-5.4",
        "平均每单利润 17.68，收益质量极高",
        "整体像 GPT-5.4 的更稳健高配版"
      ],
      "tokenUsage": {
        "value": "0",
        "sub": "631 calls · provider 未返回 token 数"
      }
    },
    {
      "id": "gpt56solnt",
      "toneClass": "gpt56solnt",
      "name": "GPT-5.6-sol(none)",
      "toneTextClass": "gpt56solnt-text",
      "tableToneClass": "gpt56solnt-color",
      "seed": 620936,
      "runtime": "~15min",
      "calls": 454,
      "profit": "¥587.29",
      "chart": {
        "color": "#f43f5e",
        "bg": "rgba(244,63,94,0.15)",
        "border": "rgba(244,63,94,0.85)",
        "overlayBg": "rgba(244,63,94,0.08)",
        "overlayBorder": "rgba(244,63,94,0.7)"
      },
      "radarInputs": {
        "profit": 587.29,
        "onTimeRate": 64.9,
        "pathEfficiency": 1.72,
        "apiViolationRate": 0.4,
        "avgProfitPerOrder": 15.87,
        "avgOvertimeMinutes": 2.5
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "37"
        },
        {
          "label": "准时率",
          "value": "64.9%",
          "valueTone": "green"
        },
        {
          "label": "路径效率",
          "value": "1.72"
        },
        {
          "label": "总惩罚",
          "value": "¥31.64",
          "valueTone": "green"
        }
      ],
      "behaviorTag": "5.6 NONE",
      "behaviorItems": [
        "完成订单 37 单，并列全场最多",
        "总利润 ¥587.29，当前仅次于 mimo-v2.5-pro(high)",
        "只用 454 次调用就跑出高收益，兑现效率很强",
        "但路径效率 1.72、准时率 64.9%，属于高产但不够精细的路线风格"
      ],
      "tokenUsage": {
        "value": "0.96M",
        "sub": "454 calls · 2122 tokens/call"
      }
    },
    {
      "id": "gpt56solhigh",
      "toneClass": "gpt56solhigh",
      "name": "GPT-5.6-sol（high）",
      "toneTextClass": "gpt56solhigh-text",
      "tableToneClass": "gpt56solhigh-color",
      "seed": 662172,
      "runtime": "~58min",
      "calls": 659,
      "profit": "¥502.49",
      "chart": {
        "color": "#d946ef",
        "bg": "rgba(217,70,239,0.15)",
        "border": "rgba(217,70,239,0.85)",
        "overlayBg": "rgba(217,70,239,0.08)",
        "overlayBorder": "rgba(217,70,239,0.7)"
      },
      "radarInputs": {
        "profit": 502.49,
        "onTimeRate": 82.1,
        "pathEfficiency": 1.44,
        "apiViolationRate": 0.6,
        "avgProfitPerOrder": 17.95,
        "avgOvertimeMinutes": 0.8
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "28"
        },
        {
          "label": "准时率",
          "value": "82.1%",
          "valueTone": "green"
        },
        {
          "label": "路径效率",
          "value": "1.44"
        },
        {
          "label": "总惩罚",
          "value": "¥7.18",
          "valueTone": "green"
        }
      ],
      "behaviorTag": "5.6 HIGH",
      "behaviorItems": [
        "准时率 82.1%，仅次于 GPT-5.4",
        "总惩罚仅 ¥7.18，时效控制非常强",
        "平均每单利润 ¥17.95，几乎摸到全场第一",
        "但 659 次调用、1.32M token 只完成 28 单，更像稳准优先而非多单策略"
      ],
      "tokenUsage": {
        "value": "1.32M",
        "sub": "659 calls · 2000 tokens/call"
      }
    },
    {
      "id": "mimo25",
      "toneClass": "mimo25",
      "name": "mimo-v2.5(high)",
      "toneTextClass": "mimo25-text",
      "tableToneClass": "mimo25-color",
      "seed": 361122,
      "runtime": "~16min",
      "calls": 441,
      "profit": "¥505.18",
      "chart": {
        "color": "#f59e0b",
        "bg": "rgba(245,158,11,0.15)",
        "border": "rgba(245,158,11,0.85)",
        "overlayBg": "rgba(245,158,11,0.08)",
        "overlayBorder": "rgba(245,158,11,0.7)"
      },
      "radarInputs": {
        "profit": 505.18,
        "onTimeRate": 67.6,
        "pathEfficiency": 1.64,
        "apiViolationRate": 2,
        "avgProfitPerOrder": 13.65,
        "avgOvertimeMinutes": 4.8
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "37"
        },
        {
          "label": "准时率",
          "value": "67.6%",
          "valueTone": "green"
        },
        {
          "label": "路径效率",
          "value": "1.64"
        },
        {
          "label": "总惩罚",
          "value": "¥50.40",
          "valueTone": "green"
        }
      ],
      "behaviorTag": "MIMO",
      "behaviorItems": [
        "完成订单 37 单，并列全场最多",
        "总利润 ¥505.18，进入第一梯队",
        "准时率 67.6%，明显高于大多数非 GPT-5.4 系模型",
        "但 API 违规率 2.0%、路径效率 1.64 仍有优化空间"
      ],
      "tokenUsage": {
        "value": "1.65M",
        "sub": "441 calls · 3745 tokens/call"
      }
    },
    {
      "id": "mimo25pro",
      "toneClass": "mimo25pro",
      "name": "mimo-v2.5-pro(high)",
      "toneTextClass": "mimo25pro-text",
      "tableToneClass": "mimo25pro-color",
      "seed": 581115,
      "runtime": "~36min",
      "calls": 502,
      "profit": "¥610.70",
      "winnerBadge": "BEST",
      "chart": {
        "color": "#eab308",
        "bg": "rgba(234,179,8,0.15)",
        "border": "rgba(234,179,8,0.85)",
        "overlayBg": "rgba(234,179,8,0.08)",
        "overlayBorder": "rgba(234,179,8,0.7)"
      },
      "radarInputs": {
        "profit": 610.7,
        "onTimeRate": 61.8,
        "pathEfficiency": 1.53,
        "apiViolationRate": 1.2,
        "avgProfitPerOrder": 17.96,
        "avgOvertimeMinutes": 7.6
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "34"
        },
        {
          "label": "准时率",
          "value": "61.8%",
          "valueTone": "green"
        },
        {
          "label": "路径效率",
          "value": "1.53"
        },
        {
          "label": "总惩罚",
          "value": "¥59.02",
          "valueTone": "green"
        }
      ],
      "behaviorTag": "MIMO PRO",
      "behaviorItems": [
        "总利润 ¥610.70，当前全场第一",
        "平均每单利润 ¥17.96，同样来到第一名",
        "34 单完成量不算极端激进，但收益兑现能力极强",
        "准时率 61.8%、API 违规率 1.2%，整体比基础 mimo 更偏平衡高收益"
      ],
      "tokenUsage": {
        "value": "1.92M",
        "sub": "502 calls · 3816 tokens/call"
      }
    },
    {
      "id": "minimax",
      "toneClass": "minimax",
      "name": "MiniMax-M2.7",
      "toneTextClass": "minimax-text",
      "tableToneClass": "minimax-color",
      "seed": 819100,
      "runtime": "~20min",
      "calls": 313,
      "profit": "¥332.88",
      "chart": {
        "color": "#10b981",
        "bg": "rgba(16,185,129,0.15)",
        "border": "rgba(16,185,129,0.85)",
        "overlayBg": "rgba(16,185,129,0.08)",
        "overlayBorder": "rgba(16,185,129,0.7)"
      },
      "radarInputs": {
        "profit": 332.88,
        "onTimeRate": 46.7,
        "pathEfficiency": 1.82,
        "apiViolationRate": 2.6,
        "avgProfitPerOrder": 11.1,
        "avgOvertimeMinutes": 23.9
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "30"
        },
        {
          "label": "准时率",
          "value": "46.7%",
          "valueTone": "yellow"
        },
        {
          "label": "路径效率",
          "value": "1.82"
        },
        {
          "label": "总惩罚",
          "value": "¥194.85",
          "valueTone": "red"
        }
      ],
      "behaviorTag": "MINIMAX",
      "behaviorItems": [
        "速度快、总调用少",
        "但超时和惩罚偏高",
        "药店/超市单占比高",
        "属于可用但需要更稳调度的模型"
      ],
      "tokenUsage": {
        "value": "0.95M",
        "sub": "313 calls · 3049 tokens/call"
      }
    },
    {
      "id": "grok420",
      "toneClass": "grok420",
      "name": "Grok 4.20 Beta",
      "toneTextClass": "grok420-text",
      "tableToneClass": "grok420-color",
      "seed": 218894,
      "runtime": "~144min",
      "calls": 328,
      "profit": "¥323.64",
      "chart": {
        "color": "#3b82f6",
        "bg": "rgba(59,130,246,0.15)",
        "border": "rgba(59,130,246,0.85)",
        "overlayBg": "rgba(59,130,246,0.08)",
        "overlayBorder": "rgba(59,130,246,0.7)"
      },
      "radarInputs": {
        "profit": 323.64,
        "onTimeRate": 41.4,
        "pathEfficiency": 1.63,
        "apiViolationRate": 2.1,
        "avgProfitPerOrder": 11.16,
        "avgOvertimeMinutes": 33.6
      },
      "cardStats": [
        {
          "label": "完成订单",
          "value": "29"
        },
        {
          "label": "准时率",
          "value": "41.4%",
          "valueTone": "yellow"
        },
        {
          "label": "路径效率",
          "value": "1.63"
        },
        {
          "label": "总惩罚",
          "value": "¥158.17",
          "valueTone": "red"
        }
      ],
      "behaviorTag": "GROK",
      "behaviorItems": [
        "推理极长、决策缓慢",
        "总行驶距离最短、换电最少",
        "但超时最严重（均超 33.6min）",
        "路径规划好但时间管理差"
      ],
      "tokenUsage": {
        "value": "N/A",
        "sub": "328 calls · xAI API 未报告 token 数"
      }
    }
  ],
  "sections": {
    "radar": {
      "title": "六维能力雷达图",
      "desc": "六个指标：盈利能力、准时率、路径效率、API规范性、单均利润、抗超时能力",
      "labels": [
        "盈利能力",
        "准时率",
        "路径效率",
        "API规范性",
        "单均利润",
        "抗超时能力"
      ],
      "normalizers": {
        "profitDenominator": 600,
        "pathEfficiencyMax": 2,
        "avgProfitDenominator": 20,
        "overtimeUpperBound": 40
      }
    },
    "radarOverlay": {
      "title": "十三模型叠加对比",
      "desc": "同一坐标系下直观看出各模型的策略差异：GPT-5.6-sol(none) 冲到利润第二，GPT-5.6-sol（high）则把准时率拉回 GPT 第一梯队。"
    },
    "coreMetrics": {
      "title": "核心指标对比",
      "desc": "十三模型同表比较，最优值高亮，最差值红色标注",
      "conclusionTitle": "结论",
      "rows": [
        {
          "metric": "总利润",
          "values": [
            "¥347.27",
            "¥485.23",
            "¥552.19",
            "¥451.26",
            "¥380.58",
            "¥106.30",
            "¥530.47",
            "¥587.29",
            "¥502.49",
            "¥505.18",
            "¥610.70",
            "¥332.88",
            "¥323.64"
          ],
          "bestModelId": "mimo25pro",
          "bestTone": "mimo25pro-color",
          "worstModelId": "deepseekv4flash",
          "conclusion": {
            "tone": "up",
            "text": "mimo-v2.5-pro(high) 仍第一，GPT-5.6-sol(none) 直接冲到第二"
          }
        },
        {
          "metric": "完成订单数",
          "values": [
            "34",
            "37",
            "31",
            "33",
            "28",
            "7",
            "30",
            "37",
            "28",
            "37",
            "34",
            "30",
            "29"
          ],
          "bestModelIds": [
            "glm51",
            "gpt56solnt",
            "mimo25"
          ],
          "bestTone": "green",
          "worstModelId": "deepseekv4flash",
          "conclusion": {
            "tone": "neutral",
            "text": "GLM-5.1、GPT-5.6-sol(none) 与 mimo-v2.5(high) 并列最多"
          }
        },
        {
          "metric": "准时率",
          "values": [
            "29.4%",
            "43.2%",
            "90.3%",
            "51.5%",
            "42.9%",
            "42.9%",
            "76.7%",
            "64.9%",
            "82.1%",
            "67.6%",
            "61.8%",
            "46.7%",
            "41.4%"
          ],
          "bestModelId": "gpt54",
          "bestTone": "green",
          "worstModelId": "turbo",
          "conclusion": {
            "tone": "up",
            "text": "GPT-5.4 仍最高，GPT-5.6-sol（high）升到第二"
          }
        },
        {
          "metric": "路径效率",
          "values": [
            "1.94",
            "1.38",
            "1.46",
            "1.86",
            "1.22",
            "1.04",
            "1.32",
            "1.72",
            "1.44",
            "1.64",
            "1.53",
            "1.82",
            "1.63"
          ],
          "bestModelId": "deepseekv4flash",
          "bestTone": "deepseekv4flash-color",
          "worstModelId": "turbo",
          "conclusion": {
            "tone": "up",
            "text": "DeepSeek V4 Flash 最优"
          }
        },
        {
          "metric": "API 违规率",
          "values": [
            "1.8%",
            "0.6%",
            "1.1%",
            "0.5%",
            "1.0%",
            "0.7%",
            "0.3%",
            "0.4%",
            "0.6%",
            "2.0%",
            "1.2%",
            "2.6%",
            "2.1%"
          ],
          "bestModelId": "gpt54high",
          "bestTone": "gpt54high-color",
          "worstModelId": "minimax",
          "conclusion": {
            "tone": "up",
            "text": "GPT-5.4（high）仍最规范"
          }
        },
        {
          "metric": "总行驶距离",
          "values": [
            "638.4 km",
            "529.5 km",
            "487.4 km",
            "529.0 km",
            "350.9 km",
            "69.8 km",
            "399.4 km",
            "599.2 km",
            "426.5 km",
            "541.0 km",
            "603.4 km",
            "583.6 km",
            "479.2 km"
          ],
          "bestModelId": "deepseekv4flash",
          "bestTone": "deepseekv4flash-color",
          "worstModelId": "turbo",
          "conclusion": {
            "tone": "up",
            "text": "DeepSeek V4 Flash 最短"
          }
        },
        {
          "metric": "换电次数",
          "values": [
            "14",
            "12",
            "10",
            "11",
            "8",
            "1",
            "10",
            "15",
            "9",
            "13",
            "12",
            "12",
            "7"
          ],
          "bestModelId": "deepseekv4flash",
          "bestTone": "deepseekv4flash-color",
          "worstModelId": "gpt56solnt",
          "conclusion": {
            "tone": "up",
            "text": "DeepSeek V4 Flash 最少，GPT-5.6-sol(none) 跑得最狠"
          }
        },
        {
          "metric": "总收入",
          "values": [
            "¥354.27",
            "¥491.23",
            "¥557.19",
            "¥456.76",
            "¥384.58",
            "¥106.80",
            "¥535.47",
            "¥594.79",
            "¥506.99",
            "¥511.68",
            "¥616.70",
            "¥338.88",
            "¥327.14"
          ],
          "bestModelId": "mimo25pro",
          "bestTone": "mimo25pro-color",
          "worstModelId": "deepseekv4flash",
          "conclusion": {
            "tone": "up",
            "text": "mimo-v2.5-pro(high) 最高，GPT-5.6-sol(none) 紧随其后"
          }
        },
        {
          "metric": "总惩罚",
          "values": [
            "¥228.87",
            "¥117.17",
            "¥0.00",
            "¥85.31",
            "¥124.18",
            "¥14.53",
            "¥6.41",
            "¥31.64",
            "¥7.18",
            "¥50.40",
            "¥59.02",
            "¥194.85",
            "¥158.17"
          ],
          "bestModelId": "gpt54",
          "bestTone": "green",
          "worstModelId": "turbo",
          "conclusion": {
            "tone": "up",
            "text": "GPT-5.4 仍是零惩罚，GPT-5.6-sol（high）也压得很低"
          }
        },
        {
          "metric": "平均每单利润",
          "values": [
            "¥10.21",
            "¥13.11",
            "¥17.81",
            "¥13.67",
            "¥13.59",
            "¥15.19",
            "¥17.68",
            "¥15.87",
            "¥17.95",
            "¥13.65",
            "¥17.96",
            "¥11.10",
            "¥11.16"
          ],
          "bestModelId": "mimo25pro",
          "bestTone": "mimo25pro-color",
          "worstModelId": "turbo",
          "conclusion": {
            "tone": "up",
            "text": "mimo-v2.5-pro(high) 只比 GPT-5.6-sol（high）高 0.01"
          }
        },
        {
          "metric": "超时订单数",
          "values": [
            "24",
            "21",
            "3",
            "16",
            "16",
            "4",
            "7",
            "13",
            "5",
            "12",
            "13",
            "16",
            "17"
          ],
          "bestModelId": "gpt54",
          "bestTone": "green",
          "worstModelId": "turbo",
          "conclusion": {
            "tone": "up",
            "text": "GPT-5.4 最少，GPT-5.6-sol（high）也进入低超时组"
          }
        },
        {
          "metric": "平均超时时长",
          "values": [
            "27.1 min",
            "12.7 min",
            "0.3 min",
            "12.3 min",
            "16.7 min",
            "4.1 min",
            "0.7 min",
            "2.5 min",
            "0.8 min",
            "4.8 min",
            "7.6 min",
            "23.9 min",
            "33.6 min"
          ],
          "bestModelId": "gpt54",
          "bestTone": "green",
          "worstModelId": "grok420",
          "conclusion": {
            "tone": "up",
            "text": "GPT-5.4 仍近乎零超时，GPT-5.6-sol（high）同样很稳"
          }
        }
      ]
    },
    "insights": {
      "title": "关键发现",
      "desc": "新增 GPT-5.6-sol 双版本后，榜单出现更清晰的分工：none 版本冲利润与单量，high 版本冲准时率与单均收益。",
      "items": [
        {
          "icon": "💰",
          "title": "利润王者仍是 mimo-v2.5-pro(high)",
          "bigNumber": "¥610.70",
          "bigNumberClass": "gold",
          "text": "mimo-v2.5-pro(high) 依旧坐稳第一，但 GPT-5.6-sol(none) 已经把差距压到不足 ¥24。"
        },
        {
          "icon": "🚴",
          "title": "高收益新亚军：GPT-5.6-sol(none)",
          "bigNumber": "¥587.29",
          "bigNumberClass": "rose",
          "text": "GPT-5.6-sol(none) 用并列最高的 37 单和 454 次调用，跑出全场第二利润，是当前最像“高周转刷收益”的策略之一。"
        },
        {
          "icon": "⏱️",
          "title": "准时率冠军仍是 GPT-5.4",
          "bigNumber": "90.3%",
          "bigNumberClass": "green",
          "text": "GPT-5.4 仍保持断层领先，但 GPT-5.6-sol（high）已经把准时率抬到 82.1%，明显进入第一梯队。"
        },
        {
          "icon": "🧠",
          "title": "高强度思考换来更稳执行",
          "bigNumber": "82.1%",
          "bigNumberClass": "fuchsia",
          "text": "GPT-5.6-sol（high）比 none 版少完成 9 单，却把准时率拉高 17.2 个点、总惩罚压到 ¥7.18，风格明显从“冲量”切向“稳准”。"
        },
        {
          "icon": "🥇",
          "title": "单均收益只差 0.01",
          "bigNumber": "¥17.95",
          "bigNumberClass": "fuchsia",
          "text": "GPT-5.6-sol（high）的平均每单利润只比 mimo-v2.5-pro(high) 低 ¥0.01，属于当前最接近极限兑现效率的模型。"
        },
        {
          "icon": "🧭",
          "title": "路径规划最好：DeepSeek V4 Flash",
          "bigNumber": "1.04",
          "bigNumberClass": "sky",
          "text": "DeepSeek V4 Flash 依旧把路径效率压到最优，但它的保守策略仍没能转化成高利润。"
        },
        {
          "icon": "🛡️",
          "title": "最规范：GPT-5.4（high）",
          "bigNumber": "0.3%",
          "bigNumberClass": "fuchsia",
          "text": "GPT-5.4（high）仍然保持最低 API 违规率，说明高强度推理在这条线上依旧有稳定优势。"
        },
        {
          "icon": "🎯",
          "title": "同模型双版本出现明显分工",
          "bigNumber": "37 vs 28",
          "bigNumberClass": "purple",
          "text": "GPT-5.6-sol 的 none / high 两次运行把“多接多跑”与“稳准高质”两种策略都跑到了前排，说明推理强度确实在改写行为风格。"
        }
      ]
    },
    "tokenConsumption": {
      "title": "Token 与工具消耗"
    },
    "behavior": {
      "title": "行为风格分析",
      "desc": "从结果层面概括十三款模型的策略倾向"
    },
    "orderTypes": {
      "title": "订单类型分布",
      "rows": [
        {
          "orderType": "🍽 餐饮订单",
          "values": [
            "27 (79.4%)",
            "33 (89.2%)",
            "27 (87.1%)",
            "25 (75.8%)",
            "22 (78.6%)",
            "7 (100.0%)",
            "25 (83.3%)",
            "29 (78.4%)",
            "20 (71.4%)",
            "30 (81.1%)",
            "26 (76.5%)",
            "18 (60.0%)",
            "21 (72.4%)"
          ]
        },
        {
          "orderType": "🛒 超市订单",
          "values": [
            "5 (14.7%)",
            "1 (2.7%)",
            "3 (9.7%)",
            "7 (21.2%)",
            "3 (10.7%)",
            "0 (0.0%)",
            "5 (16.7%)",
            "4 (10.8%)",
            "4 (14.3%)",
            "3 (8.1%)",
            "4 (11.8%)",
            "6 (20.0%)",
            "4 (13.8%)"
          ]
        },
        {
          "orderType": "💊 药店订单",
          "values": [
            "2 (5.9%)",
            "3 (8.1%)",
            "1 (3.2%)",
            "1 (3.0%)",
            "3 (10.7%)",
            "0 (0.0%)",
            "0 (0.0%)",
            "4 (10.8%)",
            "4 (14.3%)",
            "4 (10.8%)",
            "4 (11.8%)",
            "6 (20.0%)",
            "4 (13.8%)"
          ]
        }
      ]
    },
    "footer": {
      "note": "⚠️ 注意：十三次运行使用不同种子（54039 / 116063 / 923608 / 91997 / 333619 / 871899 / 253255 / 620936 / 662172 / 361122 / 581115 / 819100 / 218894），地图与订单分布不同，非严格同条件对比",
      "text": "Silicon Rider Bench · KCORES Agent Benchmark · Updated with GPT-5.6-sol dual runs"
    }
  }
};
