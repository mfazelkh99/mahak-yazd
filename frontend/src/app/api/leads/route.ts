import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        // ۱. دریافت اطلاعات ارسال شده از سمت فرم
        const body = await request.json();
        const { fullName, phone, job, city } = body;

        // ۲. اعتبارسنجی ساده (بررسی اینکه فیلدی خالی نباشد)
        if (!fullName || !phone || !job || !city) {
            return NextResponse.json(
                { error: "لطفاً تمام فیلدها را پر کنید." },
                { status: 400 }
            );
        }

        // ۳. ذخیره در دیتابیس با استفاده از Prisma
        const newCustomer = await prisma.customers.create({
            data: {
                fullName,
                phone,
                job,
                city,
            },
        });

        // ۴. ارسال پیام موفقیت به فرانت‌اند
        return NextResponse.json(
            { success: true, message: "اطلاعات شما با موفقیت ثبت شد." },
            { status: 201 }
        );

    } catch (error) {
        console.error("Error saving customer data:", error);
        return NextResponse.json(
            { error: "خطایی در سمت سرور رخ داد. لطفاً دوباره تلاش کنید." },
            { status: 500 }
        );
    }
}