import Link from 'next/link';
import OrderInquiryForm from '../../components/OrderInquiryForm';
import { siteInfo } from '../../data/site';

export const metadata={
  title:'린M 구매 문의 | 몽땅 다이아',
  description:'린M 충전 상품을 선택하고 서버·캐릭터 정보를 정리한 뒤 몽땅 다이아 카카오톡으로 빠르게 구매 문의할 수 있습니다.',
  robots:{index:false,follow:true}
};

export default function OrderPage(){return <>
  <section className="subhero container"><div><span className="eyebrow">린M 구매 문의</span><h1>상품을 고르고 상담내용을 바로 준비하세요</h1><p>현재는 사이트에서 결제를 직접 받지 않고, 상품 선택과 상담정보 정리 후 카카오톡 또는 전화로 연결하는 방식으로 운영합니다.</p><div className="hero-actions"><a className="btn primary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 바로가기</a><a className="btn secondary" href={`tel:${siteInfo.phone.replaceAll('-','')}`}>전화 문의</a></div></div><div className="image-slot"><span>/public/images/order/hero.webp</span></div></section>
  <section className="section container"><div className="section-head"><span className="eyebrow">구매 상담 준비</span><h2>필요한 내용을 한 번에 정리</h2></div><OrderInquiryForm/></section>
  <section className="section container"><div className="card-grid three"><article className="feature-card"><h3>1. 상품 선택</h3><p>원하는 충전 단위를 선택합니다. 현재 표시되는 금액은 게임 상점 정상가이며 실제 판매가는 상담 시 확인합니다.</p></article><article className="feature-card"><h3>2. 정보 확인</h3><p>서버와 캐릭터 정보를 정확히 확인해 오입력을 줄입니다.</p></article><article className="feature-card"><h3>3. 카카오톡 문의</h3><p>생성된 상담 문구를 복사해 카카오톡 <b>{siteInfo.kakaoId}</b>로 보내면 됩니다.</p></article></div><p className="notice-box">※ 게임 계정 비밀번호나 결제 비밀번호 같은 민감한 정보는 입력하거나 전달하지 마세요.</p><Link className="text-link" href="/rinm/charge">린M 충전 가격으로 돌아가기 →</Link></section>
</>}
