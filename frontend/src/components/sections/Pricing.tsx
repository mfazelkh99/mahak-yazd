"use client";

import React, { useState, useRef, useEffect } from "react";

// تعریف تایپ برای داده‌های قیمت‌گذاری
type Plan = {
  id: string;
  name: string;
  code: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("فروشگاهی");
  const sliderRef = useRef<HTMLDivElement>(null);

  // با تغییر تب، اسلایدر به ابتدای لیست برگردد
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeTab]);

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

  // مجموعه آیکون‌ها برای استفاده در سطوح مختلف
  const icons = {
    level1: (
      <svg className="w-16 h-16 text-amber-700 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    level2: (
      <svg className="w-16 h-16 text-gray-400 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 10.63 21 8.55 21 6V5c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z" /></svg>
    ),
    level3: (
      <svg className="w-16 h-16 text-yellow-500 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16h14v2H5zM19 6.5L17.5 12h-11L5 6.5 9 10l3-5 3 5 4-3.5z" /></svg>
    ),
    level4: (
      <svg className="w-16 h-16 text-blue-500 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
    ),
    level5: (
      <svg className="w-16 h-16 text-purple-500 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12.5L12 17.5L2 12.5V17ZM2 12L12 17L22 12V7.5L12 12.5L2 7.5V12Z" /></svg>
    ),
    level6: (
      <svg className="w-16 h-16 text-emerald-500 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>
    )
  };

  const pricingData: Record<string, Plan[]> = {
    "فروشگاهی": [
      {
        id: "retail-1", name: "سری عمومی سطح ۱", code: "۳۰۱", price: "۵,۶۸۷,۰۰۰", icon: icons.level1,
        features: ["تعریف کالاها، مشتریان و انبار", "فاکتور فروش، خرید و برگشتی", "اتصال به کارتخوان", "ثبت چک، درآمد و هزینه", "گزارش سود و زیان"],
      },
      {
        id: "retail-2", name: "سری عمومی سطح ۲", code: "۳۰۳", price: "۱۰,۹۸۷,۰۰۰", icon: icons.level2,
        features: ["تمامی امکانات سطح قبلی", "اتصال به بارکدخوان و ترازو", "تعریف چند کاربر با سطوح دسترسی", "گزارشات تکمیلی فروش و موجودی", "تعریف کالاهای دو واحدی"],
      },
      {
        id: "retail-3", name: "سری تجاری سطح ۱", code: "۲۰۱", price: "۱۳,۴۸۷,۰۰۰", icon: icons.level3,
        features: ["تمامی امکانات سطح قبلی", "کدینگ و سند دستی حسابداری", "خروجی دفاتر کل، معین و تفضیل", "تعریف چند انبار و ویزیتورها", "ثبت اطلاعات شرکا و سهامداران"],
      },
      {
        id: "retail-4", name: "سری تجاری سطح ۲", code: "۲۰۲", price: "۱۶,۸۸۷,۰۰۰", icon: icons.level4,
        features: ["تمامی امکانات سطح قبلی", "انبارداری تکمیلی", "انبارگردانی پیشرفته", "گزارش موجودی به تفکیک انبار"],
      },
      {
        id: "retail-5", name: "سری تجاری سطح ۳", code: "۲۰۳", price: "۲۲,۸۸۷,۰۰۰", icon: icons.level5,
        features: ["تمامی امکانات سطح قبلی", "سیستم حقوق و دستمزد جامع", "حکم کارگزینی و فیش حقوقی", "خروجی بیمه و مالیات", "افزونه چاپ و تولید بارکد"],
      },
      {
        id: "retail-6", name: "سری تجاری سطح ۴", code: "۲۰۴", price: "۲۸,۸۸۷,۰۰۰", icon: icons.level6,
        features: ["تمامی امکانات سطح قبلی", "تعریف یک شرکت مازاد (چند شرکتی)"],
      }
    ],
    "شرکتی": [
      {
        id: "corp-1", name: "سری عمومی سطح ۱", code: "۳۱۳", price: "۱۱,۸۸۷,۰۰۰", icon: icons.level1,
        features: ["تمامی امکانات فروشگاهی کد ۳۰۳", "کدینگ حسابداری استاندارد", "ثبت سند دستی حسابداری", "تراز آزمایشی", "خروجی دفاتر روزنامه کل و معین"],
      },
      {
        id: "corp-2", name: "سری تجاری سطح ۱", code: "۲۱۱", price: "۱۵,۵۸۷,۰۰۰", icon: icons.level2,
        features: ["تمامی امکانات سطح قبلی", "تعریف چند انبار", "تعریف ویزیتورها و کمسیون", "حسابداری مالی تکمیلی", "طراحی دلخواه سود و زیان"],
      },
      {
        id: "corp-3", name: "سری تجاری سطح ۲", code: "۲۱۲", price: "۲۲,۸۸۷,۰۰۰", icon: icons.level3,
        features: ["تمامی امکانات سطح قبلی", "انبارداری تکمیلی و انبارگردانی", "سیستم پروژه‌ها (مراکز هزینه)", "گزارش‌گیری مجزا از هر پروژه"],
      },
      {
        id: "corp-4", name: "سری تجاری سطح ۳", code: "۲۱۳", price: "۲۸,۸۸۷,۰۰۰", icon: icons.level4,
        features: ["تمامی امکانات سطح قبلی", "سیستم حقوق و دستمزد", "حکم کارگزینی و فیش حقوقی", "خروجی بیمه و مالیات", "تعریف یک شرکت مازاد"],
      },
      {
        id: "corp-5", name: "سری تجاری سطح ۴", code: "۲۱۴", price: "۳۴,۸۸۷,۰۰۰", icon: icons.level5,
        features: ["تمامی امکانات سطح قبلی", "سیستم دارایی ثابت (استهلاک‌گیری)", "اتوماسیون اداری", "بایگانی اسناد و دبیرخانه"],
      }
    ],
    "تولیدی": [
      {
        id: "prod-1", name: "سری عمومی سطح ۱", code: "۳۳۳", price: "۱۳,۹۸۷,۰۰۰", icon: icons.level1,
        features: ["تمامی امکانات فروشگاهی کد ۳۰۳", "ثبت فرمول‌های تولید", "تولید با فرمول ثابت یا متغیر", "محاسبه دقیق بهای تمام شده"],
      },
      {
        id: "prod-2", name: "سری تجاری سطح ۱", code: "۲۳۱", price: "۱۸,۸۸۷,۰۰۰", icon: icons.level2,
        features: ["تمامی امکانات سطح قبلی", "کدینگ و سند دستی حسابداری", "خروجی دفاتر کل، معین و تفضیل", "تعریف چند انبار و ویزیتورها", "ثبت اطلاعات شرکا و سهامداران"],
      },
      {
        id: "prod-3", name: "سری تجاری سطح ۲", code: "۲۳۲", price: "۲۵,۵۸۷,۰۰۰", icon: icons.level3,
        features: ["تمامی امکانات سطح قبلی", "انبارداری تکمیلی و انبارگردانی", "گزارش موجودی تفکیک انبار", "تعریف یک شرکت مازاد"],
      },
      {
        id: "prod-4", name: "سری تجاری سطح ۳", code: "۲۳۳", price: "۲۹,۸۸۷,۰۰۰", icon: icons.level4,
        features: ["تمامی امکانات سطح قبلی", "سیستم پروژه‌ها و مراکز هزینه", "حسابداری مالی تکمیلی", "طراحی دلخواه گزارشات ترازنامه"],
      },
      {
        id: "prod-5", name: "سری تجاری سطح ۴", code: "۲۳۴", price: "۳۹,۵۸۷,۰۰۰", icon: icons.level5,
        features: ["تمامی امکانات سطح قبلی", "تولید چند مرحله‌ای", "سیستم حقوق و دستمزد و خروجی بیمه", "افزونه چاپ و تولید بارکد"],
      },
      {
        id: "prod-6", name: "سری تجاری سطح ۵", code: "۲۳۵", price: "۴۵,۸۸۷,۰۰۰", icon: icons.level6,
        features: ["تمامی امکانات سطح قبلی", "سیستم دارایی ثابت و استهلاک", "اتوماسیون اداری", "بایگانی اسناد و دبیرخانه"],
      }
    ],
    "رستوران": [
      {
        id: "rest-1", name: "نرم افزار رستورانی پایه", code: "پایه", price: "۱۱,۳۷۴,۰۰۰", icon: icons.level2,
        features: ["امکانات پایه فروشگاهی کد ۳۰۱", "مدیریت منوی غذایی و اشتراک", "نرم‌افزار سفارش‌گیر ساده", "اتصال به فیش‌پرینتر آشپزخانه", "تعریف و مدیریت پیک و مالیات"],
      },
      {
        id: "rest-2", name: "رستورانی به همراه تولید", code: "تولید", price: "۱۹,۶۶۱,۰۰۰", icon: icons.level3,
        features: ["تمامی امکانات سطح پایه", "تعریف مواد اولیه و فرمول تولید", "ثبت تولید همزمان با فروش", "مدیریت دقیق موجودی مواد اولیه"],
      }
    ],
  };

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
        <div className="flex items-center justify-center gap-4 lg:gap-8 w-full px-4">
          
          {/* دکمه اسکرول راست */}
          <button
            onClick={scrollRight}
            className={`flex-shrink-0 z-20 bg-white shadow-md text-gray-800 p-3 lg:p-4 rounded-full border border-gray-100 hidden md:flex transition-all hover:scale-110 hover:text-blue-600 ${pricingData[activeTab]?.length <= 3 ? 'md:hidden lg:hidden' : ''}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex-1 overflow-hidden py-4">
            <div
              ref={sliderRef}
              className={`flex pb-0.5 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 ${pricingData[activeTab]?.length <= 3 ? 'md:justify-center' : ''}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {pricingData[activeTab]?.length > 0 ? (
                pricingData[activeTab].map((plan) => (
                  <div
                    key={plan.id}
                    className="w-[90%] md:w-1/2 lg:w-1/3 flex-shrink-0 snap-start px-3 md:px-4 flex"
                  >
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full relative animate-in fade-in zoom-in-95 group">
                      
                      <div className="absolute top-4 right-6 bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">
                        کد {plan.code}
                      </div>

                      {/* <div className="mb-6 mt-4 group-hover:scale-110 transition-transform duration-500">
                        {plan.icon}
                      </div> */}

                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center h-14 flex items-center">
                        {plan.name}
                      </h3>
                      
                      <div className="text-base font-bold text-gray-500 mb-8 flex items-baseline gap-1">
                        <span className="text-2xl text-gray-900">{plan.price}</span>
                        <span>ریال</span>
                      </div>

                      <ul className="w-full space-y-4 mb-8 flex-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 text-sm font-medium leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button className="w-full bg-[#FBBF24] hover:bg-[#F59E0B] text-gray-900 py-3.5 rounded-xl font-bold transition-colors shadow-sm mt-auto">
                        خرید و مشاوره
                      </button>
                    </div>
                  </div>
                ))
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