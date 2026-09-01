import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Link3D } from "./button-3d";
import { ThemeToggle } from "./theme-toggle";

const services = [
  { title: "طراحی سایت اختصاصی", href: "#services", desc: "لندینگ، شرکتی و فروشگاهی" },
  { title: "اپلیکیشن موبایل", href: "#services", desc: "اندروید، iOS و PWA" },
  { title: "پنل و داشبورد", href: "#services", desc: "سیستم‌های مدیریت سفارش" },
  { title: "سئو و سرعت", href: "#services", desc: "رشد پایدار در گوگل" },
];

const links = [
  { title: "نمونه‌کارها", href: "#works" },
  { title: "مراحل کار", href: "#process" },
  { title: "تعرفه‌ها", href: "#pricing" },
  { title: "سفارش", href: "#order" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center gap-3 rounded-3xl px-4 py-3 transition-all duration-500 ${
          scrolled ? "glass-panel neon-ring" : "glass-panel"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 font-bold">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground [box-shadow:var(--shadow-3d-active)]">
            <Sparkles className="size-4" />
          </span>
          <span className="text-lg">
            نئو<span className="neon-text">بیلد</span>
          </span>
        </a>

        <ul className="ms-4 hidden items-center gap-1 text-sm lg:flex">
          <li className="group relative">
            <button className="flex items-center gap-1 rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:text-foreground">
              خدمات ما
              <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute start-0 top-full w-[22rem] origin-top translate-y-2 scale-95 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              <div className="glass-panel mt-3 grid gap-1 rounded-3xl p-3">
                {services.map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    className="rounded-2xl px-3 py-2.5 transition-colors hover:bg-primary/10"
                  >
                    <span className="block font-medium">{s.title}</span>
                    <span className="block text-xs text-muted-foreground">{s.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="ms-auto flex items-center gap-2">
          <ThemeToggle />
          <Link3D href="#order" size="sm" className="hidden sm:inline-flex">
            ثبت سفارش
          </Link3D>
          <button
            type="button"
            aria-label="منو"
            onClick={() => setOpen((v) => !v)}
            className="glass-panel grid size-11 place-items-center rounded-2xl lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto max-w-6xl overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-panel mt-3 grid gap-1 rounded-3xl p-4">
          {[...services.map((s) => ({ title: s.title, href: s.href })), ...links].map((l) => (
            <a
              key={l.title}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm transition-colors hover:bg-primary/10"
            >
              {l.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
