import {
  Boxes,
  Gauge,
  LayoutDashboard,
  Smartphone,
  ShoppingCart,
  MonitorSmartphone,
} from "lucide-react";

const items = [
  {
    icon: ShoppingCart,
    title: "فروشگاه اینترنتی",
    desc: "سبد خرید، درگاه پرداخت، مدیریت انبار و ارسال؛ آماده فروش از روز اول.",
  },
  {
    icon: MonitorSmartphone,
    title: "سایت شرکتی و لندینگ",
    desc: "طراحی اختصاصی با هدف جذب سرنخ و افزایش نرخ تبدیل بازدیدکننده به مشتری.",
  },
  {
    icon: Smartphone,
    title: "اپلیکیشن موبایل",
    desc: "اپ اندروید و iOS یا PWA سریع، با نوتیفیکیشن و تجربه کاربری روان.",
  },
  {
    icon: LayoutDashboard,
    title: "پنل مدیریت سفارش",
    desc: "داشبورد اختصاصی برای ثبت، پیگیری و گزارش‌گیری سفارش‌های کسب‌وکار شما.",
  },
  {
    icon: Gauge,
    title: "سئو و بهینه‌سازی",
    desc: "ساختار فنی سالم، سرعت بالا و محتوای هدفمند برای رشد در نتایج گوگل.",
  },
  {
    icon: Boxes,
    title: "پشتیبانی و توسعه",
    desc: "به‌روزرسانی، امنیت، بکاپ و افزودن قابلیت‌های جدید به‌صورت ماهانه.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-accent">خدمات ما</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          هر چیزی که برای <span className="neon-text">فروش آنلاین</span> لازم دارید
        </h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          یک تیم، همه تخصص‌ها: طراحی، توسعه، سئو و پشتیبانی. پروژه شما با قرارداد شفاف و زمان‌بندی
          مشخص اجرا می‌شود.
        </p>
      </div>

      <div className="scene-3d mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="tilt-card glass-panel rounded-3xl p-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
