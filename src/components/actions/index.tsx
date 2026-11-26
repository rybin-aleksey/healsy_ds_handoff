import { Children, useEffect, useId, useRef, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils';
import './actions.css';

type NativeButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'>;

/* ---------- Button ---------- */
export type ButtonProps = NativeButton & {
  /** Figma: buttonName */
  label: string;
  /** Figma: Type */
  variant?: 'Primary' | 'Secondary' | 'Outline';
  /** Figma: Size. L = 56, M = 40 */
  size?: 'L' | 'M';
  /** Figma: State=Active. In the app it is the :active (pressed) state; the prop pins it for review */
  active?: boolean;
  /** Figma: State=Disabled */
  disabled?: boolean;
  /** On screens buttons stretch (FILL); the master is 184 px wide */
  fullWidth?: boolean;
};

export function Button({ label, variant = 'Primary', size = 'L', active, disabled, fullWidth, className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={cx('hs-button', `hs-button--${variant}`, `hs-button--${size}`, active && 'is-active', fullWidth && 'hs-button--full', className)}
      disabled={disabled}
      {...rest}
    >
      <span className="hs-button__text">{label}</span>
    </button>
  );
}

/* ---------- IconButton ---------- */
export type IconButtonProps = NativeButton & {
  /** Figma: icon (INSTANCE_SWAP), default chevron-left */
  icon?: IconName;
  /** Figma: State=Disabled */
  disabled?: boolean;
  'aria-label': string;
};

export function IconButton({ icon = 'chevron-left', disabled, className, ...rest }: IconButtonProps) {
  return (
    <button type="button" className={cx('hs-icon-button', className)} disabled={disabled} {...rest}>
      <Icon name={icon} />
    </button>
  );
}

/* ---------- IconButton Dark / Light, Shutter ---------- */
export type RoundIconButtonProps = NativeButton & { icon?: IconName; 'aria-label': string };

export function IconButtonDark({ icon = 'flash', className, ...rest }: RoundIconButtonProps) {
  return (
    <button type="button" className={cx('hs-icon-button-dark', className)} {...rest}>
      <Icon name={icon} />
    </button>
  );
}

export function IconButtonLight({ icon = 'chevron-right', className, ...rest }: RoundIconButtonProps) {
  return (
    <button type="button" className={cx('hs-icon-button-light', className)} {...rest}>
      <Icon name={icon} />
    </button>
  );
}

export function ShutterButton({ className, ...rest }: NativeButton & { 'aria-label'?: string }) {
  return (
    <button type="button" aria-label="Сделать снимок" className={cx('hs-shutter-button', className)} {...rest}>
      <Icon name="camera" />
    </button>
  );
}

/* ---------- Toolbar Action ---------- */
export type ToolbarActionProps = NativeButton & {
  icon?: IconName;
  label: string;
  /** In the bottom toolbar actions stretch (FILL) */
  fill?: boolean;
};

export function ToolbarAction({ icon = 'file-plus', label, fill, className, ...rest }: ToolbarActionProps) {
  return (
    <button type="button" className={cx('hs-toolbar-action', fill && 'hs-toolbar-action--fill', className)} {...rest}>
      <Icon name={icon} />
      <span className="hs-toolbar-action__label ts-description-L">{label}</span>
    </button>
  );
}

/* ---------- FAB ---------- */
export type FabProps = NativeButton & {
  /** Figma: State. Open = plus rotated 45° (cross), menu is open above the button */
  state?: 'Closed' | 'Open';
};

export function Fab({ state = 'Closed', className, ...rest }: FabProps) {
  return (
    <button
      type="button"
      aria-label={state === 'Open' ? 'Закрыть меню' : 'Добавить'}
      aria-expanded={state === 'Open'}
      className={cx('hs-fab', `hs-fab--${state}`, className)}
      {...rest}
    >
      <Icon name="plus" className="hs-fab__icon" />
    </button>
  );
}

/* ---------- FAB Menu Item ---------- */
export type FabMenuItemProps = NativeButton & {
  label: string;
  /** Figma: showIcon, off by default as on screens */
  showIcon?: boolean;
  icon?: IconName;
};

export function FabMenuItem({ label, showIcon = false, icon = 'plus', className, ...rest }: FabMenuItemProps) {
  return (
    <button type="button" className={cx('hs-fab-menu-item', className)} {...rest}>
      {showIcon && <Icon name={icon} />}
      <span className="ts-body-M">{label}</span>
    </button>
  );
}

/**
 * Column of FAB Menu Items: gap 4, right-aligned above the FAB.
 * Always mounted so it can animate out; `open` drives the state.
 * Animation: items rise from under the FAB one by one (nearest first, 50 ms stagger, spring ease),
 * close is faster (150 ms) in reverse order. prefers-reduced-motion → fade only.
 */
export function FabMenu({ children, open = true, id }: { children: ReactNode; open?: boolean; id?: string }) {
  const items = Children.toArray(children);
  const n = items.length;
  return (
    <div id={id} className={cx('hs-fab-menu', open && 'hs-fab-menu--open')} aria-hidden={!open} {...(!open ? ({ inert: '' } as Record<string, string>) : {})}>
      {items.map((child, i) => (
        <div key={i} className="hs-fab-menu__item" style={{ '--i': i, '--rev': n - 1 - i } as CSSProperties}>{child}</div>
      ))}
    </div>
  );
}

/** FAB + its menu as one group: menu above, gap 8, right-aligned (Figma analyses__fab-group 1980:3016) */
export function FabGroup({ open, onOpenChange, children }: { open: boolean; onOpenChange: (open: boolean) => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onOpenChange(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onOpenChange(false); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open, onOpenChange]);
  return (
    <div ref={ref} className="hs-fab-group">
      <FabMenu open={open} id={menuId}>{children}</FabMenu>
      <Fab state={open ? 'Open' : 'Closed'} aria-controls={menuId} onClick={() => onOpenChange(!open)} />
    </div>
  );
}
