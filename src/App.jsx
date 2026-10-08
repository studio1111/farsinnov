import React, { useEffect, useMemo, useState } from "react";
import { getHeaderMode, getHeaderProgress } from "./headerBehavior.js";
import { getHeroAssemblyProgress, getHeroCamera, getHeroInteractionStrength, getHeroPointer } from "./heroBehavior.js";
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
  const [heroProgress, setHeroProgress] = useState(0);
  const [heroPointer, setHeroPointer] = useState({ x: 0, y: 0 });
  const [heroInteracting, setHeroInteracting] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setHeaderMode(getHeaderMode(scrollY));
        setHeaderProgress(getHeaderProgress(scrollY));
        const heroHeight = Math.max(window.innerHeight, 1);
        setHeroProgress(getHeroAssemblyProgress(scrollY / heroHeight));
      });
    };
    const onPointerMove = (event) => {
      const next = getHeroPointer(event.clientX, event.clientY, window.innerWidth, window.innerHeight);
      setHeroPointer(next);
      setHeroInteracting(true);
    };
    const onPointerLeave = () => setHeroInteracting(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
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

      <section
        id="top"
        className={`hero hero-header-${headerMode}`}
        style={{
          "--hero-progress": heroProgress,
          "--hero-pointer-x": heroPointer.x,
          "--hero-pointer-y": heroPointer.y,
          "--hero-camera-x": heroCamera.x,
          "--hero-camera-y": heroCamera.y,
          "--hero-camera-z": heroCamera.z,
          "--hero-interaction": heroInteraction
        }}
      >
        <div className="hero-space" aria-hidden="true">
          <div className="star-field star-field-a" />
          <div className="star-field star-field-b" />
          <div className="space-nebula nebula-a" />
          <div className="space-nebula nebula-b" />
          <div className="space-grid" />
          <div className="hero-machine">
            <div className="machine-orbit machine-orbit-a" />
            <div className="machine-orbit machine-orbit-b" />
            <div className="machine-orbit machine-orbit-c" />
            <div className="machine-core"><span>F</span></div>
            <div className="machine-node node-a" />
            <div className="machine-node node-b" />
            <div className="machine-node node-c" />
            <div className="machine-node node-d" />
            <div className="machine-panel panel-a">FARSINNOV</div>
            <div className="machine-panel panel-b">DIGITAL / 01</div>
            <div className="machine-beam beam-a" />
            <div className="machine-beam beam-b" />
          </div>
        </div>
        <div className="hero-noise" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> استودیو طراحی و ساخت دیجیتال</div>
          <h1>آینده دیجیتال<br/><em>را می‌سازیم.</em></h1>
          <p>طراحی و توسعه وب‌سایت، وب‌اپلیکیشن و اپلیکیشن‌های موبایل؛ از یک ایده خام تا محصولی سریع، هوشمند و آماده رشد.</p>
          <div className="hero-actions">
            <a className="primary" href="#contact">شروع یک پروژه <ArrowLeft size={17}/></a>
            <a className="ghost" href="#work"><Play size={15}/> مشاهده پروژه‌ها</a>
          </div>
          <div className="hero-meta"><span><b>01</b> استراتژی</span><span><b>02</b> طراحی</span><span><b>03</b> توسعه</span></div>
        </div>
        <div className="hero-caption" aria-hidden="true"><span>FARSINNOV / DIGITAL MACHINE</span><b>SCROLL TO TRANSFORM</b></div>
        <div className="scroll-cue">اسکرول کن <span>↓</span></div>
      </section>
