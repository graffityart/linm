import Link from 'next/link';

export const metadata = {
  title: '린M 다이아·귀속 다이아·린M 코인 정보',
  description: '린M 다이아, 귀속 다이아, 린M 코인 등 실제 자료에서 확인된 재화와 충전 관련 정보를 정리합니다.',
};

const currencies = [
  ['다이아', '게임 상점 화면에서 확인된 주요 재화입니다.'],
  ['귀속 다이아', '일반 다이아와 구분되어 표시되는 귀속 재화입니다.'],
  ['린M 코인', '공식 안내에서 웹페이지 결제 후 지급되는 재화로 확인됩니다.'],
  ['골드', '이벤트 보상 등에서 확인되는 게임 내 재화입니다.'],
];

export default function DiamondPage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 다이아</span>
          <h1>린M 다이아와 주요 재화 정리</h1>
          <p>다이아, 귀속 다이아, 린M 코인처럼 실제 화면과 공식 자료에서 확인된 명칭만 기준으로 정리합니다.</p>
        </div>
        <div className="image-slot"><span>/public/images/charge/diamond-hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="card-grid two">
          {currencies.map(([title, desc]) => (
            <article className="feature-card" key={title}>
              <h2 className="card-title">{title}</h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
        <p className="notice-box">린M 코인은 확보한 공식 안내에서 1코인 = 100KRW 가치로 안내되어 있습니다. 실제 결제·증정 조건은 시점별 공식 공지를 확인해야 합니다.</p>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/charge/diamond-content.webp</span></div>
        <div>
          <span className="eyebrow">관련 정보</span>
          <h2>충전 가격과 이용 흐름도 함께 확인</h2>
          <p>충전 단위와 정상가는 충전 페이지에서, 실제 충전 전 확인사항은 별도 가이드에서 나누어 제공합니다.</p>
          <Link className="text-link" href="/rinm/charge">린M 충전 가격 보기 →</Link><br />
          <Link className="text-link" href="/rinm/guide/charge">린M 충전 방법 보기 →</Link>
        </div>
      </section>
    </>
  );
}
