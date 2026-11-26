import type { CSSProperties } from 'react';
import { icons, type IconName } from './icons';

export type IconProps = {
  name: IconName;
  /** Rendered size in px. By default the icon's own frame: 24, tab bar icons 26. */
  size?: number;
  /** CSS color, usually a token: var(--icons-primaryLineIcon) */
  color?: string;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

export function Icon({ name, size, color, className, style, title }: IconProps) {
  const def = icons[name];
  const px = size ?? def.size;
  return (
    <svg
      className={className}
      width={px}
      height={px}
      viewBox={`0 0 ${def.size} ${def.size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      style={{ color, flexShrink: 0, display: 'block', ...style }}
      dangerouslySetInnerHTML={{ __html: def.body }}
    />
  );
}

export { icons, iconNames, type IconName } from './icons';
