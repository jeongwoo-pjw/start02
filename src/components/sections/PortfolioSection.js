import './PortfolioSection.css';

const PROJECTS = [
  { title: '제조업체 ERP 시스템', category: '프로그램 개발', year: '2024', tag: 'green' },
  { title: '지역 쇼핑몰 웹사이트', category: '웹 개발', year: '2024', tag: 'red' },
  { title: '병원 예약 관리 시스템', category: '프로그램 개발', year: '2023', tag: 'green' },
  { title: '공공기관 홈페이지 리뉴얼', category: '웹 개발', year: '2023', tag: 'red' },
  { title: '기업 PC 200대 일괄 납품', category: '컴퓨터 판매', year: '2024', tag: 'blue' },
  { title: '재고관리 자동화 솔루션', category: '프로그램 개발', year: '2022', tag: 'green' },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio section-pad">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">포트폴리오</h2>
          <p className="section-subtitle">주요 납품 및 개발 실적</p>
        </div>

        <div className="portfolio-grid">
          {PROJECTS.map((proj) => (
            <div key={proj.title} className={`portfolio-card tag-${proj.tag}`}>
              <div className="portfolio-header">
                <span className={`portfolio-tag tag-${proj.tag}`}>{proj.category}</span>
                <span className="portfolio-year">{proj.year}</span>
              </div>
              <h3>{proj.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
