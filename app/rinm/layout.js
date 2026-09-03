import Link from 'next/link';
import { siteInfo } from '../../data/site';

export default function RinmLayout({ children }) {
  return (
    <>
      <section style={{
        width:'min(calc(100% - 32px),1180px)',
        margin:'18px auto 0',
        border:'1px solid #4d4027',
        borderRadius:'18px',
        background:'linear-gradient(135deg,#171a22 0%,#211b12 100%)',
        boxShadow:'0 14px 34px rgba(0,0,0,.24)',
        overflow:'hidden'
      }}>
        <div style={{display:'grid',gridTemplateColumns:'1.15fr repeat(3,minmax(0,.65fr)) auto',alignItems:'stretch'}}>
          <div style={{padding:'20px 22px',borderRight:'1px solid #3d3526'}}>
            <span style={{display:'block',color:'#ffda84',fontWeight:900,fontSize:'.78rem',marginBottom:'5px'}}>몽땅 다이아 서버별 할인 안내</span>
            <strong style={{display:'block',fontSize:'clamp(1.05rem,2.4vw,1.42rem)',lineHeight:1.3,color:'#fff'}}>린M 관련 상품을 최소 20%부터 최대 25%까지 할인 판매</strong>
            <small style={{display:'block',marginTop:'7px',color:'#aeb5c2',lineHeight:1.5}}>서버·상품·판매 조건에 따라 할인율이 달라지며 구매 전 최종 판매가를 안내합니다.</small>
          </div>
          <div style={{padding:'18px 16px',display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',borderRight:'1px solid #3d3526'}}><b style={{fontSize:'1.7rem',color:'#ffda84'}}>20%+</b><span style={{fontSize:'.84rem',color:'#c8ced9'}}>최소 할인</span></div>
          <div style={{padding:'18px 16px',display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',borderRight:'1px solid #3d3526'}}><b style={{fontSize:'1.7rem',color:'#ffda84'}}>25%</b><span style={{fontSize:'.84rem',color:'#c8ced9'}}>최대 할인</span></div>
          <div style={{padding:'18px 16px',display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',borderRight:'1px solid #3d3526'}}><b style={{fontSize:'1rem',color:'#fff'}}>서버별</b><span style={{fontSize:'.84rem',color:'#c8ced9'}}>차등 적용</span></div>
          <div style={{padding:'16px',display:'flex',flexDirection:'column',justifyContent:'center',gap:'8px',minWidth:'154px'}}>
            <Link href="/rinm/discount" style={{display:'inline-flex',justifyContent:'center',alignItems:'center',padding:'11px 14px',borderRadius:'10px',background:'#e4bb62',color:'#17120a',fontWeight:900,fontSize:'.88rem'}}>할인 기준 보기</Link>
            <a href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer" style={{display:'inline-flex',justifyContent:'center',alignItems:'center',padding:'10px 14px',borderRadius:'10px',border:'1px solid #535b6f',background:'#151922',color:'#fff',fontWeight:800,fontSize:'.84rem'}}>내 서버 할인 문의</a>
          </div>
        </div>
        <style>{`@media(max-width:900px){section>div{grid-template-columns:1fr 1fr 1fr!important}section>div>div:first-child{grid-column:1/-1!important;border-right:0!important;border-bottom:1px solid #3d3526}section>div>div:last-child{grid-column:1/-1!important;min-width:0!important;display:grid!important;grid-template-columns:1fr 1fr!important}}@media(max-width:560px){section{width:calc(100% - 20px)!important;margin-top:10px!important}section>div{grid-template-columns:repeat(3,1fr)!important}section>div>div{padding:14px 8px!important}section>div>div:first-child{padding:17px 16px!important}section>div>div:last-child{padding:12px!important}section>div b{font-size:1.35rem!important}}`}</style>
      </section>
      {children}
    </>
  );
}
