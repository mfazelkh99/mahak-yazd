"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Features() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const screenshots = [
    "/features/screenshot-01.png",
    "/features/screenshot-02.png",
    "/features/screenshot-03.png",
    "/features/screenshot-04.png",
    "/features/screenshot-05.png",
    "/features/screenshot-06.png",
    "/features/screenshot-07.png",
    "/features/screenshot-08.png",
    "/features/screenshot-09.png",
    "/features/screenshot-10.png",
    "/features/screenshot-11.png",
  ];

  // ۱. تشخیص اسلاید فعال هنگام اسکرول
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveSlideIndex(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    const slides = container.querySelectorAll(".screenshot-slide");
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  // ۲. منطق حرکت خودکار اسلایدر (محدود شده به فقط موبایل)
  useEffect(() => {
    const timer = setInterval(() => {
      // فقط در صورتی اجرا شود که عرض صفحه کمتر از 768 پیکسل (موبایل) باشد
      const isMobile = window.innerWidth < 768;

      if (isMobile && !isInteracting.current && lightboxIndex === null) {
        const nextIndex = (activeSlideIndex + 1) % screenshots.length;
        scrollToSlide(nextIndex);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [activeSlideIndex, lightboxIndex, screenshots.length]);

  // ۳. توابع کنترل اسکرول
  const scrollToSlide = (index: number) => {
    const container = sliderRef.current;
    const slide = container?.querySelector(`[data-index="${index}"]`) as HTMLElement;

    if (container && slide) {
      // به جای درگیر کردن اسکرول کل صفحه، فقط نوار افقی داخل کانتینر را جابجا می‌کنیم
      // با این کار صفحه دیگر به صورت خودکار به بالا یا پایین نمی‌پرد
      container.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth"
      });
    }
  };

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

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % screenshots.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + screenshots.length) % screenshots.length);
  };

  // لیست امکانات
  const featuresList = [
    {
      id: 1,
      title: "خدمات پس از فروش حرفه ای",
      desc: "همراهی و پشتیبانی پس از خرید",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "آموزش اختصاصی رایگان",
      desc: "آموزش حضوری یا آنلاین، اختصاصی برای هر مشتری و در اختیار قراردادن ویدیوی جلسه آموزش",
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      bgColor: "bg-yellow-50",
    },
    {
      id: 3,
      title: "قیمت مناسب",
      desc: "امکانات کاربردی، قیمت اقتصادی و مقرون به صرفه",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
      ),
      bgColor: "bg-emerald-50",
    },
    {
      id: 4,
      title: "رابط کاربری آسان",
      desc: "طراحی کاربر پسند و گرافیکی",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      bgColor: "bg-indigo-50",
    },
    {
      id: 5,
      title: "ارائه گزارش های مختلف مالی",
      desc: "گزارش های متنوع و دقیق برای تصمیم گیری بهتر",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      bgColor: "bg-rose-50",
    },
    {
      id: 6,
      title: "مناسب برای تمامی کسب و کار ها",
      desc: "متناسب با نیاز هر صنف و کسب و کار",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      ),
      bgColor: "bg-cyan-50",
    },
    {
      id: 7,
      title: "اتصال به سامانه مودیان",
      desc: "جهت ارسال صورتحساب های الکترونیکی",
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      ),
      bgColor: "bg-orange-50",
    },
    {
      id: 8,
      title: "اتصال به سخت افزار های مختلف",
      desc: "اتصال به انواع پرینتر، بارکد خوان، کارت خوان، ترازو",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
        </svg>
      ),
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <>
      <section id="features" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              محیط نرم‌افزار و امکانات
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              هر کسب‌وکار نیازهای مالی و حسابداری متفاوتی دارد. نرم‌افزار محک با ارائه راهکارهای تخصصی، تمامی نیازهای مشاغل مختلف را به ساده‌ترین شکل ممکن پوشش داده است.
            </p>
          </div>

          <div
            className="mb-24 flex flex-col items-center justify-center max-w-[1400px] mx-auto w-full"
            onMouseEnter={() => (isInteracting.current = true)}
            onMouseLeave={() => (isInteracting.current = false)}
            onTouchStart={() => (isInteracting.current = true)}
            onTouchEnd={() => setTimeout(() => (isInteracting.current = false), 2000)}
          >
            {/* کانتینر اصلی اسلایدر */}
            <div className="flex items-center justify-center gap-4 lg:gap-8 w-full">
              {/* دکمه راست (دسکتاپ) */}
              <button
                onClick={scrollRight}
                className="flex-shrink-0 z-20 bg-white shadow-md text-gray-800 p-3 lg:p-4 rounded-full border border-gray-100 hidden md:flex transition-all hover:scale-110 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* باکس مرکزی تصاویر */}
              <div className="flex-1 overflow-hidden">
                <div
                  ref={sliderRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-3 pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {screenshots.map((src, index) => (
                    <div
                      key={index}
                      data-index={index}
                      className="screenshot-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 snap-center px-3"
                    >
                      <div
                        onClick={() => openLightbox(index)}
                        className="aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50 relative cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-md group/card flex items-center justify-center"
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium z-0">
                          اسکرین‌شات {index + 1}
                        </div>

                        <Image
                          src={src}
                          alt={`محیط نرم افزار محک ${index + 1}`}
                          fill
                          className="object-cover z-10"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover/card:opacity-100 transition-opacity z-20 flex items-center justify-center">
                          <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* دکمه چپ (دسکتاپ) */}
              <button
                onClick={scrollLeft}
                className="flex-shrink-0 z-20 bg-white shadow-md text-gray-800 p-3 lg:p-4 rounded-full border border-gray-100 hidden md:flex transition-all hover:scale-110 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            {/* نقطه‌های راهنما (Pagination Dots) - کلاس md:hidden اضافه شد */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  aria-label={`برو به تصویر ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${activeSlideIndex === index
                      ? "w-2.5 h-2.5 bg-blue-600"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* گرید امکانات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 px-16">
            {featuresList.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:-translate-y-2 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* مدال لایت‌باکس */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
            onClick={closeLightbox}
            aria-label="بستن"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl aspect-[16/9] flex items-center justify-center shadow-2xl rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl z-0">
              نمایش تمام‌صفحه اسکرین‌شات {lightboxIndex + 1}
            </div>

            <Image
              src={screenshots[lightboxIndex]}
              alt={`اسکرین شات ${lightboxIndex + 1}`}
              fill
              className="object-contain z-10"
            />
          </div>

          <button
            className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 rounded-full transition-all"
            onClick={prevImage}
            aria-label="عکس قبلی"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 rounded-full transition-all"
            onClick={nextImage}
            aria-label="عکس بعدی"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}