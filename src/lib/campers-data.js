export const CAMPERS = [
  {
    id: "andes",
    name: "آندِس",
    region: "پاتاگونیا",
    type: "ون کمپینگ",
    capacity: 4,
    price: "€149 / شب",
    accent: "یخی",
    image:
      "https://images.unsplash.com/photo-1523987355523-c7b5b84b4e0c?auto=format&fit=crop&w=1400&q=85",
    description: "خانه‌ای متحرک برای جاده‌های طولانی، شب‌های سرد و منظره‌های بی‌انتها.",
  },
  {
    id: "atlas",
    name: "اطلس",
    region: "آلپ",
    type: "کمپر آفرود",
    capacity: 3,
    price: "€129 / شب",
    accent: "مس",
    image:
      "https://images.unsplash.com/photo-1544829728-e5cb9c73bb88?auto=format&fit=crop&w=1400&q=85",
    description: "کمپری جمع‌وجور و مقاوم برای مسیرهای کوهستانی و کمپ‌های دور از شهر.",
  },
  {
    id: "selene",
    name: "سلین",
    region: "جنگل‌های شمال",
    type: "مینی‌کمپر",
    capacity: 2,
    price: "€99 / شب",
    accent: "مه",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1400&q=85",
    description: "کمپر مینیمال برای دو نفر، با آشپزخانه کوچک و فضای خواب دنج.",
  },
  {
    id: "terra",
    name: "تِرا",
    region: "آلگاروه",
    type: "ون ساحلی",
    capacity: 4,
    price: "€139 / شب",
    accent: "شن",
    image:
      "https://images.unsplash.com/photo-1478827536114-da961b7c3a35?auto=format&fit=crop&w=1400&q=85",
    description: "برای طلوع‌های ساحلی، تخته موج‌سواری و زندگی آرام کنار اقیانوس.",
  },
  {
    id: "nord",
    name: "نورد",
    region: "نروژ",
    type: "کمپر چهار فصل",
    capacity: 4,
    price: "€169 / شب",
    accent: "قطبی",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85",
    description: "عایق‌شده برای سفرهای زمستانی و تماشای شفق قطبی در جاده‌های شمال.",
  },
  {
    id: "sierra",
    name: "سیِرا",
    region: "سیِرا نوادا",
    type: "کمپر ماجراجویی",
    capacity: 5,
    price: "€159 / شب",
    accent: "کاج",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1400&q=85",
    description: "فضای بیشتر برای گروه‌های کوچک و سفرهای چندروزه در دل طبیعت.",
  },
];

export function getFeaturedCampers(limit = 3) {
  return CAMPERS.slice(0, Math.max(0, limit));
}

export function validateBooking(form) {
  if (
    !form.name.trim() ||
    !form.destination.trim() ||
    !Number(form.people) ||
    !form.startDate
  ) {
    return {
      valid: false,
      message: "نام، مقصد، تعداد نفرات و تاریخ شروع الزامی است.",
    };
  }

  return { valid: true, message: "درخواست آماده ثبت است." };
}
