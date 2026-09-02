const baseUrl=process.env.NEXT_PUBLIC_SITE_URL || 'https://linm.vercel.app';
export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:['/order']},sitemap:`${baseUrl}/sitemap.xml`,host:baseUrl}}
