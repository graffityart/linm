const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aeonsoft.co.kr';

export default function sitemap() {
  const paths = [
    '/', '/rinm', '/rinm/charge', '/rinm/discount', '/rinm/package', '/rinm/diamond', '/rinm/items',
    '/rinm/guide', '/rinm/guide/charge', '/rinm/guide/beginner', '/rinm/guide/growth', '/rinm/guide/equipment', '/rinm/guide/shingyeok', '/rinm/guide/content',
    '/rinm/news',
  ];
  return paths.map((path,index)=>({url:`${baseUrl}${path}`,lastModified:new Date(),changeFrequency:path==='/'||path==='/rinm'?'weekly':'monthly',priority:index===0?1:path==='/rinm'?0.95:0.8}));
}
