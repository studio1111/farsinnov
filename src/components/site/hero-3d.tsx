import { ArrowLeft, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "@/assets/hero-neon.jpg";
import { Link3D } from "./button-3d";

export function Hero3D() {
  const [p, setP] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight || 1;
      setP(Math.min(1, Math.max(0, window.scrollY / h)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPointer({
          x: (e.clientX - r.left) / r.width - 0.5,
          y: (e.clientY - r.top) / r.height - 0.5,
        });
      }}
      className="scene-3d relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div
        className="neon-grid absolute inset-x-[-20%] bottom-[-10%] h-[70%] opacity-60"
        style={{
          transform: `perspective(700px) rotateX(${68 - p * 18}deg) translateY(${p * -120}px)`,
          maskImage: "linear-gradient(to top, black, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent 78%)",
        }}
      />
      <div
        className="animate-glow absolute -top-24 start-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-primary/40"
        style={{ transform: `translate3d(${pointer.x * -60}px, ${p * 140}px, 0)` }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div
          style={{
            transform: `translateY(${p * -60}px) rotateY(${pointer.x * 5}deg)`,
            opacity: 1 - p * 0.9,
          }}
          className="transform-3d"
        >
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-neon-lime" />
            ساخت سایت و اپلیکیشن با تحویل تضمینی
          </span>

          <h1 className="mt-6 text-4xl leading-[1.25] font-black sm:text-5xl lg:text-6xl">
            کسب‌وکارت را با یک <span className="neon-text">تجربه دیجیتال نئونی</span> بفروش
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            ما سایت فروشگاهی، لندینگ فروش، اپلیکیشن موبایل و پنل مدیریت سفارش می‌سازیم؛ سریع، امن و
            آماده جذب مشتری. از ایده تا انتشار، همه چیز را ما انجام می‌دهیم.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link3D href="#order" size="lg">
              ثبت سفارش پروژه
              <ArrowLeft className="size-4" />
            </Link3D>
            <Link3D href="#works" variant="glass" size="lg">
              <Play className="size-4" />
              دیدن نمونه‌کارها
            </Link3D>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {[
              { k: "۱۸۰+", v: "پروژه تحویل شده" },
              { k: "۹ روز", v: "میانگین زمان تحویل" },
              { k: "۹۸٪", v: "رضایت مشتری" },
            ].map((s) => (
              <div key={s.v} className="glass-panel rounded-2xl px-3 py-4 text-center">
                <dt className="text-xl font-bold text-primary">{s.k}</dt>
                <dd className="mt-1 text-[11px] text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="scene-3d relative"
          style={{ transform: `translateY(${p * -140}px) scale(${1 - p * 0.12})` }}
        >
          <div
            className="glass-panel overflow-hidden rounded-[2rem] p-2"
            style={{
              transform: `rotateY(${-10 + pointer.x * 12}deg) rotateX(${8 - pointer.y * 12}deg) translateZ(40px)`,
              transition: "transform 250ms ease-out",
            }}
          >
            <img
              src={heroImage}
              alt="نمایش سه‌بعدی از پنل‌های شیشه‌ای و شبکه نئونی پروژه‌های وب"
              width={1536}
              height={1024}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>

          <div
            className="animate-float glass-panel absolute -bottom-6 -start-4 rounded-2xl px-4 py-3 text-xs"
            style={{ transform: `translate3d(${pointer.x * 30}px, ${pointer.y * 20}px, 80px)` }}
          >
            <p className="font-bold text-neon-cyan">سرعت لود ۹۹/۱۰۰</p>
            <p className="mt-1 text-muted-foreground">بهینه برای موبایل و گوگل</p>
          </div>
          <div
            className="animate-float glass-panel absolute -top-6 -end-2 rounded-2xl px-4 py-3 text-xs"
            style={{
              animationDelay: "1.4s",
              transform: `translate3d(${pointer.x * -26}px, ${pointer.y * -18}px, 60px)`,
            }}
          >
            <p className="font-bold text-neon-magenta">پنل سفارش آنلاین</p>
            <p className="mt-1 text-muted-foreground">مدیریت مشتری و پرداخت</p>
          </div>
        </div>
      </div>
    </section>
  );
}
