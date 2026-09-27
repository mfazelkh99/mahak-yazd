"use client";

import { useState } from "react";

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    category: "",
    city: "",
  });

  // تایپ HTMLSelectElement حذف شد چون دیگه فقط از اینپوت متنی استفاده می‌کنیم
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("درخواست شما با موفقیت ثبت شد. همکاران ما به زودی با شما تماس خواهند گرفت.");
  };

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
                    name="category"
                    value={formData.category}
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

              <button
                type="submit"
                className="w-full bg-[#FBBF24] hover:bg-[#F59E0B] text-gray-900 text-lg font-bold rounded-xl py-3.5 mt-4 transition-all shadow-md hover:shadow-lg"
              >
                ثبت
              </button>
            </form>
          </div>

          {/* بخش ویدیو با استفاده از Iframe آپارات */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-gray-100 aspect-video order-1 lg:order-2 border border-gray-100">
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/lcl585h/vt/frame"
              title="ویدیوی معرفی نرم افزار محک"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}