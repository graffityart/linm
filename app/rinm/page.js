import Link from 'next/link';
import { siteInfo } from '../../data/site';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';

export const metadata = {
  title: '린M 종합정보·충전·아이템·공략',
  description: '린M 충전, 할인, 패키지, 다이아, 아이템, 신격 공략, 공지와 이벤트 정보를 한곳에서 확인하는 몽땅 다이아 린M 종합 허브입니다.',
  alternates:{canonical:'/rinm'},
};

const hubs = [
  ['린M 충전', '/rinm/charge', '실제 게임 화면에서 확인된 충전 단위와 정상가, 구매 문의 흐름을 확인합니다.'],
  ['린M 할인', '/rinm/discount', '정상가와 실제 판매가를 비교하기 위한 할인 기준과 확인사항을 정리합니다.'],
  ['린M 패키지', '/rinm/package', '한정 할인과 패키지 구성 정보를 실제 상점 화면 기준으로 확장합니다.'],
  ['린M 다이아', '/rinm/diamond', '다이아·귀속 다이아·린M 코인 등 현재 확인된 재화 정보를 구분합니다.'],
  ['린M 아이템', '/rinm/items', '신기석, 마법석, 미네랄 등 실제 상점에서 확인된 주요 아이템을 분류합니다.'],
  ['린M 공략', '/rinm/guide', '초보, 육성, 장비, 신격, 콘텐츠 공략을 주제별 허브로 나눕니다.'],
  ['린M 신격', '/rinm/guide/shingyeok', '신격 추천·조합·티어·계승 관련 자료를 별도 주제로 관리합니다.'],
  ['린M 게임정보', '/rinm/news', '공지, 업데이트, 이벤트와 프로모션 정보를 확인된 자료 중심으로 정리합니다.'],
  ['린M 충전 방법', '/rinm/guide/charge', '충전 전 확인사항과 게임 내 상점 → 충전 확인 흐름을 안내합니다.'],
];

const terms=['린M 코인','다이아','귀속 다이아','신기석','공명 제련 수정','마법석','미네랄','탈것 영혼','날개 광휘','돌파석','보물지도'];

export default function RinMPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'}]}/>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 종합정보</span>
          <h1>린M 충전부터 공략까지 한곳에서</h1>
          <p>리니지M과 혼동하지 않고, 실제 린M 상점 스크린샷과 공식 라운지에서 확인한 명칭을 기준으로 충전·아이템·공략 정보를 연결합니다.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/rinm/charge">린M 충전 보기</Link>
            <a className="btn secondary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 문의</a>
          </div>
        </div>
        <div className="image-slot"><span>/public/images/home/rinm-hub.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">린M 바로가기</span><h2>검색 목적에 맞는 페이지로 이동</h2></div>
        <div className="card-grid three">
          {hubs.map(([title, href, desc]) => (
            <Link className="feature-card" href={href} key={href}><h2 className="card-title">{title}</h2><p>{desc}</p></Link>
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/home/rinm-info.webp</span></div>
        <div>
          <span className="eyebrow">확인된 게임 용어</span>
          <h2>자료에 있는 명칭부터 정확하게 정리</h2>
          <p>현재 확보한 게임 화면과 공식 라운지 자료에서 실제로 확인되는 용어를 우선 사용합니다. 아직 효과나 수치가 확인되지 않은 항목은 추정해서 채우지 않고 추가 자료 확보 후 보강합니다.</p>
          <ul className="keyword-list">{terms.map(term=><li key={term}>{term}</li>)}</ul>
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">사이트 이용 흐름</span><h2>정보 확인과 구매 문의를 분리했습니다</h2></div>
        <div className="card-grid three">
          <article className="feature-card"><h3>1. 정보 확인</h3><p>충전 가격, 재화, 아이템, 공략처럼 필요한 주제를 먼저 확인합니다.</p></article>
          <article className="feature-card"><h3>2. 상품 확인</h3><p>충전 단위와 정상가, 계정 혜택 적용 여부 등을 확인한 뒤 필요한 상품을 선택합니다.</p></article>
          <article className="feature-card"><h3>3. 상담 연결</h3><p>현재는 사이트 직접 결제가 아니라 카카오톡 또는 전화로 실제 판매가와 가능 여부를 확인합니다.</p></article>
        </div>
      </section>
    </>
  );
}
