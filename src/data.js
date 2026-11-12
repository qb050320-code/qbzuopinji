export const profile = {
  name: '齐兵',
  email: 'qb050320@126.com',
  phone: '13716831736',
  channel: 'https://weixin.qq.com/sph/A6gPyknrE0',
};

export const projects = [
  {
    id: '01', title: '骑骑人生', english: 'A LIFE IN MOTION', type: '院线电影 · 剧情片', year: '2026',
    categories: ['调色', 'DIT'], image: '/media/project-01.webp',
    description: '从片场的数据管理到后期色彩，参与构建影片的整体视觉表达。依据导演的创作意图，完成基础矫正与艺术化风格处理。',
    contributions: ['片场素材备份、校验、转码与管理', '前后期素材交接与音频时码问题排查', '基础调色、镜头匹配与整体风格统一'],
    note: '入围第 20 届 FIRST 青年电影展产业放映',
  },
  {
    id: '02', title: '人圈', english: 'WITHIN THE FRAME', type: '院线电影 · 纪录片', year: '持续参与',
    categories: ['调色', 'DIT'], image: '/media/renquan/frame-13.webp',
    hasOriginalImages: true,
    imageAlt: '《人圈》调色静帧：老人站在村落的石墙巷道中',
    gallery: Array.from({ length: 28 }, (_, index) => {
      const number = String(index + 1).padStart(2, '0');
      return {
        src: `/media/renquan/frame-${number}.webp`,
        thumb: `/media/renquan/thumb-${number}.webp`,
        kind: index >= 24 ? 'overview' : 'still',
        alt: index >= 24 ? `《人圈》调色画面总览 ${index - 23}` : `《人圈》调色静帧 ${index + 1}`,
      };
    }),
    description: '以严肃、庄重、真实的视觉基调服务影片叙事，完成色彩基础矫正与风格化处理，并统筹前后期素材衔接。',
    contributions: ['前后期素材交接与回批整理', 'Final Cut Pro 与 DaVinci Resolve 套底问题处理', '基础色彩矫正与影片风格化处理'],
    note: '影片已取得公映许可证。',
  },
  {
    id: '03', title: '一炉一器', english: 'CRAFTED IN FIRE', type: '纪录片', year: '2025—2026',
    categories: ['剪辑'], image: '/media/project-03.webp',
    description: '以传统手工艺「琉璃」为主线，将访谈、人物与工艺现场组织成有温度的故事。让时间与节奏，呈现手艺的质感。',
    contributions: ['访谈素材整理与叙事结构梳理', '围绕琉璃手工艺建立故事线', '专题片剪辑与节奏组织'],
    note: '参与时间：2025.12 — 2026.01。',
  },
  {
    id: '04', title: '岗坡上的诗', english: 'POETRY OF THE EVERYDAY', type: '纪录片', year: '2024',
    categories: ['摄影'], image: '/media/project-04.webp',
    description: '以轻量化拍摄方式接近人物与现场，参与纪录片前期策划、整体统筹与影像创作。用镜头观察生活，也留下生活本身的呼吸。',
    contributions: ['项目前期策划与影像创作', '拍摄方案与轻量化设备搭配', '纪录片摄影与现场统筹'],
    note: '入围第三届 IM 两岸青年影展、北京国际大学生电影节。',
  },
  {
    id: '05', title: '她不乖 · 短剧调色', english: 'COLOR FOR THE STORY', type: '网络短剧', year: '2025',
    categories: ['调色'], image: '/media/project-05.webp',
    description: '根据剧情氛围与导演意图，完成竖屏短剧的基础矫正、镜头匹配与整体风格统一，在紧凑的交付节奏中保持画面品质。',
    contributions: ['人物肤色与曝光矫正', '跨场景镜头匹配', '根据剧情氛围塑造视觉风格'],
    note: '《她不乖》红果平台热度 6000 万，预约追剧 60 万人。',
  },
  {
    id: '06', title: '鸭司令的征程', english: 'A JOURNEY BACK HOME', type: '纪录片', year: '2025',
    categories: ['剪辑'], image: '/media/project-06.webp',
    description: '围绕主人公以养鸭、卖鸭助力乡村振兴的经历，梳理访谈素材与人物故事，让清晰的叙事结构承载真实的生活。',
    contributions: ['访谈素材梳理与故事线搭建', '人物纪录片结构设计', '叙事节奏与镜头剪辑'],
    note: '参与时间：2025.11 — 2025.12。',
  },
];

export const experiences = [
  { date: '2025.07 — 2025.09', name: '北京旺德福文化传媒', role: '实习调色师', description: '参与网络短剧后期调色，完成基础矫正、镜头匹配与视觉风格统一。' },
  { date: '2024.01 — 2024.03', name: '北京心宜韵女性运动健康管理中心', role: '新媒体运营 / 拍摄剪辑', description: '独立拍剪科普视频，搭建直播间并制作线上课程。' },
  { date: '2023.09 — 2027.06', name: '河北传媒学院', role: '影视摄影与制作 · 本科', description: '影视艺术学院 · GPA 3.2 / 4 · 专业成绩全校前 30%。' },
];
