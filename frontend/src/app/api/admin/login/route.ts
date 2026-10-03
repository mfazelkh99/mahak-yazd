import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        const validUsername = process.env.ADMIN_USERNAME;
        const validPassword = process.env.ADMIN_PASSWORD;
        const secretToken = process.env.ADMIN_SECRET_TOKEN;

        // بررسی صحت نام کاربری و رمز عبور
        if (username === validUsername && password === validPassword) {
            // تنظیم کوکی امن در مرورگر ادمین
            const cookieStore = await cookies();
            cookieStore.set({
                name: "admin_session",
                value: secretToken as string,
                httpOnly: true, // غیرقابل دسترسی توسط کدهای مخرب جاوااسکریپت
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
                maxAge: 60 * 60 * 24 * 7, // اعتبار برای ۷ روز
            });

            return NextResponse.json({ success: true }, { status: 200 });
        }

        return NextResponse.json(
            { error: "نام کاربری یا رمز عبور اشتباه است." },
            { status: 401 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "خطایی رخ داده است." },
            { status: 500 }
        );
    }
}