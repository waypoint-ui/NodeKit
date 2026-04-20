import type { ReactNode } from 'react';

export enum Placements {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

export enum Sizes {
  Medium = 'medium',
  Large = 'large',
}

export type TooltipProps = {
  label: ReactNode;
  size?: `${Sizes}`;
  placement?: `${Placements}`;
  delay?: number;
  closeDelay?: number;
  offset?: number;
  isDisabled?: boolean;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  children: ReactNode;
};
