import Link from 'next/link';
import { siteInfo } from '../data/site';

const companyInfo = [
  ['상호', siteInfo.brand],
  ['대표', siteInfo.representative],
  ['주소', siteInfo.address],
  ['전화', siteInfo.phone],
  ['사업자등록번호', siteInfo.businessNumber],
];

const contactInfo = [
  ['통신판매업신고', siteInfo.ecommerceReport],
  ['개인정보관리책임자', siteInfo.privacyOfficer],
  ['이메일', siteInfo.email],
  ['카카오톡', siteInfo.kakaoId],
];

export default function Footer() {
  return (
    <footer className="site-footer footer-v2">
      <div className="container">
        <div className="footer-v2-top">
          <div className="footer-v2-brandbox">
            <Link href="/" className="footer-v2-logo" aria-label="몽땅 다이아 홈으로 이동">
              <img src="/images/brand/linm-logo.png" alt="린M 몽땅 다이아" />
            </Link>
            <div>
              <strong>{siteInfo.brand}</strong>
              <p>린M 충전·아이템·게임정보 전문 안내</p>
            </div>
          </div>

          <nav className="footer-v2-policy" aria-label="이용 안내">
            <Link href="/privacy"><span>◆</span> 개인정보처리방침</Link>
            <Link href="/terms"><span>◆</span> 이용약관</Link>
            <Link href="/refund"><span>◆</span> 환불·취소 안내</Link>
          </nav>
        </div>

        <div className="footer-v2-divider" />

        <div className="footer-v2-info-grid">
          <div className="footer-v2-info-column">
            {companyInfo.map(([label, value]) => (
              <div className="footer-v2-row" key={label}>
                <span className="footer-v2-icon">{label === '주소' ? '●' : label === '전화' ? '☎' : '◆'}</span>
                <b>{label}</b>
                {label === '전화' ? <a href={`tel:${siteInfo.phone.replaceAll('-', '')}`}>{value}</a> : <span>{value}</span>}
              </div>
            ))}
          </div>

          <div className="footer-v2-info-column">
            {contactInfo.map(([label, value]) => (
              <div className="footer-v2-row" key={label}>
                <span className="footer-v2-icon">{label === '이메일' ? '✉' : label === '카카오톡' ? 'T' : '◆'}</span>
                <b>{label}</b>
                {label === '이메일' ? (
                  <a href={`mailto:${siteInfo.email}`}>{value}</a>
                ) : label === '카카오톡' ? (
                  <a href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">{value}</a>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-v2-trust">
          <div><span>✓</span><p><b>사업자 정보 공개</b><small>운영 주체와 연락처를 투명하게 안내합니다.</small></p></div>
          <div><span>24</span><p><b>빠른 상담 안내</b><small>카카오톡과 전화로 편리하게 문의할 수 있습니다.</small></p></div>
          <div><span>⚡</span><p><b>신속한 안내</b><small>상품과 충전 정보를 빠르고 정확하게 확인합니다.</small></p></div>
          <div><span>◇</span><p><b>신뢰 중심 운영</b><small>확인 가능한 정보와 명확한 안내를 우선합니다.</small></p></div>
        </div>

        <div className="footer-v2-bottom">
          <p>© {new Date().getFullYear()} {siteInfo.brand}. All rights reserved.</p>
          <small>본 사이트는 린M 게임의 공식 사이트가 아니며, 게임 관련 상표 및 저작권은 각 권리자에게 있습니다.</small>
        </div>
      </div>

      <style>{`
        .footer-v2{background:radial-gradient(circle at 50% 0,#111923 0,#080b10 45%,#06080c 100%);border-top:1px solid #2f3742;padding:56px 0 40px;color:#d7dce4}
        .footer-v2-top{display:flex;align-items:center;justify-content:space-between;gap:32px}
        .footer-v2-brandbox{display:flex;align-items:center;gap:20px;min-width:0}
        .footer-v2-logo{width:118px;height:74px;display:flex;align-items:center;justify-content:center;flex:0 0 auto}
        .footer-v2-logo img{max-width:100%;max-height:100%;object-fit:contain;display:block}
        .footer-v2-brandbox strong{display:block;color:#fff;font-size:1.7rem;letter-spacing:-.04em;margin-bottom:3px}
        .footer-v2-brandbox p{margin:0;color:#aeb6c2;font-size:.98rem}
        .footer-v2-policy{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:flex-end}
        .footer-v2-policy a{display:inline-flex;align-items:center;gap:8px;border:1px solid #343d49;border-radius:12px;padding:11px 14px;background:#0e131a;color:#e6e9ee;font-weight:800;font-size:.9rem;transition:.2s}
        .footer-v2-policy a:hover{border-color:#a88343;background:#15191f;color:#ffdc8a;transform:translateY(-1px)}
        .footer-v2-policy span{color:#d6aa55;font-size:.7rem}
        .footer-v2-divider{height:1px;background:linear-gradient(90deg,transparent,#3e4652 10%,#3e4652 90%,transparent);margin:30px 0}
        .footer-v2-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px 60px}
        .footer-v2-info-column{display:flex;flex-direction:column;gap:4px}
        .footer-v2-row{display:grid;grid-template-columns:34px 132px minmax(0,1fr);align-items:center;gap:10px;min-height:48px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.045)}
        .footer-v2-row:last-child{border-bottom:0}
        .footer-v2-icon{width:30px;height:30px;border:1px solid #7d663a;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#e8bd69;font-size:.72rem;font-weight:900;background:#11161d}
        .footer-v2-row b{color:#f5f6f8;font-size:.92rem;white-space:nowrap}
        .footer-v2-row>span:last-child,.footer-v2-row a{color:#cbd1db;font-size:.94rem;word-break:keep-all}
        .footer-v2-row a:hover{color:#ffda84}
        .footer-v2-trust{margin-top:30px;border:1px solid #3b3b34;border-radius:18px;background:linear-gradient(135deg,rgba(21,25,32,.96),rgba(11,14,19,.96));display:grid;grid-template-columns:repeat(4,1fr);overflow:hidden}
        .footer-v2-trust>div{display:grid;grid-template-columns:48px 1fr;gap:14px;align-items:center;padding:20px 22px;border-right:1px solid #343940}
        .footer-v2-trust>div:last-child{border-right:0}
        .footer-v2-trust>div>span{width:46px;height:46px;border:1px solid #8f713d;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#e9bb5d;font-weight:900;font-size:1rem;background:#12171d}
        .footer-v2-trust p{margin:0;line-height:1.35}
        .footer-v2-trust b{display:block;color:#fff;font-size:.96rem;margin-bottom:5px}
        .footer-v2-trust small{display:block;color:#8f98a5;font-size:.76rem;line-height:1.45}
        .footer-v2-bottom{text-align:center;margin-top:30px;padding-top:4px}
        .footer-v2-bottom p{margin:0 0 7px;color:#8f98a5;font-size:.85rem}
        .footer-v2-bottom small{color:#6f7885;font-size:.75rem}
        @media(max-width:900px){
          .footer-v2-top{align-items:flex-start;flex-direction:column}.footer-v2-policy{justify-content:flex-start}.footer-v2-info-grid{grid-template-columns:1fr;gap:4px}.footer-v2-trust{grid-template-columns:1fr 1fr}.footer-v2-trust>div:nth-child(2){border-right:0}.footer-v2-trust>div:nth-child(-n+2){border-bottom:1px solid #343940}
        }
        @media(max-width:560px){
          .footer-v2{padding:38px 0 155px}.footer-v2-brandbox{align-items:flex-start;gap:12px}.footer-v2-logo{width:88px;height:60px}.footer-v2-brandbox strong{font-size:1.35rem}.footer-v2-brandbox p{font-size:.82rem}.footer-v2-policy{display:grid;grid-template-columns:1fr;width:100%}.footer-v2-policy a{justify-content:flex-start}.footer-v2-divider{margin:24px 0}.footer-v2-row{grid-template-columns:30px 112px minmax(0,1fr);gap:8px;min-height:44px}.footer-v2-row b,.footer-v2-row>span:last-child,.footer-v2-row a{font-size:.82rem}.footer-v2-icon{width:28px;height:28px}.footer-v2-trust{grid-template-columns:1fr}.footer-v2-trust>div{border-right:0;border-bottom:1px solid #343940!important;padding:17px}.footer-v2-trust>div:last-child{border-bottom:0!important}.footer-v2-bottom small{display:block;line-height:1.55}
        }
      `}</style>
    </footer>
  );
}
