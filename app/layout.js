import './globals.css';
import './image-styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import JsonLd from '../components/JsonLd';

const baseUrl=process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aeonsoft.co.kr';

export const metadata = {
  metadataBase:new URL(baseUrl),
  title:{default:'린M 할인 충전·다이아·아이템 | 몽땅 다이아',template:'%s | 몽땅 다이아'},
  description:'린M 충전부터 다이아, 패키지, 아이템과 공략 정보를 한곳에서 확인하세요. 구매 가능한 린M 관련 상품은 서버와 조건에 따라 최소 20%부터 최대 25%까지 할인 판매가를 안내합니다.',
  keywords:['린M','린M 할인'],
  verification:{google:'0OArKttYnd828BM4Tw87y3HBHax_a24WESvmaDFQbuA',other:{'naver-site-verification':'a79c29750ef86f76701e34b8f791c6f391831e0b'}},
  alternates:{canonical:'/'},
  openGraph:{type:'website',locale:'ko_KR',siteName:'몽땅 다이아',url:'/',title:'린M 할인 충전·다이아·아이템 | 몽땅 다이아',description:'린M 충전, 다이아, 패키지와 아이템 정보를 확인하고 서버별 최소 20%부터 최대 25%까지 할인 판매가를 안내받으세요.'},
  twitter:{card:'summary',title:'린M 할인 충전·다이아·아이템 | 몽땅 다이아',description:'린M 관련 상품의 서버별 할인 조건과 충전·다이아·아이템 정보를 확인하세요.'}
};

export default function RootLayout({children}){return <html lang="ko"><body><JsonLd/><Header/><main>{children}</main><Footer/><FloatingContact/></body></html>}
