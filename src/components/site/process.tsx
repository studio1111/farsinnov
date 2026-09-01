const steps = [
  { n: "۰۱", title: "مشاوره و تحلیل", desc: "نیاز کسب‌وکار، مخاطب و رقبا را بررسی می‌کنیم." },
  { n: "۰۲", title: "طرح و پیشنهاد قیمت", desc: "زمان‌بندی، امکانات و هزینه دقیق مشخص می‌شود." },
  { n: "۰۳", title: "طراحی و توسعه", desc: "UI اختصاصی، کدنویسی تمیز و تست روی همه دستگاه‌ها." },
  { n: "۰۴", title: "انتشار و پشتیبانی", desc: "راه‌اندازی روی سرور، آموزش تیم شما و پشتیبانی." },
];

export function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-accent">مراحل کار</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          مسیر شفاف از ایده تا <span className="neon-text">تحویل نهایی</span>
        </h2>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="glass-panel relative rounded-3xl p-6">
            <span className="text-3xl font-black text-primary/40">{s.n}</span>
            <h3 className="mt-3 font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
