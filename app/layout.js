import './globals.css';
import './image-styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import JsonLd from '../components/JsonLd';

const baseUrl=process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aeonsoft.co.kr';

export const metadata = {
  metadataBase:new URL(baseUrl),
  title:{default:'린M 20~25% 할인 충전 | 몽땅 다이아',template:'%s | 몽땅 다이아'},
  description:'린M 관련 상품을 서버별 최소 20%부터 최대 25%까지 차등 할인 판매합니다. 충전, 다이아, 패키지, 아이템 할인과 서버별 최종 판매가를 구매 전 상담으로 확인하세요.',
  keywords:['린M','린M 충전','린M 할인','린M 20% 할인','린M 25% 할인','린M 다이아','린M 패키지','린M 아이템','린M 공략'],
  alternates:{canonical:'/'},
  openGraph:{type:'website',locale:'ko_KR',siteName:'몽땅 다이아',url:'/',title:'린M 서버별 20~25% 할인 | 몽땅 다이아',description:'린M 관련 상품 서버별 최소 20%~최대 25% 차등 할인. 구매 전 최종 할인율과 판매가를 확인하세요.'},
  twitter:{card:'summary',title:'린M 서버별 20~25% 할인 | 몽땅 다이아',description:'린M 관련 상품을 서버별 최소 20%부터 최대 25%까지 차등 할인 판매합니다.'}
};

export default function RootLayout({children}){return <html lang="ko"><body><JsonLd/><Header/><main>{children}</main><Footer/><FloatingContact/></body></html>}
