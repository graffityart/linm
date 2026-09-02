import { siteInfo } from '../data/site';

export default function FloatingContact(){
  return <div className="floating-contact" aria-label="빠른 상담">
    <a className="float-kakao" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer" aria-label={`카카오톡 상담 ${siteInfo.kakaoId}`}>
      <span className="float-icon" aria-hidden="true">TALK</span>
      <span className="float-copy"><strong>카톡 상담</strong><small>{siteInfo.kakaoId}</small></span>
      <span className="float-arrow" aria-hidden="true">›</span>
    </a>
    <a className="float-phone" href={`tel:${siteInfo.phone.replaceAll('-','')}`} aria-label={`전화 상담 ${siteInfo.phone}`}>
      <span className="float-icon float-phone-icon" aria-hidden="true">☎</span>
      <span className="float-copy"><strong>전화 상담</strong><small>{siteInfo.phone}</small></span>
      <span className="float-arrow" aria-hidden="true">›</span>
    </a>
  </div>;
}
