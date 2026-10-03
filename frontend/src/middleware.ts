import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // اگر کاربر قصد ورود به مسیرهای ادمین را دارد
    if (request.nextUrl.pathname.startsWith('/admin')) {

        // صفحه لاگین نیازی به محافظت ندارد
        if (request.nextUrl.pathname === '/admin/login') {
            return NextResponse.next();
        }

        const sessionCookie = request.cookies.get('admin_session');
        const secretToken = process.env.ADMIN_SECRET_TOKEN;

        // اگر کوکی وجود نداشت یا نامعتبر بود، او را به صفحه لاگین شوت کن!
        if (!sessionCookie || sessionCookie.value !== secretToken) {
            const loginUrl = new URL('/admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

// به نکست‌جی‌اس می‌گوییم این نگهبان فقط برای چه مسیرهایی فعال باشد
export const config = {
    matcher: ['/admin/:path*'],
};