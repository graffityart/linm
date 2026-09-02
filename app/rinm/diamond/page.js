import Link from 'next/link';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';

export const metadata={title:'린M 다이아·귀속 다이아·린M 코인 정보',description:'린M 다이아, 귀속 다이아, 린M 코인과 골드 등 실제 게임 화면과 공식 안내에서 확인된 재화를 구분해 정리합니다.',alternates:{canonical:'/rinm/diamond'}};
const currencies=[['다이아','게임 상점 화면에서 확인된 주요 재화입니다.'],['귀속 다이아','일반 다이아와 별도로 표시되는 귀속 재화입니다.'],['린M 코인','확보한 공식 안내에서 웹페이지 결제 후 지급되는 재화로 확인됩니다.'],['골드','라운지 이벤트 보상 등에서 실제 명칭이 확인된 게임 내 재화입니다.']];
export default function DiamondPage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'린M 다이아',href:'/rinm/diamond'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 다이아</span><h1>린M 다이아·귀속 다이아·린M 코인은 어떻게 다를까?</h1><p>이름이 비슷한 재화를 한데 섞지 않고, 실제 게임 화면과 공식 안내에서 확인된 범위만 구분해 정리합니다.</p></div><div className="image-slot"><span>/public/images/charge/diamond-hero.webp</span></div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">재화 구분</span><h2>현재 자료에서 확인된 4가지 재화</h2></div><div className="card-grid two">{currencies.map(([t,d])=><article className="feature-card" key={t}><h2 className="card-title">{t}</h2><p>{d}</p></article>)}</div><p className="notice-box">공식 안내 자료에는 린M 코인이 <b>1코인 = 100KRW</b> 가치로 안내되어 있습니다. 다만 지급량·추가 증정·프로모션 조건은 시점에 따라 달라질 수 있으므로 고정 혜택으로 표현하지 않습니다.</p></section>
<section className="section container"><div className="section-head"><span className="eyebrow">공식 안내에서 확인된 흐름</span><h2>웹 결제 후 게임에서 확인하는 순서</h2></div><div className="card-grid three"><article className="feature-card"><h3>1. 서버·캐릭터 확인</h3><p>결제 전에 대상 서버와 캐릭터 정보가 맞는지 먼저 확인합니다.</p></article><article className="feature-card"><h3>2. 린M 코인 지급 확인</h3><p>확보한 공식 공지에서는 웹페이지 결제 시 린M 코인으로 지급되는 구조가 안내되어 있습니다.</p></article><article className="feature-card"><h3>3. 상점 → 충전 확인</h3><p>공식 안내에는 결제 후 게임 내 상점 → 충전에서 확인하는 흐름이 제시되어 있습니다.</p></article></div></section>
<section className="section container split-section"><div className="image-slot content-image-slot"><span>/public/images/charge/diamond-content.webp</span></div><div><span className="eyebrow">관련 정보</span><h2>가격 정보와 충전 방법은 별도 페이지에서</h2><p>이 페이지는 재화의 구분에 집중하고, 충전 가격과 구매 문의는 충전 페이지에서 분리해 안내합니다.</p><Link className="text-link" href="/rinm/charge">린M 충전 가격 보기 →</Link><br/><Link className="text-link" href="/rinm/guide/charge">린M 충전 방법 보기 →</Link></div></section>
</>}
