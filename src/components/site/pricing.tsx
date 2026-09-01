import { Check } from "lucide-react";

import { Link3D } from "./button-3d";

const plans = [
  {
    name: "لندینگ فروش",
    price: "از ۱۲ میلیون",
    desc: "مناسب معرفی یک محصول یا خدمت",
    features: ["تک‌صفحه اختصاصی", "فرم دریافت سفارش", "بهینه موبایل", "تحویل ۷ روزه"],
    featured: false,
  },
  {
    name: "سایت فروشگاهی",
    price: "از ۳۵ میلیون",
    desc: "پرفروش‌ترین انتخاب کسب‌وکارها",
    features: [
      "محصولات و دسته‌بندی نامحدود",
      "درگاه پرداخت و ارسال",
      "پنل مدیریت سفارش",
      "سئوی فنی کامل",
      "۳ ماه پشتیبانی رایگان",
    ],
    featured: true,
  },
  {
    name: "اپلیکیشن اختصاصی",
    price: "استعلام قیمت",
    desc: "اپ موبایل یا سیستم سازمانی",
    features: ["اندروید و iOS", "پنل مدیریت و API", "نوتیفیکیشن", "قرارداد و SLA"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-accent">تعرفه‌ها</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          قیمت‌های <span className="neon-text">شفاف</span> و بدون هزینه پنهان
        </h2>
      </div>

      <div className="scene-3d mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`glass-panel relative rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2 ${
              p.featured ? "neon-ring lg:-translate-y-4" : ""
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 start-7 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">
                پیشنهاد ما
              </span>
            )}
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
            <p className="mt-5 text-2xl font-black text-primary">
              {p.price}
              <span className="ms-1 text-xs font-normal text-muted-foreground">تومان</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0 text-neon-lime" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Link3D
              href="#order"
              variant={p.featured ? "neon" : "glass"}
              className="mt-7 w-full"
              size="md"
            >
              درخواست این پلن
            </Link3D>
          </article>
        ))}
      </div>
    </section>
  );
}
