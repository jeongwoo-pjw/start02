import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark">JS</span>
            <span className="logo-text">JWIT</span>
          </div>
          <p className="footer-desc">
            2003년 창립 이래 컴퓨터 판매·프로그램 개발·웹개발을<br />
            통해 고객의 디지털 성장을 지원합니다.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>서비스</h4>
            <ul>
              <li><a href="#services">컴퓨터 판매</a></li>
              <li><a href="#services">프로그램 개발</a></li>
              <li><a href="#services">웹사이트 개발</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>회사</h4>
            <ul>
              <li><a href="#about">회사소개</a></li>
              <li><a href="#portfolio">포트폴리오</a></li>
              <li><a href="#contact">문의하기</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} JWIT Co., Ltd. All rights reserved. | 창립: 2003.09.23</p>
        </div>
      </div>
    </footer>
  );
}
