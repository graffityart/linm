import Link from 'next/link';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
export const metadata={title:'린M 아이템·상점 재화 정보',description:'린M 실제 상점 화면에서 확인한 신기석, 수정류, 탈것 영혼, 날개 광휘, 마법석, 미네랄, 보물지도 등 아이템과 상점 분류를 정리합니다.',alternates:{canonical:'/rinm/items'}};
const groups=[{title:'재료·성장',items:['신기석','공명 제련 수정','구슬 수정','홀리 수정','황금 수정','성물 수정','성석 가루']},{title:'탈것·장비 관련',items:['탈것 영혼','날개 광휘','홀리웨폰 축복 오일','펫 장비 조각','영혼의 핵']},{title:'교환·편의',items:['미네랄 주머니','1레벨 마법석 상자','일반 보물지도','고급 보물지도','슈퍼 보물지도','시공 열쇠','명상(6시간)']}];
const shops=['귀족 상점','재료','특수 아이템','한정 할인','미네랄 교환','잡화','레저 상점'];
export default function ItemsPage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'린M 아이템',href:'/rinm/items'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 아이템</span><h1>실제 상점 화면에서 확인한 린M 아이템</h1><p>검색어에 맞춰 임의의 아이템을 추가하지 않고, 제공받은 게임 스크린샷에서 명칭을 확인한 항목부터 분류합니다.</p></div><div className="image-slot"><span>/public/images/items/hero.webp</span></div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">아이템 분류</span><h2>성장 재료부터 보물지도까지</h2></div><div className="card-grid three">{groups.map(g=><article className="feature-card" key={g.title}><h2 className="card-title">{g.title}</h2><ul className="keyword-list">{g.items.map(i=><li key={i}>{i}</li>)}</ul></article>)}</div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">게임 상점 메뉴</span><h2>현재 화면에서 확인된 상점 분류</h2></div><ul className="keyword-list">{shops.map(x=><li key={x}>{x}</li>)}</ul><p className="notice-box">각 아이템의 정확한 효과, 요구 레벨, 교환 비율, 구매 제한 등은 현재 확보한 화면만으로 모두 확정할 수 없습니다. 해당 정보는 상세 화면이나 공식 자료가 추가될 때 보강합니다.</p></section>
<section className="section container split-section"><div className="image-slot content-image-slot"><span>/public/images/items/content-01.webp</span></div><div><span className="eyebrow">아이템을 볼 때</span><h2>이름만 같아도 판매처와 조건은 다를 수 있습니다</h2><p>상점 카테고리, 요구 재화, 구매 제한, 이벤트 기간을 함께 확인하는 구조로 상세 정보를 확장할 예정입니다.</p><Link className="text-link" href="/rinm/guide/growth">린M 육성 가이드 →</Link><br/><Link className="text-link" href="/rinm/guide/equipment">린M 장비 가이드 →</Link></div></section>
</>}
