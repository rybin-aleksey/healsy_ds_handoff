import { useEffect, useId, useLayoutEffect, useRef, type InputHTMLAttributes, type KeyboardEvent, type PointerEvent } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils';
import './forms.css';

/* ---------- Input ---------- */
export type InputState = 'Default' | 'Focused' | 'Filled' | 'Error' | 'Disabled';
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  showLabel?: boolean;
  hint?: string;
  showHint?: boolean;
  /** Pins a Figma state for review. Without it Focused/Filled follow real focus and value */
  state?: InputState;
};

export function Input({ label = 'Название', showLabel = true, hint = 'Подсказка к полю', showHint = true, state, placeholder = 'Введите название показателя', disabled, className, id, ...rest }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const isDisabled = disabled || state === 'Disabled';
  return (
    <div className={cx('hs-input', state && `hs-input--${state}`, isDisabled && 'hs-input--Disabled', className)}>
      {showLabel && <label htmlFor={inputId} className="hs-input__label ts-body-M-strong">{label}</label>}
      <div className="hs-input__field">
        <input id={inputId} className="hs-input__control ts-body-M" placeholder={placeholder} disabled={isDisabled} aria-invalid={state === 'Error' || undefined} {...rest} />
      </div>
      {showHint && <div className="hs-input__hint ts-description-L">{hint}</div>}
    </div>
  );
}

/* ---------- Checkbox ---------- */
export type CheckboxProps = { checked?: boolean; onChange?: (checked: boolean) => void; 'aria-label'?: string; className?: string };

