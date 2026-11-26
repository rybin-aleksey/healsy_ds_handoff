import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils';
import './feedback.css';

/* ---------- Inline Notice (2016:1554) ---------- */
export type InlineNoticeProps = { text: string; icon?: IconName; showIcon?: boolean };

export function InlineNotice({ text, icon = 'alert-circle', showIcon = true }: InlineNoticeProps) {
  return (
    <div className="hs-inline-notice" role="note">
      {showIcon && <Icon name={icon} size={16} className="hs-inline-notice__icon" />}
      <span className="hs-inline-notice__text ts-body-S">{text}</span>
    </div>
  );
}

/* ---------- Bottom Sheet (from screen upload-sheet 1992:2964; not yet a component in the Figma DS) ---------- */
export type BottomSheetProps = {
  open: boolean;
  onClose?: () => void;
  /** Header title. Without it the sheet has no header (grabber + content only), e.g. the task sheet 2021:3688 */
  title?: string;
  description?: string;
  /** Accessible name when there is no title */
  ariaLabel?: string;
  /** Sheet content under the header, e.g. a column of buttons */
  children?: ReactNode;
  showClose?: boolean;
  showGrabber?: boolean;
  /** Extra class on the sheet root, for per-screen layout overrides */
  className?: string;
};

const EXIT_MS = 260;

/**
 * Scrim + sheet anchored to the bottom of the nearest containing block (position: fixed;
 * the prototype shell makes the phone screen that block).
 * Motion: scrim fades in, sheet slides up with an iOS-like ease (380 ms); closing is faster (240 ms).
 * Closes by the cross, a tap on the scrim or Esc.
 */
export function BottomSheet({ open, onClose, title, description, ariaLabel, children, showClose = true, showGrabber = true, className }: BottomSheetProps) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      /* mount in the hidden position first, then animate in (timer, not rAF: rAF stalls in background tabs) */
      const t = setTimeout(() => setShown(true), 30);
      return () => clearTimeout(t);
    }
    setShown(false);
    const t = setTimeout(() => setMounted(false), EXIT_MS);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => { if (shown) closeRef.current?.focus({ preventScroll: true }); }, [shown]);

  if (!mounted) return null;
  return (
    <div className={cx('hs-sheet', shown && 'hs-sheet--open', className)}>
      <div className="hs-sheet__scrim" onClick={onClose} aria-hidden />
      <div className="hs-sheet__panel" role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} aria-label={title ? undefined : ariaLabel}>
        {showGrabber && <span className="hs-sheet__grabber" aria-hidden />}
        {title && (
          <div className="hs-sheet__header">
            <div className="hs-sheet__title-row">
              <h2 id={titleId} className="hs-sheet__title ts-heading-H2">{title}</h2>
              {showClose && (
                <button ref={closeRef} type="button" className="hs-sheet__close" aria-label="Закрыть" onClick={onClose}>
                  <Icon name="x" />
                </button>
              )}
            </div>
            {description && <p className="hs-sheet__description ts-body-M">{description}</p>}
          </div>
        )}
        {children && <div className="hs-sheet__content">{children}</div>}
      </div>
    </div>
  );
}
