import clsx from 'clsx';
import { Children, PureComponent, createRef } from 'react';
import { SprocketButton } from '@sprocketui/react';

import { button } from './button.css';
import { Sizes, Variants } from './button.types';

import type { ButtonProps } from './button.types';
import type { ReactElement, RefObject } from 'react';

export class Button extends PureComponent<ButtonProps> {
  public static readonly Sizes: typeof Sizes = Sizes;
  public static readonly Variants: typeof Variants = Variants;
  public static readonly displayName: string = 'WaypointButton';

  private ref: RefObject<HTMLButtonElement> = createRef();

  public focus(): void {
    this.ref.current?.focus();
  }

  public render(): ReactElement {
    const {
      icon,
      iconOnly,
      fullWidth,
      iconAfter,
      className,
      children,
      size = Sizes.Medium,
      variant = Variants.Primary,
      ...rest
    } = this.props;

    const isIconOnly = iconOnly ?? !Children.toArray(children).some(
      (child) => typeof child === 'string' || typeof child === 'number',
    );

    return (
      <SprocketButton
        ref={this.ref}
        type="button"
        className={clsx(
          button({ size, variant, iconOnly: isIconOnly, fullWidth }),
          className,
        )}
        {...rest}
      >
        {icon}
        {children && (isIconOnly ? children : <span>{children}</span>)}
        {iconAfter}
      </SprocketButton>
    );
  }
}

export default Button;
