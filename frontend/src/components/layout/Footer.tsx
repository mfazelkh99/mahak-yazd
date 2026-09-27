import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f8f9fa] text-gray-700 pt-6">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* ستون اول: معرفی و آدرس */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="نمایندگی نرم‌افزار محک"
                width={80}
                height={80}
                /* تنظیم ارتفاع برای موبایل و دسکتاپ و حفظ تناسب عرض */
                className="w-auto h-12 lg:h-20 object-contain"
                priority
              />
              <span className="text-gray-900 text-2xl font-bold">نمایندگی محک یزد</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              ارائه دهنده خدمات فروش، نصب، آموزش و پشتیبانی نرم‌افزارهای مالی و حسابداری محک در استان یزد. همراه شما در مسیر توسعه کسب‌وکار.
            </p>
            <address className="not-italic flex items-start gap-3 mt-4 text-sm leading-relaxed">
              <svg className="w-6 h-6 text-[#FBBF24] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                <strong className="text-gray-900 block mb-1">آدرس دفتر مرکزی:</strong>
                یزد، میدان باهنر، جنب بابابستنی، پلاک 790، طبقه بالا
              </span>
            </address>
          </div>

          {/* ستون دوم: شماره‌های تماس */}
          <div className="space-y-6 pt-7 lg:justify-self-center">
            <h3 className="text-gray-900 text-lg font-bold border-b-2 border-gray-200 pb-3 inline-block">
              تماس سریع
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:03512345678"
                  className="flex items-center gap-3 hover:text-[#FBBF24] transition-colors group"
                >
                  <div className="bg-white border border-gray-200 p-2.5 rounded-xl group-hover:bg-[#FBBF24]/20 group-hover:[#FBBF24]/5 transition-colors shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-[#FBBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">شماره ثابت دفتر</span>
                    <span className="font-bold text-lg text-gray-900 tracking-wider group-hover:text-[#FBBF24] transition-colors" dir="ltr">035 - 37245037</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:09131234567"
                  className="flex items-center gap-3 text-[#FBBF24] transition-colors group"
                >
                  <div className="bg-white border border-gray-200 p-2.5 rounded-xl group-hover:bg-[#FBBF24]/20 group-hover:[#FBBF24]/5 transition-colors shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-[#FBBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">موبایل مشاوره و فروش</span>
                    <span className="font-bold text-lg text-gray-900 tracking-wider group-hover:text-[#FBBF24] transition-colors" dir="ltr">0910 383 9053</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* ستون سوم: پیام‌رسان‌ها */}
          <div className="space-y-6  pt-7">
            <h3 className="text-gray-900 text-lg font-bold border-b-2 border-gray-200 pb-3 inline-block">
              ارتباط در پیام‌رسان‌ها
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://t.me/m_rayatpoor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-700 hover:bg-[#229ED9] hover:text-white p-3 rounded-xl transition-all group text-sm font-medium border border-gray-200 hover:border-transparent shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-white transition-colors"></span>
                تلگرام
              </a>

              <a href="https://wa.me/989103839053" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-700 hover:bg-[#25D366] hover:text-white p-3 rounded-xl transition-all group text-sm font-medium border border-gray-200 hover:border-transparent shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-white transition-colors"></span>
                واتس‌اپ
              </a>

              <a href="https://eitaa.com/m_rayatpoor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-700 hover:bg-[#F37021] hover:text-white p-3 rounded-xl transition-all group text-sm font-medium border border-gray-200 hover:border-transparent shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-white transition-colors"></span>
                ایتا
              </a>

              <a href="https://ble.ir/m_rayatpoor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-700 hover:bg-[#00E5FF] hover:text-gray-900 p-3 rounded-xl transition-all group text-sm font-medium border border-gray-200 hover:border-transparent shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-gray-900 transition-colors"></span>
                بله
              </a>
            </div>

            <a href="https://www.instagram.com/mahaksoft_yazd?utm_source=qr&stkn=MWM3eGNyMDM2YzFpeg==" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white p-3.5 rounded-xl transition-all font-bold text-sm shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              پیج اینستاگرام ما
            </a>
          </div>
        </div>
      </div>

      {/* بخش کپی‌رایت با رنگ کمی تیره‌تر */}
      {/* <div className="bg-[#ebebeb] py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs lg:text-sm text-gray-500">
          <p>
            تمامی حقوق این سایت متعلق به نمایندگی نرم‌افزار حسابداری محک در یزد می‌باشد. © {new Date().toLocaleDateString('fa-IR', { year: 'numeric' })}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-600 transition-colors">قوانین و مقررات</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">حریم خصوصی</Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
}