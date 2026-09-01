import { Instagram, Mail, Phone, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/60 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="text-lg">
              نئو<span className="neon-text">بیلد</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            استودیو طراحی و توسعه سایت و اپلیکیشن برای کسب‌وکارهایی که می‌خواهند آنلاین بفروشند.
          </p>
        </div>

        <nav className="text-sm">
          <p className="font-bold">دسترسی سریع</p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <a href="#services" className="hover:text-foreground">
                خدمات
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-foreground">
                نمونه‌کارها
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-foreground">
                تعرفه‌ها
              </a>
            </li>
            <li>
              <a href="#order" className="hover:text-foreground">
                ثبت سفارش
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <p className="font-bold">تماس با ما</p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-accent" /> ۰۲۱-۹۱۰۰۰۰۰۰
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-accent" /> hello@neobuild.ir
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="size-4 text-accent" /> neobuild.studio
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        © ۱۴۰۵ نئوبیلد — تمامی حقوق محفوظ است.
      </p>
    </footer>
  );
}
