import Link from 'next/link';
import {siteInfo} from '../../../../data/site';
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
import SiteImage from '../../../../components/SiteImage';
export const metadata={title:'린M 신격 공략·조합·계승 정보',description:'린M 신격의 추천, 조합, 티어와 계승 정보를 확인 가능한 게임 자료를 기준으로 정리합니다. 관련 상품 구매는 서버 조건에 따라 최소 20%부터 최대 25%까지 할인 안내를 받을 수 있습니다.',keywords:['린M','린M 신격'],alternates:{canonical:'/rinm/guide/shingyeok'}};
const topics=[['신격 추천','추천을 만들려면 각 신격의 이름, 등급, 효과와 실제 사용 목적이 필요합니다.'],['신격 조합','조합 효과 또는 시너지 화면이 확보되어야 조합별 차이를 근거 있게 정리할 수 있습니다.'],['신격 티어','티어표에는 비교 기준과 패치 시점이 필요하므로 현재는 임의 순위를 만들지 않습니다.'],['신격 계승','계승 조건, 소모 재화, 결과 화면이 확보되면 단계별 가이드로 정리합니다.']];
const needed=['신격 전체 목록 화면','각 신격 상세 효과 화면','신격 등급·성급 등 구분 화면','신격 조합 또는 편성 화면','신격 계승 화면과 필요 재화','신격 관련 공식 공지·업데이트'];
export default function ShingyeokPage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'공략',href:'/rinm/guide'},{name:'신격',href:'/rinm/guide/shingyeok'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 신격</span><h1>추천·조합·티어는<br/>실제 데이터가 먼저</h1><p>신격은 검색 수요가 큰 주제이지만, 효과·등급·계승 조건이 확인되지 않은 상태에서 임의의 순위나 추천을 만들지 않습니다. 확보되는 실제 게임 자료를 기준으로 하나씩 검증해 확장합니다.</p><div className="hero-actions"><Link className="btn primary" href="/rinm/guide">공략 허브로 이동</Link><Link className="btn secondary" href="/rinm">린M 종합정보</Link></div></div><SiteImage src="/images/shingyeok/shingyeok-hero.webp" alt="린M 신격 대표 이미지" priority/></section>
<section className="section container"><div className="section-head"><span className="eyebrow">신격 공략 구조</span><h2>4개 검색 의도로 확장</h2></div><div className="card-grid two">{topics.map(([t,d])=><article className="feature-card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">추가 자료 기준</span><h2>이 화면들이 확보되면 실제 공략 작성 가능</h2></div><ul className="keyword-list">{needed.map(x=><li key={x}>{x}</li>)}</ul><p className="notice-box">신격 메뉴의 목록 화면부터 상세 효과, 조합·편성, 계승 화면까지 순서대로 자료가 확보되면 이름·수치·효과를 그대로 기준 데이터로 사용합니다.</p></section>
<section className="section container split-section"><SiteImage className="content-image-slot" src="/images/shingyeok/shingyeok-content-01.webp" alt="린M 신격 편성 분위기 이미지"/><div><span className="eyebrow">업데이트 관리</span><h2>티어와 추천에는 기준 날짜를 함께 표시</h2><p>패치로 정보가 바뀌는 문제를 줄이기 위해 향후 신격 공략에는 확인 날짜와 적용 버전을 함께 관리합니다. 오래된 추천이 최신 정보처럼 보이지 않도록 시점을 명확히 표시합니다.</p></div></section>
<section className="section container conversion-strip"><div><span className="eyebrow">상품 구매가 필요할 때</span><h2>공략과 판매 안내는 분리합니다</h2></div><div><p style={{margin:0,color:'#cdd3dd'}}>신격 공략은 정보 정확성을 우선하고, 린M 관련 상품 구매가 필요한 경우에만 별도 할인 페이지에서 서버별 20~25% 할인 조건과 최종 판매가를 확인할 수 있습니다.</p></div><a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">할인 구매 문의</a></section>
</>}
