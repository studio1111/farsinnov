import React, { useEffect, useMemo, useState } from "react";
import { getHeaderMode, getHeaderProgress } from "./headerBehavior.js";
import { getHeroAssemblyProgress, getHeroCamera, getHeroInteractionStrength, getHeroPointer } from "./heroBehavior.js";
import { getServiceDepth, getServiceStory } from "./serviceBehavior.js";
import { getPortfolioTransform } from "./portfolioBehavior.js";
import { getRevealThreshold, validateProjectForm } from "./siteBehavior.js";
import {
  ArrowLeft, ArrowUpLeft, ArrowRight, Check, ChevronDown, Code2, Database,
  Layers3, Menu, Moon, MoveUpRight, Play, Rocket, Send, Smartphone, Sparkles,
  Sun, WandSparkles, X, Zap
} from "lucide-react";

const services = [
  { phase:"01", icon:Sparkles, title:"استراتژی و کشف", text:"ایده، هدف، مخاطب و مدل محصول را به یک نقشه روشن برای ساخت تبدیل می‌کنیم.", tags:["Discovery","Product Strategy"] },
  { phase:"02", icon:WandSparkles, title:"UI/UX و طراحی", text:"ساختار، هویت بصری، Design System و حرکت را قبل از کدنویسی به یک تجربه منسجم تبدیل می‌کنیم.", tags:["UI/UX","Design System"] },
  { phase:"03", icon:Layers3, title:"وب‌سایت و تجربه دیجیتال", text:"وب‌سایت‌های سریع، سینمایی و واکنش‌گرا برای برندهایی که می‌خواهند متفاوت دیده شوند.", tags:["React","Vite"] },
  { phase:"04", icon:Code2, title:"وب‌اپلیکیشن و SaaS", text:"داشبورد، پنل، فروش، رزرو و محصولات SaaS با معماری قابل توسعه و نگهداری.", tags:["Web App","API"] },
  { phase:"05", icon:Smartphone, title:"اپلیکیشن موبایل", text:"تجربه‌های موبایلی کاربردی و یکپارچه برای Android و iOS، از نمونه اولیه تا انتشار.", tags:["Android","iOS"] },
  { phase:"06", icon:Rocket, title:"اتصال، انتشار و رشد", text:"داده، احراز هویت، فرم‌ها، Performance و مسیر رشد را به محصولی آماده استفاده تبدیل می‌کنیم.", tags:["Supabase","Deploy"] }
];

const projects = [
  { number:"01", title:"فروشگاه نسل جدید", tag:"E-commerce", text:"یک کانسپت فروشگاهی برای تجربه‌ای که محصول، داستان و خرید را در یک جریان واحد قرار می‌دهد.", services:["Strategy","UI/UX","Web"], tech:["React","Vite","Motion"], result:"تجربه خرید سریع و داستان‌محور" },
  { number:"02", title:"پلتفرم خدمات دیجیتال", tag:"Web App", text:"یک کانسپت محصول برای ورود، داشبورد، درخواست خدمت و پیگیری، با تمرکز روی کمترین اصطکاک.", services:["Product","Web App","Data"], tech:["React","API","Supabase"], result:"یک مسیر یکپارچه از درخواست تا پیگیری" },
  { number:"03", title:"برند سینمایی", tag:"Brand Site", text:"یک کانسپت برندینگ دیجیتال که روایت، تایپوگرافی، حرکت و تعامل را به یک صحنه زنده تبدیل می‌کند.", services:["Brand","3D","Creative Dev"], tech:["WebGL","React","Motion"], result:"هویت دیجیتال متمایز و تعاملی" }
];

