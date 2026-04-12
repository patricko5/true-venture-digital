import { NextResponse } from 'next/server';

// Configuration for blocking logic
const BLOCKED_PATHS = [
  '/.env',
  '/.git',
  '/.php',
  '/.jsp',
  '/wp-admin',
  '/wp-login',
  '/xmlrpc.php',
  '/.well-known/security.txt',
  '/.', // The pattern the user was concerned about
];

const BLOCKED_USER_AGENTS = [
  'python-requests',
  'curl',
  'wget',
  'go-http-client',
];

// Set to true to restrict traffic to North America only (recommended for local agencies)
const REGION_BLOCKING_ENABLED = true; 
const ALLOWED_COUNTRIES = ['CA', 'US'];


export function middleware(request) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const country = request.headers.get('x-vercel-ip-country') || 'UNKNOWN';

  // 1. Path Filtering
  if (BLOCKED_PATHS.some(path => pathname.includes(path))) {
    console.warn(`[Blocked] Path attack attempt: ${pathname} from ${country}`);
    return new NextResponse(null, { status: 403 });
  }

  // 2. Bot/Scraper Detection (Basic)
  if (BLOCKED_USER_AGENTS.some(bot => userAgent.includes(bot))) {
    // We allow curl/wget in dev for testing, but block in production
    if (process.env.NODE_ENV === 'production') {
      console.warn(`[Blocked] Bot detected: ${userAgent} from ${country}`);
      return new NextResponse(null, { status: 403 });
    }
  }

  // 3. Geographic Blocking (Optional)
  if (REGION_BLOCKING_ENABLED && !ALLOWED_COUNTRIES.includes(country) && country !== 'UNKNOWN') {
    // Allow essential crawler/system traffic if needed, but otherwise block
    console.warn(`[Blocked] Geographic restriction: ${country} traffic for ${pathname}`);
    return new NextResponse('Access restricted in your region.', { status: 403 });
  }

  // 4. API Method Restriction
  if (pathname.startsWith('/api/free-audit') && request.method !== 'POST') {
    return new NextResponse(null, { status: 405 });
  }

  return NextResponse.next();
}

// Only run middleware on these paths to keep performance high
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
