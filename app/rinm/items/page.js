export const metadata = {
  title: '린M 아이템·재화 정보',
  description: '린M 실제 상점 화면에서 확인한 아이템과 재화 명칭을 정리합니다. 신기석, 탈것 영혼, 날개 광휘, 마법석, 미네랄 등 주요 아이템 정보를 제공합니다.',
};

const groups = [
  {
    title: '재료·성장 아이템',
    items: ['신기석', '공명 제련 수정', '구슬 수정', '홀리 수정', '황금 수정', '성물 수정', '성석 가루'],
  },
  {
    title: '탈것·장비 관련',
    items: ['탈것 영혼', '날개 광휘', '홀리웨폰 축복 오일', '펫 장비 조각', '영혼의 핵'],
  },
  {
    title: '교환·편의 아이템',
    items: ['미네랄 주머니', '1레벨 마법석 상자', '일반 보물지도', '고급 보물지도', '슈퍼 보물지도', '시공 열쇠', '명상(6시간)'],
  },
];

export default function ItemsPage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 아이템</span>
          <h1>린M 상점 아이템과 재화 정리</h1>
          <p>직접 제공받은 게임 상점 스크린샷에서 확인된 명칭만 우선 정리합니다. 세부 효과와 획득처는 추가 자료를 확인한 뒤 확장합니다.</p>
        </div>
        <div className="image-slot"><span>/public/images/items/hero.webp</span></div>
      </section>

      <section className="section container">
        <div className="card-grid three">
          {groups.map((group) => (
            <article className="feature-card" key={group.title}>
              <h2 className="card-title">{group.title}</h2>
              <ul className="keyword-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <div className="image-slot content-image-slot"><span>/public/images/items/content-01.webp</span></div>
        <div>
          <span className="eyebrow">상점 분류</span>
          <h2>귀족 상점·한정 할인·미네랄 교환</h2>
          <p>현재 확보한 화면 기준으로 귀족 상점, 재료, 특수 아이템, 한정 할인, 미네랄 교환, 잡화, 레저 상점 등의 메뉴가 확인됩니다. 페이지는 실제 게임 메뉴 체계와 맞춰 단계적으로 확장합니다.</p>
        </div>
      </section>
    </>
  );
}
