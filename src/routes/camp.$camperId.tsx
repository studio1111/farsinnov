import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Users } from "lucide-react";
import { getCamperById } from "@/lib/campers-data";
import "./camp.css";

export const Route = createFileRoute("/camp/$camperId")({
  head: ({ params }) => {
    const camper = getCamperById(params.camperId);
    return { meta: [{ title: camper ? `${camper.name} | Nomad Camp` : "کمپر | Nomad Camp" }] };
  },
  component: CamperDetailPage,
});

function CamperDetailPage() {
  const { camperId } = Route.useParams();
  const camper = getCamperById(camperId);

  if (!camper) {
    return (
      <main className="camp-site detail-missing">
        <h1>کمپر پیدا نشد</h1>
        <Link to="/camp" className="camp-button"><ArrowRight size={17} /> بازگشت به ناوگان</Link>
      </main>
    );
  }

  return (
    <main className="camp-site camper-detail">
      <header className="camp-nav">
        <Link to="/camp" className="camp-brand"><span className="brand-mark"><Compass size={19} /></span><span>Nomad Camp</span></Link>
        <Link to="/camp" className="text-link">بازگشت به ناوگان <ArrowRight size={16} /></Link>
      </header>
      <section className="detail-hero">
        <div className="detail-media tilt-card">
          <img src={camper.image} alt={camper.name} />
          <div className="detail-floating"><span>{camper.type}</span><strong>{camper.price}</strong></div>
        </div>
        <div className="detail-copy">
          <span className="section-kicker">{camper.region}</span>
          <h1>{camper.name}</h1>
          <p>{camper.description}</p>
          <div className="detail-facts"><span><Users size={18} /> تا {camper.capacity} نفر</span><span><Check size={18} /> آماده سفر</span><span><Check size={18} /> پشتیبانی ۲۴/۷</span></div>
          <Link to="/camp" hash="booking" className="camp-button">درخواست این کمپر <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
