import { siteInfo } from '../../../data/site';

export const metadata = {
  title: '린M 할인 충전 안내',
  description: '린M 할인 충전과 구매 전 확인사항을 정리한 몽땅 다이아 안내 페이지입니다. 실제 판매가와 할인율은 운영 정책 확정 후 표시합니다.',
};

export default function DiscountPage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 할인</span>
          <h1>린M 충전, 할인 조건부터 확인하세요</h1>
          <p>공식 상점 정상가를 기준으로 몽땅 다이아 판매가와 할인율을 비교할 수 있도록 구성합니다. 현재는 판매가 확정 전이므로 상담 연결과 이용 전 확인사항을 우선 제공합니다.</p>
          <div className="hero-actions">
            <a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 할인 문의</a>
            <a className="btn secondary" href={`tel:${siteInfo.phone.replaceAll('-', '')}`}>전화 문의</a>
          </div>
        </div>
        <div className="image-slot"><span>/public/images/discount/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">할인 확인 포인트</span>
          <h2>가격만 보지 말고 지급 기준까지 확인</h2>
        </div>
        <div className="card-grid three">
          <article className="feature-card"><h3>공식 정상가 비교</h3><p>게임 충전 화면의 정상가와 몽땅 다이아 판매가를 나란히 비교하는 구조로 확장합니다.</p></article>
          <article className="feature-card"><h3>첫 충전 혜택 확인</h3><p>계정 상태에 따라 첫 충전 혜택이 다를 수 있으므로 구매 전 적용 여부를 확인합니다.</p></article>
          <article className="feature-card"><h3>서버·캐릭터 확인</h3><p>충전 전 서버와 캐릭터 정보를 정확하게 확인하도록 안내합니다.</p></article>
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/discount/content-01.webp</span></div>
        <div>
          <span className="eyebrow">판매가 업데이트 예정</span>
          <h2>할인율은 실제 판매 정책 확정 후 표시</h2>
          <p>정상가, 몽땅 다이아 판매가, 할인 금액, 할인율을 한 화면에서 비교하도록 구성할 예정입니다. 확정 전에는 임의의 할인율을 노출하지 않습니다.</p>
        </div>
      </section>
    </>
  );
}
