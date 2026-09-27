"use client";

import React, { useState, useRef, useEffect } from "react";
import { pricingData } from "@/data/pricing";


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