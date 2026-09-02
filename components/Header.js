import Link from 'next/link';
import { siteInfo } from '../data/site';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand brand-logo" aria-label="몽땅 다이아 홈">
          <img src="/images/brand/linm-logo.png" alt="린M 몽땅 다이아" />
        </Link>
        <nav className="main-nav" aria-label="주요 메뉴">
          <Link href="/rinm">린M</Link>
          <Link href="/rinm/charge">충전</Link>
          <Link href="/rinm/discount">할인</Link>
          <Link href="/rinm/package">패키지</Link>
          <Link href="/rinm/items">아이템</Link>
          <Link href="/rinm/guide">공략</Link>
          <Link href="/rinm/news">게임정보</Link>
        </nav>
        <a className="header-kakao" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 문의</a>
      </div>
    </header>
  );
}
