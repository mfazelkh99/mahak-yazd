import prisma from "@/lib/prisma";

// این خط به Next.js می‌گوید که این صفحه را کش (Cache) نکند 
// تا ادمین همیشه جدیدترین لیست مشتریان را با هر بار رفرش ببیند
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
    // دریافت اطلاعات مشتریان از دیتابیس (مرتب‌سازی از جدیدترین به قدیمی‌ترین)
    const leads = await prisma.customers.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">

            {/* هدر ساده پنل مدیریت */}
            <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-extrabold text-gray-800">
                        پنل مدیریت <span className="text-blue-600">محک</span>
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            تعداد کل درخواست‌ها: {leads.length}
                        </span>
                    </div>
                </div>
            </header>

            {/* محتوای اصلی و گرید کارت‌ها */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {leads.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm">
                        <p className="text-gray-500 text-lg font-medium">هنوز هیچ درخواستی ثبت نشده است.</p>
                    </div>
                ) : (
                    // گرید ریسپانسیو: موبایل 1 ستون، تبلت 2 ستون، لپ‌تاپ 3 ستون
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {leads.map((lead) => (
                            <div
                                key={lead.id}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden group"
                            >
                                {/* نوار رنگی تزئینی بالای کارت */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-[#FBBF24] opacity-70 group-hover:opacity-100 transition-opacity" />

                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-xl font-bold text-gray-900">{lead.fullName}</h2>
                                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                        کد: {lead.id}
                                    </span>
                                </div>

                                <div className="space-y-4">

                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold text-gray-400 mb-1">شماره تماس</span>
                                        <a href={`tel:${lead.phone}`} className="text-lg font-bold text-blue-600 hover:text-blue-700 w-fit" dir="ltr">
                                            {lead.phone}
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col bg-gray-50 p-3 rounded-xl">
                                            <span className="text-xs font-semibold text-gray-400 mb-1">صنف</span>
                                            <span className="text-sm font-bold text-gray-800">{lead.job}</span>
                                        </div>
                                        <div className="flex flex-col bg-gray-50 p-3 rounded-xl">
                                            <span className="text-xs font-semibold text-gray-400 mb-1">شهر</span>
                                            <span className="text-sm font-bold text-gray-800">{lead.city}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-sm text-gray-500 font-medium">
                                        <svg className="w-4 h-4 ml-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {/* تبدیل تاریخ دیتابیس به تاریخ شمسی خوانا */}
                                        {new Date(lead.createdAt).toLocaleDateString("fa-IR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })}
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </main>
        </div>
    );
}