const steps = [
  ["01","کشف","هدف، مخاطب، محصول و حس برند را به یک نقشه تجربه تبدیل می‌کنیم."],
  ["02","طراحی","ساختار، حرکت، کامپوننت‌ها و سیستم بصری قبل از شلوغ‌کاری فنی مشخص می‌شوند."],
  ["03","ساخت","رابط را به محصول واقعی تبدیل می‌کنیم؛ سریع، واکنش‌گرا و قابل نگهداری."],
  ["04","اتصال","داده، فرم، احراز هویت و در ادامه Supabase به محصول متصل می‌شوند."]
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activePortfolio, setActivePortfolio] = useState(0);
  const [sent, setSent] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const [headerMode, setHeaderMode] = useState("hero");
  const [headerProgress, setHeaderProgress] = useState(0);
  const [heroProgress, setHeroProgress] = useState(0);
  const [heroPointer, setHeroPointer] = useState({x:0,y:0});
  const [heroInteracting, setHeroInteracting] = useState(false);

  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setHeaderMode(getHeaderMode(scrollY));
        setHeaderProgress(getHeaderProgress(scrollY));
        setHeroProgress(getHeroAssemblyProgress(scrollY / Math.max(window.innerHeight, 1)));
      });
    };
    const onPointerMove = (event) => {
      setHeroPointer(getHeroPointer(event.clientX, event.clientY, window.innerWidth, window.innerHeight));
      setHeroInteracting(true);
    };
    const onPointerLeave = () => setHeroInteracting(false);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive:true});
    window.addEventListener("pointermove", onPointerMove, {passive:true});
    window.addEventListener("pointerleave", onPointerLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  const heroCamera = getHeroCamera(heroProgress);
  const heroInteraction = getHeroInteractionStrength(heroProgress, heroInteracting);
  const story = getServiceStory(activeService);

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: getRevealThreshold(0.14), rootMargin: '0px 0px -6% 0px' });
    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const errors = validateProjectForm(values);
    setFormErrors(errors);
    setSent(false);
    if (Object.keys(errors).length > 0) return;
    setSent(true);
    form.reset();
  };

  return (
    <main id="top">
      <nav className={`nav nav-${headerMode}`} style={{"--header-progress":headerProgress}} aria-label="ناوبری اصلی">
        <a className="skip-link" href="#content">رفتن به محتوای اصلی</a>
        <a className="brand" href="#hero" aria-label="Farsinnov">
          <span className="brand-mark"><Sparkles size={15}/></span><span>FARSINNOV</span><span className="brand-orbit"/>
        </a>
        <div id="mobile-navigation" className={"nav-links " + (menu ? "open" : "")}>
          <a href="#services" onClick={()=>setMenu(false)}>خدمات</a>
          <a href="#work" onClick={()=>setMenu(false)}>نمونه‌کار</a>
          <a href="#process" onClick={()=>setMenu(false)}>فرآیند</a>
          <a href="#contact" onClick={()=>setMenu(false)}>تماس</a>
        </div>
        <div className="nav-actions">
          <button className="icon-btn" onClick={()=>setDark(v=>!v)} aria-label="تغییر تم">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <a className="nav-cta" href="#contact"><span>شروع پروژه</span><ArrowUpLeft size={16}/></a>
          <button className="icon-btn mobile-only" onClick={()=>setMenu(v=>!v)} aria-expanded={menu} aria-controls="mobile-navigation" aria-label="منو">{menu ? <X size={19}/> : <Menu size={19}/>}</button>
        </div>
      </nav>

      <div id="content" tabIndex="-1">
      <section id="hero" className={`hero hero-header-${headerMode}`} style={{
        "--hero-progress":heroProgress,"--hero-pointer-x":heroPointer.x,"--hero-pointer-y":heroPointer.y,
        "--hero-camera-x":heroCamera.x,"--hero-camera-y":heroCamera.y,"--hero-camera-z":heroCamera.z,
        "--hero-interaction":heroInteraction
      }}>
        <div className="hero-space" aria-hidden="true">
          <div className="star-field star-field-a"/><div className="star-field star-field-b"/>
          <div className="space-nebula nebula-a"/><div className="space-nebula nebula-b"/><div className="space-grid"/>
          <div className="hero-machine">
            <div className="machine-orbit machine-orbit-a"/><div className="machine-orbit machine-orbit-b"/><div className="machine-orbit machine-orbit-c"/>
            <div className="machine-core"><span>F</span></div>
            <div className="machine-node node-a"/><div className="machine-node node-b"/><div className="machine-node node-c"/><div className="machine-node node-d"/>
            <div className="machine-panel panel-a">FARSINNOV</div><div className="machine-panel panel-b">DIGITAL / 01</div>
            <div className="machine-beam beam-a"/><div className="machine-beam beam-b"/>
          </div>
        </div>
        <div className="hero-noise"/>
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> استودیو طراحی و ساخت دیجیتال</div>
          <h1>آینده دیجیتال<br/><em>را می‌سازیم.</em></h1>
          <p>طراحی و توسعه وب‌سایت، وب‌اپلیکیشن و اپلیکیشن‌های موبایل؛ از یک ایده خام تا محصولی سریع، هوشمند و آماده رشد.</p>
          <div className="hero-actions"><a className="primary" href="#contact">شروع یک پروژه <ArrowLeft size={17}/></a><a className="ghost" href="#work"><Play size={15}/> مشاهده پروژه‌ها</a></div>
          <div className="hero-meta"><span><b>01</b> استراتژی</span><span><b>02</b> طراحی</span><span><b>03</b> توسعه</span></div>
        </div>
        <div className="hero-caption" aria-hidden="true"><span>FARSINNOV / DIGITAL MACHINE</span><b>SCROLL TO TRANSFORM</b></div>
        <div className="scroll-cue">اسکرول کن <span>↓</span></div>
      </section>

      <div className="marquee" aria-hidden="true"><div>IDEA / DESIGN / EXPERIENCE / BUILD / LAUNCH / GROW / IDEA / DESIGN / EXPERIENCE / BUILD / LAUNCH / GROW / </div></div>

      <section id="services" className="section services-section reveal">
        <div className="section-head services-head">
          <div><div className="kicker">SERVICES / 06 MODULES</div><h2>از یک ایده خام<br/><span>تا یک محصول زنده.</span></h2></div>
          <p>Farsinnov یک فهرست خدمات نیست. یک مسیر کامل است که ایده را به تجربه، تجربه را به محصول و محصول را به رشد تبدیل می‌کند.</p>
        </div>

        <div className="service-story">
          <div className="service-story-rail" aria-hidden="true">
            <div className="service-story-line"><span style={{"--story-progress":activeService/5}}/></div>
            <div className="service-story-label"><b>{story.phase}</b><span>{story.title}</span></div>
          </div>
          <div className="service-grid service-grid-story">
            {services.map((service, index) => {
              const Icon = service.icon;
              const depth = getServiceDepth(activeService === index ? 1 : 0);
              return (
                <button
                  type="button"
                  className={"service-card service-card-3d " + (activeService === index ? "active" : "")}
                  key={service.phase}
                  onMouseEnter={()=>setActiveService(index)}
                  onFocus={()=>setActiveService(index)}
                  onClick={()=>setActiveService(index)}
                  style={{"--service-depth":depth,"--service-index":index}}
                >
                  <span className="card-index">{service.phase}</span>
                  <span className="service-icon"><Icon size={25}/></span>
                  <span className="service-card-content"><strong>{service.title}</strong><span>{service.text}</span></span>
                  <span className="service-tags">{service.tags.map(tag=><small key={tag}>{tag}</small>)}</span>
                  <span className="card-arrow"><ArrowUpLeft size={17}/></span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="service-command">
          <div><span className="command-dot"/><span>ACTIVE MODULE</span><b>{story.phase} / {story.title}</b></div>
          <p>هر ماژول مستقل است، اما همه برای ساخت یک محصول واحد به هم متصل می‌شوند.</p>
          <a href="#contact">ساخت مسیر من <ArrowLeft size={15}/></a>
        </div>
      </section>

      <section id="work" className="section work-section portfolio-section reveal">
        <div className="section-head portfolio-head">
          <div><div className="kicker">SELECTED WORK / 03 WORLDS</div><h2>ایده‌ها را<br/><span>به جهان تبدیل می‌کنیم.</span></h2></div>
          <p>سه کانسپت نمونه برای نشان دادن زبان طراحی Farsinnov. در پروژه واقعی، هر جهان با محتوا، برند و داده‌های خود شما ساخته می‌شود.</p>
        </div>
        <div className="portfolio-stage">
          <div className="portfolio-rail" aria-label="انتخاب پروژه">
            {projects.map((project,index)=><button type="button" key={project.number} className={`portfolio-tab ${activePortfolio===index?"active":""}`} onClick={()=>setActivePortfolio(index)} onMouseEnter={()=>setActivePortfolio(index)} aria-pressed={activePortfolio===index}><span>{project.number}</span><b>{project.title}</b><small>{project.tag}</small></button>)}
          </div>
          <div className="portfolio-world">
            {projects.map((project,index)=>{
              const focused=activePortfolio===index;
              const transform=getPortfolioTransform(focused?1:0);
              return <article className={`portfolio-card ${focused?"is-focused":""}`} key={project.number}
                style={{"--portfolio-scale":transform.scale,"--portfolio-y":`${transform.y}px`,"--portfolio-rotate":`${transform.rotate}deg`,"--portfolio-opacity":transform.opacity}}
                onClick={()=>setActivePortfolio(index)} tabIndex={0}
                onKeyDown={event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();setActivePortfolio(index)}}}>
                <div className="portfolio-visual">
                  <div className="portfolio-grid"/><div className="portfolio-halo"/>
                  <div className="portfolio-device"><div className="device-top"><span/><span/><span/></div><div className="device-screen"><i>{project.number}</i><strong>{project.tag}</strong><span>FARSINNOV</span></div></div>
                  <span className="portfolio-corner">{project.number} / WORLD</span>
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-meta"><span>{project.tag}</span><span>CASE STUDY CONCEPT</span></div>
                  <h3>{project.title}</h3><p>{project.text}</p>
                  <div className="portfolio-detail-grid"><div><small>مسیر</small><b>{project.services.join(" / ")}</b></div><div><small>فناوری</small><b>{project.tech.join(" / ")}</b></div><div><small>نتیجه</small><b>{project.result}</b></div></div>
                  <a href="#contact" onClick={event=>event.stopPropagation()}>ساخت نسخه واقعی این جهان <ArrowLeft size={15}/></a>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>
      <section className="statement reveal"><div className="kicker">NOT JUST A WEBSITE</div><h2>هر پیکسل باید<br/><span>دلیلی داشته باشد.</span></h2><p>ما ظاهر را از عملکرد جدا نمی‌کنیم. حرکت، محتوا، کد و داده باید در یک تجربه واحد کار کنند.</p></section>

      <section className="section principles-section reveal">
        <div className="section-head"><div><div className="kicker">WHY FARSINNOV / 04 PRINCIPLES</div><h2>زیبایی کافی نیست.<br/><span>محصول باید کار کند.</span></h2></div><p>چهار اصل ثابت، تصمیم‌های طراحی و فنی ما را از اولین ایده تا نسخه منتشرشده هدایت می‌کنند.</p></div>
        <div className="principles">
          <article><span>01</span><h3>وضوح قبل از شلوغی</h3><p>هر صفحه باید یک مسیر روشن داشته باشد، حتی وقتی ظاهر آن پرجزئیات و سینمایی است.</p></article>
          <article><span>02</span><h3>حرکت با دلیل</h3><p>انیمیشن برای هدایت توجه و ساخت حس محصول است، نه برای پر کردن صفحه.</p></article>
          <article><span>03</span><h3>کد قابل رشد</h3><p>کامپوننت‌ها و ساختار پروژه طوری ساخته می‌شوند که نسخه بعدی از نسخه اول بهتر شود.</p></article>
          <article><span>04</span><h3>تحویل واقعی</h3><p>هدف نهایی یک تصویر زیبا نیست، محصولی است که بتوان آن را استفاده، توسعه و منتشر کرد.</p></article>
        </div>
      </section>

      <section id="process" className="section reveal">
        <div className="section-head"><div><div className="kicker">PROCESS / 04 STEPS</div><h2>مسیر ساخت<br/><span>شفاف و واقعی.</span></h2></div><p>از اولین گفت‌وگو تا انتشار، هر مرحله خروجی مشخص دارد و تصمیم‌ها قابل مشاهده‌اند.</p></div>
        <div className="steps">{steps.map(step=><article className="step" key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
      </section>

      <section className="section reveal">
        <div className="stack-panel"><div><div className="kicker">TECH / READY TO SCALE</div><h2>تکنولوژی باید<br/><span>در خدمت تجربه باشد.</span></h2><p>از React و Vite تا API، دیتابیس و در ادامه Supabase، معماری را متناسب با محصول انتخاب می‌کنیم، نه برعکس.</p></div><div className="stack-orbit" aria-hidden="true"><div>REACT</div><div>VITE</div><div>API</div><div>SUPABASE</div></div></div>
      </section>

      <section className="section faq-section reveal">
        <div className="section-head"><div><div className="kicker">FAQ / BEFORE WE BUILD</div><h2>قبل از شروع،<br/><span>چند جواب روشن.</span></h2></div><p>اگر سوال دیگری دارید، در فرم پروژه بنویسید تا پاسخ دقیق بر اساس نیاز محصول ارائه شود.</p></div>
        <div className="faq-list">
          {[
            ["آیا فقط وب‌سایت طراحی می‌کنید؟","خیر. مسیر Farsinnov از استراتژی و UI/UX تا وب‌سایت، وب‌اپلیکیشن، فروشگاه و اپلیکیشن موبایل را پوشش می‌دهد."],
            ["آیا می‌توانم فقط یک بخش از خدمات را سفارش بدهم؟","بله. هر ماژول مستقل است. می‌توانید فقط طراحی، توسعه یا یک بخش مشخص از مسیر محصول را شروع کنید."],
            ["Backend و دیتابیس هم انجام می‌شود؟","بله. برای پروژه‌هایی که نیاز داشته باشند، API، احراز هویت، دیتابیس و اتصال به Supabase در معماری محصول قرار می‌گیرد."],
            ["چطور پروژه را شروع کنیم؟","فرم پایین صفحه را با چند خط توضیح پر کنید. ابتدا دامنه کار و مسیر مناسب مشخص می‌شود، سپس پیشنهاد اجرایی ارائه خواهد شد."]
          ].map(([question,answer],index)=><article className={"faq-item " + (openFaq===index ? "open" : "")} key={question}>
            <button type="button" aria-expanded={openFaq===index} onClick={()=>setOpenFaq(openFaq===index ? -1 : index)}><span>{"0"+(index+1)}</span><b>{question}</b><ChevronDown size={18}/></button>
            <div className="faq-answer"><p>{answer}</p></div>
          </article>)}
        </div>
      </section>

      <section id="contact" className="contact reveal">
        <div className="contact-copy"><div className="kicker">START A PROJECT</div><h2>ایده‌ات را<br/><span>روشن کنیم.</span></h2><p>چند خط درباره پروژه بنویس. این فرم فعلاً برای ساخت تجربه اولیه است و در مرحله بعد به Backend متصل می‌شود.</p>{sent && <div className="form-success"><Check size={16}/> پیام شما برای نسخه نمایشی ثبت شد.</div>}</div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <label>نام<input required name="name" aria-invalid={Boolean(formErrors.name)} aria-describedby={formErrors.name ? "name-error" : undefined} placeholder="نام شما"/>{formErrors.name && <small id="name-error" className="field-error">{formErrors.name}</small>}</label>
          <label>ایمیل<input required type="email" name="email" aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? "email-error" : undefined} placeholder="you@example.com"/>{formErrors.email && <small id="email-error" className="field-error">{formErrors.email}</small>}</label>
          <label>نوع پروژه<select name="type" aria-invalid={Boolean(formErrors.type)} aria-describedby={formErrors.type ? "type-error" : undefined} defaultValue=""><option value="" disabled>انتخاب کنید</option><option>وب‌سایت</option><option>وب‌اپلیکیشن</option><option>اپلیکیشن موبایل</option><option>فروشگاه</option><option>محصول اختصاصی</option></select>{formErrors.type && <small id="type-error" className="field-error">{formErrors.type}</small>}</label>
          <label>بودجه تقریبی<select name="budget" aria-invalid={Boolean(formErrors.budget)} aria-describedby={formErrors.budget ? "budget-error" : undefined} defaultValue=""><option value="" disabled>انتخاب کنید</option><option>نیاز به مشاوره</option><option>پروژه کوچک</option><option>پروژه متوسط</option><option>پروژه بزرگ</option></select>{formErrors.budget && <small id="budget-error" className="field-error">{formErrors.budget}</small>}</label>
          <label>درباره پروژه<textarea required name="message" aria-invalid={Boolean(formErrors.message)} aria-describedby={formErrors.message ? "message-error" : undefined} rows="6" placeholder="چه چیزی می‌خواهید بسازیم؟"/>{formErrors.message && <small id="message-error" className="field-error">{formErrors.message}</small>}</label>
          <button className="submit" type="submit">ارسال درخواست <Send size={16}/></button>
        </form>
      </section>

      </div>

      <footer><span>© {year} Farsinnov</span><span>طراحی و توسعه محصولات دیجیتال</span><a href="#top">بازگشت به بالا ↑</a></footer>
    </main>
  );
}

export default App;
