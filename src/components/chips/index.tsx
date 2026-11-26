import { cx } from '../../utils';
import './chips.css';

/* ---------- biomarkerState ---------- */
export type BiomarkerStateValue = 'Low' | 'Lower' | 'Normal' | 'Upper' | 'High' | 'Medium';
export const biomarkerStateLabels: Record<BiomarkerStateValue, string> = {
  Low: 'Низкий',
  Lower: 'Ниже цели',
  Normal: 'Норма',
  Upper: 'Выше цели',
  High: 'Высокий',
  Medium: 'Средний приоритет',
};

export type BiomarkerStateProps = { state: BiomarkerStateValue; label?: string };

export function BiomarkerState({ state, label }: BiomarkerStateProps) {
  const withArrow = state === 'Lower' || state === 'Upper';
  return (
    <span className={cx('hs-bstate', `hs-bstate--${state}`, withArrow && 'hs-bstate--arrow')}>
      {withArrow && (
        <svg className="hs-bstate__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <span className="ts-body-S">{label ?? biomarkerStateLabels[state]}</span>
    </span>
  );
}

/* ---------- Chip ---------- */
export type ChipProps = {
  label: string;
  /** Figma: Type */
  type?: 'Filter' | 'Legend' | 'Tag' | 'Date';
  /** Figma: Selected (Filter only) */
  selected?: boolean;
  /** Figma: Size (Legend only): M = body/M, S = body/S */
  size?: 'M' | 'S';
  /** Legend dot color; default primitives/base/status-03 */
  dotColor?: string;
  onClick?: () => void;
};

export function Chip({ label, type = 'Filter', selected = false, size = 'M', dotColor = 'var(--base-status-03)', onClick }: ChipProps) {
  const isS = type === 'Legend' && size === 'S';
  const Tag = type === 'Tag' ? 'span' : 'button';
  return (
    <Tag
      {...(Tag === 'button' ? { type: 'button' as const, 'aria-pressed': type === 'Filter' ? selected : undefined, onClick } : {})}
      className={cx('hs-chip', `hs-chip--${type}`, isS && 'hs-chip--S', type === 'Filter' && selected && 'hs-chip--selected')}
    >
      {type === 'Legend' && <span className="hs-chip__dot" style={{ background: dotColor }} />}
      <span className={isS ? 'ts-body-S' : 'ts-body-M'}>{label}</span>
    </Tag>
  );
}
