"use client";

import { useState, useEffect } from "react";

export default function DemoRequest() {
  // ۱. تعریف استیت‌ها برای ذخیره اطلاعات فرم
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    job: "",
    city: "",
  });

  // ۲. تعریف استیت‌ها برای مدیریت وضعیت ارسال و پیام‌ها
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: "success" | "error"

  // استیت جدید برای ذخیره وضعیت اتصال اینترنت
  const [isOnline, setIsOnline] = useState(true);

  // مدیریت تغییرات ورودی‌ها
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ۳. تابع اصلی برای ارسال اطلاعات به سمت بک‌اند
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // پیام موفقیت و خالی کردن فرم
        setMessage({ text: "اطلاعات شما با موفقیت ثبت شد. همکاران ما به زودی با شما تماس می‌گیرند.", type: "success" });
        setFormData({ fullName: "", phone: "", job: "", city: "" });
      } else {
        // پیام خطای برگشتی از سمت بک‌اند
        setMessage({ text: data.error || "خطایی در ثبت اطلاعات رخ داد.", type: "error" });
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setMessage({ text: "خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // بررسی وضعیت اینترنت در لحظه لود کامپوننت و هنگام تغییر وضعیت
  useEffect(() => {
    // مقداردهی اولیه بر اساس وضعیت فعلی مرورگر
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* بخش فرم */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 z-10 order-2 lg:order-1">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#003B5C] mb-3">
                دریافت دمو نرم افزار حسابداری
              </h2>
              <p className="text-gray-500 text-sm lg:text-base">
                برای دریافت دمو و مشاوره رایگان فرم زیر را تکمیل کنید.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* نام و نام خانوادگی */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="نام و نام خانوادگی"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('لطفاً نام و نام خانوادگی خود را وارد کنید')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 text-right"
                  />
                </div>

                {/* شماره تماس */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="شماره تماس"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('لطفاً شماره تماس خود را وارد کنید')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    dir="rtl"
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 text-right"
                  />
                </div>

                {/* نام صنف */}
                <div>
                  <input
                    type="text"
                    name="job"
                    value={formData.job}
                    onChange={handleChange}
                    placeholder="نام صنف (مثلاً: پوشاک، رستوران...)"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('لطفاً نام صنف خود را وارد کنید')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 text-right"
                  />
                </div>

                {/* نام شهر */}
                <div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="نام شهر"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('لطفاً نام شهر خود را وارد کنید')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 text-right"
                  />
                </div>

              </div>

              {/* نمایش پیام‌های موفقیت یا خطا به کاربر */}
              {message.text && (
                <div className={`p-4 rounded-xl text-sm font-bold text-center ${message.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                  {message.text}
                </div>
              )}

              {/* دکمه ثبت (با قابلیت نمایش وضعیت لودینگ) */}

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#FBBF24] hover:bg-[#F59E0B] text-gray-900 text-lg font-bold rounded-xl py-3.5 mt-4 transition-all shadow-md hover:shadow-lg ${loading
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-[#FBBF24] hover:bg-[#F59E0B] shadow-md hover:shadow-lg"
                  }`}
              >
                {loading ? "در حال ثبت اطلاعات..." : "ثبت"}
              </button>
            </form>
          </div>

          {/* بخش ویدیو با مدیریت قطعی اینترنت */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-gray-100 aspect-video order-1 lg:order-2 border border-gray-100 flex items-center justify-center">
            {isOnline ? (
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/lcl585h/vt/frame"
                title="ویدیوی معرفی نرم افزار محک"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                {/* آیکون وای‌فای قطع شده */}
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l18 18M8.5 8.5a5.5 5.5 0 017.07 0M5 12a10 10 0 0114 0m-4 4a2 2 0 11-4 0" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">عدم اتصال به اینترنت</h3>
                <p className="text-gray-500 text-sm">
                  برای مشاهده ویدیوی معرفی نرم‌افزار، لطفاً اتصال اینترنت خود را بررسی کنید.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}