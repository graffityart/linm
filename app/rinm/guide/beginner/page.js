import Link from 'next/link';

export const metadata = {
  title: '린M 초보 가이드 | 처음 시작할 때 확인할 것',
  description: '린M 초보 이용자를 위한 시작 가이드입니다. 상점, 재화, 충전, 아이템과 공략 메뉴를 현재 확인된 게임 자료를 기준으로 정리합니다.',
};

export default function BeginnerPage() {
  return <>
    <section className="subhero container"><div><span className="eyebrow">린M 초보</span><h1>린M 처음 시작할 때 무엇부터 볼까?</h1><p>처음부터 복잡한 수치보다 게임 화면에서 확인되는 재화·상점·아이템 구조를 먼저 이해할 수 있도록 정리합니다.</p></div><div className="image-slot"><span>/public/images/guide/beginner-hero.webp</span></div></section>
    <section className="section container"><div className="section-head"><span className="eyebrow">초보 체크</span><h2>먼저 알아둘 4가지</h2></div><div className="card-grid four"><article className="feature-card"><h3>재화 구분</h3><p>다이아, 귀속 다이아, 린M 코인 등 확인된 재화 명칭부터 구분합니다.</p></article><article className="feature-card"><h3>상점 구조</h3><p>귀족 상점, 재료, 특수 아이템, 한정 할인, 미네랄 교환 등 메뉴를 확인합니다.</p></article><article className="feature-card"><h3>아이템 확인</h3><p>신기석, 마법석, 미네랄, 탈것 영혼 등 실제 화면에서 확인된 아이템을 살펴봅니다.</p></article><article className="feature-card"><h3>충전 전 확인</h3><p>상품과 계정 혜택, 서버·캐릭터 정보를 확인한 뒤 진행하는 흐름을 안내합니다.</p></article></div></section>
    <section className="section container split-section"><div className="image-slot content-image-slot"><span>/public/images/guide/beginner-content.webp</span></div><div><span className="eyebrow">다음 단계</span><h2>필요한 정보만 이어서 확인</h2><p>초보 가이드에서 모든 내용을 반복하지 않고 충전·아이템·성장 페이지로 연결해 각 주제를 자세히 설명합니다.</p><Link className="text-link" href="/rinm/items">린M 아이템 보기 →</Link></div></section>
  </>;
}
