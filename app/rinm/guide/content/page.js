import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
export const metadata={title:'린M 콘텐츠 공략·게임 가이드',description:'린M 주요 콘텐츠의 참여 조건과 진행 방식, 보상 등 확인된 게임 정보를 중심으로 공략 자료를 정리합니다. 관련 상품은 서버 조건에 따라 최소 20%부터 최대 25%까지 할인 판매가를 확인할 수 있습니다.',keywords:['린M','린M 콘텐츠 공략'],alternates:{canonical:'/rinm/guide/content'}};
const candidates=['루비 광차','배틀로얄','PVP','공성전','클래스 대전'];
const needed=['콘텐츠 메뉴 전체 화면','각 콘텐츠 입장 화면','참여 조건·입장 횟수','보상 목록 화면','플레이 규칙·승리 조건','관련 공식 업데이트'];
export default function ContentGuide(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'공략',href:'/rinm/guide'},{name:'콘텐츠',href:'/rinm/guide/content'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 콘텐츠</span><h1>콘텐츠 공략은 실제 게임 화면 확인 후 확장</h1><p>루비 광차·배틀로얄·PVP·공성전·클래스 대전은 프로젝트 초기에 정리한 키워드 후보입니다. 현재 제공된 공식 게시글과 상점 스크린샷만으로는 각 콘텐츠의 존재와 세부 규칙을 모두 검증할 수 없습니다.</p></div><div className="image-slot"><span>/public/images/guide/content-hero.webp</span></div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">검증 대기 키워드</span><h2>자료 확인 전에는 공략으로 단정하지 않습니다</h2></div><ul className="keyword-list">{candidates.map(x=><li key={x}>{x}</li>)}</ul><p className="notice-box">위 명칭은 현재 사이트의 콘텐츠 키워드 후보이며, 이번에 제공된 자료에서 세부 규칙이나 보상을 확인한 항목은 아닙니다. 실제 게임 메뉴 또는 공식 자료가 확인되면 각각의 페이지로 분리합니다.</p></section>
<section className="section container"><div className="section-head"><span className="eyebrow">필요 자료</span><h2>콘텐츠별 상세 공략을 만드는 데 필요한 화면</h2></div><div className="card-grid three">{needed.map((x,i)=><article className="feature-card" key={x}><h3>{i+1}. {x}</h3><p>화면의 실제 명칭·조건·수치를 그대로 데이터화해 공략에 반영합니다.</p></article>)}</div></section>
</>}
