import { siteInfo } from '../data/site';

export default function JsonLd(){
  const baseUrl=process.env.NEXT_PUBLIC_SITE_URL || 'https://linm.vercel.app';
  const data={
    '@context':'https://schema.org','@graph':[
      {'@type':'WebSite','@id':`${baseUrl}/#website`,url:baseUrl,name:siteInfo.brand,inLanguage:'ko-KR'},
      {'@type':'Organization','@id':`${baseUrl}/#organization`,name:siteInfo.brand,url:baseUrl,email:siteInfo.email,telephone:siteInfo.phone,address:{'@type':'PostalAddress',streetAddress:siteInfo.address,addressCountry:'KR'},contactPoint:{'@type':'ContactPoint',telephone:siteInfo.phone,contactType:'customer service',availableLanguage:'Korean'}}
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>;
}
