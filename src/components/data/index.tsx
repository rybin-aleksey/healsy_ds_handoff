import { Icon } from '../../icons/Icon';
import { cx } from '../../utils';
import { BiomarkerState, type BiomarkerStateValue } from '../chips';
import { Checkbox } from '../forms';
import { Button } from '../actions';
import './data.css';

/* ---------- Biomarker Card ---------- */
export type BiomarkerCardProps = {
  name?: string;
  /** Nested biomarkerState (exposed in Figma) */
  status?: BiomarkerStateValue;
  /** Figma: State=Expanded */
  expanded?: boolean;
  onToggle?: () => void;
  /** Figma: Text */
  target?: string;
  /** Figma: biomarkerValue */
  value?: string;
  /** Figma: biomarkerUnits */
  units?: string;
  /** Marker offset from the left edge of the scale, px. In Figma 36 */
  markerOffset?: number;
};

export function BiomarkerCard({ name = 'Витамин D', status = 'High', expanded = false, onToggle, target = 'Цель: 20–50 нг/мл', value = '14', units = 'нг/мл', markerOffset = 36 }: BiomarkerCardProps) {
  return (
    <div className={cx('biomarker-card', expanded && 'biomarker-card--expanded')}>
      <div className="biomarker-card__header">
        <div className="biomarker-card__info">
          <BiomarkerState state={status} />
          <span className="biomarker-card__name ts-body-L">{name}</span>
        </div>
        <button type="button" className="biomarker-card__toggle" aria-expanded={expanded} aria-label={expanded ? 'Свернуть' : 'Развернуть'} onClick={onToggle}>
          <Icon name="chevron-down" size={28} className="biomarker-card__chevron" />
        </button>
      </div>
      {/* always rendered: the body unfolds by animating its grid row 0fr → 1fr */}
      <div className="biomarker-card__body" {...(expanded ? {} : { inert: '' })} aria-hidden={!expanded}>
        <div className="biomarker-card__body-inner">
          <div className="biomarker-card__target">
            <span className="biomarker-card__target-text ts-body-S">{target}</span>
            <span className="biomarker-card__value">
              <span className="biomarker-card__value-number ts-body-L">{value}</span>
              <span className="biomarker-card__value-units ts-description-L">{units}</span>
            </span>
          </div>
          <div className="biomarker-card__scale" aria-hidden>
            <span className="biomarker-card__scale-segment biomarker-card__scale-segment--low" />
            <span className="biomarker-card__scale-segment biomarker-card__scale-segment--warning" />
            <span className="biomarker-card__scale-segment biomarker-card__scale-segment--normal" />
            <span className="biomarker-card__scale-segment biomarker-card__scale-segment--high" />
            <span className="biomarker-card__scale-marker" style={{ left: markerOffset }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Recommendation Card ---------- */
export type RecommendationCardProps = {
  title?: string;
  /** View=Full only */
  description?: string;
  /** View=Compact only */
  priority?: string;
  /** Priority badge in View=Full (nested biomarkerState) */
  priorityBadge?: BiomarkerStateValue;
  /** Badge text override, as the text override of the nested badge in Figma («Высокий», «Средний», «Низкий») */
  priorityBadgeLabel?: string;
  view?: 'Full' | 'Compact';
  selected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
};

export function RecommendationCard({
  title = 'Обсудить коррекцию витамина D с врачом',
  description = 'Врач поможет определить необходимость приёма витамина D, подходящую форму и дозировку с учётом индивидуальных факторов.',
  priority = 'Средний приоритет',
  priorityBadge = 'Medium',
  priorityBadgeLabel,
  view = 'Full',
  selected = false,
  onSelectedChange,
}: RecommendationCardProps) {
  return (
    <label className={cx('recommendation-card', `recommendation-card--${view}`)}>
      <Checkbox checked={selected} onChange={onSelectedChange} />
      <div className="recommendation-card__content">
        {view === 'Full' ? (
          <>
            <div className="recommendation-card__heading">
              <span className="recommendation-card__title ts-heading-H4">{title}</span>
              <BiomarkerState state={priorityBadge} label={priorityBadgeLabel} />
            </div>
            <span className="recommendation-card__description ts-body-S">{description}</span>
          </>
        ) : (
          <>
            <span className="recommendation-card__title ts-heading-H4">{title}</span>
            <span className="recommendation-card__priority ts-description-L">{priority}</span>
          </>
        )}
      </div>
    </label>
  );
}

/* ---------- Recommendation Selection Bar ---------- */
export type SelectionBarProps = { label?: string; actionLabel?: string; onAction?: () => void };

export function RecommendationSelectionBar({ label = 'Выбрана 1 рекомендация', actionLabel = 'Посмотреть', onAction }: SelectionBarProps) {
  return (
    <div className="selection-bar">
      <span className="selection-bar__label ts-body-M">{label}</span>
      <Button label={actionLabel} variant="Secondary" size="L" fullWidth onClick={onAction} />
    </div>
  );
}
