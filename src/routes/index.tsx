import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/site/footer";
import { Hero3D } from "@/components/site/hero-3d";
import { Navbar } from "@/components/site/navbar";
import { OrderForm } from "@/components/site/order-form";
import { Pricing } from "@/components/site/pricing";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Works } from "@/components/site/works";
import { ScrollVideoBg } from "@/components/site/scroll-video-bg";

const title = "نئوبیلد | طراحی سایت و اپلیکیشن برای فروش بیشتر";
const description =
  "استودیو نئوبیلد: طراحی سایت فروشگاهی، لندینگ فروش، اپلیکیشن موبایل و پنل مدیریت سفارش با تحویل سریع و قیمت شفاف.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative isolate min-h-screen">
      <ScrollVideoBg />
      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <Works />
        <Process />
        <Pricing />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
