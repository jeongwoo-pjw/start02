import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
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
  const [inHero, setInHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteRef = useRef(null);
  const { isDark, setIsDark, paletteId, setPaletteId, palettes } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setInHero(y < window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) {
        setPaletteOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const headerClass = [
    'header',
    scrolled ? 'scrolled' : '',
    inHero ? 'in-hero' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">JW</span>
          <span className="logo-text">JWIT</span>
        </a>

        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-cta">문의하기</a>

          {/* 다크/라이트 토글 */}
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            title={isDark ? '라이트 모드' : '다크 모드'}
          >
            {isDark
              ? <i className="fa-solid fa-sun" />
              : <i className="fa-solid fa-moon" />
            }
          </button>

          {/* 컬러 팔레트 */}
          <div className="palette-wrap" ref={paletteRef}>
            <button className="palette-btn" onClick={() => setPaletteOpen(!paletteOpen)} aria-label="컬러 테마 선택" title="컬러 테마">
              <span className="palette-icon" style={{ background: palettes.find(p => p.id === paletteId)?.swatch }} />
            </button>
            {paletteOpen && (
              <div className="palette-dropdown">
                <p className="palette-label">컬러 테마</p>
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    className={`palette-item${paletteId === p.id ? ' active' : ''}`}
                    onClick={() => { setPaletteId(p.id); setPaletteOpen(false); }}
                  >
                    <span className="palette-swatch" style={{ background: p.swatch }} />
                    <span>{p.label}</span>
                    {paletteId === p.id && <i className="fa-solid fa-check palette-check" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
