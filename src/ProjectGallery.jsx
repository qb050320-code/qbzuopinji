import React, { useEffect, useRef, useState } from 'react';
import './gallery.css';

function GalleryArrow({ direction }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={direction === 'previous' ? 'M15 5 8 12l7 7' : 'm9 5 7 7-7 7'} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function ProjectGallery({ images = [], title = '项目' }) {
  const [active, setActive] = useState(0);
  const stripRef = useRef(null);
  const thumbRefs = useRef([]);
  const galleryKey = `${title}:${images.map(image => image.src).join('|')}`;
  const count = images.length;
  const currentIndex = count ? Math.min(active, count - 1) : 0;
  const currentImage = images[currentIndex];
  const currentKind = currentImage?.kind === 'poster' ? '海报方案' : currentImage?.kind === 'material' ? '设计素材' : currentImage?.kind === 'overview' ? '调色画面总览' : '调色静帧';

  useEffect(() => { setActive(0); }, [galleryKey]);

  useEffect(() => {
    const strip = stripRef.current;
    const thumbnail = thumbRefs.current[currentIndex];
    if (strip && thumbnail) {
      strip.scrollTo({ left: thumbnail.offsetLeft - (strip.clientWidth - thumbnail.offsetWidth) / 2, behavior: 'auto' });
    }
  }, [currentIndex, galleryKey]);

  if (!count) return null;

  function changeImage(direction) {
    setActive(previous => (previous + direction + count) % count);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); changeImage(-1); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); changeImage(1); }
    else if (event.key === 'Home') { event.preventDefault(); setActive(0); }
    else if (event.key === 'End') { event.preventDefault(); setActive(count - 1); }
  }

  return <section className="project-gallery" aria-label={`${title}作品图片，共 ${count} 张，可使用左右方向键切换`} aria-roledescription="图片轮播" tabIndex={0} onKeyDown={handleKeyDown}>
    <div className="gallery-stage">
      <img className="gallery-main-image" src={currentImage.src} alt={currentImage.alt || `《${title}》${currentKind} ${currentIndex + 1}`} decoding="async" />
      {count > 1 && <>
        <button className="gallery-arrow gallery-previous" onClick={() => changeImage(-1)} aria-label="上一张图片"><GalleryArrow direction="previous" /></button>
        <button className="gallery-arrow gallery-next" onClick={() => changeImage(1)} aria-label="下一张图片"><GalleryArrow direction="next" /></button>
      </>}
    </div>
    <div className="gallery-meta">
      <span className="gallery-caption">《{title}》<span>{currentImage.kind === 'poster' ? '海报方案 / POSTER STUDY' : currentImage.kind === 'material' ? '设计素材 / DESIGN MATERIALS' : currentImage.kind === 'overview' ? '调色画面总览 / GRADING OVERVIEW' : '调色静帧 / COLOR GRADING STILLS'}</span></span>
      <span className="gallery-counter" role="status" aria-live="polite" aria-atomic="true" aria-label={`第 ${currentIndex + 1} 张，共 ${count} 张`}><strong>{String(currentIndex + 1).padStart(2, '0')}</strong><span>/</span>{String(count).padStart(2, '0')}</span>
    </div>
    {count > 1 && <div className="gallery-thumbnails" ref={stripRef} role="group" aria-label="选择作品图片">{images.map((image, index) => <button key={image.src} ref={element => { thumbRefs.current[index] = element; }} className={`gallery-thumbnail${index === currentIndex ? ' is-current' : ''}`} onClick={() => setActive(index)} aria-label={`查看《${title}》${image.kind === 'poster' ? '海报方案' : image.kind === 'material' ? '设计素材' : image.kind === 'overview' ? '调色画面总览' : '调色静帧'} ${index + 1}`} aria-current={index === currentIndex ? 'true' : undefined}>
      <img src={image.thumb || image.src} alt="" loading="lazy" decoding="async" />
      <span>{String(index + 1).padStart(2, '0')}</span>
    </button>)}</div>}
  </section>;
}
