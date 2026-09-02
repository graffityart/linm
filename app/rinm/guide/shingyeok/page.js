import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
export const metadata={title:'린M 신격 공략 | 추천·조합·티어·계승 자료 준비',description:'린M 신격 추천, 조합, 티어, 계승을 다루는 공략 허브입니다. 현재 확인되지 않은 신격 효과와 순위는 작성하지 않고 실제 게임 자료 확보 후 확장합니다.',alternates:{canonical:'/rinm/guide/shingyeok'}};
const topics=[['신격 추천','추천을 만들려면 각 신격의 이름, 등급, 효과와 실제 사용 목적이 필요합니다.'],['신격 조합','조합 효과 또는 시너지 화면이 확보되어야 조합별 차이를 근거 있게 정리할 수 있습니다.'],['신격 티어','티어표에는 비교 기준과 패치 시점이 필요하므로 현재는 임의 순위를 만들지 않습니다.'],['신격 계승','계승 조건, 소모 재화, 결과 화면이 확보되면 단계별 가이드로 정리합니다.']];
const needed=['신격 전체 목록 화면','각 신격 상세 효과 화면','신격 등급·성급 등 구분 화면','신격 조합 또는 편성 화면','신격 계승 화면과 필요 재화','신격 관련 공식 공지·업데이트'];
export default function ShingyeokPage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'공략',href:'/rinm/guide'},{name:'신격',href:'/rinm/guide/shingyeok'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 신격</span><h1>신격 추천·조합·티어는 실제 데이터부터</h1><p>신격은 핵심 검색 주제로 유지하되 현재 대화에서 확보된 자료만으로 효과·순위·계승 조건을 확정할 수 없어 근거 없는 공략은 작성하지 않습니다.</p></div><div className="image-slot"><span>/public/images/shingyeok/hero.webp</span></div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">신격 공략 구조</span><h2>앞으로 4개 검색 의도로 확장</h2></div><div className="card-grid two">{topics.map(([t,d])=><article className="feature-card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">추가 자료 요청 목록</span><h2>이 화면들이 확보되면 실제 공략 작성 가능</h2></div><ul className="keyword-list">{needed.map(x=><li key={x}>{x}</li>)}</ul><p className="notice-box">가능하면 신격 메뉴에 들어간 뒤 목록 화면부터 상세 화면까지 순서대로 스크린샷을 제공하면 됩니다. 이미지에 표시된 이름·수치·효과를 그대로 기준 데이터로 사용하겠습니다.</p></section>
<section className="section container split-section"><div className="image-slot content-image-slot"><span>/public/images/shingyeok/content-01.webp</span></div><div><span className="eyebrow">업데이트 관리</span><h2>티어와 추천에는 기준 날짜를 함께 표시</h2><p>향후 신격 공략을 작성할 때는 패치로 정보가 달라지는 문제를 줄이기 위해 확인 날짜와 적용 버전을 함께 관리하는 구조로 만들겠습니다.</p></div></section>
</>}
