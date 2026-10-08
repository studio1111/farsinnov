import React, { useEffect, useMemo, useState } from "react";
import { getHeaderMode, getHeaderProgress } from "./headerBehavior.js";
import {
  ArrowLeft, ArrowUpLeft, Check, ChevronDown, Code2, Layers3, Menu,
  Moon, MoveUpRight, Play, Rocket, Send, Smartphone, Sparkles, Sun,
  WandSparkles, X, Zap
} from "lucide-react";

const services = [
  { icon: WandSparkles, title: "وب‌سایت‌های سینمایی", text: "تجربه‌های برندمحور با حرکت، عمق، تایپوگرافی و روایت بصری." },
  { icon: Code2, title: "وب‌اپلیکیشن", text: "محصولات سریع و مقیاس‌پذیر برای فروش، مدیریت، رزرو و SaaS." },
  { icon: Smartphone, title: "اپلیکیشن موبایل", text: "رابط‌های تمیز و کاربردی که از وب تا موبایل یک زبان بصری دارند." },
  { icon: Layers3, title: "فروشگاه آنلاین", text: "کاتالوگ، سبد خرید، پرداخت و پنل مدیریت با معماری آماده رشد." }
];

const projects = [
  { number: "01", title: "فروشگاه نسل جدید", tag: "E-commerce", text: "محصول را قبل از قیمت نشان می‌دهیم؛ تجربه خرید بخشی از خود محصول است." },
  { number: "02", title: "پلتفرم خدمات دیجیتال", tag: "Web App", text: "ورود، داشبورد، درخواست خدمت و پیگیری، در یک جریان بدون اصطکاک." },
  { number: "03", title: "برند سینمایی", tag: "Brand Site", text: "روایت تصویری برای برندهایی که نمی‌خواهند شبیه یک قالب آماده دیده شوند." }
];

