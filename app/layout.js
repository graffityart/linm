import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: {
    default: '린M 할인 충전 | 몽땅 다이아',
    template: '%s | 몽땅 다이아',
  },
  description: '린M 충전, 다이아, 할인 상품과 게임 정보·공략을 한곳에서 확인하는 몽땅 다이아입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
