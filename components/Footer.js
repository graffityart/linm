import Link from 'next/link';
import { siteInfo } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong className="footer-brand">{siteInfo.brand}</strong>
          <p>린M 충전·아이템·게임정보 전문 안내</p>
          <div className="footer-links">
            <Link href="/privacy">개인정보처리방침</Link>
            <Link href="/terms">이용약관</Link>
            <Link href="/refund">환불·취소 안내</Link>
          </div>
        </div>
        <div className="footer-info">
          <p><b>상호</b> {siteInfo.brand}</p>
          <p><b>대표</b> {siteInfo.representative}</p>
          <p><b>주소</b> {siteInfo.address}</p>
          <p><b>전화</b> <a href={`tel:${siteInfo.phone.replaceAll('-', '')}`}>{siteInfo.phone}</a></p>
          <p><b>사업자등록번호</b> {siteInfo.businessNumber}</p>
          <p><b>통신판매업신고</b> {siteInfo.ecommerceReport}</p>
          <p><b>개인정보관리책임자</b> {siteInfo.privacyOfficer}</p>
          <p><b>이메일</b> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
          <p><b>카카오톡</b> <a href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">{siteInfo.kakaoId}</a></p>
        </div>
      </div>
    </footer>
  );
}
