import Link from 'next/link';
import { siteInfo } from '../data/site';

export default function Header() {
  return (
    <header className="site-header">
      <Link
        href="/rinm/discount"
        aria-label="린M 서버별 할인 안내"
        style={{
          display:'block',
          background:'linear-gradient(90deg,#9b6a19 0%,#e0b659 48%,#9b6a19 100%)',
          color:'#100d07',
          textAlign:'center',
          fontWeight:900,
          letterSpacing:'-.02em',
          padding:'8px 12px',
          fontSize:'clamp(.78rem,2.3vw,.94rem)',
          lineHeight:1.35,
          borderBottom:'1px solid rgba(255,224,150,.35)'
        }}
      >
        린M 상품 서버별 최소 20% ~ 최대 25% 할인 <span style={{fontWeight:700,opacity:.78}}>· 서버 및 상품에 따라 할인율 차등 적용</span>
      </Link>
      <div className="container header-inner">
        <Link
          href="/"
          className="brand brand-logo"
          aria-label="몽땅 다이아 홈"
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
        >
          <img
            src="/images/brand/linm-logo.png"
            alt="린M 몽땅 다이아"
            style={{ display: 'block', width: 'auto', height: '52px', maxWidth: '220px', objectFit: 'contain' }}
          />
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
        <a className="header-kakao" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">할인 문의</a>
      </div>
    </header>
  );
}
