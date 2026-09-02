import { siteInfo } from '../data/site';

export default function FloatingContact(){
  return <div className="floating-contact" aria-label="빠른 상담">
    <a className="float-kakao" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer"><strong>카톡</strong><span>{siteInfo.kakaoId}</span></a>
    <a className="float-phone" href={`tel:${siteInfo.phone.replaceAll('-','')}`}><strong>전화</strong><span>상담</span></a>
  </div>;
}
