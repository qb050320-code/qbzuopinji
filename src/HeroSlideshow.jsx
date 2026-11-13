import { useEffect, useState } from 'react';

const photos = Array.from({ length: 6 }, (_, index) => `/media/hero-slides/${String(index + 1).padStart(2, '0')}.webp`);
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function HeroSlideshow() {
  const [sequence, setSequence] = useState(() => ({ order: photos, index: 0 }));
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    function schedule() {
      clearInterval(timer);
      if (preference.matches) return;
      timer = setInterval(() => {
        if (document.hidden) return;
        setSequence(previous => {
          if (previous.index < previous.order.length - 1) return { ...previous, index: previous.index + 1 };
          const order = shuffle(photos);
          if (order[0] === previous.order[previous.index]) [order[0], order[1]] = [order[1], order[0]];
          return { order, index: 0 };
        });
      }, 7000);
    }
    schedule();
    preference.addEventListener('change', schedule);
    return () => { clearInterval(timer); preference.removeEventListener('change', schedule); };
  }, []);
  return <div className="hero-media" aria-hidden="true">
    {photos.filter(src => sequence.order.indexOf(src) <= sequence.index + 1 && (sequence.index > 0 || src === photos[0])).map(src => <img key={src} className={`hero-photo hero-slide${src === sequence.order[sequence.index] ? ' is-active' : ''}`} src={src} alt="" decoding="async" fetchPriority={src === sequence.order[0] ? 'high' : 'low'} />)}
    <div className="hero-shade" />
  </div>;
}
