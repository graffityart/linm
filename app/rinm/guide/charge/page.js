import Link from 'next/link';

export const metadata = {
  title: '린M 충전 방법·확인사항 가이드',
  description: '린M 충전 전 확인할 내용과 웹페이지 결제 후 게임 내 상점에서 확인하는 흐름을 실제 공식 자료 기준으로 정리합니다.',
};

const steps = [
  ['1. 서버·캐릭터 확인', '충전 전 서버와 캐릭터 정보를 먼저 확인합니다.'],
  ['2. 결제 수단·상품 확인', '이용하려는 충전 단위와 현재 적용되는 프로모션 여부를 확인합니다.'],
  ['3. 지급 재화 확인', '공식 안내에서는 웹페이지 결제 후 린M 코인 지급 방식이 확인됩니다.'],
  ['4. 게임 내 상점 확인', '결제 후 게임 내 상점 → 충전 메뉴에서 지급 내용을 확인하는 흐름이 안내되어 있습니다.'],
];

export default function ChargeGuidePage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 충전 방법</span>
          <h1>린M 충전 전 확인할 순서</h1>
          <p>공식 라운지에서 확인된 결제·충전 안내와 실제 게임 상점 화면을 바탕으로 기본 흐름을 정리합니다.</p>
        </div>
        <div className="image-slot"><span>/public/images/guide/charge-hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">충전 흐름</span>
          <h2>결제 전에 순서대로 확인하세요</h2>
        </div>
        <div className="card-grid two">
          {steps.map(([title, desc]) => (
            <article className="feature-card" key={title}>
              <h2 className="card-title">{title}</h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
        <p className="notice-box">첫 충전 혜택, 추가 증정, 원스토어 프로모션 등은 시점과 계정 상태에 따라 달라질 수 있으므로 결제 직전 현재 적용 조건을 다시 확인해야 합니다.</p>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/guide/charge-content.webp</span></div>
        <div>
          <span className="eyebrow">가격 확인</span>
          <h2>충전 단위와 정상가는 별도 페이지에서</h2>
          <p>판매 페이지와 정보 페이지를 분리해 검색 의도를 명확하게 구성했습니다.</p>
          <Link className="text-link" href="/rinm/charge">린M 충전 가격 보기 →</Link>
        </div>
      </section>
    </>
  );
}
