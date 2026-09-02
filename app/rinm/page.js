import Link from 'next/link';
import { siteInfo } from '../../data/site';

export const metadata = {
  title: '린M 종합정보·충전·아이템·공략',
  description: '린M 충전, 할인, 패키지, 다이아, 아이템, 신격 공략, 공지와 이벤트 정보를 한곳에서 확인하는 몽땅 다이아 린M 종합 허브입니다.',
};

const hubs = [
  ['린M 충전', '/rinm/charge', '충전 단위와 정상가, 할인 판매 안내를 확인합니다.'],
  ['린M 할인', '/rinm/discount', '정상가와 판매가 비교, 할인 이용 전 확인사항을 정리합니다.'],
  ['린M 패키지', '/rinm/package', '한정 할인과 패키지 구성 정보를 실제 상점 기준으로 확장합니다.'],
  ['린M 다이아', '/rinm/diamond', '다이아·귀속 다이아·린M 코인 등 확인된 재화 정보를 정리합니다.'],
  ['린M 아이템', '/rinm/items', '상점 화면에서 확인된 주요 아이템과 재화를 분류합니다.'],
  ['린M 공략', '/rinm/guide', '초보, 육성, 장비, 신격, 콘텐츠 공략 허브입니다.'],
  ['린M 신격', '/rinm/guide/shingyeok', '신격 추천·조합·티어·계승 정보를 별도 허브로 관리합니다.'],
  ['린M 게임정보', '/rinm/news', '공지, 업데이트, 이벤트와 프로모션 정보를 정리합니다.'],
  ['린M 충전 방법', '/rinm/guide/charge', '충전 전 확인사항과 게임 내 확인 흐름을 안내합니다.'],
];

export default function RinMPage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 종합정보</span>
          <h1>린M 충전부터 공략까지 한곳에서</h1>
          <p>실제 게임 상점 스크린샷과 공식 라운지에서 확인한 명칭을 기준으로 린M 정보를 계속 확장합니다.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/rinm/charge">린M 충전 보기</Link>
            <a className="btn secondary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 문의</a>
          </div>
        </div>
        <div className="image-slot"><span>/public/images/home/rinm-hub.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">린M 바로가기</span>
          <h2>검색 목적에 맞는 페이지로 이동</h2>
        </div>
        <div className="card-grid three">
          {hubs.map(([title, href, desc]) => (
            <Link className="feature-card" href={href} key={href}>
              <h2 className="card-title">{title}</h2>
              <p>{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/home/rinm-info.webp</span></div>
        <div>
          <span className="eyebrow">확인된 게임 용어</span>
          <h2>다이아·귀속 다이아·린M 코인부터 상점 아이템까지</h2>
          <p>자료에서 확인된 게임 내 명칭을 우선 사용하고, 아직 확인되지 않은 효과나 수치는 임의로 작성하지 않는 방식으로 콘텐츠를 구축합니다.</p>
        </div>
      </section>
    </>
  );
}
