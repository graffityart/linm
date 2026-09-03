import Link from 'next/link';
import {siteInfo} from '../../../data/site';
import SiteImage from '../../../components/SiteImage';

export const metadata = {
  title: '린M 공지·업데이트·이벤트 정보',
  description: '린M 공지, 업데이트, 이벤트와 프로모션 정보를 확인 가능한 자료 중심으로 정리하고 관련 상품의 서버별 할인 구매 안내로 연결합니다.',
  alternates:{canonical:'/rinm/news'}
};

const sections = [
  ['공지사항', '충전·결제·상점 운영 등 확인 가능한 공식 안내를 정리합니다.'],
  ['점검&업데이트', '점검 일정과 업데이트 내용을 날짜 기준으로 정리합니다.'],
  ['라운지 이벤트', '이벤트 기간, 참여 방법, 보상 아이템을 확인할 수 있게 구성합니다.'],
  ['쿠폰·프로모션', '포인트백, 웹페이지 결제 등 확인 가능한 프로모션 정보를 별도로 정리합니다.'],
];

export default function NewsPage() {
  return <>
    <section className="subhero container"><div><span className="eyebrow">린M 게임정보</span><h1>공지·업데이트·이벤트를<br/>확인된 내용 중심으로</h1><p>게임정보 페이지는 최신성과 정확성을 우선합니다. 확인 가능한 자료를 핵심만 요약하고, 시점에 따라 달라질 수 있는 이벤트·프로모션 조건은 날짜와 적용 범위를 함께 확인하는 방향으로 운영합니다.</p><div className="hero-actions"><Link className="btn primary" href="/rinm">린M 종합정보</Link><Link className="btn secondary" href="/rinm/guide">공략 보기</Link></div></div><SiteImage className="image-slot" src="/images/news/news-hero.webp" alt="린M 공지 업데이트 이벤트 게임정보 대표 이미지" priority /></section>
    <section className="section container"><div className="section-head"><span className="eyebrow">게임정보 분류</span><h2>정보 성격에 따라 나눠서 확인</h2></div><div className="card-grid two">{sections.map(([title, desc]) => <article className="feature-card" key={title}><h2 className="card-title">{title}</h2><p>{desc}</p></article>)}</div></section>
    <section className="section container"><div className="section-head"><span className="eyebrow">업데이트 원칙</span><h2>날짜가 중요한 정보는 시점을 함께 봅니다</h2></div><div className="card-grid three"><article className="feature-card"><h3>확인 날짜</h3><p>이벤트와 프로모션은 확인 시점에 따라 조건이 달라질 수 있어 날짜를 함께 관리합니다.</p></article><article className="feature-card"><h3>원문 그대로 복제하지 않음</h3><p>공지 전체를 옮기기보다 이용자가 알아야 할 핵심 조건과 변경점을 요약합니다.</p></article><article className="feature-card"><h3>판매 정보와 구분</h3><p>게임 업데이트 정보와 몽땅 다이아 판매 조건을 섞지 않고 각각 별도로 안내합니다.</p></article></div></section>
    <section className="section container conversion-strip"><div><span className="eyebrow">구매 관련 확인</span><h2>관련 상품은 서버별 할인율 확인</h2></div><div><p style={{margin:0,color:'#cdd3dd'}}>몽땅 다이아에서 구매 가능한 린M 관련 상품은 서버·상품·판매 조건에 따라 최소 20%부터 최대 25% 범위로 할인됩니다. 게임 이벤트와 별개의 판매 조건이므로 구매 전 최종 판매가를 확인해 주세요.</p></div><a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">할인 판매가 문의</a></section>
  </>;
}
