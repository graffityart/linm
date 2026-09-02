import Link from 'next/link';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
export const metadata={title:'린M 공략 | 초보·육성·장비·신격·콘텐츠 가이드',description:'린M 초보, 육성, 장비, 신격, 콘텐츠와 충전 방법을 주제별로 분리한 몽땅 다이아 린M 공략 허브입니다.',alternates:{canonical:'/rinm/guide'}};
const guides=[['초보 가이드','/rinm/guide/beginner','처음 시작할 때 재화·상점·아이템 구조부터 확인합니다.'],['육성 가이드','/rinm/guide/growth','확인된 성장 재화와 주요 성장 관련 아이템을 정리합니다.'],['장비 가이드','/rinm/guide/equipment','제련 수정, 축복 오일, 펫 장비 조각 등 장비 관련 명칭을 모읍니다.'],['신격 가이드','/rinm/guide/shingyeok','신격 추천·조합·티어·계승으로 확장하기 위한 독립 허브입니다.'],['콘텐츠 공략','/rinm/guide/content','루비 광차, 배틀로얄, PVP, 공성전, 클래스 대전을 주제별로 관리합니다.'],['충전 가이드','/rinm/guide/charge','서버·캐릭터 확인부터 게임 내 상점 → 충전 확인 흐름을 안내합니다.']];
export default function GuidePage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'린M 공략',href:'/rinm/guide'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 공략</span><h1>초보·육성·장비·신격을 검색 목적별로 분리</h1><p>한 페이지에 모든 키워드를 반복하지 않고, 실제 게임 자료가 있는 범위에서 각 공략 주제를 독립적으로 관리합니다.</p></div><div className="image-slot"><span>/public/images/guide/hero.webp</span></div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">공략 카테고리</span><h2>지금 필요한 주제부터 선택</h2></div><div className="card-grid three">{guides.map(([t,h,d])=><Link className="feature-card" href={h} key={h}><h3>{t}</h3><p>{d}</p></Link>)}</div></section>
<section className="section container"><div className="card-grid three"><article className="feature-card"><h3>자료가 확인된 내용</h3><p>상점 화면, 공식 공지, 이벤트 자료에서 실제로 확인된 명칭과 흐름을 우선 사용합니다.</p></article><article className="feature-card"><h3>추가 확인이 필요한 내용</h3><p>효율, 티어, 확률, 최적 조합처럼 근거가 필요한 정보는 자료가 확보될 때까지 확정하지 않습니다.</p></article><article className="feature-card"><h3>페이지 역할 분리</h3><p>충전 가격은 판매 페이지, 충전 방법은 가이드처럼 검색 의도가 겹치지 않도록 내부 구조를 나눕니다.</p></article></div></section>
</>}
