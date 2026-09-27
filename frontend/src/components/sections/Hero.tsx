import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-16 pb-12 lg:pt-8 lg:pb-24 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
            <div className="container mx-auto px-4 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* ستون متن‌ها و دکمه‌ها */}
                    <div className="flex flex-col gap-6 text-center lg:text-right z-10 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.4] lg:leading-[1.5]">
                            نمایندگی رسمی نرم‌افزار حسابداری محک در یزد - مدیریت مالی آسان، دقیق و هوشمند برای کسب‌وکار شما
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed lg:max-w-xl">
                            با استفاده از نرم‌افزار حسابداری جامع و کاربرپسند محک، تمامی امور مالی، فروش، انبارداری و گزارش‌گیری کسب‌وکار خود را در یزد به صورت حرفه‌ای و خودکار مدیریت کنید. نمایندگی یزد ارائه دهنده خدمات مشاوره، نصب و پشتیبانی ۲۴/۷.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
                            {/* دکمه اصلی (توپر زرد با متن تیره) */}
                            <Link
                                href="#features"
                                className="w-full sm:w-auto bg-[#FBBF24] hover:bg-[#F59E0B] text-gray-900 px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg text-center"
                            >
                                مشاهده امکانات و تصاویر
                            </Link>

                            {/* دکمه ثانویه (حاشیه زرد با هاور ملایم) */}
                            <Link
                                href="#pricing"
                                className="w-full sm:w-auto bg-white hover:bg-yellow-50 text-gray-800 border-2 border-[#FBBF24] px-8 py-3.5 rounded-full font-bold transition-all text-center"
                            >
                               لیست محصولات و قیمت
                            </Link>
                        </div>
                    </div>

                    {/* ستون تصویر */}
                    <div className="justify-self-center lg:justify-self-end z-10 order-1 lg:order-2">
                        <Image
                            src="/hero-pic.jpeg"
                            alt="نمایی از نرم افزار حسابداری محک در مک بوک - نمایندگی یزد"
                            width={600}
                            height={600}
                            className="w-full max-w-[450px] lg:max-w-[600px] h-auto rounded-t-[20px]"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    {/* 
               اگر نشان "نمایندگی برتر یزد" داخل خود تصویر اصلی نیست و میخواهید جداگانه روی عکس قرار دهید،
               می‌توانید کدهای زیر را از کامنت خارج کنید و استایل آن را تنظیم کنید.
            */}
                    {/* <div className="absolute bottom-12 right-12 lg:right-auto lg:left-20 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <span className="text-2xl">👑</span>
              <span className="font-bold text-gray-800">نمایندگی برتر</span>
            </div> */}

                </div>
            </div>

            {/* المان‌های تزئینی بک‌گراند (دلخواه برای زیبایی بیشتر) */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-green-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}