import Link from 'next/link';

export const metadata = {
  title: '린M 육성 가이드 | 성장 재화와 아이템',
  description: '린M 육성에 관련된 성장 재화와 아이템을 실제 확인된 명칭 중심으로 정리합니다. 세부 효과와 효율은 자료 확인 후 확장합니다.',
};

const materials=['신기석','공명 제련 수정','구슬 수정','홀리 수정','황금 수정','성물 수정','성석 가루','돌파석','마법석'];
export default function GrowthPage(){return <>
<section className="subhero container"><div><span className="eyebrow">린M 육성</span><h1>린M 성장에 쓰이는 재화와 아이템 정리</h1><p>현재 확보한 상점·이벤트 자료에서 실제로 확인된 명칭을 중심으로 육성 정보를 구성합니다. 확인되지 않은 효율이나 추천 수치는 임의로 작성하지 않습니다.</p></div><div className="image-slot"><span>/public/images/guide/growth-hero.webp</span></div></section>
<section className="section container"><div className="section-head"><span className="eyebrow">확인된 성장 관련 명칭</span><h2>육성 페이지의 기초 데이터</h2></div><ul className="keyword-list">{materials.map(x=><li key={x}>{x}</li>)}</ul><p className="notice-box">각 아이템의 정확한 효과·소모처·추천 우선순위는 추가 게임 화면 또는 공식 자료가 확보되는 순서대로 보강합니다.</p></section>
<section className="section container split-section"><div className="image-slot content-image-slot"><span>/public/images/guide/growth-content.webp</span></div><div><span className="eyebrow">내부 연결</span><h2>아이템 정보와 함께 확인</h2><p>육성에 필요한 재료의 이름과 상점 분류는 아이템 허브에서 별도로 정리해 중복 내용을 줄였습니다.</p><Link className="text-link" href="/rinm/items">린M 아이템 정보 →</Link></div></section>
</>}