const steps = [
  ["01", "کشف", "هدف، مخاطب، محصول و حس برند را به یک نقشه تجربه تبدیل می‌کنیم."],
  ["02", "طراحی", "ساختار، حرکت، کامپوننت‌ها و سیستم بصری قبل از شلوغ‌کاری فنی مشخص می‌شوند."],
  ["03", "ساخت", "رابط را به محصول واقعی تبدیل می‌کنیم؛ سریع، واکنش‌گرا و قابل نگهداری."],
  ["04", "اتصال", "داده، فرم، احراز هویت و در ادامه Supabase به محصول متصل می‌شوند."],
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(null);
  const [sent, setSent] = useState(false);
  const [headerMode, setHeaderMode] = useState("hero");
  const [headerProgress, setHeaderProgress] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const year = useMemo(() => new Date().getFullYear(), []);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <main>
      <nav className={`nav nav-${headerMode}`} style={{ "--header-progress": headerProgress }} aria-label="ناوبری اصلی">
        <a className="brand" href="#top" aria-label="Farsinnov">
          <span className="brand-mark"><Sparkles size={15}/></span>
          <span>FARSINNOV</span>
        </a>
        <div className={"nav-links " + (menu ? "open" : "")}>
          <a href="#services" onClick={() => setMenu(false)}>خدمات</a>
          <a href="#work" onClick={() => setMenu(false)}>نمونه‌کار</a>
          <a href="#process" onClick={() => setMenu(false)}>فرآیند</a>
          <a href="#contact" onClick={() => setMenu(false)}>تماس</a>
        </div>
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="تغییر تم">
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <a className="nav-cta" href="#contact"><span>شروع پروژه</span><ArrowUpLeft size={16}/></a>
          <button className="icon-btn mobile-only" onClick={() => setMenu(v => !v)} aria-label="منو">
            {menu ? <X size={19}/> : <Menu size={19}/>}
          </button>
        </div>
      </nav>

      <section id="top" className={`hero hero-header-${headerMode}`}>
        <div className="hero-noise" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> استودیو طراحی و ساخت دیجیتال</div>
          <h1>وب‌سایت را<br/><em>تجربه</em> می‌کنیم.</h1>
          <p>وب‌سایت، فروشگاه و اپلیکیشن‌هایی می‌سازیم که فقط زیبا نیستند؛ حرکت می‌کنند، می‌فروشند و در ذهن می‌مانند.</p>
          <div className="hero-actions">
            <a className="primary" href="#contact">پروژه‌ات را شروع کن <ArrowLeft size={17}/></a>
            <a className="ghost" href="#work"><Play size={15}/> دیدن مسیر ما</a>
          </div>
          <div className="hero-meta">
            <span><b>01</b> استراتژی</span><span><b>02</b> طراحی</span><span><b>03</b> توسعه</span>
          </div>
        </div>
        <div className="orbital" aria-hidden="true">
          <div className="orbital-ring ring-a" />
          <div className="orbital-ring ring-b" />
          <div className="orbital-ring ring-c" />
          <div className="orb-core"><span>F</span></div>
          <div className="orbit-card card-a"><Zap size={14}/> FAST</div>
          <div className="orbit-card card-b"><Sparkles size={14}/> CINEMATIC</div>
          <div className="orbit-card card-c"><Code2 size={14}/> REAL</div>
        </div>
        <div className="scroll-cue">اسکرول کن <span>↓</span></div>
      </section>

      <section className="marquee"><div>DESIGN • CODE • MOTION • PRODUCT • DESIGN • CODE • MOTION • PRODUCT • </div></section>

      <section id="services" className="section">
        <div className="section-head">
          <div><span className="kicker">01 / SERVICES</span><h2>هر چیزی که برای<br/><span>ساختن لازم است.</span></h2></div>
          <p>از اولین ایده تا محصولی که کاربر واقعاً با آن کار می‌کند، یک تیم واحد کنار پروژه می‌ماند.</p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return <button key={s.title} className={"service-card " + (active === i ? "active" : "")} onClick={() => setActive(active === i ? null : i)}>
              <span className="card-index">0{i + 1}</span><Icon size={24}/><h3>{s.title}</h3><p>{s.text}</p><span className="card-arrow"><MoveUpRight size={17}/></span>
            </button>
          })}
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-head">
          <div><span className="kicker">02 / SELECTED WORK</span><h2>محصولاتی با <span>شخصیت.</span></h2></div>
          <a className="text-link" href="#contact">یک پروژه مشابه بسازیم <ArrowLeft size={16}/></a>
        </div>
        <div className="project-list">
          {projects.map(p => <article className="project" key={p.number}>
            <div className="project-visual"><span>{p.number}</span><div className="visual-grid"/><div className="visual-orb"/></div>
            <div className="project-copy"><span className="kicker">{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p><a href="#contact">مشاهده جزئیات <ArrowLeft size={15}/></a></div>
          </article>)}
        </div>
      </section>

      <section className="statement"><div className="statement-inner"><span className="kicker">THE FARSINNOV METHOD</span><h2>کمتر قالب.<br/><span>بیشتر تجربه.</span></h2><p>الهام از روندهای مدرن ساخت وب، اما با هویت مستقل، کدنویسی واقعی و تمرکز روی نتیجه کسب‌وکار.</p></div></section>

      <section id="process" className="section">
        <div className="section-head"><div><span className="kicker">03 / PROCESS</span><h2>از ایده تا <span>اجرا.</span></h2></div></div>
        <div className="steps">{steps.map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section className="section stack-section">
        <div className="stack-panel">
          <div><span className="kicker">04 / READY TO SCALE</span><h2>امروز رابط.<br/><span>فردا محصول.</span></h2><p>معماری را طوری می‌چینیم که اتصال Supabase، احراز هویت، دیتابیس و پنل مدیریت مرحله بعدی پروژه باشد، نه یک بازنویسی دردناک.</p></div>
          <div className="stack-orbit"><div>React</div><div>Supabase</div><div>Motion</div><div>API</div></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-copy"><span className="kicker">05 / START A PROJECT</span><h2>ایده‌ات را<br/><span>واقعی کنیم.</span></h2><p>چند خط درباره پروژه بنویس. مسیر بعدی را با هم مشخص می‌کنیم.</p></div>
        <form className="contact-form" onSubmit={submit}>
          <label>نام<input required name="name" placeholder="نام شما" /></label>
          <label>راه ارتباطی<input required name="contact" placeholder="ایمیل یا شماره تماس" /></label>
          <label>نوع پروژه<select name="type" defaultValue="website"><option value="website">وب‌سایت</option><option value="shop">فروشگاه</option><option value="app">اپلیکیشن</option><option value="webapp">وب‌اپلیکیشن</option></select></label>
          <label>توضیحات<textarea required name="message" rows="5" placeholder="چه چیزی می‌خواهید بسازیم؟"/></label>
          <button className="submit" type="submit">{sent ? <><Check size={18}/> پیام ثبت شد</> : <>ارسال درخواست <Send size={17}/></>}</button>
        </form>
      </section>

      <footer><div className="brand"><span className="brand-mark"><Sparkles size={15}/></span><span>FARSINNOV</span></div><span>© {year} تمامی حقوق محفوظ است.</span><a href="#top">بازگشت به بالا ↑</a></footer>
    </main>
  );
}

export default App;
