import SiteImage from '../../../components/SiteImage';

export const metadata = {
  title: '린M 공지·업데이트·이벤트 정보',
  description: '린M 공식 라운지 자료를 기준으로 공지, 업데이트, 이벤트, 쿠폰과 상점 프로모션 정보를 정리하는 페이지입니다.',
};

const sections = [
  ['공지사항', '충전·결제·상점 운영 등 공식 안내를 정리합니다.'],
  ['점검&업데이트', '점검 일정과 업데이트 내용을 날짜 기준으로 정리합니다.'],
  ['라운지 이벤트', '이벤트 기간, 참여 방법, 보상 아이템을 확인할 수 있게 구성합니다.'],
  ['쿠폰·프로모션', '원스토어, 포인트백, 웹페이지 결제 등 공식 프로모션을 별도로 정리합니다.'],
];

export default function NewsPage() {
  return (
    <>
      <section className="subhero container">
        <div>
          <span className="eyebrow">린M 게임정보</span>
          <h1>공지·업데이트·이벤트 한눈에</h1>
          <p>네이버 게임 린M 공식 라운지에서 확인한 내용을 기반으로 최신 정보 페이지를 구성합니다. 자동 복제하지 않고 핵심 내용을 요약·정리하는 방식으로 운영합니다.</p>
        </div>
        <SiteImage className="image-slot" src="/images/news/news-hero.webp" alt="린M 공지 업데이트 이벤트 게임정보 대표 이미지" priority />
      </section>

      <section className="section container">
        <div className="card-grid two">
          {sections.map(([title, desc]) => (
            <article className="feature-card" key={title}>
              <h2 className="card-title">{title}</h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
