import workApp from "@/assets/work-app.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workShop from "@/assets/work-shop.jpg";

const works = [
  {
    img: workShop,
    title: "فروشگاه لوازم دیجیتال",
    tag: "فروشگاهی",
    result: "رشد ۳ برابری فروش در ۴ ماه",
    alt: "نمای سه‌بعدی داشبورد فروشگاه اینترنتی روی لپ‌تاپ با نور نئون",
  },
  {
    img: workApp,
    title: "اپلیکیشن مدیریت مالی",
    tag: "اپلیکیشن",
    result: "بیش از ۴۰ هزار نصب فعال",
    alt: "صفحه‌های اپلیکیشن موبایل شناور با نور نئون بنفش",
  },
  {
    img: workCorporate,
    title: "سایت شرکت تجهیزات پزشکی",
    tag: "شرکتی",
    result: "دو برابر شدن درخواست استعلام",
    alt: "نمایش سایت شرکتی روی مانیتور با درخشش نئون فیروزه‌ای",
  },
];

export function Works() {
  return (
    <section id="works" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-accent">نمونه‌کارها</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              پروژه‌هایی که <span className="neon-text">نتیجه</span> دادند
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            هر پروژه با هدف فروش بیشتر طراحی می‌شود، نه فقط زیبایی.
          </p>
        </div>

        <div className="scene-3d mt-12 grid gap-6 lg:grid-cols-3">
          {works.map((w) => (
            <article
              key={w.title}
              className="tilt-card glass-panel group overflow-hidden rounded-3xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={w.img}
                  alt={w.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="glass-panel absolute top-3 end-3 rounded-full px-3 py-1 text-[11px]">
                  {w.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-neon-cyan">{w.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
