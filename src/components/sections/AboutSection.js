import './AboutSection.css';

const HISTORY = [
  { year: '2003', text: '9월 23일 창립 — 컴퓨터 판매 & 프로그램 개발 사업 시작' },
  { year: '2008', text: '웹 개발 사업부 신설, 기업 홈페이지 구축 서비스 확대' },
  { year: '2015', text: '클라우드 서비스 및 ERP 솔루션 공급 시작' },
  { year: '2020', text: '모바일 앱 개발 역량 강화 — iOS·Android 개발 팀 구성' },
  { year: '2023', text: '창립 20주년 — AI 기반 솔루션 개발 사업 진출' },
];

export default function AboutSection() {
  return (
    <section id="about" className="about section-pad">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">회사소개</h2>
          <p className="section-subtitle">20년 이상의 신뢰와 기술력으로 함께합니다</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>디지털 솔루션 전문 기업</h3>
            <p>
              저희 회사는 2003년 9월 23일 창립 이래 컴퓨터 하드웨어 판매부터 맞춤형
              소프트웨어 개발, 웹사이트 구축까지 종합 IT 서비스를 제공해왔습니다.
            </p>
            <p>
              20년 이상의 업력과 500건 이상의 납품 실적, 100건 이상의 개발 프로젝트를 통해
              쌓아온 노하우로 중소기업부터 대기업까지 고객의 요구에 최적화된 솔루션을 제공합니다.
            </p>
            <div className="about-values">
              <div className="value green">
                <strong>신뢰</strong>
                <span>20년 변함없는 고객 중심</span>
              </div>
              <div className="value red">
                <strong>혁신</strong>
                <span>최신 기술 적용 역량</span>
              </div>
              <div className="value blue">
                <strong>품질</strong>
                <span>체계적인 개발 프로세스</span>
              </div>
            </div>
          </div>

          <div className="timeline">
            <h3>연혁</h3>
            <ul className="timeline-list">
              {HISTORY.map((item) => (
                <li key={item.year} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
