import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Middleware:
 * - Refresh auth token di setiap request (agar session tidak expired)
 * - Proteksi route /admin/* (kecuali /admin/login)
 *
 * Catatan: middleware ini berjalan di Netlify Edge Function. Semua akses
 * eksternal (env var + panggilan ke Supabase) dibungkus try/catch supaya
 * kegagalan tidak menyebabkan "Edge Function invocation failed" (HTTP 500)
 * yang membuat seluruh panel admin tidak bisa diakses.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const supabaseResponse = NextResponse.next({ request });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Kalau env var belum diset, jangan sampai middleware crash. Lewati saja
  // (route admin tetap punya proteksi di level server action / query).
  if (!supabaseUrl || !supabaseAnonKey) {
    return supabaseResponse;
  }

  let user = null;

  try {
    let response = supabaseResponse;

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value);
          }
          response = NextResponse.next({ request });
          for (const { name, value, options } of cookiesToSet) {
            response.cookies.set(name, value, options);
          }
        },
      },
    });

    // Refresh session — PENTING: jangan pakai getSession() karena tidak validate token.
    const result = await supabase.auth.getUser();
    user = result.data.user;

    // Proteksi route /admin/* (kecuali /admin/login)
    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      if (!user) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = "/admin/login";
        return NextResponse.redirect(loginUrl);
      }
    }

    // Kalau sudah login dan buka /admin/login, redirect ke dashboard
    if (pathname === "/admin/login" && user) {
      const dashboardUrl = request.nextUrl.clone();
      dashboardUrl.pathname = "/admin";
      return NextResponse.redirect(dashboardUrl);
    }

    return response;
  } catch (err) {
    // Gagal validasi token (mis. Supabase down / network error di edge).
    // Untuk route terproteksi, arahkan ke login agar aman. Selain itu, lanjut.
    console.error("[middleware] auth check failed:", err);

    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      return NextResponse.redirect(loginUrl);
    }

    return supabaseResponse;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