export function Checkbox({ checked = false, onChange, className, ...rest }: CheckboxProps) {
  return (
    <span className={cx('hs-checkbox', className)}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} {...rest} />
      {checked && (
        <svg className="hs-checkbox__mark" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M5 10.2L8.3 13.4L14.9 6.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}

/* ---------- Radio ---------- */
export type RadioProps = { checked?: boolean; onChange?: () => void; name?: string; 'aria-label'?: string; className?: string };

export function Radio({ checked = false, onChange, className, ...rest }: RadioProps) {
  return (
    <span className={cx('hs-radio', className)}>
      <input type="radio" checked={checked} onChange={() => onChange?.()} {...rest} />
      {checked && <span className="hs-radio__dot" />}
    </span>
  );
}

/* ---------- Plan Item ---------- */
export type PlanItemProps = { title: string; selected?: boolean; onSelect?: () => void };

export function PlanItem({ title, selected = false, onSelect }: PlanItemProps) {
  return (
    <label className="hs-plan-item">
      <Radio checked={selected} onChange={onSelect} />
      <span className="hs-plan-item__title ts-body-M-strong">{title}</span>
    </label>
  );
}

/* ---------- Switcher ---------- */
export type SwitchProps = { checked?: boolean; onChange?: (checked: boolean) => void; 'aria-label'?: string };

export function Switcher({ checked = false, onChange, ...rest }: SwitchProps) {
  return (
    <button type="button" role="switch" aria-checked={checked} className="hs-switcher" onClick={() => onChange?.(!checked)} {...rest}>
      <span className="hs-switcher__knob" />
    </button>
  );
}

/* ---------- Toggle - Switch (iOS kit) ---------- */
export function ToggleSwitch({ checked = false, onChange, pressed, ...rest }: SwitchProps & { /** Figma: State=Pressed */ pressed?: boolean }) {
  return (
    <button type="button" role="switch" aria-checked={checked} className={cx('hs-toggle', pressed && 'hs-toggle--Pressed')} onClick={() => onChange?.(!checked)} {...rest}>
      <span className="hs-toggle__knob" />
    </button>
  );
}

/* ---------- Segment control ---------- */
export type SegmentControlProps = {
  segments?: [string, string];
  /** Figma: Segments — number of the selected segment */
  selected?: 1 | 2;
  onChange?: (selected: 1 | 2) => void;
};

export function SegmentControl({ segments = ['Активности', 'Обследования'], selected = 1, onChange }: SegmentControlProps) {
  return (
    <div className="hs-segment" role="tablist">
      {segments.map((s, i) => (
        <button key={s} type="button" role="tab" aria-selected={selected === i + 1} className="hs-segment__item ts-body-M" onClick={() => onChange?.((i + 1) as 1 | 2)}>
          {s}
        </button>
      ))}
    </div>
  );
}

/* ---------- DatePicker ---------- */
export function DatePickerHeader({ month = 'Месяц', onPrev, onNext }: { month?: string; onPrev?: () => void; onNext?: () => void }) {
  return (
    <div className="hs-dp-header">
      <button type="button" className="hs-dp-header__btn" aria-label="Предыдущий месяц" onClick={onPrev}><Icon name="chevron-left" /></button>
      <span className="hs-dp-header__label ts-body-M-strong">{month}</span>
      <button type="button" className="hs-dp-header__btn" aria-label="Следующий месяц" onClick={onNext}><Icon name="chevron-right" /></button>
    </div>
  );
}

export type DatePickerCellProps = {
  day: number | string;
  /** Figma: State */
  state?: 'Default' | 'Hovered' | 'Selected';
  /** Figma: Range + Start Range / End Range */
  range?: 'none' | 'middle' | 'start' | 'end';
  onClick?: () => void;
};

export function DatePickerCell({ day, state = 'Default', range = 'none', onClick }: DatePickerCellProps) {
  return (
    <button type="button" onClick={onClick} aria-pressed={state === 'Selected'} className={cx('hs-dp-cell', `hs-dp-cell--${state}`, range !== 'none' && `hs-dp-cell--range-${range}`)}>
      {range !== 'none' && <span className="hs-dp-cell__band" />}
      {state === 'Selected' && <span className="hs-dp-cell__selected" />}
      <span className="hs-dp-cell__num ts-body-S">{day}</span>
    </button>
  );
}

export type DatePickerDay = DatePickerCellProps | null;
export function DatePickerContent({ weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], weeks }: { weekdays?: string[]; weeks: DatePickerDay[][] }) {
  return (
    <div className="hs-dp-content">
      <div className="hs-dp-content__week">{weekdays.map((d, i) => <span key={i} className="hs-dp-content__weekday ts-body-M-strong">{d}</span>)}</div>
      <div className="hs-dp-content__month">
        {weeks.map((w, i) => (
          <div key={i} className="hs-dp-content__row">
            {w.map((c, j) => (c ? <DatePickerCell key={j} {...c} /> : <span key={j} className="hs-dp-content__empty" />))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Select Row ---------- */
export type SelectRowProps = {
  label: string;
  icon?: IconName;
  showValue?: boolean;
  value?: string;
  onClick?: () => void;
  onClear?: () => void;
};

export function SelectRow({ label, icon = 'clock', showValue = false, value = 'Не задано', onClick, onClear }: SelectRowProps) {
  return (
    <div className="hs-select-row" role="button" tabIndex={0} onClick={onClick}>
      <Icon name={icon} />
      <span className="hs-select-row__label ts-body-M-strong">{label}</span>
      {showValue && (
        <span className="hs-select-row__value">
          <span className="ts-body-S">{value}</span>
          <button type="button" className="hs-select-row__clear" aria-label="Очистить" onClick={(e) => { e.stopPropagation(); onClear?.(); }}>
            <Icon name="x" size={20} />
          </button>
        </span>
      )}
    </div>
  );
}

/* ---------- Wheel Picker (2068:1593) ---------- */
export type WheelColumn = {
  options: string[];
  /** Index of the selected option */
  value: number;
  onChange: (index: number) => void;
  ariaLabel?: string;
  /** Column width, px; by default the column takes the free space */
  width?: number;
};
export type WheelPickerProps = { columns: WheelColumn[]; ariaLabel?: string };

const WHEEL_ITEM = 36;

function WheelColumnView({ options, value, onChange, ariaLabel, width }: WheelColumn) {
  const ref = useRef<HTMLDivElement>(null);
  const settle = useRef<number>();
  const drag = useRef<{ y: number; top: number } | null>(null);

  /* iOS drum look: rows tilt and fade with the distance from the centre line */
  const paint = () => {
    const el = ref.current;
    if (!el) return;
    const items = el.children;
    for (let i = 0; i < items.length; i++) {
      const d = Math.max(-3, Math.min(3, (i * WHEEL_ITEM - el.scrollTop) / WHEEL_ITEM));
      const item = items[i] as HTMLElement;
      item.style.transform = `rotateX(${-d * 20}deg)`;
      item.style.opacity = String(1 - Math.abs(d) * 0.28);
    }
  };
  const clampIndex = (i: number) => Math.max(0, Math.min(options.length - 1, i));
  const snapTo = (i: number) => ref.current?.scrollTo({ top: i * WHEEL_ITEM, behavior: 'smooth' });

  useLayoutEffect(() => {
    const el = ref.current;
    if (el && Math.round(el.scrollTop / WHEEL_ITEM) !== value) el.scrollTop = value * WHEEL_ITEM;
    paint();
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  /* commit the row under the band when scrolling settles (native listener: reliable for programmatic and snap scrolls) */
  const onScroll = () => {
    paint();
    window.clearTimeout(settle.current);
    settle.current = window.setTimeout(() => {
      const el = ref.current;
      if (!el || drag.current) return;
      const i = clampIndex(Math.round(el.scrollTop / WHEEL_ITEM));
      if (i !== latest.current.value) latest.current.onChange(i);
    }, 120);
  };
  const latest = useRef({ value, onChange, onScroll });
  latest.current = { value, onChange, onScroll };
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const h = () => latest.current.onScroll();
    el.addEventListener('scroll', h, { passive: true });
    return () => { el.removeEventListener('scroll', h); window.clearTimeout(settle.current); };
  }, []);

  /* mouse drag (touch scrolls natively) */
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    drag.current = { y: e.clientY, top: ref.current.scrollTop };
    ref.current.classList.add('hs-wheel__col--drag');
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !ref.current) return;
    if (Math.abs(e.clientY - drag.current.y) > 4) ref.current.setPointerCapture(e.pointerId);
    ref.current.scrollTop = drag.current.top - (e.clientY - drag.current.y);
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !ref.current) return;
    const moved = Math.abs(e.clientY - drag.current.y) > 4;
    drag.current = null;
    ref.current.classList.remove('hs-wheel__col--drag');
    if (moved) {
      const i = clampIndex(Math.round(ref.current.scrollTop / WHEEL_ITEM));
      snapTo(i);
      if (i !== value) onChange(i);
    }
  };
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const i = clampIndex(value + step);
    snapTo(i);
    onChange(i);
  };

  return (
    <div
      ref={ref}
      className="hs-wheel__col"
      style={width ? { flex: `0 0 ${width}px` } : undefined}
      role="listbox"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {options.map((o, i) => (
        <div
          key={o}
          role="option"
          aria-selected={i === value}
          className={cx('hs-wheel__item ts-body-L', i === value && 'hs-wheel__item--selected')}
          onClick={() => { if (i !== value) { snapTo(i); onChange(i); } }}
        >
          {o}
        </div>
      ))}
    </div>
  );
}

/**
 * Drum picker like the iOS UIPickerView: 5 visible rows of 36, the centre row is the value,
 * highlighted by a gray band. Columns snap to rows; scroll, mouse drag, tap on a row or arrow keys.
 */
export function WheelPicker({ columns, ariaLabel }: WheelPickerProps) {
  return (
    <div className="hs-wheel" role="group" aria-label={ariaLabel}>
      <span className="hs-wheel__band" aria-hidden />
      {columns.map((c, i) => <WheelColumnView key={i} {...c} />)}
    </div>
  );
}
