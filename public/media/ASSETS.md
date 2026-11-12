# 基础版素材说明

首页现使用用户指定的真实调色工作照片 `hero-colorist.webp`，由原始文件 `045714755a0abc83f9a5b3fdd4830832.jpg` 转为 WebP（1440×1080），没有改动场景内容或色彩。首页以静态摄影呈现，不再播放图库烟雾视频。之前选用的调色台空景 `hero-studio.webp` 作为备选保留，当前不引用。

下列图库封面及历史演示视频均用于排版、色彩和交互预览，**不是齐兵本人项目原片**。精选项目封面继续保留视觉示意标注，后续替换为已授权的项目图片与视频。

## 《人圈》真实调色资料

`renquan/` 包含用户提供的 24 张影片调色静帧与 4 张调色画面总览，来源为 `调色作品集/长片/人圈静帧/`。按原始顺序制作 1920px 大图与 480px 缩略图，保留原始色彩与完整画幅；封面选用 `renquan/frame-13.webp`。源文件映射见 `renquan/manifest.json`，该项目不再使用示意封面。

## 图片（Unsplash）

已通过下载成功与 Pillow 图像解码验证，WebP 为优化后的站内使用版本。

| 站内文件 | 内容 | 原始图片地址 |
| --- | --- | --- |
| hero-poster.webp | 青蓝与紫红霓虹街道 | https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1920&q=85&fit=crop |
| project-01.webp | 霓虹城市街道 | https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600&q=85&fit=crop |
| project-02.webp | 暮色群山与湖泊 | https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=85&fit=crop |
| project-03.webp | 暖色晨雾中的城堡 | https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=85&fit=crop |
| project-04.webp | 海浪近景 | https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&q=85&fit=crop |
| project-05.webp | 城市建筑与灯光 | https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&q=85&fit=crop |
| project-06.webp | 林间光束 | https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=85&fit=crop |
| portrait.webp | 摄影人物与相机氛围图（非本人） | https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=85&fit=crop |

图片使用条款：https://unsplash.com/license

## 视频（Pexels）

- 站内文件：`hero.mp4`
- 资源地址：https://videos.pexels.com/video-files/3045163/3045163-sd_640_360_25fps.mp4
- 资源页：https://www.pexels.com/video/3045163/
- 文件大小：1,701,065 字节；MP4（avc1），20.64 秒。
- 该素材仅作为首页背景演示，并非本人的 Showreel。背景应静音循环播放。
- 使用条款：https://www.pexels.com/license/

下载原始图片留档于项目 `.work/asset-originals/`，不参与部署；站点实际使用优化后的 WebP 图片。

## 原创备用视频

`hero-fallback.webm` 为程序生成的雾山与暖光视觉，960×540、5秒、VP8、无音轨；用于不支持 MP4 时的备用播放源，不代表任何真实项目。生成源码保存在项目 `.work/generate_cinematic_fallback.py`。

旧版首页曾以夜景照片叠加 Pexels 动态烟雾视频；这些旧素材保留供后续选择，当前首页不再引用。
