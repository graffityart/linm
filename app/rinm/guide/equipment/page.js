import Link from 'next/link';
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
import SiteImage from '../../../../components/SiteImage';
export const metadata={title:'린M 장비 가이드 | 제련 수정·축복 오일·펫 장비',description:'린M 장비 관련 공명 제련 수정, 구슬·홀리·황금·성물 수정, 홀리웨폰 축복 오일, 펫 장비 조각 등 실제 확인된 아이템을 정리합니다.',alternates:{canonical:'/rinm/guide/equipment'}};
const items=['공명 제련 수정','구슬 수정','홀리 수정','황금 수정','성물 수정','홀리웨폰 축복 오일','펫 장비 조각'];
const needed=['캐릭터 장비 슬롯 화면','장비 상세 옵션 화면','강화 화면과 소모 재화','제련 화면과 사용 수정','펫 장비 상세 화면','강화·제련 관련 공식 안내'];
export default function EquipmentPage(){return <>
<BreadcrumbJsonLd items={[{name:'홈',href:'/'},{name:'린M',href:'/rinm'},{name:'공략',href:'/rinm/guide'},{name:'장비',href:'/rinm/guide/equipment'}]}/>
<section className="subhero container"><div><span className="eyebrow">린M 장비</span><h1>장비 공략은 강화·제련 화면을 기준으로</h1><p>현재는 상점에서 확인된 장비 관련 아이템 명칭을 정확히 정리하고, 강화 확률이나 최적 장비처럼 근거가 필요한 정보는 추가 자료 확보 후 작성합니다.</p></div><SiteImage src="/images/guide/equipment-hero.webp" alt="린M 장비와 제련 대표 이미지" priority/></section>
<section className="section container"><div className="section-head"><span className="eyebrow">확인된 장비 관련 명칭</span><h2>수정류·축복 오일·펫 장비 조각</h2></div><ul className="keyword-list">{items.map(x=><li key={x}>{x}</li>)}</ul><p className="notice-box">이 명칭들은 제공된 상점 화면에서 확인된 항목입니다. 각각의 정확한 효과나 어떤 장비에 사용하는지는 현재 자료만으로 확정하지 않습니다.</p></section>
<section className="section container"><div className="section-head"><span className="eyebrow">추가 자료</span><h2>실제 장비 공략을 만들기 위해 필요한 화면</h2></div><div className="card-grid three">{needed.map((x,i)=><article className="feature-card" key={x}><h3>{i+1}. {x}</h3><p>이 화면이 확보되면 장비 시스템의 실제 단계와 조건을 페이지에 반영할 수 있습니다.</p></article>)}</div></section>
<section className="section container split-section"><SiteImage className="content-image-slot" src="/images/guide/equipment-content.webp" alt="린M 수정과 장비 재료 안내 이미지"/><div><span className="eyebrow">관련 페이지</span><h2>재료 목록은 아이템 페이지와 연결</h2><p>장비 페이지는 사용 방식과 시스템을 설명하고, 전체 아이템 목록은 별도 허브에서 관리해 중복을 줄입니다.</p><Link className="text-link" href="/rinm/items">린M 아이템 정보 →</Link></div></section>
</>}
