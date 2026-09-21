export function GET() {
  return new Response(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/haltproject.html"><link rel="canonical" href="/haltproject.html"><title>HALT Project</title></head><body><a href="/haltproject.html">Continue to the HALT Project</a></body></html>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  );
}
