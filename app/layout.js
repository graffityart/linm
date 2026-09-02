import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

export const metadata = {
  title: { default: '린M 할인 충전 | 몽땅 다이아', template: '%s | 몽땅 다이아' },
  description: '린M 충전, 할인, 다이아, 패키지, 아이템과 공략·게임정보를 확인하고 몽땅 다이아에 상담할 수 있습니다.',
  keywords: ['린M','린M 충전','린M 할인','린M 다이아','린M 패키지','린M 아이템','린M 공략'],
  openGraph: { type: 'website', locale: 'ko_KR', siteName: '몽땅 다이아', title: '린M 할인 충전 | 몽땅 다이아', description: '린M 충전·할인과 게임정보를 한곳에서 확인하세요.' },
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><FloatingContact/></body></html>;
}
