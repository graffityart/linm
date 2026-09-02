import Link from 'next/link';
import { siteInfo } from '../data/site';

export default function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-copy">
          <span className="eyebrow">린M 전문 할인 충전</span>
          <h1>린M 충전부터 아이템 정보까지<br />몽땅 다이아에서 한 번에</h1>
          <p>실제 게임 상점 구조와 공식 자료를 기준으로 린M 충전, 다이아, 할인 상품, 아이템과 공략 정보를 정리합니다.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/rinm/charge">린M 충전 보기</Link>
            <a className="btn secondary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 문의</a>
          </div>
        </div>
        <div className="image-slot hero-image-slot" aria-label="메인 히어로 이미지 자리">
          <span>/public/images/home/hero.webp</span>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">주요 서비스</span>
          <h2>린M에서 많이 찾는 정보를 빠르게</h2>
        </div>
        <div className="card-grid four">
          <Link className="feature-card" href="/rinm/charge"><h3>린M 충전</h3><p>충전 상품, 가격, 할인 정보를 확인합니다.</p></Link>
          <Link className="feature-card" href="/rinm/items"><h3>린M 아이템</h3><p>실제 상점 아이템과 재화 정보를 정리합니다.</p></Link>
          <Link className="feature-card" href="/rinm/guide"><h3>린M 공략</h3><p>초보, 육성, 장비와 콘텐츠 공략을 제공합니다.</p></Link>
          <Link className="feature-card" href="/rinm/news"><h3>린M 게임정보</h3><p>공지, 업데이트, 이벤트 정보를 확인합니다.</p></Link>
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/home/store.webp</span></div>
        <div>
          <span className="eyebrow">실제 상점 기반</span>
          <h2>게임 화면과 실제 명칭을 기준으로 구성</h2>
          <p>신기석, 탈것 영혼, 날개 광휘, 마법석, 미네랄 등 확인된 린M 용어를 중심으로 페이지를 확장할 예정입니다.</p>
        </div>
      </section>
    </>
  );
}
