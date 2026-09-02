import Link from 'next/link';
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
export const metadata={title:'린M 육성 가이드 | 성장 재료·돌파석·마법석',description:'린M 육성 관련 신기석, 수정류, 성석 가루, 돌파석, 마법석 등 실제 확인된 성장 아이템을 분류하고 추가 공략에 필요한 자료를 안내합니다.',alternates:{canonical:'/rinm/guide/growth'}};
const groups=[['성장·제련 관련',['신기석','공명 제련 수정','구슬 수정','홀리 수정','황금 수정','성물 수정','성석 가루']],['이벤트에서 확인된 성장 보상',['1급 돌파석','2레벨 마법석 상자','골드']],['추가 확인이 필요한 정보',['각 재료의 사용처','필요 수량','획득처','레벨별 우선순위','성장 단계별 효율']]];
export default function GrowthPage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'공략',href:'/rinm/guide'},{name:'육성',href:'/rinm/guide/growth'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 육성</span><h1>성장 재료의 이름과 출처부터 구분</h1><p>현재 확보한 상점 스크린샷과 라운지 이벤트 자료에서 실제로 확인된 성장 관련 아이템만 정리합니다.</p></div><div className="image-slot"><span>/public/images/guide/growth-hero.webp</span></div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">육성 기초 데이터</span><h2>확인된 재료와 아직 필요한 정보</h2></div><div className="card-grid three">{groups.map(([t,items])=><article className="feature-card" key={t}><h3>{t}</h3><ul className="keyword-list">{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></section>
<section className="section container"><div className="card-grid three"><article className="feature-card"><h3>상점 자료</h3><p>신기석과 수정류, 성석 가루 등 실제 상점 화면에서 확인된 명칭을 육성 재료 후보로 관리합니다.</p></article><article className="feature-card"><h3>이벤트 자료</h3><p>제공된 라운지 이벤트 게시글에서는 1급 돌파석 20개, 골드 50,000, 2레벨 마법석 상자 1개가 보상으로 안내되었습니다.</p></article><article className="feature-card"><h3>효율 판단은 보류</h3><p>사용 효과와 필요 수량이 확인되지 않은 상태에서는 어떤 재료를 먼저 써야 하는지 임의로 추천하지 않습니다.</p></article></div></section>
<section className="section container split-section"><div className="image-slot content-image-slot"><span>/public/images/guide/growth-content.webp</span></div><div><span className="eyebrow">다음 자료</span><h2>캐릭터 성장·재료 사용 화면이 필요합니다</h2><p>성장 메뉴, 재료 사용처, 요구 수량이 보이는 화면이 확보되면 초반·중반·후반 육성 순서로 세분화할 수 있습니다.</p><Link className="text-link" href="/rinm/items">린M 아이템 전체 보기 →</Link></div></section>
</>}
