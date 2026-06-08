import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: '홈', href: '#home' },
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '문의', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">JS</span>
          <span className="logo-text">JWIT</span>
        </a>

        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-cta">문의하기</a>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
