import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-orb" />
      <div className="container hero-content">
        <p className="hero-badge">
          <span className="hero-badge-dot" />
          Since 2003.09.23
        </p>
        <h1 className="hero-title">
          디지털 미래를<br />
          <span className="highlight">함께 만들어갑니다</span>
        </h1>
        <p className="hero-desc">
          20년 이상의 IT 경험으로 컴퓨터 판매, 프로그램 개발, 웹 개발까지<br />
          고객의 비즈니스 성장을 위한 최적의 IT 솔루션을 제공합니다.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">서비스 보기 →</a>
          <a href="#contact" className="btn-outline">문의하기</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>20+</strong>
            <span>년 업력</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>500+</strong>
            <span>납품 실적</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>100+</strong>
            <span>개발 프로젝트</span>
          </div>
        </div>
      </div>
    </section>
  );
}
