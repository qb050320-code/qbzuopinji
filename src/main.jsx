import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, projects, experiences } from './data';
import ProjectGallery from './ProjectGallery';
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
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
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
        <div className="hero-media"><img className="hero-photo" src="/media/hero-colorist.webp" alt="齐兵在工作室操作调色控制台，通过双屏进行画面调色" fetchPriority="high" /><div className="hero-shade" /></div>
        <div className="hero-content wrap">
          <div className="hero-eyebrow"><span className="status-dot" /> INDEPENDENT VISUAL CREATOR <span className="hero-year">PORTFOLIO / 2026</span></div>
          <h1>让影像<span className="hero-line">有<span className="outline-word">情绪</span><i className="title-period">.</i></span></h1>
          <div className="hero-bottom-copy"><p>从片场到银幕，以色彩塑造情绪，<br />用镜头与节奏，让每个故事被看见。</p><a className="round-link" href="#work"><span>探索我的作品<small>EXPLORE SELECTED WORK</small></span><span className="circle-arrow"><Arrow /></span></a></div>
        </div>
        <div className="hero-footer wrap"><div className="hero-disciplines">COLORIST <i>/</i> EDITOR <i>/</i> CINEMATOGRAPHER <i>/</i> DIT</div><div className="hero-photo-credit"><span>INSIDE THE COLOR ROOM</span><span>齐兵 · 调色工作现场</span></div><a href="#about" className="scroll-link">SCROLL TO DISCOVER <span>↓</span></a></div>
      </section>

      <div className="discipline-strip" aria-hidden="true"><div className="wrap"><span>视觉调色</span><i>✳</i><span>叙事剪辑</span><i>✳</i><span>影像创作</span><i>✳</i><span>片场数据管理</span><i>✳</i><span>FROM VISION TO EMOTION</span></div></div>

      <section id="about" className="about section-space wrap">
        <SectionLabel number="01">ABOUT ME / 关于我</SectionLabel>
        <div className="about-main">
          <div className="portrait-block reveal"><img src="/media/portrait.webp" alt="摄影工作氛围示意，后续替换为齐兵个人照片" loading="lazy" /><div className="portrait-caption"><span>BEHIND THE IMAGE</span><span>工作氛围示意 / 待替换个人照片</span></div><span className="portrait-coordinate">REC <i /> 00:00:24:08</span></div>
          <div className="about-copy reveal"><div className="availability"><span className="status-dot" /> 开放项目合作 / 实习机会</div><h2>你好，我是<span>齐兵<em>。</em></span></h2><div className="about-roles">调色师 / 剪辑师 / 摄影师 / DIT</div><p>我相信，好的影像不止于好看，<br className="desktop-break" />更在于它让人感受到什么。</p><p className="muted-copy">就读于河北传媒学院影视摄影与制作专业，曾在 HOMEBOY 调色职业班系统学习，拥有个人调色工作室与两年以上调色经验。从院线电影、纪录片到网络短剧，我在片场与后期之间，寻找技术与表达的平衡。</p><div className="about-contact"><a href={`mailto:${profile.email}`}>{profile.email}<Arrow /></a><a href={`tel:${profile.phone}`}>+86 137 1683 1736<Arrow /></a></div><a className="text-link" href="/resume/qi-bing-resume.pdf" download>下载个人简历 <Arrow /></a></div>
        </div>
        <div className="stats reveal"><div><strong>2<span>+</span></strong><p>年调色经验<small>YEARS IN COLOR</small></p></div><div><strong>4</strong><p>个影像创作维度<small>CONNECTED DISCIPLINES</small></p></div><div><strong>30<span>万+</span></strong><p>个人视频号累计播放<small>PERSONAL VIDEO VIEWS</small></p></div><div><strong>72<span>H</span></strong><p>限时创作大赛一等奖<small>CHINA CREATIVE COMPETITION</small></p></div></div>
        <div className="experience-block reveal"><div className="experience-title"><span className="mono">THE JOURNEY</span><h3>每一段经历，<br />都成为新的视角。</h3></div><div className="timeline">{experiences.map(item => <div className="timeline-row" key={item.date}><span className="timeline-date mono">{item.date}</span><div><h4>{item.name}</h4><span>{item.role}</span><p>{item.description}</p></div></div>)}</div></div>
      </section>

      <section id="work" className="work section-space">
        <div className="wrap"><SectionLabel number="02">SELECTED WORK / 精选项目</SectionLabel><div className="section-heading reveal"><h2>不同故事，<br /><span className="serif">同样专注。</span></h2><div className="section-description"><span className="mono">A SELECTION OF MY JOURNEY</span><p>从真实生活到银幕想象，<br />每一帧，都有它的表达。</p></div></div>
          <div className="work-toolbar"><div className="filters" role="group" aria-label="按专业筛选作品">{['全部', '调色', '剪辑', '摄影', 'DIT'].map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? 'filter active' : 'filter'} aria-pressed={activeFilter === filter}>{filter}{filter === '全部' && <sup>06</sup>}</button>)}</div><span className="work-count mono">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span></div>
          <div className="project-grid" aria-live="polite">{visibleProjects.map(project => <button className={`project-card${project.hasOriginalImages ? ' project-original' : ''}`} key={project.id} onClick={() => setModal({ type: 'project', project })} aria-label={`查看项目《${project.title}》详情`}>
            <div className="project-image">
              <img src={project.image} alt={project.imageAlt || `${project.title}的氛围示意封面，非项目原片`} loading="lazy" />
              <div className="project-image-overlay" />
              <span className="project-number mono">P / {project.id}</span>
              <span className="project-visual-label">{project.hasOriginalImages ? 'COLOR GRADING / 调色影像' : 'VISUAL STUDY / 示意封面'}</span>
              <span className="project-open"><Arrow /></span>
              <div className="project-image-title"><span>{project.english}</span></div>
            </div>
            <div className="project-info"><div><span className="project-type">{project.type} <i>/</i> {project.year}</span><h3>{project.title}</h3></div><span className="project-role">{project.categories.join(' / ')}</span></div>
          </button>)}</div>
          <div className="work-note"><span className="status-dot" /><p>《人圈》已收录 24 张调色静帧与 4 张调色画面总览；其余项目封面为氛围示意素材。</p><a href={profile.channel} target="_blank" rel="noreferrer">前往视频号 <Arrow /></a></div>
        </div>
      </section>

      <section id="expertise" className="expertise section-space wrap"><SectionLabel number="03">MY EXPERTISE / 专业能力</SectionLabel><div className="section-heading reveal"><h2>感性创作，<br /><span className="serif">理性把控。</span></h2><div className="section-description"><span className="mono">CRAFT MEETS PRECISION</span><p>理解创作意图，也解决技术问题。<br />让灵感，可靠地落在每一帧。</p></div></div>
        <div className="expertise-grid"><article className="expertise-card color-card reveal"><div className="skill-top"><span className="skill-index mono">01 / COLOR GRADING</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="17" r="12" stroke="currentColor" /><circle cx="17" cy="29" r="12" stroke="currentColor" /><circle cx="31" cy="29" r="12" stroke="currentColor" /></svg></div><h3>让色彩服务故事</h3><p>从基础矫正、镜头匹配到风格塑造，<br />在准确的肤色与统一的影调中，找到情绪。</p><div className="color-comparison"><img src="/media/project-01.webp" alt="调色效果示意" loading="lazy" /><div className="comparison-before" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}><img src="/media/project-01.webp" alt="" loading="lazy" /></div><div className="comparison-line" style={{ left: `${comparison}%` }}><span>↔</span></div><span className="comparison-label before">BEFORE</span><span className="comparison-label after">AFTER</span><input type="range" min="0" max="100" value={comparison} onChange={e => setComparison(Number(e.target.value))} aria-label="拖动对比色彩风格示意" /></div><div className="skill-tags"><span>DaVinci Resolve</span><span>色彩风格示意 · 拖动对比</span></div></article>
          <article className="expertise-card reveal"><div className="skill-top"><span className="skill-index mono">02 / EDITING</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 12h26v10H6zM16 27h26v10H16zM24 6v36" stroke="currentColor" /></svg></div><h3>在节奏中，建立叙事</h3><p>梳理访谈与素材，搭建清晰的故事结构。<br />让镜头之间的连接，产生新的意义。</p><div className="edit-wave" aria-hidden="true">{Array.from({ length: 35 }, (_, i) => <i key={i} style={{ height: `${10 + ((i * 37 + 13) % 55)}px` }} />)}</div><div className="skill-tags"><span>Premiere Pro</span><span>纪录片 / 剧情短片</span></div></article>
          <article className="expertise-card reveal"><div className="skill-top"><span className="skill-index mono">03 / CINEMATOGRAPHY</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="5" y="13" width="38" height="28" rx="3" stroke="currentColor" /><circle cx="24" cy="27" r="9" stroke="currentColor" /><path d="m13 13 4-7h14l4 7" stroke="currentColor" /></svg></div><h3>观察真实，捕捉瞬间</h3><p>从前期策划到现场拍摄，选择合适的镜头、<br />光线与轻量化方案，保留现场的生命力。</p><div className="skill-bottom-graphic lens-graphic" aria-hidden="true"><span /><span /><span /><i /></div><div className="skill-tags"><span>影像创作</span><span>无人机航拍</span></div></article>
          <article className="expertise-card reveal"><div className="skill-top"><span className="skill-index mono">04 / DIGITAL IMAGING</span><svg className="skill-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="6" y="7" width="36" height="12" rx="2" stroke="currentColor" /><rect x="6" y="27" width="36" height="12" rx="2" stroke="currentColor" /><path d="M12 13h18M12 33h18M35 11v4M35 31v4M24 19v8" stroke="currentColor" /></svg></div><h3>从片场到后期，无缝衔接</h3><p>素材备份、校验、转码与交接，兼顾流程效率<br />与素材安全，让创作环节顺畅衔接。</p><div className="data-flow" aria-hidden="true"><span>CAPTURE</span><i>→</i><span>VERIFY</span><i>→</i><span>CREATE</span></div><div className="skill-tags"><span>素材管理</span><span>套底 / 时码问题排查</span></div></article>
        </div>
      </section>

      <section id="contact" className="contact"><div className="contact-glow" /><div className="wrap contact-inner"><SectionLabel number="04">LET’S CONNECT / 联系我</SectionLabel><div className="contact-main reveal"><div className="availability"><span className="status-dot" /> 期待下一次创作</div><h2>你的下一个故事，<br />我们<span className="serif">一起</span>完成<span className="green">。</span></h2><a className="contact-email" href={`mailto:${profile.email}`}><span>{profile.email}</span><Arrow /></a><div className="contact-options"><button onClick={copyEmail}>复制邮箱 <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" /><path d="M15 8V4H4v11h4" stroke="currentColor" /></svg></button><a href={`tel:${profile.phone}`}>+86 137 1683 1736 <Arrow /></a><a href={profile.channel} target="_blank" rel="noreferrer">微信视频号 <Arrow /></a><button onClick={() => setModal({ type: 'social' })}>抖音 <Arrow /></button></div></div><footer className="footer"><a className="footer-brand" href="#home"><Mark /><span>QI BING / 齐兵</span></a><span>© {new Date().getFullYear()} QI BING. 用心对待每一帧。</span><a href="#home">BACK TO TOP <span>↑</span></a></footer></div></section>
    </main>

    <div className={`toast ${toast ? 'toast-visible' : ''}`} role="status">{toast}</div>
    {modal && <dialog ref={dialogRef} className={`project-dialog${modal.project?.gallery?.length ? ' has-gallery' : ''}`} onCancel={e => { e.preventDefault(); setModal(null); }} onClick={e => { if (e.target === e.currentTarget) setModal(null); }} aria-labelledby="dialog-title">
      <div className="dialog-toolbar"><button className="dialog-close" aria-label="关闭弹窗" onClick={() => setModal(null)}>关闭 <span>×</span></button></div>
      {modal.type === 'project' ? <>
        {modal.project.gallery?.length ? <ProjectGallery key={modal.project.id} images={modal.project.gallery} title={modal.project.title} /> : <img className="dialog-image" src={modal.project.image} alt="项目氛围示意封面，非项目原片" />}
        <div className="dialog-content">
          <span className="mono dialog-eyebrow">PROJECT / {modal.project.id} · {modal.project.year}</span>
          <h2 id="dialog-title">{modal.project.title}</h2>
          <div className="dialog-tags">{modal.project.type} / {modal.project.categories.join(' · ')}</div>
          <p>{modal.project.description}</p>
          <h3>我在项目中的工作</h3>
          <ul>{modal.project.contributions.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="dialog-note">{modal.project.note}</p>
          <div className="material-note">{modal.project.hasOriginalImages ? '本项目展示 24 张真实调色静帧与 4 张调色画面总览，保留原始画幅与色彩。' : '封面为氛围示意素材，非项目原片。项目影像待补充，可联系我了解更多。'}</div>
          <a className="dialog-cta" href={`mailto:${profile.email}?subject=${encodeURIComponent(`项目交流｜${modal.project.title}`)}`}>聊聊这个项目 <Arrow /></a>
        </div>
      </> : <div className="dialog-content social-dialog"><span className="mono">FIND ME ON DOUYIN</span><h2 id="dialog-title">更多日常影像</h2><p>打开抖音，搜索我的账号：</p><strong className="douyin-id">QPhotographer</strong><p className="muted-copy">记录创作，也记录生活。</p></div>}
    </dialog>}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
