import Link from 'next/link';
import {siteInfo} from '../../../data/site';
import SiteImage from '../../../components/SiteImage';

export const metadata = {
  title: '린M 공지·자유게시판·라운지 이벤트',
  description: '린M 게임정보와 네이버 게임 린M 라운지의 공지사항, 자유게시판, 라운지 이벤트 바로가기를 제공합니다.',
  alternates:{canonical:'/rinm/news'}
};

const loungeLinks = [
  {title:'공지사항',label:'NOTICE',desc:'린M 운영 공지와 주요 안내를 공식 라운지에서 확인합니다.',href:'https://game.naver.com/lounge/RinM/board/3',icon:'01'},
  {title:'자유게시판',label:'COMMUNITY',desc:'린M 이용자들의 이야기와 게임 관련 게시글을 확인합니다.',href:'https://game.naver.com/lounge/RinM/board/4',icon:'02'},
  {title:'라운지 이벤트',label:'EVENT',desc:'진행 중인 이벤트와 참여 안내를 공식 라운지에서 확인합니다.',href:'https://game.naver.com/lounge/RinM/board/12',icon:'03'},
];

export default function NewsPage() {
  return <>
    <section className="subhero container"><div><span className="eyebrow">린M 게임정보</span><h1>공지·커뮤니티·이벤트를<br/>공식 라운지에서 바로 확인</h1><p>게임정보는 최신성이 중요하므로 린M 관련 핵심 게시판으로 바로 이동할 수 있도록 구성했습니다. 각 메뉴를 선택하면 네이버 게임 린M 라운지의 해당 게시판이 새 창에서 열립니다.</p><div className="hero-actions"><Link className="btn primary" href="/rinm">린M 종합정보</Link><Link className="btn secondary" href="/rinm/guide">공략 보기</Link></div></div><SiteImage className="image-slot" src="/images/news/news-hero.webp" alt="린M 공지 커뮤니티 이벤트 게임정보 대표 이미지" priority /></section>

    <section className="section container"><div className="section-head"><span className="eyebrow">린M 공식 라운지 바로가기</span><h2>필요한 게시판으로 바로 이동하세요</h2><p className="section-desc">외부 공식 라운지로 이동하는 메뉴입니다. 각 카드의 제목과 설명을 확인한 뒤 원하는 게시판을 선택하세요.</p></div><div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'18px'}} className="news-lounge-grid">{loungeLinks.map(item => <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" style={{position:'relative',display:'flex',minHeight:'230px',padding:'30px',border:'1px solid #303746',borderRadius:'22px',background:'linear-gradient(145deg,#191d26 0%,#12151c 100%)',flexDirection:'column',justifyContent:'space-between',overflow:'hidden',transition:'transform .2s ease,border-color .2s ease'}} className="feature-card"><div><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'28px'}}><span className="eyebrow" style={{margin:0,fontSize:'.78rem',letterSpacing:'.08em'}}>{item.label}</span><span style={{display:'flex',width:'42px',height:'42px',alignItems:'center',justifyContent:'center',border:'1px solid #655638',borderRadius:'50%',color:'#ffda84',fontSize:'.78rem',fontWeight:900}}>{item.icon}</span></div><h2 style={{fontSize:'clamp(1.65rem,2.4vw,2.2rem)',margin:'0 0 12px',letterSpacing:'-.04em'}}>{item.title}</h2><p style={{margin:0,color:'#aeb5c2'}}>{item.desc}</p></div><strong style={{display:'flex',alignItems:'center',gap:'8px',marginTop:'26px',color:'#ffda84',fontSize:'.94rem'}}>공식 라운지에서 보기 <span aria-hidden="true">↗</span></strong></a>)}</div><p className="notice-box">※ 위 3개 메뉴는 몽땅 다이아 내부 게시판이 아니라 네이버 게임 린M 라운지의 해당 게시판으로 연결됩니다.</p></section>

    <section className="section container"><div className="section-head"><span className="eyebrow">게임정보 이용 안내</span><h2>정보 페이지와 구매 안내를 명확하게 구분</h2></div><div className="card-grid three"><article className="feature-card"><h3>공식 게시판 연결</h3><p>공지와 이벤트처럼 시점이 중요한 정보는 사용자가 공식 라운지에서 직접 최신 내용을 확인할 수 있게 연결합니다.</p></article><article className="feature-card"><h3>외부 링크 표시</h3><p>카드를 클릭하면 새 창에서 네이버 게임 린M 라운지가 열리도록 구성했습니다.</p></article><article className="feature-card"><h3>판매 정보와 분리</h3><p>공식 게임정보와 몽땅 다이아의 상품 할인 판매 조건을 같은 정보처럼 섞지 않고 구분합니다.</p></article></div></section>

    <section className="section container conversion-strip"><div><span className="eyebrow">몽땅 다이아 구매 안내</span><h2>린M 관련 상품 서버별 할인</h2></div><div><p style={{margin:0,color:'#cdd3dd'}}>구매 가능한 린M 관련 상품은 서버·상품·판매 조건에 따라 최소 20%부터 최대 25% 범위로 할인됩니다. 실제 적용 할인율과 최종 판매가는 구매 전 확인해 주세요.</p></div><a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">내 서버 할인 문의</a></section>
    <style>{`@media(max-width:900px){.news-lounge-grid{grid-template-columns:1fr!important}}`}</style>
  </>;
}
