import Link from 'next/link';

export const metadata = {
  title: '린M 공략·초보 가이드',
  description: '린M 초보, 육성, 장비, 신격, 콘텐츠 공략을 주제별로 정리하는 몽땅 다이아 공략 허브입니다.',
};

const guides = [
  ['초보 가이드', '/rinm/guide/beginner', '처음 시작할 때 필요한 기본 흐름과 우선순위를 정리합니다.'],
  ['육성 가이드', '/rinm/guide/growth', '성장 재화와 주요 성장 요소를 실제 자료 기준으로 정리합니다.'],
  ['장비 가이드', '/rinm/guide/equipment', '장비 강화와 관련 재료를 확인된 명칭 중심으로 설명합니다.'],
  ['신격 가이드', '/rinm/guide/shingyeok', '신격 추천·조합·티어·계승 정보를 별도 허브로 확장합니다.'],
  ['콘텐츠 공략', '/rinm/guide/content', '루비 광차, PVP, 공성전 등 콘텐츠별 공략을 정리합니다.'],
  ['충전 가이드', '/rinm/guide/charge', '충전 단위, 첫 충전 혜택, 이용 전 확인사항을 안내합니다.'],
];

export default function GuidePage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 공략</span>
          <h1>린M 초보부터 성장·신격까지</h1>
          <p>검색 키워드만 늘리는 페이지가 아니라 실제 게임 용어와 공식 자료를 기준으로 각 주제를 독립적으로 정리합니다.</p>
        </div>
        <div className="image-slot"><span>/public/images/guide/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">공략 카테고리</span>
          <h2>필요한 정보부터 바로 찾기</h2>
        </div>
        <div className="card-grid three">
          {guides.map(([title, href, desc]) => (
            <Link className="feature-card" href={href} key={href}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
