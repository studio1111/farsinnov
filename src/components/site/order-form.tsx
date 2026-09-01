import { useState } from "react";
import { toast } from "sonner";

import { Button3D } from "./button-3d";

const types = ["سایت فروشگاهی", "لندینگ فروش", "سایت شرکتی", "اپلیکیشن موبایل", "پنل مدیریت"];
const budgets = ["تا ۱۵ میلیون", "۱۵ تا ۴۰ میلیون", "۴۰ تا ۱۰۰ میلیون", "بیشتر از ۱۰۰ میلیون"];

const field =
  "mt-2 w-full rounded-2xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-ring";

export function OrderForm() {
  const [type, setType] = useState(types[0]);
  const [budget, setBudget] = useState(budgets[1]);

  return (
    <section id="order" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="glass-panel neon-ring grid gap-10 rounded-[2rem] p-7 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="text-sm font-semibold text-accent">ثبت سفارش</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            پروژه‌ات را <span className="neon-text">شروع کنیم</span>
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            فرم را پر کنید؛ حداکثر تا ۲۴ ساعت کاری با یک پیشنهاد فنی و قیمت دقیق با شما تماس
            می‌گیریم. مشاوره اولیه کاملاً رایگان است.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>• قرارداد رسمی و پرداخت مرحله‌ای</li>
            <li>• تحویل کد و دسترسی کامل به مشتری</li>
            <li>• گارانتی رفع باگ پس از تحویل</li>
          </ul>
        </div>

        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            if (!data.get("name") || !data.get("phone")) {
              toast.error("نام و شماره تماس را کامل کنید.");
              return;
            }
            toast.success("سفارش شما ثبت شد. به‌زودی تماس می‌گیریم.");
            e.currentTarget.reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              نام و نام خانوادگی
              <input name="name" className={field} placeholder="مثال: سارا محمدی" />
            </label>
            <label className="block text-sm">
              شماره تماس
              <input name="phone" inputMode="tel" className={field} placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
            </label>
          </div>

          <div className="text-sm">
            نوع پروژه
            <div className="mt-2 flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`rounded-full px-3 py-2 text-xs transition-all duration-300 ${
                    type === t
                      ? "bg-primary text-primary-foreground [box-shadow:var(--shadow-3d-active)]"
                      : "glass-panel text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <label className="block text-sm">
            بودجه تقریبی
            <select
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={field}
            >
              {budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            توضیح پروژه
            <textarea
              name="details"
              rows={4}
              className={field}
              placeholder="درباره کسب‌وکار و امکانات مورد نیازتان بنویسید…"
            />
          </label>

          <input type="hidden" name="type" value={type} />
          <Button3D type="submit" size="lg" className="mt-2 w-full">
            ارسال درخواست
          </Button3D>
        </form>
      </div>
    </section>
  );
}
