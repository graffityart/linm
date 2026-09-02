export default function BreadcrumbJsonLd({items}){
  const baseUrl=process.env.NEXT_PUBLIC_SITE_URL || 'https://linm.vercel.app';
  const data={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((item,index)=>({'@type':'ListItem',position:index+1,name:item.name,item:`${baseUrl}${item.href}`}))};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>;
}
