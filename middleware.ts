// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// import { NextRequest,NextResponse } from "next/server";

// export async function middleware(req:NextRequest){

// const res= NextResponse.next();

// const supabase= createMiddlewareClient({
//     req,
//     res
// });

// await supabase.auth.getSession();

// return res;
// }




import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

// The only email allowed to access /demo
const AUTHORIZED_EMAIL = 'sourish.009445@snuindia.in';

export async function middleware(req: NextRequest) {
  // Only apply middleware to /demo
  if (req.nextUrl.pathname === '/demo') {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    try {
      const { data: { session } } = await supabase.auth.getSession();

      // No session or wrong email - redirect to home
      if (!session || session.user.email !== AUTHORIZED_EMAIL) {
        // You can customize this URL to wherever you want unauthorized users to go
        return NextResponse.redirect(new URL('/', req.url));
      }

      return res;
    } catch (error) {
      console.error('Auth error:', error);
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // For all other routes, continue normally
  return NextResponse.next();
}

// Only run middleware on /demo
export const config = {
  matcher: ['/demo']
};