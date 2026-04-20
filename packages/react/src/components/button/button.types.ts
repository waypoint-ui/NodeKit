import type { ReactNode } from 'react';
import type { SprocketButtonProps } from '@sprocketui/react';

export enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Ghost = 'ghost',
}

export type ButtonProps = Omit<SprocketButtonProps, 'children'> & {
  size?: `${Sizes}`;
  variant?: `${Variants}`;
  iconOnly?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconAfter?: ReactNode;
  children?: ReactNode;
};
