"use client";

import React, { useState, useRef, useEffect } from "react";
import { pricingData } from "@/data/pricing";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("فروشگاهی");
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // استیت‌های مربوط به نمایش پیغام راهنمای لمسی (فقط موبایل)
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);

  // با تغییر تب، اسلایدر به ابتدای لیست برگردد
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  // ۱. منطق نمایش راهنما
  useEffect(() => {
    const container = sliderRef.current;
    if (!container || hintDismissed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // اگر اسلایدر وارد کادر دید شد و عرض صفحه مربوط به موبایل بود
        if (entries[0].isIntersecting && window.innerWidth < 768) {
          setShowSwipeHint(true);
        }
      },
      { threshold: 0.7 } // وقتی ۵۰ درصد از بخش قیمت‌ها دیده شد فعال می‌شود
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [hintDismissed]);

  // ۲. قفل کردن اسکرول کل صفحه هنگام نمایش راهنما
  useEffect(() => {
    if (showSwipeHint && !hintDismissed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // پاکسازی هنگام خروج از کامپوننت
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSwipeHint, hintDismissed]);

  // توابع کنترل اسکرول
  const scrollLeft = () => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const itemWidth = (sliderRef.current.firstElementChild as HTMLElement).offsetWidth;
      sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const itemWidth = (sliderRef.current.firstElementChild as HTMLElement).offsetWidth;
      sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  const tabs = ["فروشگاهی", "شرکتی", "تولیدی", "رستوران"];

  return (
    <section id="pricing" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
            لیست محصولات و قیمت‌های نرم‌افزار محک
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full font-bold text-sm lg:text-base transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-blue-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* کانتینر اصلی اسلایدر با دکمه‌های کنترلی */}
        <div className="flex items-center justify-center gap-4 lg:gap-8 w-full px-4 relative">
          {/* پس‌زمینه مات اصلی */}
          {showSwipeHint && !hintDismissed && (
            <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-500" />
          )}

          {/* لایه کلیک‌پذیر و متون راهنما (بالاترین سطح) */}
          {showSwipeHint && !hintDismissed && (
            <div
              className="fixed inset-0 z-[120] md:hidden flex flex-col items-center justify-center cursor-pointer animate-in fade-in duration-500"
              onClick={() => {
                setShowSwipeHint(false);
                setHintDismissed(true);
              }}
            >
              
                {/* دکمه بستن راهنما */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 border border-white/20 rounded-full backdrop-blur-md shadow-lg">
                  <p className="text-black/90 text-sm font-medium animate-pulse">
                    متوجه شدم
                  </p>
                </div>

              {/* استایل‌های اختصاصی انیمیشن دست و دایره */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes swipeHandSequence {
                  0% { transform: scale(1.4) translate(-10px, 20px); opacity: 0; }
                  15% { transform: scale(1) translate(0px, 0px); opacity: 1; }
                  30% { transform: scale(1) translate(0px, 0px); opacity: 1; }
                  65% { transform: scale(1) translate(70px, 0px); opacity: 1; }
                  80% { transform: scale(1) translate(70px, 0px); opacity: 0; }
                  100% { transform: scale(1.4) translate(-10px, 20px); opacity: 0; }
                }
                @keyframes tapRipple {
                  0%, 10% { transform: scale(0.2); opacity: 0; }
                  13% { transform: scale(0.2); opacity: 1; } 
                  25% { transform: scale(1); opacity: 1; }
                  65% { transform: scale(1); opacity: 1; }
                  80% { transform: scale(1.1); opacity: 0; } 
                  100% { transform: scale(1.1); opacity: 0; }
                }
                .animate-swipe-wrapper { animation: swipeHandSequence 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
                .animate-swipe-ripple { animation: tapRipple 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              `}} />

              {/* ۱. کانتینر اصلی انیمیشن دست (حالا در بالا قرار دارد) */}
              <div className="relative w-24 h-24 mb-2 -translate-x-10 animate-swipe-wrapper">
                
                {/* دایره اثر لمس */}
                <div className="absolute top-[-14px] left-[13px] w-12 h-12 border-[3px] border-black/60 bg-black/20 rounded-full animate-swipe-ripple z-0"></div>

                {/* آیکون دست */}
                <svg className="w-24 h-24 text-black drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] relative z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path fill="currentColor" d="M224 120C224 106.7 234.7 96 248 96C261.3 96 272 106.7 272 120L272 252.2C272 258.5 275.7 264.2 281.5 266.8C287.3 269.4 294 268.3 298.7 264.1C304.4 259 311.8 256 320 256C336.8 256 350.7 269 351.9 285.5C352.4 291.6 356.2 296.9 361.9 299.2C367.6 301.5 374 300.3 378.6 296.2C384.3 291.1 391.8 288 400 288C416.8 288 430.7 301 431.9 317.5C432.4 323.6 436.2 328.9 441.9 331.2C447.6 333.5 454 332.3 458.6 328.2C464.3 323.1 471.8 320 480 320C497.7 320 512 334.3 512 352L512 464C512 508.2 476.2 544 432 544L301.7 544C265.6 544 231.4 527.7 208.6 499.7L133.4 407.1C125 396.8 126.6 381.7 136.9 373.3C147.2 364.9 162.3 366.5 170.7 376.8L195.7 407.5C200 412.8 207.1 414.8 213.5 412.5C219.9 410.2 224.1 404.2 224.1 397.4L224 120zM248 64C217.1 64 192 89.1 192 120L192 352.8C172 332.3 139.3 330.1 116.7 348.5C92.7 368 89 403.3 108.6 427.3L183.8 519.8C212.7 555.3 256 576 301.8 576L432 576C493.9 576 544 525.9 544 464L544 352C544 316.7 515.3 288 480 288C472.1 288 464.6 289.4 457.6 292C447.2 270.7 425.3 256 400 256C392.1 256 384.6 257.4 377.6 260C367.2 238.7 345.3 224 320 224C314.5 224 309.1 224.7 304 226L304 120C304 89.1 278.9 64 248 64zM320 384C320 375.2 312.8 368 304 368C295.2 368 288 375.2 288 384L288 480C288 488.8 295.2 496 304 496C312.8 496 320 488.8 320 480L320 384zM384 384C384 375.2 376.8 368 368 368C359.2 368 352 375.2 352 384L352 480C352 488.8 359.2 496 368 496C376.8 496 384 488.8 384 480L384 384zM448 384C448 375.2 440.8 368 432 368C423.2 368 416 375.2 416 384L416 480C416 488.8 423.2 496 432 496C440.8 496 448 488.8 448 480L448 384z"/>
                </svg>
              </div>

              {/* ۲. متن راهنما (کوچک، تماماً سفید و درون باکس مشکی) */}
              <div className="flex flex-col items-center px-4">
                
                <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-1 mb-6 shadow-2xl">
                  <p className="text-white text-xs font-medium leading-relaxed text-center">
                  سری های دیگر را ببینید
                  </p>
                </div>

                
              </div>
            </div>
          )}
          {/* دکمه اسکرول راست */}
          <button
            onClick={scrollRight}
            className={`flex-shrink-0 z-20 bg-white shadow-md text-gray-800 p-3 lg:p-4 rounded-full border border-gray-100 hidden md:flex transition-all hover:scale-110 hover:text-blue-600 ${pricingData[activeTab]?.length <= 3 ? 'md:hidden lg:hidden' : ''}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* کانتینر دربرگیرنده اسلایدر (z-index بالا برای عبور از تاریکی بک‌گراند) */}
          <div className={`flex-1 overflow-hidden py-4 relative ${showSwipeHint && !hintDismissed ? 'z-[105]' : ''}`}>
            
            <div
              ref={sliderRef}
              className={`flex py-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 ${pricingData[activeTab]?.length <= 3 ? 'md:justify-center' : ''}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {pricingData[activeTab]?.length > 0 ? (
                pricingData[activeTab].map((plan, index) => {
                  
                  // بررسی اینکه آیا این کارت، کارت اول است و راهنما در حال نمایش است
                  const isSpotlighted = index === 0 && showSwipeHint && !hintDismissed;

                  return (
                    <div
                      key={plan.id}
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 snap-center md:snap-start px-2 md:px-4 flex"
                    >
                      {/* کلاس‌های داینامیک: اگر کارت اول باشد، روی لایه تاریک درخشان می‌شود */}
                      <div className={`rounded-3xl p-8 transition-all duration-500 flex flex-col items-center w-full relative animate-in fade-in zoom-in-95 group bg-white ${
                        isSpotlighted 
                          ? 'border-[3px] border-[#FBBF24] shadow-sm z-[110] scale-[1.02]' 
                          : 'border border-gray-100 shadow-sm hover:shadow-lg'
                      }`}>
                        
                        <div className="absolute top-4 right-6 bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">
                          کد {plan.code}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center h-14 flex items-center mt-2">
                          {plan.name}
                        </h3>
                        
                        <div className="text-base font-bold text-gray-500 mb-4 md:mb-8 flex items-baseline gap-1">
                          <span className="text-2xl text-gray-900">{plan.price}</span>
                          <span>ریال</span>
                        </div>

                        <ul className="w-full space-y-4 mb-4 md:mb-8 flex-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-1 md:gap-3">
                              <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600 text-sm font-medium leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <button className="w-full bg-[#FBBF24] hover:bg-[#F59E0B] text-gray-900 py-2 md:py-3.5 rounded-xl font-bold transition-colors shadow-sm mt-auto">
                          خرید و مشاوره
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="w-full text-center py-12 text-gray-500 bg-white rounded-3xl border border-gray-100">
                  اطلاعات قیمت این دسته‌بندی به‌زودی اضافه می‌شود.
                </div>
              )}
            </div>
          </div>

          {/* دکمه اسکرول چپ */}
          <button
            onClick={scrollLeft}
            className={`flex-shrink-0 z-20 bg-white shadow-md text-gray-800 p-3 lg:p-4 rounded-full border border-gray-100 hidden md:flex transition-all hover:scale-110 hover:text-blue-600 ${pricingData[activeTab]?.length <= 3 ? 'md:hidden lg:hidden' : ''}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>
  );
}