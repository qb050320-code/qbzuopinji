# 齐兵 · 个人影像作品集

React + Vite 实现的个人作品集基础版。暗色电影感视觉，桌面内容最大宽度 1700px，同时适配平板和手机。

## 本地运行

需要 Node.js 20.19+ 或 22.12+，推荐使用当前 LTS。

```sh
corepack pnpm install
corepack pnpm dev
```

也可使用 npm（选择一种包管理器）：

```sh
npm install
npm run dev
```

启动后打开终端显示的本地地址，默认 `http://127.0.0.1:5173/`。

```sh
corepack pnpm build
corepack pnpm preview
```

## 已实现

- 全屏视频首页、视频暂停/播放、锚点导航
- 个人介绍、真实经历、项目数据、简历下载
- 六个精选项目、角色筛选、项目详情弹窗
- 四项专业能力、可拖动的色彩风格对比示意
- 全屏联系收尾页、邮箱复制、邮件与电话链接
- 微信视频号入口、抖音账号提示
- 移动导航、键盘操作、弹窗焦点管理、减少动态效果支持

## 下一步如何替换素材

- `src/data.js`：个人联系方式、精选项目、经历文案。
- `src/main.jsx`：页面结构。
- `src/styles.css`：字体、色彩、间距与布局。
- `public/media/hero.mp4`：首页背景视频。建议无声、10–20秒、H.264、1080p以内。
- `public/media/hero-poster.webp`：视频未加载时的封面。
- `public/media/portrait.webp`：个人照片。
- `public/media/project-01.webp` 至 `project-06.webp`：精选项目封面。
- `public/resume/qi-bing-resume.pdf`：可下载简历。

当前项目名称、职责与个人资料依据用户提供的2026年11月简历整理；封面、人物工作图和背景视频为明确标注的氛围示意素材，不能作为本人项目影像或本人肖像。素材来源见 `public/media/ASSETS.md`。色彩拖动对比为同一示意图片的 CSS 风格演示，后续可替换为实际调色前后帧。

原片到位后，应同步移除对应卡片、图片替代文本与详情中的示意标注。各项目英文短语为页面编辑用视觉主题，并非影片官方英文片名。
