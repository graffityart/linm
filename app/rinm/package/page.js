export const metadata = {
  title: '린M 패키지 정보',
  description: '린M 패키지와 한정 할인 상품을 실제 게임 상점 화면 기준으로 정리하는 몽땅 다이아 정보 페이지입니다.',
};

const packageTopics = [
  ['한정 할인', '기간 한정 또는 할인 표시가 있는 상품을 실제 화면 기준으로 구분합니다.'],
  ['재료 패키지', '성장·재료와 관련된 묶음 상품은 구성품을 확인한 뒤 별도 정리합니다.'],
  ['특수 아이템', '특수 아이템 카테고리에서 확인되는 상품은 명칭과 용도를 분리해 설명합니다.'],
];

export default function PackagePage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 패키지</span>
          <h1>린M 패키지와 한정 상품 정리</h1>
          <p>현재 확보한 실제 상점 스크린샷에서 확인된 카테고리를 기준으로 구성합니다. 구체적인 패키지명과 구성품은 추가 화면 자료가 확보되는 즉시 세부 페이지로 확장합니다.</p>
        </div>
        <div className="image-slot"><span>/public/images/package/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">상점 기준</span><h2>패키지 확인 시 볼 항목</h2></div>
        <div className="card-grid three">
          {packageTopics.map(([title, desc]) => (
            <article className="feature-card" key={title}><h3>{title}</h3><p>{desc}</p></article>
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/package/content-01.webp</span></div>
        <div>
          <span className="eyebrow">구성품 비교</span>
          <h2>패키지는 가격보다 구성품 비교가 먼저</h2>
          <p>동일 가격대라도 포함 재화와 성장 재료가 다를 수 있으므로 상품명, 가격, 포함 아이템, 구매 제한, 기간을 함께 비교하는 형태로 확장합니다.</p>
        </div>
      </section>
    </>
  );
}
