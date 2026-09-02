import Link from 'next/link';
import { siteInfo } from '../../../data/site';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';

export const metadata = {
  title: '린M 할인 충전 안내',
  description: '린M 할인 충전과 구매 전 확인사항, 공식 정상가 비교 기준, 첫 충전 혜택 확인 방법을 정리한 몽땅 다이아 안내 페이지입니다.',
  alternates:{canonical:'/rinm/discount'},
};

export default function DiscountPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'린M 할인',href:'/rinm/discount'}]}/>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 할인</span>
          <h1>린M 충전, 할인 조건부터 확인하세요</h1>
          <p>공식 상점 정상가를 기준으로 몽땅 다이아 판매가와 할인율을 비교할 수 있도록 구성합니다. 아직 확정되지 않은 할인율은 표시하지 않고 실제 상담 가능한 가격만 반영합니다.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/rinm/charge">공식 정상가 확인</Link>
            <a className="btn secondary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 할인 문의</a>
          </div>
        </div>
        <div className="image-slot"><span>/public/images/discount/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">할인 확인 포인트</span><h2>가격만 보지 말고 지급 기준까지 확인</h2></div>
        <div className="card-grid four">
          <article className="feature-card"><h3>공식 정상가</h3><p>게임 충전 화면에서 확인된 정상가를 기준으로 할인 여부를 비교합니다.</p></article>
          <article className="feature-card"><h3>실제 판매가</h3><p>몽땅 다이아 판매가는 상담 가능한 금액이 확정된 뒤 표시합니다.</p></article>
          <article className="feature-card"><h3>첫 충전 혜택</h3><p>계정 상태와 시점에 따라 적용 여부가 달라질 수 있으므로 구매 전 확인합니다.</p></article>
          <article className="feature-card"><h3>서버·캐릭터</h3><p>충전 진행 전 서버와 캐릭터 또는 캐릭터 ID를 정확하게 확인합니다.</p></article>
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/discount/content-01.webp</span></div>
        <div>
          <span className="eyebrow">비교 기준</span>
          <h2>정상가 → 판매가 → 절감 금액 순서로 표시</h2>
          <p>실제 판매가가 확정되면 단순히 ‘할인’이라는 표현만 쓰지 않고 정상가, 판매가, 차액을 한 화면에서 볼 수 있도록 구성합니다. 이를 통해 이용자가 상품별 가격 차이를 직접 확인할 수 있게 합니다.</p>
          <Link className="text-link" href="/order">구매 문의 준비하기 →</Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">현재 운영 기준</span><h2>확정되지 않은 할인율은 표시하지 않습니다</h2></div>
        <div className="card-grid three">
          <article className="feature-card"><h3>임의 할인율 미표기</h3><p>판매 정책이 정해지기 전에는 추정 할인율이나 임의 가격을 넣지 않습니다.</p></article>
          <article className="feature-card"><h3>상담 후 최종 확인</h3><p>현재는 카카오톡과 전화 상담을 통해 상품 가능 여부와 실제 판매가를 확인합니다.</p></article>
          <article className="feature-card"><h3>민감정보 미요청</h3><p>구매 상담을 위해 계정 비밀번호나 결제 비밀번호를 입력하도록 요구하지 않습니다.</p></article>
        </div>
      </section>
    </>
  );
}
