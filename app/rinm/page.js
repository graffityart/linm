import Link from 'next/link';
import { siteInfo } from '../../data/site';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';
import SiteImage from '../../components/SiteImage';

export const metadata = {
  title: '린M 20~25% 할인·충전·아이템·공략 종합정보',
  description: '린M 관련 상품의 서버별 최소 20%~최대 25% 할인 안내와 충전, 다이아, 패키지, 아이템, 공략, 게임정보를 한곳에서 확인하는 몽땅 다이아 린M 종합 허브입니다.',
  keywords:['린M','린M 할인','린M 20% 할인','린M 25% 할인','린M 충전','린M 다이아','린M 패키지','린M 아이템','린M 공략'],
  alternates:{canonical:'/rinm'},
};

const hubs = [
  ['린M 할인', '/rinm/discount', '서버별 최소 20%부터 최대 25% 할인 기준과 정상가 대비 절감 금액을 확인합니다.'],
  ['린M 충전', '/rinm/charge', '실제 게임 화면 기준 정상가와 서버별 할인 판매가 상담 흐름을 확인합니다.'],
  ['린M 패키지', '/rinm/package', '패키지 구성·구매 조건과 구매 가능한 상품의 서버별 할인 상담을 확인합니다.'],
  ['린M 다이아', '/rinm/diamond', '다이아·귀속 다이아·린M 코인을 구분하고 관련 상품 할인 구매 동선을 확인합니다.'],
  ['린M 아이템', '/rinm/items', '신기석, 마법석, 미네랄 등 실제 상점에서 확인된 아이템과 구매 안내를 확인합니다.'],
  ['린M 공략', '/rinm/guide', '초보, 육성, 장비, 신격, 콘텐츠 공략을 주제별로 확인합니다.'],
  ['린M 신격', '/rinm/guide/shingyeok', '신격 추천·조합·티어·계승 관련 자료를 별도 주제로 관리합니다.'],
  ['린M 게임정보', '/rinm/news', '공지, 업데이트, 이벤트와 프로모션 정보를 확인된 자료 중심으로 정리합니다.'],
  ['린M 충전 방법', '/rinm/guide/charge', '충전 전 확인사항과 게임 내 상점 → 충전 확인 흐름을 안내합니다.'],
];

const terms=['린M 코인','다이아','귀속 다이아','신기석','공명 제련 수정','마법석','미네랄','탈것 영혼','날개 광휘','돌파석','보물지도'];

