"use client";

import Image from "next/image";

export default function Brands() {
  const brands = [
    { id: 1, name: "دیجی‌کالا", logo: "/brands/digikala.png" },
    { id: 2, name: "اسنپ", logo: "/brands/snapp.png" },
    { id: 3, name: "ایرانسل", logo: "/brands/irancell.png" },
    { id: 4, name: "تپسی", logo: "/brands/tapsi.png" },
    { id: 5, name: "فیلیمو", logo: "/brands/filimo.png" },
    { id: 6, name: "دیوار", logo: "/brands/divar.png" },
    { id: 7, name: "نماوا", logo: "/brands/namava.png" },
    { id: 8, name: "علی‌بابا", logo: "/brands/alibaba.png" },
    { id: 9, name: "همراه اول", logo: "/brands/mci.png" },
    { id: 10, name: "باسلام", logo: "/brands/basalam.png" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    // اضافه کردن کلاس marquee-section برای کنترل هاور در CSS
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">
          کسب‌وکارهایی که به ما اعتماد کرده‌اند
        </h2>
        <p className="text-gray-500 text-sm lg:text-base max-w-2xl mx-auto">
          پشتیبانی و همراهی با برترین برندهای ایران، گواهی بر کیفیت خدمات و نرم‌افزارهای حسابداری محک در نمایندگی یزد است.
        </p>
      </div>

      {/* کانتینر اصلی اسکرولر (کلاس group حذف شد) */}
      <div className="relative w-full flex items-center bg-gray-50/50 py-10">
        
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* کانتینر متحرک */}
        <div className="flex animate-marquee-rtl whitespace-nowrap items-center w-max">
          {duplicatedBrands.map((brand, index) => (
            // هر آیتم کلاس group مستقل خودش را دارد
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-4 w-32 md:w-40 lg:w-56 group cursor-pointer px-4"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                {/* <Image src={brand.logo} alt={`لوگو ${brand.name}`} fill className="object-contain p-3" /> */}
                <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-2xl group-hover:text-blue-500 transition-colors">
                  {brand.name.charAt(0)}
                </div>
              </div>
              <span className="text-gray-600 font-medium text-sm md:text-base transition-colors group-hover:text-blue-600">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* حل مشکل در خالص‌ترین حالت با CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeRtl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(50%, 0, 0); } 
        }
        .animate-marquee-rtl {
          animation: marqueeRtl 35s linear infinite;
        }
        /* با هاور شدن سکشن، فقط انیمیشن متوقف می‌شود و اختلالی در رنگ‌ها ایجاد نمی‌کند */
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}