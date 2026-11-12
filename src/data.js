import { shortDramaProjects } from './shortDramaProjects';
export const profile = {
  name: '齐兵',
  email: 'qb050320@126.com',
  phone: '13716831736',
  channel: 'https://weixin.qq.com/sph/A6gPyknrE0',
};

export const projects = [
  ...shortDramaProjects,
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
    id: '04', title: '岗坡上的诗', english: 'DOCUMENTARY STUDY', type: '纪录片', year: '2025.04—2025.07',
    categories: ['剪辑'], image: '/media/gangpo/frame-04.webp',
    hasOriginalImages: true, imageAlt: '《岗坡上的诗》项目静帧',
    gallery: [{"src": "/media/gangpo/frame-01.webp", "thumb": "/media/gangpo/thumb-01.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 1"}, {"src": "/media/gangpo/frame-02.webp", "thumb": "/media/gangpo/thumb-02.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 2"}, {"src": "/media/gangpo/frame-03.webp", "thumb": "/media/gangpo/thumb-03.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 3"}, {"src": "/media/gangpo/frame-04.webp", "thumb": "/media/gangpo/thumb-04.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 4"}, {"src": "/media/gangpo/frame-05.webp", "thumb": "/media/gangpo/thumb-05.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 5"}, {"src": "/media/gangpo/frame-06.webp", "thumb": "/media/gangpo/thumb-06.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 6"}, {"src": "/media/gangpo/frame-07.webp", "thumb": "/media/gangpo/thumb-07.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 7"}, {"src": "/media/gangpo/frame-08.webp", "thumb": "/media/gangpo/thumb-08.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 8"}, {"src": "/media/gangpo/frame-09.webp", "thumb": "/media/gangpo/thumb-09.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 9"}, {"src": "/media/gangpo/frame-10.webp", "thumb": "/media/gangpo/thumb-10.webp", "kind": "still", "alt": "《岗坡上的诗》项目影像 10"}, {"src": "/media/gangpo/frame-11.webp", "thumb": "/media/gangpo/thumb-11.webp", "kind": "overview", "alt": "《岗坡上的诗》项目影像 11"}],
    description: '根据导演确定的纪录超短片剪辑风格完成剪辑，处理包装物料。',
    contributions: ['纪录超短片剪辑与风格执行', '包装物料处理'],
    note: '参与时间：2025.04 — 2025.07。',
  },
  {
    id: '05', title: '她不乖 · 短剧调色', english: 'COLOR FOR THE STORY', type: '网络短剧', year: '2025',
    categories: ['调色'], image: '/media/ta-bu-guai/frame-23.webp',
    hasOriginalImages: true,
    imageAlt: '《她不乖》调色静帧：撑伞的人物',
    gallery: [{"src": "/media/ta-bu-guai/frame-01.webp", "thumb": "/media/ta-bu-guai/thumb-01.webp", "kind": "still", "alt": "《她不乖》调色静帧 1"}, {"src": "/media/ta-bu-guai/frame-02.webp", "thumb": "/media/ta-bu-guai/thumb-02.webp", "kind": "still", "alt": "《她不乖》调色静帧 2"}, {"src": "/media/ta-bu-guai/frame-03.webp", "thumb": "/media/ta-bu-guai/thumb-03.webp", "kind": "still", "alt": "《她不乖》调色静帧 3"}, {"src": "/media/ta-bu-guai/frame-04.webp", "thumb": "/media/ta-bu-guai/thumb-04.webp", "kind": "still", "alt": "《她不乖》调色静帧 4"}, {"src": "/media/ta-bu-guai/frame-05.webp", "thumb": "/media/ta-bu-guai/thumb-05.webp", "kind": "still", "alt": "《她不乖》调色静帧 5"}, {"src": "/media/ta-bu-guai/frame-06.webp", "thumb": "/media/ta-bu-guai/thumb-06.webp", "kind": "still", "alt": "《她不乖》调色静帧 6"}, {"src": "/media/ta-bu-guai/frame-07.webp", "thumb": "/media/ta-bu-guai/thumb-07.webp", "kind": "still", "alt": "《她不乖》调色静帧 7"}, {"src": "/media/ta-bu-guai/frame-08.webp", "thumb": "/media/ta-bu-guai/thumb-08.webp", "kind": "still", "alt": "《她不乖》调色静帧 8"}, {"src": "/media/ta-bu-guai/frame-09.webp", "thumb": "/media/ta-bu-guai/thumb-09.webp", "kind": "still", "alt": "《她不乖》调色静帧 9"}, {"src": "/media/ta-bu-guai/frame-10.webp", "thumb": "/media/ta-bu-guai/thumb-10.webp", "kind": "still", "alt": "《她不乖》调色静帧 10"}, {"src": "/media/ta-bu-guai/frame-11.webp", "thumb": "/media/ta-bu-guai/thumb-11.webp", "kind": "still", "alt": "《她不乖》调色静帧 11"}, {"src": "/media/ta-bu-guai/frame-12.webp", "thumb": "/media/ta-bu-guai/thumb-12.webp", "kind": "still", "alt": "《她不乖》调色静帧 12"}, {"src": "/media/ta-bu-guai/frame-13.webp", "thumb": "/media/ta-bu-guai/thumb-13.webp", "kind": "still", "alt": "《她不乖》调色静帧 13"}, {"src": "/media/ta-bu-guai/frame-14.webp", "thumb": "/media/ta-bu-guai/thumb-14.webp", "kind": "still", "alt": "《她不乖》调色静帧 14"}, {"src": "/media/ta-bu-guai/frame-15.webp", "thumb": "/media/ta-bu-guai/thumb-15.webp", "kind": "still", "alt": "《她不乖》调色静帧 15"}, {"src": "/media/ta-bu-guai/frame-16.webp", "thumb": "/media/ta-bu-guai/thumb-16.webp", "kind": "still", "alt": "《她不乖》调色静帧 16"}, {"src": "/media/ta-bu-guai/frame-17.webp", "thumb": "/media/ta-bu-guai/thumb-17.webp", "kind": "still", "alt": "《她不乖》调色静帧 17"}, {"src": "/media/ta-bu-guai/frame-18.webp", "thumb": "/media/ta-bu-guai/thumb-18.webp", "kind": "still", "alt": "《她不乖》调色静帧 18"}, {"src": "/media/ta-bu-guai/frame-19.webp", "thumb": "/media/ta-bu-guai/thumb-19.webp", "kind": "still", "alt": "《她不乖》调色静帧 19"}, {"src": "/media/ta-bu-guai/frame-20.webp", "thumb": "/media/ta-bu-guai/thumb-20.webp", "kind": "still", "alt": "《她不乖》调色静帧 20"}, {"src": "/media/ta-bu-guai/frame-21.webp", "thumb": "/media/ta-bu-guai/thumb-21.webp", "kind": "still", "alt": "《她不乖》调色静帧 21"}, {"src": "/media/ta-bu-guai/frame-22.webp", "thumb": "/media/ta-bu-guai/thumb-22.webp", "kind": "still", "alt": "《她不乖》调色静帧 22"}, {"src": "/media/ta-bu-guai/frame-23.webp", "thumb": "/media/ta-bu-guai/thumb-23.webp", "kind": "still", "alt": "《她不乖》调色静帧 23"}, {"src": "/media/ta-bu-guai/frame-24.webp", "thumb": "/media/ta-bu-guai/thumb-24.webp", "kind": "still", "alt": "《她不乖》调色静帧 24"}, {"src": "/media/ta-bu-guai/frame-25.webp", "thumb": "/media/ta-bu-guai/thumb-25.webp", "kind": "still", "alt": "《她不乖》调色静帧 25"}, {"src": "/media/ta-bu-guai/frame-26.webp", "thumb": "/media/ta-bu-guai/thumb-26.webp", "kind": "still", "alt": "《她不乖》调色静帧 26"}, {"src": "/media/ta-bu-guai/frame-27.webp", "thumb": "/media/ta-bu-guai/thumb-27.webp", "kind": "still", "alt": "《她不乖》调色静帧 27"}, {"src": "/media/ta-bu-guai/frame-28.webp", "thumb": "/media/ta-bu-guai/thumb-28.webp", "kind": "still", "alt": "《她不乖》调色静帧 28"}, {"src": "/media/ta-bu-guai/frame-29.webp", "thumb": "/media/ta-bu-guai/thumb-29.webp", "kind": "still", "alt": "《她不乖》调色静帧 29"}, {"src": "/media/ta-bu-guai/frame-30.webp", "thumb": "/media/ta-bu-guai/thumb-30.webp", "kind": "still", "alt": "《她不乖》调色静帧 30"}, {"src": "/media/ta-bu-guai/frame-31.webp", "thumb": "/media/ta-bu-guai/thumb-31.webp", "kind": "still", "alt": "《她不乖》调色静帧 31"}, {"src": "/media/ta-bu-guai/frame-32.webp", "thumb": "/media/ta-bu-guai/thumb-32.webp", "kind": "still", "alt": "《她不乖》调色静帧 32"}, {"src": "/media/ta-bu-guai/frame-33.webp", "thumb": "/media/ta-bu-guai/thumb-33.webp", "kind": "still", "alt": "《她不乖》调色静帧 33"}, {"src": "/media/ta-bu-guai/frame-34.webp", "thumb": "/media/ta-bu-guai/thumb-34.webp", "kind": "overview", "alt": "《她不乖》调色画面总览 34"}, {"src": "/media/ta-bu-guai/frame-35.webp", "thumb": "/media/ta-bu-guai/thumb-35.webp", "kind": "overview", "alt": "《她不乖》调色画面总览 35"}, {"src": "/media/ta-bu-guai/frame-36.webp", "thumb": "/media/ta-bu-guai/thumb-36.webp", "kind": "overview", "alt": "《她不乖》调色画面总览 36"}, {"src": "/media/ta-bu-guai/frame-37.webp", "thumb": "/media/ta-bu-guai/thumb-37.webp", "kind": "overview", "alt": "《她不乖》调色画面总览 37"}, {"src": "/media/ta-bu-guai/frame-38.webp", "thumb": "/media/ta-bu-guai/thumb-38.webp", "kind": "overview", "alt": "《她不乖》调色画面总览 38"}, {"src": "/media/ta-bu-guai/frame-39.webp", "thumb": "/media/ta-bu-guai/thumb-39.webp", "kind": "overview", "alt": "《她不乖》调色画面总览 39"}, {"src": "/media/ta-bu-guai/frame-40.webp", "thumb": "/media/ta-bu-guai/thumb-40.webp", "kind": "overview", "alt": "《她不乖》调色画面总览 40"}, {"src": "/media/ta-bu-guai/frame-41.webp", "thumb": "/media/ta-bu-guai/thumb-41.webp", "kind": "overview", "alt": "《她不乖》调色工作现场 41"}],
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