export default function RinMPage() {
  return <>
    <BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'}]}/>
    <section className="subhero container"><div><span className="eyebrow">린M 종합 허브 · 몽땅 다이아</span><h1>린M 정보부터<br/><span style={{color:'#ffda84'}}>20% ~ 25% 할인 구매까지</span></h1><p>린M 충전·다이아·패키지·아이템·공략 정보를 한곳에서 확인하고, 몽땅 다이아에서 구매 가능한 린M 관련 상품은 서버와 상품 조건에 따라 <b style={{color:'#fff'}}>최소 20%부터 최대 25%</b> 범위의 할인 판매가를 확인할 수 있습니다.</p><div className="hero-actions"><a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">내 서버 할인율 확인</a><Link className="btn secondary" href="/rinm/discount">20~25% 할인 기준</Link></div><div className="trust-row"><span>최소 20% 할인</span><span>최대 25% 할인</span><span>서버별 차등 적용</span><span>사업자 정보 공개</span></div></div><SiteImage src="/images/home/home-rinm-hub.webp" alt="린M 20~25% 할인과 종합 정보 허브 대표 이미지" priority/></section>

    <section className="section container" style={{paddingBottom:'30px'}}><div className="section-head"><span className="eyebrow">몽땅 다이아 할인 기준</span><h2>할인은 크게, 적용 기준은 명확하게</h2><p className="section-desc">모든 서버와 상품에 동일한 할인율을 표시하지 않습니다. 서버·상품·판매 조건을 확인한 뒤 실제 적용 가능한 할인율과 최종 판매가를 구매 전에 안내합니다.</p></div><div className="card-grid three"><article className="feature-card"><span className="eyebrow">MINIMUM</span><h2 style={{fontSize:'2.5rem',color:'#ffda84',margin:'0 0 8px'}}>20%</h2><h3>최소 할인 기준</h3><p>현재 운영 기준에서 구매 가능한 린M 관련 상품은 최소 20% 할인부터 안내합니다.</p></article><article className="feature-card"><span className="eyebrow">MAXIMUM</span><h2 style={{fontSize:'2.5rem',color:'#ffda84',margin:'0 0 8px'}}>25%</h2><h3>최대 할인 범위</h3><p>서버와 상품 조건이 맞는 경우 최대 25% 범위까지 할인 적용이 가능합니다.</p></article><article className="feature-card"><span className="eyebrow">SERVER</span><h2 style={{fontSize:'2rem',color:'#ffda84',margin:'0 0 8px'}}>서버별</h2><h3>차등 적용</h3><p>구매 전에 서버를 확인하고 현재 적용 할인율과 최종 판매가를 안내합니다.</p></article></div><div className="center-action"><Link className="btn primary" href="/rinm/discount">할인 금액 예시 확인</Link></div></section>

    <section className="section container"><div className="section-head"><span className="eyebrow">린M 바로가기</span><h2>구매와 게임정보를 목적별로 확인</h2></div><div className="card-grid three">{hubs.map(([title, href, desc]) => <Link className="feature-card" href={href} key={href}><h2 className="card-title">{title}</h2><p>{desc}</p></Link>)}</div></section>

    <section className="section container split-section"><SiteImage className="content-image-slot" src="/images/home/home-rinm-info.webp" alt="린M 아이템과 재화 정보 이미지"/><div><span className="eyebrow">정보 신뢰 기준</span><h2>린M 자료에 있는 명칭부터 정확하게</h2><p>리니지M과 혼동하지 않고 현재 확보한 린M 게임 화면과 관련 자료에서 실제로 확인되는 용어를 우선 사용합니다. 효과나 수치가 확인되지 않은 항목은 임의로 채우지 않고 자료가 추가될 때 보강합니다.</p><ul className="keyword-list">{terms.map(term=><li key={term}>{term}</li>)}</ul></div></section>

    <section className="section container"><div className="section-head"><span className="eyebrow">할인 구매 흐름</span><h2>정보 확인부터 최종 판매가까지</h2></div><div className="flow-line"><article><b>01</b><h3>상품 정보 확인</h3><p>충전, 다이아, 패키지, 아이템 등 필요한 린M 정보를 먼저 확인합니다.</p></article><article><b>02</b><h3>서버·상품 확인</h3><p>구매하려는 상품과 서버를 확인해 현재 적용 가능한 할인 조건을 확인합니다.</p></article><article><b>03</b><h3>할인 판매가 확인</h3><p>20~25% 범위에서 실제 적용 할인율과 최종 판매가를 안내받은 뒤 구매 여부를 결정합니다.</p></article></div><div className="center-action"><a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 할인 문의</a></div></section>

    <section className="section container"><div className="section-head"><span className="eyebrow">신뢰할 수 있는 구매 안내</span><h2>가격만 강조하지 않고 확인 기준도 공개합니다</h2></div><div className="card-grid four"><article className="feature-card"><h3>사업자 정보 공개</h3><p>상호, 대표자, 사업자등록번호, 통신판매업 신고정보와 연락처를 사이트 하단에서 확인할 수 있습니다.</p></article><article className="feature-card"><h3>서버별 할인율 안내</h3><p>서버와 상품 조건에 따라 달라지는 실제 적용 할인율을 구매 전에 안내합니다.</p></article><article className="feature-card"><h3>최종 판매가 확인</h3><p>할인율뿐 아니라 실제 지불하게 될 최종 판매가를 확인한 뒤 구매 상담을 진행합니다.</p></article><article className="feature-card"><h3>민감정보 미요청</h3><p>문의 단계에서 게임 계정 비밀번호나 결제 비밀번호를 입력받지 않습니다.</p></article></div><p className="notice-box">※ 할인율은 서버·상품·판매 조건에 따라 차등 적용됩니다. 현재 운영 기준은 최소 20%부터 최대 25% 범위이며, 실제 적용 할인율과 최종 판매가는 구매 전 상담을 통해 확인할 수 있습니다.</p></section>
  </>;
}
