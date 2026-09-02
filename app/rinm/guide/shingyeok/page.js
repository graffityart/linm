export const metadata = {
  title: '린M 신격 공략·추천·조합',
  description: '린M 신격 추천, 조합, 티어, 계승 관련 정보를 실제 자료가 확보되는 범위에서 정리하는 몽땅 다이아 공략 페이지입니다.',
};

const topics = [
  ['신격 추천', '용도별 추천 기준은 실제 효과와 보유 자료를 확인한 뒤 정리합니다.'],
  ['신격 조합', '조합 시너지와 운용 방식은 확인 가능한 게임 정보 기준으로 확장합니다.'],
  ['신격 티어', '임의 티어표가 아니라 업데이트 시점과 근거가 있는 자료를 기준으로 제공합니다.'],
  ['신격 계승', '계승 조건과 비용, 주의사항은 관련 화면과 공식 안내를 확보한 뒤 상세화합니다.'],
];

export default function ShingyeokPage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 신격</span>
          <h1>린M 신격 추천·조합·티어 가이드</h1>
          <p>신격은 검색 수요가 큰 핵심 공략 주제로 별도 허브를 구성합니다. 현재 확인되지 않은 효과나 수치는 임의로 채우지 않고 추가 자료 확보 후 반영합니다.</p>
        </div>
        <div className="image-slot"><span>/public/images/shingyeok/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">신격 공략 구조</span><h2>검색 의도별로 나눠서 정리</h2></div>
        <div className="card-grid two">
          {topics.map(([title, desc]) => (
            <article className="feature-card" key={title}><h3>{title}</h3><p>{desc}</p></article>
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/shingyeok/content-01.webp</span></div>
        <div>
          <span className="eyebrow">업데이트 대응</span>
          <h2>신격 정보는 패치 시점과 함께 관리</h2>
          <p>밸런스 조정이나 신규 신격 추가 시 기존 추천 순위가 달라질 수 있으므로 업데이트 날짜와 근거를 함께 표시하는 구조로 운영합니다.</p>
        </div>
      </section>
    </>
  );
}
