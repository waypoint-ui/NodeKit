import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: {
      app: '#1e1f22',
      primary: {
        main:   '#2b2d30',
        hover:  '#35373b',
        active: '#25272a',
      },
      secondary: {
        main:   '#ffffff',
        hover:  '#f0f0f0',
        active: '#d9d9d9',
      },
    },
    border: {
      primary: {
        main:  '#393b40',
        hover: '#4e5157',
      },
    },
    text: {
      primary:     '#bcbec4',
      muted:       '#868a91',
      onSecondary: '#1a1a1a',
    },
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },
  space: {
    '1': '2px',
    '2': '4px',
    '3': '6px',
    '4': '8px',
    '5': '12px',
    '6': '16px',
    '7': '24px',
    '8': '32px',
  },
  font: {
    sizeXs: '11px',
    sizeSm: '12px',
    sizeMd: '14px',
    sizeLg: '16px',
    weightMedium: '500',
  },
});
