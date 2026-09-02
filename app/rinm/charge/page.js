import Link from 'next/link';
import { siteInfo } from '../../../data/site';

export const metadata = {
  title: '린M 충전 가격·할인 안내',
  description: '린M 충전 가격과 충전 단위, 첫 충전 혜택, 이용 전 확인사항을 정리한 몽땅 다이아 충전 안내 페이지입니다.',
};

const chargeProducts = [
  ['60', '1,500원'],
  ['300', '7,500원'],
  ['680', '15,000원'],
  ['980', '22,000원'],
  ['1,280', '30,000원'],
  ['1,980', '45,000원'],
  ['3,280', '75,000원'],
  ['6,480', '149,000원'],
];

export default function ChargePage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 충전</span>
          <h1>린M 충전 가격과 이용 방법</h1>
          <p>실제 게임 충전 화면에서 확인한 충전 단위와 정상가를 기준으로 정리합니다. 몽땅 다이아 판매가는 별도 확정 후 표시합니다.</p>
          <div className="hero-actions">
            <a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡으로 문의</a>
            <a className="btn secondary" href={`tel:${siteInfo.phone.replaceAll('-', '')}`}>전화 문의</a>
          </div>
        </div>
        <div className="image-slot"><span>/public/images/charge/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">공식 상점 기준</span>
          <h2>린M 충전 단위와 정상가</h2>
        </div>
        <div className="price-grid">
          {chargeProducts.map(([amount, price]) => (
            <div className="price-card" key={amount}>
              <strong>{amount}</strong>
              <span>충전 단위</span>
              <b>{price}</b>
              <small>게임 화면 기준 정상가</small>
            </div>
          ))}
        </div>
        <p className="notice-box">※ 실제 판매가와 할인율은 몽땅 다이아 판매 정책 확정 후 별도로 표시합니다. 게임 내 프로모션·첫 충전 혜택은 계정 상태와 시점에 따라 달라질 수 있습니다.</p>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/charge/content-01.webp</span></div>
        <div>
          <span className="eyebrow">충전 전 확인</span>
          <h2>처음 충전한다면 확인할 내용</h2>
          <p>게임 화면에는 일부 상품에 첫 충전 혜택이 표시됩니다. 이용 전 현재 계정의 혜택 적용 여부와 서버·캐릭터 정보를 먼저 확인하는 방식으로 안내 페이지를 구성합니다.</p>
          <Link className="text-link" href="/rinm/guide/charge">린M 충전 방법 자세히 보기 →</Link>
        </div>
      </section>
    </>
  );
}
