import './ServicesSection.css';

const SERVICES = [
  {
    faIcon: 'fa-solid fa-desktop',
    title: '컴퓨터 판매',
    color: 'blue',
    desc: '최신 데스크탑, 노트북, 서버부터 주변기기까지. 기업 맞춤형 견적과 AS까지 책임집니다.',
    items: ['데스크탑 / 노트북', '서버 & 워크스테이션', '네트워크 장비', '유지보수 & AS'],
  },
  {
    faIcon: 'fa-solid fa-code',
    title: '프로그램 개발',
    color: 'green',
    desc: '기업 업무에 최적화된 맞춤형 소프트웨어 개발. ERP·CRM·재고관리 등 다양한 솔루션.',
    items: ['ERP / CRM 시스템', '재고·물류 관리', '사무 자동화 도구', '레거시 시스템 현대화'],
  },
  {
    faIcon: 'fa-solid fa-globe',
    title: '웹 개발',
    color: 'red',
    desc: '반응형 기업 홈페이지부터 쇼핑몰, 관리자 대시보드까지 풀스택 웹 개발.',
    items: ['기업 홈페이지', '쇼핑몰 / 이커머스', '관리자 대시보드', 'API 연동 & 백엔드'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services section-pad">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">종합 IT 솔루션</h2>
          <p className="section-subtitle">고객의 비즈니스에 맞는 최적의 서비스를 제공합니다</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc) => (
            <div key={svc.title} className={`service-card card-${svc.color}`}>
              <div className="service-icon-wrap">
                <i className={svc.faIcon} />
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <ul className="service-items">
                {svc.items.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-chevron-right check" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta">
                자세히 알아보기 <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
