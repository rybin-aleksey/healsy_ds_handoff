import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils';
import './navigation.css';

/* ---------- Navbar ---------- */
export type NavbarProps = {
  isIconLeft?: boolean;
  iconLeft?: IconName;
  isPrimaryLabel?: boolean;
  primaryLabelText?: string;
  /** Figma: isSecondaryLable (sic) */
  isSecondaryLabel?: boolean;
  secondaryLabelText?: string;
  isPrimaryRightIcon?: boolean;
  primaryRightIcon?: IconName;
  isSecondaryRightIcon?: boolean;
  secondaryRightIcon?: IconName;
  onLeft?: () => void;
};

export function Navbar({
  isIconLeft = true, iconLeft = 'menu',
  isPrimaryLabel = true, primaryLabelText = 'Сегодня',
  isSecondaryLabel = true, secondaryLabelText = 'Август',
  isPrimaryRightIcon = true, primaryRightIcon = 'check-done',
  isSecondaryRightIcon = true, secondaryRightIcon = 'filter-funnel',
  onLeft,
}: NavbarProps) {
  return (
    <header className="hs-navbar">
      <div className="hs-navbar__row">
        <div className="hs-navbar__side">
          {isIconLeft && <button type="button" className="hs-navbar__btn" onClick={onLeft} aria-label="Меню"><Icon name={iconLeft} /></button>}
        </div>
        <div className="hs-navbar__title">
          {isSecondaryLabel && <span className="ts-description-L-strong">{secondaryLabelText}</span>}
          {isPrimaryLabel && <span className="ts-body-M-strong">{primaryLabelText}</span>}
        </div>
        <div className="hs-navbar__side hs-navbar__side--right">
          {isPrimaryRightIcon && <button type="button" className="hs-navbar__btn"><Icon name={primaryRightIcon} /></button>}
          {isSecondaryRightIcon && <button type="button" className="hs-navbar__btn"><Icon name={secondaryRightIcon} /></button>}
        </div>
      </div>
    </header>
  );
}

/* ---------- Tabbar / Item ---------- */
export type TabBarItemProps = { label: string; icon: IconName; active?: boolean; onClick?: () => void };

export function TabBarItem({ label, icon, active = false, onClick }: TabBarItemProps) {
  return (
    <button type="button" className={cx('hs-tab-item', active && 'hs-tab-item--Active')} aria-current={active ? 'page' : undefined} onClick={onClick}>
      <Icon name={icon} size={26} />
      <span className="hs-tab-item__label ts-description-L">{label}</span>
    </button>
  );
}

/* ---------- App Footer (Tabbar) ---------- */
export const defaultTabs: Array<{ label: string; icon: IconName }> = [
  { label: 'Главная', icon: 'home' },
  { label: 'Анализы', icon: 'analysis' },
  { label: 'Аналитика', icon: 'analytic' },
  { label: 'Профиль', icon: 'profile' },
];

export type TabBarProps = { activeTab?: 1 | 2 | 3 | 4; onChange?: (tab: 1 | 2 | 3 | 4) => void };

export function TabBar({ activeTab = 1, onChange }: TabBarProps) {
  return (
    <nav className="hs-tabbar">
      {defaultTabs.map((t, i) => (
        <TabBarItem key={t.label} {...t} active={activeTab === i + 1} onClick={() => onChange?.((i + 1) as 1 | 2 | 3 | 4)} />
      ))}
    </nav>
  );
}

/* ---------- settingsItem ---------- */
export type SettingsItemProps = {
  headlineText?: string;
  isSupportText?: boolean;
  /** Figma: suppportText (sic) */
  supportText?: string;
  isIconOn?: boolean;
  onClick?: () => void;
};

export function SettingsItem({ headlineText = 'Название плана', isSupportText = true, supportText = 'Поднять витамин D', isIconOn = true, onClick }: SettingsItemProps) {
  return (
    <button type="button" className="hs-settings-item" onClick={onClick}>
      <span className="hs-settings-item__text">
        <span className="hs-settings-item__title ts-heading-H4">{headlineText}</span>
        {isSupportText && <span className="hs-settings-item__subtitle ts-body-M-compact">{supportText}</span>}
      </span>
      {isIconOn && <Icon name="chevron-right" className="hs-settings-item__chevron" />}
    </button>
  );
}

/* ---------- List Link ---------- */
export type ListLinkProps = {
  title: string;
  /** Size L only */
  subtitle?: string;
  size?: 'L' | 'M';
  showChevron?: boolean;
  onClick?: () => void;
};

export function ListLink({ title, subtitle = 'Сравните результаты по датам', size = 'L', showChevron = true, onClick }: ListLinkProps) {
  return (
    <button type="button" className={cx('hs-list-link', `hs-list-link--${size}`)} onClick={onClick}>
      <span className="hs-list-link__text">
        <span className={cx('hs-list-link__title', size === 'L' ? 'ts-heading-H3' : 'ts-body-M-compact')}>{title}</span>
        {size === 'L' && subtitle && <span className="hs-list-link__subtitle ts-body-M">{subtitle}</span>}
      </span>
      {showChevron && <Icon name="chevron-right" size={size === 'L' ? 24 : 20} />}
    </button>
  );
}
