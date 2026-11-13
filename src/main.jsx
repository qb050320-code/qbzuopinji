import { resolveVideoSource } from './videoSources';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, projects, experiences } from './data';
import ProjectGallery from './ProjectGallery';
import HeroSlideshow from './HeroSlideshow';
import './styles.css';
import './hero.css';
import './projects.css';

function Arrow({ diagonal = true, ...props }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Mark() { return <span className="brand-mark" aria-hidden="true">q<span>b</span><i /></span>; }
function SectionLabel({ number, children }) { return <div className="section-label"><span className="tiny-cross">+</span><span>{children}</span><span className="section-index">{number} / 04</span></div>; }

function App() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState('');
  const [comparison, setComparison] = useState(52);
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const sections = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-20% 0px -65% 0px' });
    document.querySelectorAll('main > section[id]').forEach(el => sections.observe(el));
    return () => { observer.disconnect(); sections.disconnect(); };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(''), 3000);
    return () => clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (!modal) return;
    lastFocus.current = document.activeElement;
    const dialog = dialogRef.current;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    dialog?.querySelector('button')?.focus();
    return () => {
      dialog?.close();
      document.body.style.overflow = '';
      lastFocus.current?.focus();
    };
  }, [modal]);

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setToast('邮箱已复制，期待你的来信。'); }
    catch { setToast(`请手动复制邮箱：${profile.email}`); }
  }
  function navigate() { setMenuOpen(false); }
  const visibleProjects = projects.filter(project => activeFilter === '全部' || project.categories.includes(activeFilter));

  return <>
    <a className="skip-link" href="#about">跳转到主要内容</a>
    <header className={`header ${activeSection !== 'home' ? 'header-solid' : 'header-studio'}`}>
      <div className="header-inner wrap">
        <a href="#home" className="brand" aria-label="齐兵，返回首页" onClick={navigate}><Mark /><span className="brand-name">QI BING<span>齐兵 · 影像创作者</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? '关闭导航' : '打开导航'}>{menuOpen ? '关闭 −' : '菜单 +'}</button>
        <nav id="main-nav" className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="主导航">
          {[['about', '关于我', '01'], ['work', '精选作品', '02'], ['expertise', '专业能力', '03']].map(([id, title, number]) => <a key={id} href={`#${id}`} onClick={navigate} aria-current={activeSection === id ? 'location' : undefined}><sup>{number}</sup>{title}</a>)}
        </nav>
        <a className="header-contact" href="#contact" onClick={navigate}><span className="status-dot" />一起创作 <Arrow /></a>
      </div>
    </header>

    <main>
      <section className="hero hero-studio" id="home" aria-label="齐兵个人作品集首页">
        <HeroSlideshow />
        <div className="hero-content wrap">
          <div className="hero-eyebrow"><span className="status-dot" /> INDEPENDENT VISUAL CREATOR <span className="hero-year">PORTFOLIO / 2026</span></div>
          <h1>在进步<span className="hero-line">再<span className="outline-word">进一步</span><i className="title-period">.</i></span></h1>
          <div className="hero-bottom-copy"><p>从片场到银幕，以色彩塑造情绪，<br />用镜头与节奏，让每个故事被看见。</p><a className="round-link" href="#work"><span>探索我的作品<small>EXPLORE SELECTED WORK</small></span><span className="circle-arrow"><Arrow /></span></a></div>
        </div>
        <div className="hero-footer wrap"><div className="hero-disciplines">COLORIST <i>/</i> EDITOR <i>/</i> CINEMATOGRAPHER <i>/</i> DIT</div><div className="hero-photo-credit"><span>BEHIND THE FRAMES</span><span>齐兵 · 创作与日常</span></div><a href="#about" className="scroll-link">SCROLL TO DISCOVER <span>↓</span></a></div>
      </section>

      <div className="discipline-strip" aria-hidden="true"><div className="wrap"><span>视觉调色</span><i>✳</i><span>叙事剪辑</span><i>✳</i><span>影像创作</span><i>✳</i><span>片场数据管理</span><i>✳</i><span>FROM VISION TO EMOTION</span></div></div>

      <section id="about" className="about section-space wrap">
        <SectionLabel number="01">ABOUT ME / 关于我</SectionLabel>
        <div className="about-main">
          <div className="portrait-block reveal"><img src="/media/portrait.webp" alt="齐兵个人照片" loading="lazy" /><span className="portrait-coordinate">REC <i /> 00:00:24:08</span></div>
          <div className="about-copy reveal"><div className="availability"><span className="status-dot" /> 开放项目合作 / 实习机会</div><h2>你好，我是<span>齐兵<em>。</em></span></h2><div className="about-roles">调色 / 剪辑 / 摄影 / DIT</div><p className="muted-copy">就读于河北传媒学院影视摄影与制作专业，曾在北京HOMEBOY 调色职业班系统学习，拥有个人后期工作室，两年以上调色经验，内容涵盖电影、剧情片、纪录片、网剧、广告。</p><div className="about-contact"><a href={`mailto:${profile.email}`}>{profile.email}<Arrow /></a></div><a className="text-link" href="/resume/qi-bing-resume.pdf?v=000b504fb794" download="齐兵简历 求职意向：摄影 后期 编导 202611.pdf">下载个人简历 <Arrow /></a></div>
        </div>
        <div className="stats reveal"><div><strong>2<span>+</span></strong><p>年调色经验<small>YEARS IN COLOR</small></p></div><div><strong>{new Set(projects.flatMap(project => project.categories).filter(category => category !== '个人')).size}</strong><p>类岗位经验<small>{[...new Set(projects.flatMap(project => project.categories))].filter(category => category !== '个人').join(' / ')}</small></p></div><div><strong>30<span>万+</span></strong><p>个人视频号累计播放<small>PERSONAL VIDEO VIEWS</small></p></div><div><strong>72<span>H</span></strong><p>限时创作大赛一等奖<small>CHINA CREATIVE COMPETITION</small></p></div></div>
        <div className="experience-block reveal"><div className="experience-title"><span className="mono">THE JOURNEY</span><h3>每一段经历，<br />都成为新的视角。</h3></div><div className="timeline">{experiences.map(item => <div className="timeline-row" key={item.date}><span className="timeline-date mono">{item.date}</span><div><h4>{item.name}</h4><span>{item.role}</span><p>{item.description}</p></div></div>)}</div></div>
      </section>

      <section id="work" className="work section-space">
        <div className="wrap"><SectionLabel number="02">SELECTED WORK / 精选项目</SectionLabel><div className="section-heading reveal"><h2>不同故事，<br /><span className="serif">同样专注。</span></h2><div className="section-description"><span className="mono">A SELECTION OF MY JOURNEY</span><p>从真实生活到银幕想象，<br />每一帧，都有它的表达。</p></div></div>
          <div className="work-toolbar"><div className="filters" role="group" aria-label="按专业筛选作品">{['全部', '编导', '调色', '剪辑', '摄影', 'DIT', '海报设计', 'AI生成', '个人'].map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? 'filter active' : 'filter'} aria-pressed={activeFilter === filter}>{filter}{filter === '全部' && <sup>{String(projects.length).padStart(2, '0')}</sup>}</button>)}</div><span className="work-count mono">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span></div>
          <div className="project-grid" aria-live="polite">{visibleProjects.map(project => <button className={`project-card${project.hasOriginalImages ? ' project-original' : ''}`} key={project.id} onClick={() => setModal({ type: 'project', project })} aria-label={`查看项目《${project.title}》详情`}>
            <div className="project-image">
              <img src={project.image} alt={project.imageAlt || `${project.title}的氛围示意封面，非项目原片`} loading="lazy" />
              <div className="project-image-overlay" />
              <span className="project-number mono">P / {project.id}</span>
              <span className="project-visual-label">{project.categories.includes('AI生成') ? 'AI GENERATION / AI生成' : project.categories.includes('海报设计') ? 'POSTER DESIGN / 海报设计' : project.hasOriginalImages ? 'COLOR GRADING / 调色影像' : 'VISUAL STUDY / 示意封面'}</span>
              <span className="project-open"><Arrow /></span>
              <div className="project-image-title"><span>{project.english}</span></div>
            </div>
            <div className="project-info"><div><span className="project-type">{project.type} <i>/</i> {project.year}</span><h3>{project.title}</h3></div><span className="project-role">{project.categories.join(' / ')}</span></div>
          </button>)}</div>
          <div className="work-note"><a href={profile.channel} target="_blank" rel="noreferrer">前往视频号 <Arrow /></a></div>
        </div>
      </section>

      <section id="expertise" className="expertise section-space wrap"><SectionLabel number="03">MY EXPERTISE / 专业能力</SectionLabel><div className="section-heading reveal"><h2>感性创作，<br /><span className="serif">理性把控。</span></h2><div className="section-description"><span className="mono">CRAFT MEETS PRECISION</span><p>理解创作意图，也解决技术问题。<br />让灵感，可靠地落在每一帧。</p></div></div>
        <div className="expertise-grid"><article className="expertise-card color-card reveal"><div className="skill-top"><span className="skill-index mono">01 / COLOR GRADING</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="17" r="12" stroke="currentColor" /><circle cx="17" cy="29" r="12" stroke="currentColor" /><circle cx="31" cy="29" r="12" stroke="currentColor" /></svg></div><h3>调色</h3><p>从基础矫正、镜头匹配到风格塑造，<br />在准确的肤色与统一的影调中，找到情绪。</p><div className="color-comparison"><img src="/media/optimized/color-practice-landscape.jpg.webp" alt="山景与街道调色练习" loading="lazy" /><div className="comparison-before" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}><img src="/media/optimized/color-practice-landscape.jpg.webp" alt="" loading="lazy" /></div><div className="comparison-line" style={{ left: `${comparison}%` }}><span>↔</span></div><span className="comparison-label before">BEFORE</span><span className="comparison-label after">AFTER</span><input type="range" min="0" max="100" value={comparison} onChange={e => setComparison(Number(e.target.value))} aria-label="拖动对比模拟 Log 灰片与调色效果" /></div><div className="skill-tags"><span>DaVinci Resolve</span><span>拖动对比</span></div></article>
          <article className="expertise-card reveal"><div className="skill-top"><span className="skill-index mono">02 / EDITING</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 12h26v10H6zM16 27h26v10H16zM24 6v36" stroke="currentColor" /></svg></div><h3>剪辑</h3><p>梳理心中的想法，把素材重新拼接，<br />让镜头之间的连接，产生新的意义</p><div className="editing-project-image"><img src="/media/optimized/editing-project-timeline.jpg.webp" alt="DaVinci Resolve 剪辑工程时间线" loading="lazy" /></div><div className="skill-tags"><span>DaVinci Resolve</span><span>纪录片 / 剧情短片</span></div></article>
          <article className="expertise-card reveal"><div className="skill-top"><span className="skill-index mono">03 / DRONE CINEMATOGRAPHY</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="19" y="19" width="10" height="10" rx="3" stroke="currentColor"/><path d="m20 20-8-8m16 8 8-8m-16 16-8 8m16-8 8 8M22 29v5h4v-5" stroke="currentColor"/><ellipse cx="10" cy="10" rx="7" ry="4" stroke="currentColor"/><ellipse cx="38" cy="10" rx="7" ry="4" stroke="currentColor"/><ellipse cx="10" cy="38" rx="7" ry="4" stroke="currentColor"/><ellipse cx="38" cy="38" rx="7" ry="4" stroke="currentColor"/></svg></div><h3>无人机</h3><p>从自学起步，在持续练习与实拍中熟练掌握大疆无人机操控。<br />将平稳飞行、运镜与构图结合，让空中视角服务故事。</p><div className="drone-photo"><img src="/media/drone-operation.jpg" alt="现场操控大疆无人机遥控器进行拍摄" loading="lazy" /><span className="drone-photo-label">FLIGHT IN FOCUS</span><span className="drone-photo-status"><i /> ON LOCATION</span></div><div className="skill-tags"><span>DJI 大疆</span><span>飞行操控 / 航拍运镜</span></div></article>
          <article className="expertise-card reveal"><div className="skill-top"><span className="skill-index mono">04 / DIGITAL IMAGING</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="6" y="7" width="36" height="12" rx="2" stroke="currentColor" /><rect x="6" y="27" width="36" height="12" rx="2" stroke="currentColor" /><path d="M12 13h18M12 33h18M35 11v4M35 31v4M24 19v8" stroke="currentColor" /></svg></div><h3>从片场到后期，无缝衔接</h3><p>素材备份、校验、转码与交接，兼顾流程效率<br />与素材安全，让创作环节顺畅衔接。</p><div className="data-flow" aria-hidden="true"><span>CAPTURE</span><i>→</i><span>VERIFY</span><i>→</i><span>CREATE</span></div><div className="skill-tags"><span>素材管理</span><span>套底 / 时码问题排查</span></div></article>
        </div>
      </section>

      <section id="contact" className="contact"><div className="contact-glow" /><div className="wrap contact-inner"><SectionLabel number="04">LET’S CONNECT / 联系我</SectionLabel><div className="contact-main reveal"><div className="availability"><span className="status-dot" /> 期待下一次创作</div><h2>你的下一个故事，<br />我们<span className="serif">一起</span>完成<span className="green">。</span></h2><a className="contact-email" href={`mailto:${profile.email}`}><span>{profile.email}</span><Arrow /></a><div className="contact-options"><button onClick={copyEmail}>复制邮箱 <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" /><path d="M15 8V4H4v11h4" stroke="currentColor" /></svg></button><a href={profile.channel} target="_blank" rel="noreferrer">微信视频号 <Arrow /></a><button onClick={() => setModal({ type: 'social' })}>抖音 <Arrow /></button></div></div><aside className="personal-notes"><div><span className="mono">BEYOND THE FRAME / 关于个人</span><h3>在影像之外，<br />也保持好奇。</h3></div><div><p>常驻北京，可接受出差，独立能力强。熟练掌握无人机，喜欢用个人视频记录生活，微信视频号累计播放超过三十万。</p><p>赵雷歌迷，个人爱好：摄影、旅游、游戏、数码，18岁时一个人自驾青海，如果可以，我想亲身参与更有意义的事情。</p><p>曾主动向学校沟通申请并组织高三开学典礼，作为代表发言，并放映独立制作的短片《以我为题》。</p><span className="personal-availability">常驻北京 · 可出差 · 可实习 3—6 个月</span></div></aside><footer className="footer"><a className="footer-brand" href="#home"><Mark /><span>QI BING / 齐兵</span></a><span>© {new Date().getFullYear()} QI BING. 用心对待每一帧。</span><a href="#home">BACK TO TOP <span>↑</span></a></footer></div></section>
    </main>

    <div className={`toast ${toast ? 'toast-visible' : ''}`} role="status">{toast}</div>
    {modal && <dialog ref={dialogRef} className={`project-dialog${modal.project?.gallery?.length ? ' has-gallery' : ''}`} onCancel={e => { e.preventDefault(); setModal(null); }} onClick={e => { if (e.target === e.currentTarget) setModal(null); }} aria-labelledby="dialog-title">
      <div className="dialog-toolbar"><button className="dialog-close" aria-label="关闭弹窗" onClick={() => setModal(null)}>关闭 <span>×</span></button></div>
      {modal.type === 'project' ? <>
        {modal.project.gallery?.length ? <ProjectGallery key={modal.project.id} images={modal.project.gallery} title={modal.project.title} /> : <img className="dialog-image" src={modal.project.image} alt="项目氛围示意封面，非项目原片" />}
        <div className="dialog-content">
          <span className="mono dialog-eyebrow">PROJECT / {modal.project.id} · {modal.project.year}</span>
          <h2 id="dialog-title">{modal.project.title}</h2>
          <div className="dialog-tags">{[...new Set([modal.project.type, ...modal.project.categories])].join(' / ')}</div>
          <p>{modal.project.description}</p>
          {modal.project.video && <video className="project-film" controls playsInline preload="none" poster={modal.project.image} src={resolveVideoSource(modal.project)} aria-label={`${modal.project.title}成片`} />}
          {modal.project.filmUrl && <a className="text-link" href={modal.project.filmUrl} target="_blank" rel="noreferrer">{modal.project.filmLabel || '观看完整影片 · 哔哩哔哩'} <Arrow /></a>}
          {modal.project.pdf && <a className="text-link" href={modal.project.pdf} target="_blank" rel="noreferrer">查看 / 下载原始调色测试 PDF <Arrow /></a>}
          {modal.project.pdfs && <div className="pdf-downloads"><h3>原始调色测试资料</h3>{modal.project.pdfs.map(pdf => <a className="text-link" key={pdf.url} href={pdf.url} target="_blank" rel="noreferrer">{pdf.title} <Arrow /></a>)}</div>}
          {!['10', 'yi-wo-wei-ti'].includes(modal.project.id) && modal.project.contributions.length > 0 && <h3>我在项目中的工作</h3>}
          <ul>{modal.project.contributions.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="dialog-note">{modal.project.note}</p>
          <a className="dialog-cta" href={`mailto:${profile.email}?subject=${encodeURIComponent(`项目交流｜${modal.project.title}`)}`}>聊聊这个项目 <Arrow /></a>
        </div>
      </> : <div className="dialog-content social-dialog"><span className="mono">FIND ME ON DOUYIN</span><h2 id="dialog-title">更多日常影像</h2><p>打开抖音，搜索我的账号：</p><strong className="douyin-id">QPhotographer</strong><p className="muted-copy">记录创作，也记录生活。</p></div>}
    </dialog>}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
