import { createContext, useContext, useState, useEffect } from 'react';

const PALETTES = [
  {
    id: 'dark-blue',
    label: '다크블루',
    swatch: '#1a3a6b',
    vars: {
      '--dark-blue':         '#0d1b2a',
      '--royal-blue':        '#1a3a6b',
      '--royal-blue-light':  '#2051a3',
      '--royal-blue-hover':  '#254d8e',
      '--dark-green':        '#1b4332',
      '--dark-green-light':  '#2d6a4f',
      '--dark-red':          '#7b1d1d',
      '--dark-red-light':    '#a32323',
    },
  },
  {
    id: 'midnight',
    label: '미드나잇',
    swatch: '#4a1a7a',
    vars: {
      '--dark-blue':         '#0e0a1a',
      '--royal-blue':        '#3b1a6b',
      '--royal-blue-light':  '#6a35c2',
      '--royal-blue-hover':  '#5528a8',
      '--dark-green':        '#1a3b2a',
      '--dark-green-light':  '#2d6a50',
      '--dark-red':          '#7b1d3a',
      '--dark-red-light':    '#c23060',
    },
  },
  {
    id: 'ocean',
    label: '오션',
    swatch: '#0a4a6b',
    vars: {
      '--dark-blue':         '#021b2e',
      '--royal-blue':        '#0a3a5a',
      '--royal-blue-light':  '#0e7ac4',
      '--royal-blue-hover':  '#0b5f9e',
      '--dark-green':        '#0a3b2e',
      '--dark-green-light':  '#118a60',
      '--dark-red':          '#7b2a0a',
      '--dark-red-light':    '#c4460e',
    },
  },
  {
    id: 'slate',
    label: '슬레이트',
    swatch: '#334155',
    vars: {
      '--dark-blue':         '#0f172a',
      '--royal-blue':        '#1e3a5f',
      '--royal-blue-light':  '#3b82f6',
      '--royal-blue-hover':  '#2563eb',
      '--dark-green':        '#14532d',
      '--dark-green-light':  '#16a34a',
      '--dark-red':          '#7f1d1d',
      '--dark-red-light':    '#dc2626',
    },
  },
  {
    id: 'charcoal',
    label: '차콜',
    swatch: '#374151',
    vars: {
      '--dark-blue':         '#111827',
      '--royal-blue':        '#1f2d4a',
      '--royal-blue-light':  '#6366f1',
      '--royal-blue-hover':  '#4f46e5',
      '--dark-green':        '#064e3b',
      '--dark-green-light':  '#059669',
      '--dark-red':          '#7c2d12',
      '--dark-red-light':    '#ea580c',
    },
  },
];

const LIGHT_OVERRIDES = {
  '--dark-blue':   '#f0f4f8',
  '--gray-800':    '#ffffff',
  '--gray-600':    '#64748b',
  '--gray-400':    '#475569',
  '--gray-200':    '#1e293b',
  '--gray-100':    '#e8edf2',
  '--white':       '#0d1b2a',
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [paletteId, setPaletteId] = useState(() => localStorage.getItem('paletteId') || 'dark-blue');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('isDark') !== 'false');

  useEffect(() => {
    const palette = PALETTES.find(p => p.id === paletteId) || PALETTES[0];
    const root = document.documentElement;

    Object.entries(palette.vars).forEach(([k, v]) => root.style.setProperty(k, v));

    if (!isDark) {
      Object.entries(LIGHT_OVERRIDES).forEach(([k, v]) => root.style.setProperty(k, v));
    }

    localStorage.setItem('paletteId', paletteId);
    localStorage.setItem('isDark', isDark);
  }, [paletteId, isDark]);

  return (
    <ThemeContext.Provider value={{ paletteId, setPaletteId, isDark, setIsDark, palettes: PALETTES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
