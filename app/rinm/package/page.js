import Link from 'next/link';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
import SiteImage from '../../../components/SiteImage';
export const metadata={title:'린M 패키지·한정 할인 상품 정보',description:'린M 상점에서 패키지와 한정 할인 상품을 확인할 때 가격, 구성품, 구매 제한, 기간을 비교하는 방법을 정리합니다.',alternates:{canonical:'/rinm/package'}};
const checks=[['상품명','비슷한 패키지를 구분하려면 정확한 상품명을 먼저 확인합니다.'],['가격·요구 재화','원화 결제인지 게임 내 재화를 사용하는지 화면에서 확인합니다.'],['구성품','포함된 재화와 성장 재료의 종류·수량을 함께 비교합니다.'],['구매 제한','계정·캐릭터별 구매 횟수 제한이 표시되는지 확인합니다.'],['판매 기간','한정 상품은 시작·종료 시점을 확인해야 합니다.'],['추가 혜택','프로모션이나 첫 구매 혜택은 시점·계정 상태에 따라 달라질 수 있습니다.']];
export default function PackagePage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'린M 패키지',href:'/rinm/package'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 패키지</span><h1>린M 패키지는 구성품과 구매 조건을 함께 비교</h1><p>현재 자료에서 확인되지 않은 패키지명을 만들어 채우지 않고, 실제 상점의 한정 할인·재료·특수 아이템 분류를 기준으로 상세 자료가 들어올 자리를 구성합니다.</p></div><SiteImage src="/images/package/package-hero.webp" alt="린M 패키지 대표 이미지" priority/></section>
<section className="section container"><div className="section-head"><span className="eyebrow">패키지 체크리스트</span><h2>구매 전에 확인할 6가지</h2></div><div className="card-grid three">{checks.map(([t,d])=><article className="feature-card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section className="section container split-section"><SiteImage className="content-image-slot" src="/images/package/package-content-01.webp" alt="린M 패키지 구성품 안내 이미지"/><div><span className="eyebrow">현재 확인된 상점 구조</span><h2>한정 할인·재료·특수 아이템을 분리해서 확인</h2><p>제공받은 게임 화면에는 한정 할인, 재료, 특수 아이템 등의 상점 분류가 확인됩니다. 실제 패키지 상세 화면이 추가되면 상품별 구성품과 기간을 표 형태로 비교하도록 확장합니다.</p><Link className="text-link" href="/rinm/items">린M 아이템 정보 →</Link><br/><Link className="text-link" href="/rinm/discount">린M 할인 안내 →</Link></div></section>
<p className="notice-box container">※ 현재 확보 자료만으로 특정 패키지의 효율이나 추천 순위를 판단할 근거는 부족하므로 임의의 추천·티어는 표시하지 않습니다.</p>
</>}
