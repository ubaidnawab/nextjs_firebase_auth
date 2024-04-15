// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { UseUser } from './lib/auth'

// export function middleware(request: NextRequest) {
//   // Your middleware logic here
//   const user = UseUser();
//   if (user) { 
//       return NextResponse.redirect(new URL('/dashboard', request.url))
//   } else {
//     return NextResponse.redirect(new URL('/', request.url))
//   }
// }

// // Define which paths the middleware will run on
// export const config = {
//   matcher: '/',
// }