import Link from 'next/link';
import { siteInfo } from '../../../data/site';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
import SiteImage from '../../../components/SiteImage';

export const metadata = {
  title: '린M 20~25% 할인 충전 | 서버별 할인 안내',
  description: '린M 상품을 서버별 최소 20%부터 최대 25%까지 할인 안내합니다. 공식 정상가 대비 예상 판매가 예시와 서버별 차등 적용 기준, 구매 전 확인사항을 확인하세요.',
  keywords:['린M 할인','린M 20% 할인','린M 25% 할인','린M 서버별 할인','린M 할인 충전','린M 할인 구매'],
  alternates:{canonical:'/rinm/discount'},
};

const examples = [
  ['30,000원','24,000원','22,500원','6,000원 ~ 7,500원'],
  ['45,000원','36,000원','33,750원','9,000원 ~ 11,250원'],
  ['75,000원','60,000원','56,250원','15,000원 ~ 18,750원'],
  ['149,000원','119,200원','111,750원','29,800원 ~ 37,250원'],
];

export default function DiscountPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'린M 할인',href:'/rinm/discount'}]}/>

      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 서버별 할인</span>
          <h1>최소 20%부터<br/>최대 25% 할인</h1>
          <p>몽땅 다이아는 린M 관련 상품을 서버와 상품 조건에 따라 최소 20%부터 최대 25%까지 할인 판매합니다. 구매 전 서버를 확인한 뒤 적용 가능한 할인율과 최종 판매가를 먼저 안내합니다.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px',margin:'18px 0 0'}}>
            <span style={{padding:'9px 13px',border:'1px solid #8d713a',borderRadius:'999px',background:'#211b12',color:'#ffda84',fontWeight:900}}>최소 20% 할인</span>
            <span style={{padding:'9px 13px',border:'1px solid #8d713a',borderRadius:'999px',background:'#211b12',color:'#ffda84',fontWeight:900}}>최대 25% 할인</span>
            <span style={{padding:'9px 13px',border:'1px solid #40485a',borderRadius:'999px',background:'#12161e',color:'#d9dee8',fontWeight:800}}>서버별 차등 적용</span>
          </div>
          <div className="hero-actions">
            <a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">내 서버 할인율 확인</a>
            <Link className="btn secondary" href="/rinm/charge">공식 정상가 보기</Link>
          </div>
          <p style={{fontSize:'.9rem',marginTop:'16px',color:'#8f97a7'}}>※ 실제 적용 할인율은 서버·상품·판매 조건에 따라 달라질 수 있으며, 구매 전에 최종 금액을 안내합니다.</p>
        </div>
        <SiteImage src="/images/discount/discount-hero.webp" alt="린M 서버별 20%에서 25% 할인 구매 안내 이미지" priority/>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">할인 기준</span>
          <h2>한눈에 보는 몽땅 다이아 할인 구조</h2>
          <p className="section-desc">할인율을 단순히 크게 표시하는 대신 최소 할인 범위와 최대 할인 가능 범위를 구분하고, 최종 금액은 구매 전에 다시 확인합니다.</p>
        </div>
        <div className="card-grid three">
          <article className="feature-card"><strong style={{display:'block',fontSize:'2.4rem',lineHeight:1,color:'#ffda84'}}>20%+</strong><h3>최소 할인 기준</h3><p>할인 대상 린M 상품은 서버별 조건 확인 후 최소 20% 할인 기준으로 안내합니다.</p></article>
          <article className="feature-card"><strong style={{display:'block',fontSize:'2.4rem',lineHeight:1,color:'#ffda84'}}>25%</strong><h3>최대 할인 범위</h3><p>조건이 맞는 서버와 상품은 최대 25% 할인 적용이 가능합니다.</p></article>
          <article className="feature-card"><strong style={{display:'block',fontSize:'2.4rem',lineHeight:1,color:'#ffda84'}}>SERVER</strong><h3>서버별 차등 적용</h3><p>모든 서버에 동일한 할인율을 일괄 적용하지 않고 현재 가능한 조건을 확인해 안내합니다.</p></article>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">가격 예시</span>
          <h2>정상가 대비 20%·25% 할인 시 예상 금액</h2>
          <p className="section-desc">아래 금액은 할인 구조를 이해하기 위한 계산 예시입니다. 실제 판매가는 서버 및 상품 조건 확인 후 확정됩니다.</p>
        </div>
        <div style={{overflowX:'auto',border:'1px solid #2a3040',borderRadius:'18px',background:'#131720'}}>
          <table style={{width:'100%',borderCollapse:'collapse',minWidth:'720px'}}>
            <thead>
              <tr style={{background:'#1b202b',color:'#ffda84',textAlign:'left'}}>
                <th style={{padding:'16px 18px'}}>공식 정상가</th>
                <th style={{padding:'16px 18px'}}>20% 할인 예시</th>
                <th style={{padding:'16px 18px'}}>25% 할인 예시</th>
                <th style={{padding:'16px 18px'}}>예상 절감액</th>
              </tr>
            </thead>
            <tbody>
              {examples.map(([normal,d20,d25,saving])=><tr key={normal} style={{borderTop:'1px solid #2a3040'}}>
                <td style={{padding:'16px 18px',fontWeight:800}}>{normal}</td>
                <td style={{padding:'16px 18px',color:'#dce2eb'}}>{d20}</td>
                <td style={{padding:'16px 18px',color:'#ffda84',fontWeight:900}}>{d25}</td>
                <td style={{padding:'16px 18px',color:'#b8c0ce'}}>{saving}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <p style={{marginTop:'14px',color:'#8f97a7',fontSize:'.9rem'}}>※ 예: 정상가 75,000원 상품은 20% 할인 시 60,000원, 25% 할인 시 56,250원입니다. 실제 적용 할인율은 서버별로 달라질 수 있습니다.</p>
      </section>

      <section className="section container split-section">
        <SiteImage className="content-image-slot" src="/images/discount/discount-content-01.webp" alt="린M 정상가와 할인 판매가 비교 이미지"/>
        <div>
          <span className="eyebrow">구매 전 확인</span>
          <h2>서버 확인 후 할인율과 최종 판매가 안내</h2>
          <p>먼저 구매하려는 서버와 상품을 확인합니다. 이후 현재 적용 가능한 할인율을 안내하고, 정상가와 비교한 최종 판매가를 확인한 뒤 구매 상담을 진행합니다.</p>
          <div style={{display:'grid',gap:'12px',marginTop:'20px'}}>
            <div className="notice-box" style={{marginTop:0}}><b style={{color:'#ffda84'}}>01 서버 확인</b><br/>구매하려는 서버와 상품 종류를 확인합니다.</div>
            <div className="notice-box" style={{marginTop:0}}><b style={{color:'#ffda84'}}>02 할인율 안내</b><br/>현재 가능한 20%~25% 범위의 할인 조건을 안내합니다.</div>
            <div className="notice-box" style={{marginTop:0}}><b style={{color:'#ffda84'}}>03 최종 판매가 확인</b><br/>구매 전 실제 결제할 금액을 다시 확인합니다.</div>
          </div>
          <div className="hero-actions">
            <a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 할인 문의</a>
            <a className="btn secondary" href={`tel:${siteInfo.phone.replaceAll('-','')}`}>{siteInfo.phone}</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">신뢰 기준</span><h2>할인율보다 중요한 구매 전 확인사항</h2></div>
        <div className="card-grid four">
          <article className="feature-card"><h3>정상가 기준 공개</h3><p>게임 상점에서 확인한 정상가를 기준으로 할인 금액을 비교합니다.</p></article>
          <article className="feature-card"><h3>최종 금액 사전 안내</h3><p>서버 확인 후 실제 적용 할인율과 판매가를 구매 전에 안내합니다.</p></article>
          <article className="feature-card"><h3>사업자 정보 공개</h3><p>사이트 하단에서 사업자등록번호, 대표자, 연락처 등 운영 정보를 확인할 수 있습니다.</p></article>
          <article className="feature-card"><h3>민감정보 미요청</h3><p>상담 과정에서 계정 비밀번호나 결제 비밀번호를 입력하도록 요구하지 않습니다.</p></article>
        </div>
      </section>

      <section className="section container" style={{paddingTop:'24px'}}>
        <div style={{border:'1px solid #6d572e',borderRadius:'22px',padding:'34px',background:'linear-gradient(135deg,#181b23,#241d11)',display:'grid',gap:'16px',textAlign:'center'}}>
          <span className="eyebrow" style={{margin:0}}>지금 할인율 확인</span>
          <h2 style={{margin:0}}>내 서버는 몇 % 할인 가능한가요?</h2>
          <p style={{margin:'0 auto',maxWidth:'720px',color:'#b9c0cc'}}>서버와 구매 상품을 알려주시면 현재 적용 가능한 할인율과 최종 판매가를 먼저 안내합니다.</p>
          <div className="hero-actions" style={{justifyContent:'center',marginTop:'4px'}}>
            <a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡으로 확인</a>
            <Link className="btn secondary" href="/order">구매 상담 준비</Link>
          </div>
        </div>
      </section>
    </>
  );
}
