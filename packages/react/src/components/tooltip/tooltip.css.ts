import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '../../styles/themes.css';

export const content = recipe({
  base: {
    background: vars.color.background.primary.hover,
    color: vars.color.text.primary,
    border: `1px solid ${vars.color.border.primary.main}`,
    borderRadius: vars.radius.md,
    lineHeight: 1.4,
    maxWidth: '240px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35)',
    pointerEvents: 'none',
  },
  variants: {
    size: {
      medium: {
        padding: `${vars.space['2']} ${vars.space['3']}`,
        fontSize: vars.font.sizeXs
      },
      large:  {
        padding: `${vars.space['3']} ${vars.space['4']}`,
        fontSize: vars.font.sizeSm
      },
    },
  },
  defaultVariants: {
    size: 'large'
  },
});

export type TooltipVariants = RecipeVariants<typeof content>;
