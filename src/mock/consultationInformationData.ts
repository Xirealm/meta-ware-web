import expert1 from "@/assets/experts/expert1.png";

export const mockTableData = [
  // level 8
  {
    id: "1",
    name: "张雨轩",
    age: 15,
    gender: "女",
    phone: "13800138001",
    label: ["学习压力", "焦虑情绪"],
    time: "2024-01-15",
    hazardLevel: { level: 8, text: "一级关注" },
    summary:
      "观察到长期熬夜学习导致注意力分散与心悸症状，启动「学习能量管理计划」：①建立晨间半小时知识梳理+黄昏15分钟冥想节奏；②设计「知识盲盒」将难点转化为趣味问答；③每周3次正念绘画疗愈，通过色彩表达释放压力。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
  // level 7
  {
    id: "2",
    name: "王林予",
    age: 14,
    gender: "女",
    phone: "13800138002",
    label: ["注意力不集中", "学习困难"],
    time: "2024-01-13",
    hazardLevel: { level: 7, text: "二级关注" },
    summary:
      "作业效率仅为同龄人50%，启动「认知唤醒工程」：①配备蓝光护眼台灯+白噪音背景；②采用「番茄工作法PLUS」（25分钟学习+5分钟感统训练）；③建立「错题博物馆」将知识难点转化为互动解谜游戏。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "待回访",
    followUpRecords: [],
  },
  {
    id: "3",
    name: "陈晓霞",
    age: 16,
    gender: "女",
    phone: "13800138003",
    label: ["网络成瘾", "亲子沟通"],
    time: "2024-01-11",
    hazardLevel: { level: 7, text: "二级关注" },
    summary:
      "日均游戏时长超7小时，启动「现实价值转化计划」：①组建电竞策略分析社团担任战术指导；②设置「家庭咖啡馆」时间（每周3次），父母学习游戏术语进行主题对话；③引入职业规划师探索游戏原画师发展路径。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "已解决",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
    ],
  },
  {
    id: "4",
    name: "王玔",
    age: 14,
    gender: "女",
    phone: "13800138004",
    label: ["焦虑情绪", "人际关系"],
    time: "2024-01-05",
    hazardLevel: { level: 7, text: "二级关注" },
    summary:
      "实施「安全岛技术」：教室设置配备减压玩具的安心角，开发「情绪急救APP」含5分钟快速平静训练。开展团体沙盘游戏，通过共同创作改善人际敏感度。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
  {
    id: "5",
    name: "周央娜",
    age: 16,
    gender: "女",
    phone: "13800138005",
    label: ["网络成瘾", "情绪管理"],
    time: "2024-01-01",
    hazardLevel: { level: 7, text: "二级关注" },
    summary:
      "开展「数字排毒行动」：每日设置三段「无网时间」进行陶艺创作，开发「情绪调色板」APP用颜色标记情绪状态，情绪失控事件减少60%。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "待回访",
    followUpRecords: [],
  },
  {
    id: "6",
    name: "王启迪",
    age: 15,
    gender: "女",
    phone: "13800138006",
    label: ["学习压力", "焦虑情绪"],
    time: "2023-12-28",
    hazardLevel: { level: 7, text: "二级关注" },
    summary:
      "构建「压力转化站」：将焦虑事件写成信件投入实体邮箱，每周抽取进行戏剧改编演出。生物反馈仪监测显示放松训练后心率下降12bpm。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "已解决",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
    ],
  },
  // level 6
  {
    id: "7",
    name: "李逸明",
    age: 16,
    gender: "男",
    phone: "13800138007",
    label: ["社交障碍", "自卑心理"],
    time: "2024-01-14",
    hazardLevel: { level: 6, text: "二级关注" },
    summary:
      "存在集体活动回避与过度自我审视现象，实施「社交赋能三步法」：①每日完成1次3分钟微笑问候挑战；②参与戏剧社即兴表演训练（每周2次）；③创建「优势星图」电子档案，记录同伴发现的36项个人闪光点。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
  {
    id: "8",
    name: "孙美滢",
    age: 14,
    gender: "女",
    phone: "13800138008",
    label: ["人际关系", "自我认同"],
    time: "2024-01-09",
    hazardLevel: { level: 6, text: "二级关注" },
    summary:
      "开展「友谊重构计划」：每周完成3次跨班合作任务并录制「发现TA之美」短视频，同步进行「成长树」绘画治疗，将28项自我优势转化为树枝上的闪光果实。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "待回访",
    followUpRecords: [],
  },
  {
    id: "9",
    name: "张灏铖",
    age: 15,
    gender: "男",
    phone: "13800138009",
    label: ["学习方法", "注意力不集中"],
    time: "2024-01-06",
    hazardLevel: { level: 6, text: "二级关注" },
    summary:
      "创新「知识拆弹游戏」：每个学习难点设置为定时炸弹，解题成功可获得拆弹专家勋章。脑电波监测显示专注时长提升35%，建立「学习银行」积分兑换系统。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "已解决",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
    ],
  },
  {
    id: "10",
    name: "陈伟枬",
    age: 14,
    gender: "男",
    phone: "13800138010",
    label: ["叛逆行为", "亲子矛盾"],
    time: "2024-01-02",
    hazardLevel: { level: 6, text: "二级关注" },
    summary:
      "启动「家庭纪录片」项目：担任导演记录日常互动，通过镜头语言重建沟通桥梁。设置「情绪温度计」打卡系统，冲突解决成功率提升至80%。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
  {
    id: "11",
    name: "张谦谦",
    age: 16,
    gender: "男",
    phone: "13800138011",
    label: ["亲子沟通", "自我管理"],
    time: "2023-12-29",
    hazardLevel: { level: 6, text: "二级关注" },
    summary:
      "推行「家庭董事会」制度：管理500元成长基金用于亲子旅行规划，建立「自律筹码」系统，每完成目标可兑换周末自主安排权。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "待回访",
    followUpRecords: [],
  },
  // level 5
  {
    id: "12",
    name: "刘铭浩",
    age: 15,
    gender: "男",
    phone: "13800138012",
    label: ["叛逆行为", "亲子矛盾"],
    time: "2024-01-12",
    hazardLevel: { level: 5, text: "良好" },
    summary:
      "冲突频率下降至每周1次，推行「家庭CEO」机制：每周主持家庭会议规划周末活动，管理200元虚拟家庭基金。建议父母采用「三明治沟通法」：先肯定3个进步→提出1个建议→以期待结尾。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "已解决",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
    ],
  },
  {
    id: "13",
    name: "周霖昱",
    age: 16,
    gender: "女",
    phone: "13800138013",
    label: ["亲子沟通", "自我管理"],
    time: "2024-01-07",
    hazardLevel: { level: 5, text: "良好" },
    summary:
      "建立「家庭邮件日」机制，已交换23封深度沟通信件。推行「四象限任务板」，将每日目标分解为「紧急/重要」矩阵，配合「自律能量条」手机壁纸实时激励。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
  {
    id: "14",
    name: "李浩哲",
    age: 16,
    gender: "男",
    phone: "13800138014",
    label: ["学习压力", "自卑心理"],
    time: "2024-01-04",
    hazardLevel: { level: 5, text: "良好" },
    summary:
      "创建「成就里程碑」墙记录89项小胜利，开展「压力转化方程式」工作坊：将焦虑能量转化为3幅抽象画作与10公里骑行挑战，建立正向反馈循环机制。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "待回访",
    followUpRecords: [],
  },
  {
    id: "15",
    name: "吴翼刚",
    age: 15,
    gender: "男",
    phone: "13800138015",
    label: ["人际关系", "自我认同"],
    time: "2023-12-31",
    hazardLevel: { level: 5, text: "良好" },
    summary:
      "创建「社交实验室」：设置微笑问候到主持辩论的12级挑战任务，同步开展「人生博物馆」策展活动，收集25个成长瞬间强化自我认知。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "已解决",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
    ],
  },
  {
    id: "16",
    name: "李东伟",
    age: 14,
    gender: "男",
    phone: "13800138016",
    label: ["社交障碍", "自卑心理"],
    time: "2023-12-27",
    hazardLevel: { level: 5, text: "良好" },
    summary:
      "开展「微社交进化计划」：从每日点赞发展到组织读书会，制作「能量手账」记录63项个人成就，自我认同感可视化提升90%。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
  // level 4
  {
    id: "17",
    name: "赵阳",
    age: 15,
    gender: "男",
    phone: "13800138017",
    label: ["情绪管理", "压力应对"],
    time: "2024-01-10",
    hazardLevel: { level: 4, text: "良好" },
    summary:
      "情绪爆发频率降低70%，深化「情绪气象站」系统：每日绘制情绪折线图，压力值＞7分时触发「心灵SPA」（音乐冥想/击打宣泄枕/心理咨询师连线三选一），建立移动端情绪预警APP。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "待回访",
    followUpRecords: [],
  },
  {
    id: "18",
    name: "赵齐方",
    age: 15,
    gender: "女",
    phone: "13800138018",
    label: ["注意力不集中", "学业规划"],
    time: "2024-01-03",
    hazardLevel: { level: 4, text: "良好" },
    summary:
      "推行「未来城市」项目：将数学知识应用于交通枢纽设计，物理原理融入建筑模型制作，通过跨学科实践提升学习目标感与专注度。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
  {
    id: "19",
    name: "刘艳芳",
    age: 14,
    gender: "女",
    phone: "13800138019",
    label: ["学业规划", "职业困惑"],
    time: "2023-12-30",
    hazardLevel: { level: 4, text: "良好" },
    summary:
      "实施「职业影子日」：每月跟随心理咨询师工作3小时，制作《职业探索手记》vlog，将心理学知识应用于班级矛盾调解实践。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "已解决",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
    ],
  },
  // level 3
  {
    id: "20",
    name: "吴祺强",
    age: 15,
    gender: "男",
    phone: "13800138020",
    label: ["学业规划", "职业困惑"],
    time: "2024-01-08",
    hazardLevel: { level: 3, text: "良好" },
    summary:
      "通过职业兴趣测评确定技术研发倾向，实施「未来工程师计划」：每周访谈1位科技从业者，将物理知识应用于智能家居改造项目，设计「学科-职业」映射思维导图。",
    chatRecords: [
      {
        type: "student",
        content: "最近学习压力很大，总是睡不着觉...",
        time: "19:30",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content: "我理解你的感受。能具体说说是什么让你感到压力最大吗？",
        time: "19:31",
      },
      {
        type: "student",
        content: "期末考试快到了，我觉得自己准备得不够充分，很害怕考不好",
        time: "19:33",
      },
      {
        type: "counselor",
        expert: {
          name: "李珊珊",
          avatar: expert1,
        },
        content:
          "这种担忧是很正常的。我们一起来制定一个学习计划，让复习更有效率好吗？",
        time: "19:34",
      },
    ],
    followUpPerson: "王心理",
    followUpStatus: "回访中",
    followUpRecords: [
      {
        name: "王心理",
        time: "2024-01-16",
        content:
          "学生反馈「学习能量管理计划」执行顺利，晨间学习效率提升明显，但仍存在睡眠问题。建议调整作息时间，加强放松训练。",
      },
      {
        name: "王心理",
        time: "2024-01-17",
        content:
          "经过一周的正念绘画疗愈，学生情绪状态有所改善。将继续跟进观察。",
      },
      {
        name: "王心理",
        time: "2024-01-18",
        content:
          "和家长进行了沟通，建议配合学校心理辅导工作，在家建立良好的作息制度。",
      },
      {
        name: "王心理",
        time: "2024-01-19",
        content:
          "本周追踪显示，通过正念练习和作息调整，睡眠质量有明显改善。建议继续保持。",
      },
    ],
  },
];

export const mockSchoolList = [
  // 地级市
  { name: "福州市", id: 1 },
  { name: "厦门市", id: 2 },
  { name: "泉州市", id: 3 },
  { name: "漳州市", id: 4 },
  { name: "莆田市", id: 5 },
  { name: "三明市", id: 6 },
  { name: "南平市", id: 7 },
  // 县级市
  { name: "龙岩市", id: 8 },
  { name: "宁德市", id: 9 },
  { name: "福清市", id: 10 },
  { name: "长乐市", id: 11 },
  { name: "永安市", id: 12 },
  { name: "石狮市", id: 13 },
  { name: "晋江市", id: 14 },
  { name: "南安市", id: 15 },
  { name: "龙海市", id: 16 },
  { name: "邵武市", id: 17 },
  { name: "武夷山市", id: 18 },
  { name: "建瓯市", id: 19 },
  { name: "建阳市", id: 20 },
  { name: "漳平市", id: 21 },
];
