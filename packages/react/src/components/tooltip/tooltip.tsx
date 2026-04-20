import { PureComponent } from 'react';
import { Primitive } from '@necto-react/components';
import { SprocketTooltip } from '@sprocketui/react';

import { content } from './tooltip.css';
import { Placements, Sizes } from './tooltip.types';

import type { ReactElement } from 'react';
import type { TooltipProps } from './tooltip.types';

export class Tooltip extends PureComponent<TooltipProps> {
  public static readonly Sizes: typeof Sizes = Sizes;
  public static readonly Placements: typeof Placements = Placements;
  public static readonly displayName: string = 'WaypointTooltip';

  public render(): ReactElement {
    const {
      label,
      children,
      size,
      offset = 6,
      delay = 100,
      closeDelay = 100,
      placement = Placements.Right,
      ...rest
    } = this.props;

    return (
      <SprocketTooltip
        delay={delay}
        closeDelay={closeDelay}
        {...rest}
      >
        <SprocketTooltip.Trigger>
          <Primitive.Span style={{ display: 'inline-flex' }}>
            {children}
          </Primitive.Span>
        </SprocketTooltip.Trigger>

        <SprocketTooltip.Content
          offset={offset}
          placement={placement}
          className={content({ size })}
        >
          {label}
        </SprocketTooltip.Content>
      </SprocketTooltip>
    );
  }
}

export default Tooltip;
