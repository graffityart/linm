import Link from 'next/link';
import { siteInfo } from '../../../data/site';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
import FaqJsonLd from '../../../components/FaqJsonLd';

export const metadata = {
  title: '린M 충전 가격·할인 안내',
  description: '린M 충전 가격과 충전 단위, 첫 충전 혜택, 서버·캐릭터 확인, 구매 문의 흐름을 정리한 몽땅 다이아 충전 안내 페이지입니다.',
  alternates:{canonical:'/rinm/charge'},
};

const chargeProducts = [
  ['60', '1,500원'],['300', '7,500원'],['680', '15,000원'],['980', '22,000원'],['1,280', '30,000원'],['1,980', '45,000원'],['3,280', '75,000원'],['6,480', '149,000원'],
];

const faqs=[
  {q:'린M 충전 가격은 얼마인가요?',a:'현재 페이지의 정상가는 실제 게임 충전 화면에서 확인한 가격을 기준으로 정리했습니다. 몽땅 다이아 실제 판매가는 운영 정책 확정 후 별도로 표시합니다.'},
  {q:'첫 충전 혜택은 항상 적용되나요?',a:'게임 화면에는 일부 상품에 첫 충전 혜택이 표시되지만 계정 상태와 시점에 따라 적용 여부가 달라질 수 있으므로 구매 전 확인이 필요합니다.'},
  {q:'구매 문의 전에 무엇을 확인해야 하나요?',a:'원하는 충전 단위와 서버, 캐릭터 또는 캐릭터 ID를 먼저 확인하면 상담이 빠릅니다. 계정 비밀번호나 결제 비밀번호 같은 민감한 정보는 전달하지 않습니다.'},
  {q:'사이트에서 바로 결제하나요?',a:'현재는 사이트에서 직접 결제하지 않고 상품을 선택한 뒤 카카오톡 또는 전화로 구매 상담을 진행하는 방식입니다.'}
];

export default function ChargePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'린M 충전',href:'/rinm/charge'}]}/>
      <FaqJsonLd items={faqs}/>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 충전</span>
          <h1>린M 충전 가격과 이용 방법</h1>
          <p>실제 게임 충전 화면에서 확인한 충전 단위와 정상가를 기준으로 정리합니다. 원하는 상품을 확인한 뒤 카카오톡 또는 전화로 빠르게 상담할 수 있습니다.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/order">구매 문의 준비</Link>
            <a className="btn secondary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 문의</a>
          </div>
        </div>
        <div className="image-slot"><span>/public/images/charge/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">공식 상점 기준</span><h2>린M 충전 단위와 정상가</h2></div>
        <div className="price-grid">
          {chargeProducts.map(([amount, price]) => (
            <Link className="price-card" href={`/order?amount=${encodeURIComponent(amount)}`} key={amount}>
              <strong>{amount}</strong><span>충전 단위</span><b>{price}</b><small>게임 화면 기준 정상가</small><em className="price-cta">이 상품 문의하기 →</em>
            </Link>
          ))}
        </div>
        <p className="notice-box">※ 실제 판매가와 할인율은 몽땅 다이아 판매 정책 확정 후 별도로 표시합니다. 게임 내 프로모션·첫 충전 혜택은 계정 상태와 시점에 따라 달라질 수 있습니다.</p>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">구매 전 체크</span><h2>충전 전에 이 순서로 확인하세요</h2></div>
        <div className="card-grid four">
          <article className="feature-card"><h3>1. 충전 단위 선택</h3><p>60부터 6,480까지 현재 확인된 충전 단위 중 필요한 상품을 선택합니다.</p></article>
          <article className="feature-card"><h3>2. 혜택 확인</h3><p>첫 충전 또는 프로모션 표시가 있다면 현재 계정에 적용되는지 먼저 확인합니다.</p></article>
          <article className="feature-card"><h3>3. 서버·캐릭터 확인</h3><p>오입력을 줄이기 위해 서버와 캐릭터 또는 캐릭터 ID를 정확하게 확인합니다.</p></article>
          <article className="feature-card"><h3>4. 상담 진행</h3><p>상품 정보를 정리한 뒤 카카오톡 pay3810 또는 전화로 구매 가능 여부와 판매가를 확인합니다.</p></article>
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/charge/content-01.webp</span></div>
        <div>
          <span className="eyebrow">충전 방법</span><h2>게임 안에서 어디서 확인하나요?</h2>
          <p>확보한 공식 라운지 자료에서는 웹페이지 결제 후 린M 코인으로 지급되며, 게임 내 <b>상점 → 충전</b>에서 확인하는 흐름이 안내되어 있습니다. 세부 과정은 별도 가이드에서 중복 없이 정리합니다.</p>
          <Link className="text-link" href="/rinm/guide/charge">린M 충전 방법 자세히 보기 →</Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><span className="eyebrow">자주 묻는 질문</span><h2>린M 충전 문의 전 확인</h2></div>
        <div className="card-grid two">{faqs.map(item=><article className="feature-card" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</div>
      </section>
    </>
  );
}
