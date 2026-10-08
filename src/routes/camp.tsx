import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Check, ChevronDown, Compass, Menu, Moon, Send, Sparkles, Sun, Users, X } from "lucide-react";
import { useMemo, useState } from "react";

import { CAMPERS, getFeaturedCampers, validateBooking } from "@/lib/campers-data";

import "./camp.css";

const title = "Nomad Camp | سفر جاده‌ای با یک خانه متحرک";
const description =
  "رزرو کمپرهای منتخب برای سفرهای طبیعت‌گردی؛ با مسیرهای پیشنهادی، ظرفیت واقعی و درخواست رزرو آنلاین.";

export const Route = createFileRoute("/camp")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CampPage,
});

const initialForm = {
  name: "",
  destination: "پاتاگونیا",
  people: 2,
  startDate: "",
  endDate: "",
  message: "",
};

function CampPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const campers = useMemo(
    () => (showAll ? CAMPERS : getFeaturedCampers(3)),
    [showAll],
  );

  function submitBooking(event) {
    event.preventDefault();
    const result = validateBooking(form);
    setError(result.valid ? "" : result.message);
    setSubmitted(result.valid);
  }

  return (
    <div className={`camp-site ${light ? "camp-light" : ""}`}>
      <header className="camp-nav">
        <Link to="/camp" className="camp-brand" aria-label="Nomad Camp">
          <span className="brand-mark"><Compass size={19} /></span>
          <span>Nomad Camp</span>
        </Link>

        <nav className={`camp-links ${menuOpen ? "open" : ""}`}>
          <a href="#campers" onClick={() => setMenuOpen(false)}>کمپرها</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>داستان ما</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>درخواست سفر</a>
        </nav>

        <div className="camp-nav-actions">
          <button
            className="icon-button"
            aria-label="تغییر حالت نمایش"
            onClick={() => setLight((value) => !value)}
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="menu-button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <a className="camp-button small" href="#booking">شروع سفر</a>
        </div>
      </header>

      <main>
        <section className="camp-hero">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14} /> سفر، بدون برنامه تکراری</div>
            <h1>
              جاده را انتخاب کن.
              <em> خانه با ما.</em>
            </h1>
            <p>
              کمپرهای آماده سفر را انتخاب کن، مسیرت را تعریف کن و چند روز از
              زندگی شهری فاصله بگیر. ما بخش سخت ماجرا را ساده کرده‌ایم.
            </p>
            <div className="hero-actions">
              <a className="camp-button" href="#campers">دیدن کمپرها <ArrowLeft size={18} /></a>
              <a className="text-link" href="#story">چطور کار می‌کند؟</a>
            </div>
            <div className="hero-stats">
              <div><strong>۶</strong><span>کمپر آماده</span></div>
              <div><strong>۲۴/۷</strong><span>پشتیبانی سفر</span></div>
              <div><strong>۴.۹</strong><span>امتیاز مسافران</span></div>
            </div>
          </div>

          <div className="hero-visual"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-glow" /><div className="hero-image-shell tilt-card"><img src={CAMPERS[0].image} alt="کمپر در طبیعت" className="hero-image" /><div className="hero-3d-badge"><span>3D ROUTE</span><strong>360°</strong></div></div><div className="floating-card"><span>مسیر پیشنهادی</span><strong>پاتاگونیا · ۸ روز</strong><small>از €1,192</small></div><div className="image-caption"><span>01 / 06</span><span>Patagonia Route</span></div></div>
        </section>

        <section className="marquee" aria-label="مزایای Nomad Camp">
          <div>آزادی بیشتر ✦ مسیرهای دورتر ✦ خانه‌ای روی چهار چرخ ✦ بدون چمدان‌بندی ✦</div>
        </section>

        <section id="campers" className="section-block">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE FLEET</span>
              <h2>کمپری برای هر مدل ماجراجویی</h2>
            </div>
            <button className="outline-button" onClick={() => setShowAll((value) => !value)}>
              {showAll ? "نمایش منتخب" : "دیدن همه کمپرها"}
              <ArrowLeft size={16} />
            </button>
          </div>

          <div className="camper-grid">
            {campers.map((camper, index) => (
              <article className={`camper-card ${index === 0 ? "featured" : ""}`} key={camper.id}>
                <Link to="/camp/$camperId" params={{ camperId: camper.id }} className="camper-image-link" aria-label={`جزئیات ${camper.name}`}><div className="camper-image-wrap">
                  <img src={camper.image} alt={camper.name} className="camper-image" />
                  <span className="camper-type">{camper.type}</span>
                <span className="view-detail">مشاهده <ArrowLeft size={14} /></span></div></Link><div className="camper-body">
                  <div className="camper-title-row">
                    <div>
                      <span>{camper.region}</span>
                      <h3>{camper.name}</h3>
                    </div>
                    <strong>{camper.price}</strong>
                  </div>
                  <p>{camper.description}</p>
                  <div className="camper-meta">
                    <span><Users size={15} /> تا {camper.capacity} نفر</span>
                    <span>{camper.accent}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section"><div className="experience-copy"><span className="section-kicker">THE NOMAD METHOD</span><h2>کمتر برنامه‌ریزی کن، بیشتر کشف کن.</h2><p>فلسفه Nomad Camp ساده است: وسیله‌ای بردار که مقصدش را خودت تعیین می‌کنی.</p></div><div className="experience-grid"><div><span>01</span><strong>انتخاب کن</strong><p>کمپری متناسب با نفرات و سبک سفرت.</p></div><div><span>02</span><strong>مسیرت را بساز</strong><p>مقصد و تاریخ را بگو، ما پیشنهاد می‌دهیم.</p></div><div><span>03</span><strong>راه بیفت</strong><p>کمپر آماده است، فقط کلید را بردار.</p></div></div></section>

        <section id="booking" className="booking-section">
          <div className="booking-intro">
            <span className="section-kicker">START A TRIP</span>
            <h2>سفر بعدی‌ات را از همین‌جا شروع کن.</h2>
            <p>اطلاعات اولیه را بفرست. درخواستت ذخیره می‌شود تا برای پیشنهاد مسیر و کمپر مناسب با تو تماس بگیریم.</p>
            <div className="booking-note">
              <Check size={18} />
              بدون پرداخت اولیه · پاسخ معمولاً کمتر از یک روز
            </div>
          </div>

          <form className="booking-form" onSubmit={submitBooking}>
            <label>نام و نام خانوادگی<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="مثلاً سارا احمدی" /></label>
            <label>مقصد
              <select value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })}>
                <option>پاتاگونیا</option>
                <option>آلپ</option>
                <option>نروژ</option>
                <option>آلگاروه</option>
                <option>سیِرا نوادا</option>
              </select>
            </label>
            <div className="form-row">
              <label>تعداد نفرات<input type="number" min="1" max="6" value={form.people} onChange={(e) => setForm({ ...form, people: Number(e.target.value) })} /></label>
              <label>تاریخ شروع<input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} /></label>
            </div>
            <label>تاریخ پایان<input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} /></label>
            <label>توضیحات سفر<textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="مثلاً سفر طبیعت‌گردی و کمپ در مسیرهای خلوت..." /></label>
            {error && <p className="form-error" role="alert">{error}</p>}
            {submitted && <p className="form-success" role="status"><Check size={16} /> درخواست آماده ثبت است.</p>}
            <button className="camp-button submit" type="submit">
              <Send size={17} /> ثبت درخواست سفر
            </button>
          </form>
        </section>
      </main>

      <footer className="camp-footer">
        <div><span className="brand-mark"><Compass size={17} /></span><strong>Nomad Camp</strong></div>
        <span>Built for roads less travelled.</span>
      </footer>
    </div>
  );
}
