import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '../../styles/themes.css';

const iconSize = createVar();

const base = style({
  gap: vars.space['3'],
  alignItems: 'center',
  display: 'inline-flex',
  boxSizing: 'border-box',
  borderRadius: vars.radius.md,
  justifyContent: 'center',
  textDecoration: 'none',
  border: '1px solid transparent',
  font: 'inherit',
  fontWeight: 500,
  cursor: 'pointer',
  selectors: {
    '&:focus-visible': { outline: '2px solid currentColor', outlineOffset: '2px' },
    '&:disabled':      { opacity: 0.5, cursor: 'not-allowed' },
  },
});

globalStyle(`${base} svg`, {
  display: 'block',
  width: iconSize,
  height: iconSize,
});

export const button = recipe({
  base,
  variants: {
    size: {
      small:  {
        padding: '2.5px 6px',
        fontSize: vars.font.sizeXs,
        vars: {
          [iconSize]: '12px'
        }
      },
      medium: {
        padding: '4px 12px',
        fontSize: vars.font.sizeSm,
        vars: {
          [iconSize]: '14px'
        }
      },
      large:  {
        padding: '5px 16px',
        fontSize: vars.font.sizeMd,
        vars: {
          [iconSize]: '18px'
        }
      },
    },
    variant: {
      primary: {
        color: vars.color.text.primary,
        background: vars.color.background.primary.main,
        borderColor: vars.color.border.primary.main,
        selectors: {
          '&:hover:not(:disabled)':  {
            background: vars.color.background.primary.hover,
            borderColor: vars.color.border.primary.hover
          },
          '&:active:not(:disabled)': {
            background: vars.color.background.primary.active
          },
        },
      },
      secondary: {
        color: vars.color.text.onSecondary,
        background: vars.color.background.secondary.main,
        borderColor: vars.color.background.secondary.main,
        selectors: {
          '&:hover:not(:disabled)':  {
            background: vars.color.background.secondary.hover,
            borderColor: vars.color.background.secondary.hover
          },
          '&:active:not(:disabled)': {
            background: vars.color.background.secondary.active,
            borderColor: vars.color.background.secondary.active
          },
        },
      },
      outline: {
        color: vars.color.text.primary,
        background: 'transparent',
        borderColor: vars.color.border.primary.main,
        selectors: {
          '&:hover:not(:disabled)':  {
            background: vars.color.background.primary.main,
            borderColor: vars.color.border.primary.hover
          },
          '&:active:not(:disabled)': {
            background: vars.color.background.primary.hover
          },
        },
      },
      ghost: {
        color: vars.color.text.primary,
        background: 'transparent',
        borderColor: 'transparent',
        selectors: {
          '&:hover:not(:disabled)':  {
            background: vars.color.background.primary.main
          },
          '&:active:not(:disabled)': {
            background: vars.color.background.primary.hover
          },
        },
      },
    },
    iconOnly: {
      true: {
        aspectRatio: 1
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    }
  },
  compoundVariants: [
    {
      variants: {
      size: 'small',
        iconOnly: true
      },
      style: {
        padding: '2.5px'
      }
    },
    {
      variants: {
        size: 'medium',
        iconOnly: true
      },
      style: {
        padding: '4px'
      }
    },
    {
      variants: {
        size: 'large',
        iconOnly: true
      },
      style: {
        padding: '7px'
      }
    }
  ],
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
