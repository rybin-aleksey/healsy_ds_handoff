import type { KeyboardEvent, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils';
import { Button } from '../actions';
import { Checkbox, Radio } from '../forms';
import { Chip } from '../chips';
import { ListLink } from '../navigation';
import './screen.css';

/* ---------- Home / Today Card ---------- */
export type TodayCardProps = {
  title?: string;
  /** Photo: IMAGE fill, overridden in the instance */
  imageUrl?: string;
  onClick?: () => void;
};

export function TodayCard({ title = 'Пейте воду', imageUrl, onClick }: TodayCardProps) {
  return (
    <div className="today-card" role="button" tabIndex={0} onClick={onClick} style={imageUrl ? { backgroundImage: `url("${imageUrl}")` } : undefined}>
      <span className="today-card__title ts-description-L">{title}</span>
      <span className="today-card__border" aria-hidden />
      <span className="today-card__ring" aria-hidden />
    </div>
  );
}

/* ---------- Home / Plan Row ---------- */
export function PlanRow({ title = 'Сдать ферритин', date = 'Чт, 11 октября' }: { title?: string; date?: string }) {
  return (
    <div className="plan-row">
      <span className="plan-row__title ts-body-M-strong">{title}</span>
      <span className="plan-row__date ts-description-L">{date}</span>
    </div>
  );
}

/* ---------- Home / Metric Card ---------- */
export type MetricCardProps = { title?: string; subtitle?: string; /** text or a node (e.g. an animated counter) */ value?: ReactNode; unit?: string; /** stretch to the grid column */ fill?: boolean };

export function MetricCard({ title = 'Пульс', subtitle = 'пульс в норме', value = '68', unit = 'уд/мин', fill }: MetricCardProps) {
  return (
    <div className={cx('metric-card', fill && 'metric-card--fill')}>
      <div className="metric-card__head">
        <span className="metric-card__title ts-heading-H3">{title}</span>
        <span className="metric-card__subtitle ts-description-L">{subtitle}</span>
      </div>
      <div className="metric-card__value">
        <span className="ts-heading-H2">{value}</span>
        <span className="metric-card__unit ts-description-L-strong">{unit}</span>
      </div>
    </div>
  );
}

/* ---------- Analyses / Start Option ---------- */
export function StartOption({ label = 'Загрузите результаты анализов', icon = 'download-04', onClick }: { label?: string; icon?: IconName; onClick?: () => void }) {
  return (
    <button type="button" className="start-option" onClick={onClick}>
      <Icon name={icon} />
      <span className="start-option__label ts-body-M">{label}</span>
    </button>
  );
}

/* ---------- Analyses / Result Summary ---------- */
export type ResultSummaryProps = {
  lab?: string;
  labLogoUrl?: string;
  title?: string;
  outOfNorm?: string;
  showOutOfNorm?: boolean;
  changes?: string;
  showChanges?: boolean;
  onOpen?: () => void;
};

export function ResultSummary({ lab = 'Инвитро', labLogoUrl, title = 'Общий анализ крови', outOfNorm = '1 вне нормы', showOutOfNorm = true, changes = 'есть изменения', showChanges = true, onOpen }: ResultSummaryProps) {
  return (
    <div className="result-summary">
      <div className="result-summary__info">
        <div className="result-summary__heading">
          <div className="result-summary__lab">
            <span className="result-summary__lab-logo">{labLogoUrl && <img src={labLogoUrl} alt="" />}</span>
            <span className="result-summary__lab-name ts-body-M">{lab}</span>
          </div>
          <span className="result-summary__title ts-body-L-strong">{title}</span>
        </div>
        {(showOutOfNorm || showChanges) && (
          <div className="result-summary__badges">
            {showOutOfNorm && <span className="result-summary__badge result-summary__badge--warning ts-body-S">{outOfNorm}</span>}
            {showChanges && <span className="result-summary__badge result-summary__badge--changes ts-body-S">{changes}</span>}
          </div>
        )}
      </div>
      <Button label="Открыть результаты" variant="Secondary" size="M" fullWidth onClick={onOpen} />
    </div>
  );
}

/* ---------- Explanation / Source Item ---------- */
export function SourceItem({ title = 'NIH — Vitamin D: Fact Sheet for Health Professionals' }: { title?: string }) {
  return (
    <div className="source-item">
      <span className="source-item__bullet"><span className="source-item__dot" /></span>
      <span className="source-item__title ts-body-M-compact">{title}</span>
    </div>
  );
}

/* ---------- Plan / Task Row ---------- */
export type TaskRowProps = { title?: string; time?: string; showCheckbox?: boolean; checked?: boolean; onCheckedChange?: (v: boolean) => void };

export function TaskRow({ title = 'Проверить питание и текущие добавки', time = 'Сегодня, 20:00–22:00', showCheckbox = false, checked = false, onCheckedChange, onClick }: TaskRowProps & { onClick?: () => void }) {
  return (
    <div
      className={onClick ? 'task-row task-row--clickable' : 'task-row'}
      {...(onClick ? { role: 'button', tabIndex: 0, onClick, onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } } : {})}
    >
      {showCheckbox && <Checkbox checked={checked} onChange={onCheckedChange} />}
      <div className="task-row__content">
        <span className="task-row__title ts-heading-H4">{title}</span>
        <span className="task-row__time ts-body-S">{time}</span>
      </div>
    </div>
  );
}

/* ---------- Trend / Conclusion Option ---------- */
export type ConclusionOptionProps = { title?: string; meta?: string; selected?: boolean; onSelect?: () => void };

export function ConclusionOption({ title = 'Витамин D и магний', meta = '2 показателя · 24 августа', selected = false, onSelect }: ConclusionOptionProps) {
  return (
    <label className="conclusion-option">
      <Radio checked={selected} onChange={onSelect} />
      <span className="conclusion-option__text">
        <span className="conclusion-option__title ts-heading-H4">{title}</span>
        <span className="conclusion-option__meta ts-body-M-compact">{meta}</span>
      </span>
    </label>
  );
}

/* ---------- Trend / Metric Picker ---------- */
export type PickedMetric = { label: string; color: string };
/** Data of the Count=4 variant in Figma: chip colors are primitives/base/status-03, 01, 04, 02 */
export const metricPickerSample: PickedMetric[] = [
  { label: 'Витамин D', color: 'var(--base-status-03)' },
  { label: 'Магний', color: 'var(--base-status-01)' },
  { label: 'Кальций', color: 'var(--base-status-04)' },
  { label: 'Фосфор', color: 'var(--base-status-02)' },
];

const pickedLabel = (n: number) =>
  n === 0 ? 'Выберите нужные показатели' : n === 1 ? 'Выбран 1 показатель' : `Выбрано ${n} показател${n < 5 ? 'я' : 'ей'}`;

export type MetricPickerProps = { metrics?: PickedMetric[]; /** max 4; at the limit the chevron disappears */ max?: number; onOpen?: () => void };

export function MetricPicker({ metrics = [], max = 4, onOpen }: MetricPickerProps) {
  const full = metrics.length >= max;
  return (
    <div className="metric-picker">
      <ListLink title="Показатели" subtitle={pickedLabel(metrics.length)} size="L" showChevron={!full} onClick={full ? undefined : onOpen} />
      {metrics.length > 0 && (
        <div className="metric-picker__chips">
          {metrics.map((m) => <Chip key={m.label} type="Legend" size="M" label={m.label} dotColor={m.color} />)}
        </div>
      )}
    </div>
  );
}
