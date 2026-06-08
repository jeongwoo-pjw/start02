import { createContext, useContext, useState, useEffect } from 'react';

const PALETTES = [
  {
    id: 'dark-blue',
    label: '다크블루',
    swatch: '#2051a3',
    vars: {
      '--accent':       '#2051a3',
      '--accent-dark':  '#1a3a6b',
      '--accent-hover': '#254d8e',
      '--green':        '#2d6a4f',
      '--green-dark':   '#1b4332',
      '--red':          '#a32323',
      '--red-dark':     '#7b1d1d',
    },
  },
  {
    id: 'midnight',
    label: '미드나잇',
    swatch: '#6a35c2',
    vars: {
      '--accent':       '#6a35c2',
      '--accent-dark':  '#3b1a6b',
      '--accent-hover': '#5528a8',
      '--green':        '#2d6a50',
      '--green-dark':   '#1a3b2a',
      '--red':          '#c23060',
      '--red-dark':     '#7b1d3a',
    },
  },
  {
    id: 'ocean',
    label: '오션',
    swatch: '#0e7ac4',
    vars: {
      '--accent':       '#0e7ac4',
      '--accent-dark':  '#0a3a5a',
      '--accent-hover': '#0b5f9e',
      '--green':        '#118a60',
      '--green-dark':   '#0a3b2e',
      '--red':          '#c4460e',
      '--red-dark':     '#7b2a0a',
    },
  },
  {
    id: 'slate',
    label: '슬레이트',
    swatch: '#3b82f6',
    vars: {
      '--accent':       '#3b82f6',
      '--accent-dark':  '#1e3a5f',
      '--accent-hover': '#2563eb',
      '--green':        '#16a34a',
      '--green-dark':   '#14532d',
      '--red':          '#dc2626',
      '--red-dark':     '#7f1d1d',
    },
  },
  {
    id: 'charcoal',
    label: '차콜',
    swatch: '#6366f1',
    vars: {
      '--accent':       '#6366f1',
      '--accent-dark':  '#1f2d4a',
      '--accent-hover': '#4f46e5',
      '--green':        '#059669',
      '--green-dark':   '#064e3b',
      '--red':          '#ea580c',
      '--red-dark':     '#7c2d12',
    },
  },
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [paletteId, setPaletteId] = useState(() => localStorage.getItem('paletteId') || 'dark-blue');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('isDark') !== 'false');

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('isDark', isDark);
  }, [isDark]);

  useEffect(() => {
    const palette = PALETTES.find(p => p.id === paletteId) || PALETTES[0];
    const root = document.documentElement;
    Object.entries(palette.vars).forEach(([k, v]) => root.style.setProperty(k, v));
    localStorage.setItem('paletteId', paletteId);
  }, [paletteId]);

  return (
    <ThemeContext.Provider value={{ paletteId, setPaletteId, isDark, setIsDark, palettes: PALETTES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
