export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://tamilcalendar.vercel.app/</loc><lastmod>2026-06-11</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/daily</loc><lastmod>2026-06-11</lastmod><changefreq>daily</changefreq><priority>0.95</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/nalla-neram</loc><lastmod>2026-06-11</lastmod><changefreq>daily</changefreq><priority>0.95</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/muhurtham</loc><lastmod>2026-06-11</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/monthly</loc><lastmod>2026-06-11</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/festivals</loc><lastmod>2026-06-11</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/holidays</loc><lastmod>2026-06-11</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/chandrashtamam</loc><lastmod>2026-06-11</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://tamilcalendar.vercel.app/about</loc><lastmod>2026-06-11</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>`);
}