import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties, ReactNode } from 'react';
import { Icon, icons, iconNames } from '../../icons/Icon';

const meta = { title: 'Foundations/Токены', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const caption: CSSProperties = { font: '400 11px/14px Inter, sans-serif', color: 'var(--typography-secondary)' };
const h: CSSProperties = { font: '500 16px/20px Inter, sans-serif', margin: '24px 0 12px' };
const Section = ({ title, children }: { title: string; children: ReactNode }) => (<section><h3 style={h}>{title}</h3>{children}</section>);

const steps = ['0', '50', '100', '150', '200', '300', '400', '500', '600', '700', '800', '850', '900', '950', '1000'];
const scales = ['brand', 'neutral', 'success', 'warning', 'error', 'info', 'status-01', 'status-02', 'status-03', 'status-04'];
const alphas = ['4', '8', '12', '16', '24', '32', '40', '48', '56', '64', '72', '80'];

const Swatch = ({ v, label }: { v: string; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 64 }}>
    <div style={{ height: 40, borderRadius: 8, background: `var(${v})`, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.06)' }} />
    <span style={caption}>{label}</span>
  </div>
);

export const Colors: Story = {
  name: 'Цвета',
  render: () => (
    <div>
      <Section title="Примитивы (primitives/*)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {scales.map((s) => (
            <div key={s} style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <span style={{ ...caption, width: 70 }}>{s}</span>
              {steps.map((st) => <Swatch key={st} v={`--${s}-${st}`} label={st} />)}
            </div>
          ))}
        </div>
      </Section>
      <Section title="Прозрачность (primitives/*/alpha/*)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[...scales, 'white'].map((s) => (
            <div key={s} style={{ display: 'flex', gap: 8, alignItems: 'flex-end', background: s === 'white' ? '#313535' : undefined, padding: s === 'white' ? 4 : 0 }}>
              <span style={{ ...caption, width: 70 }}>{s}</span>
              {alphas.map((a) => <Swatch key={a} v={`--${s}-alpha-${a}`} label={a} />)}
            </div>
          ))}
        </div>
      </Section>
      <Section title="Смысловые токены">
        {Object.entries({
          bg: ['mainWhite', 'baseGray', 'pictureBg'],
          typography: ['primary', 'secondary', 'white', 'success', 'danger', 'warning', 'info'],
          border: ['default', 'light', 'hover', 'active'],
          icons: ['primaryLineIcon', 'secondaryLineIcon', 'disableLineIcon', 'primarySolidIcon', 'secondarySolidIcon', 'disableSolidIcon', 'whiteSolidIcon'],
          links: ['default', 'hovered', 'disable', 'legalDefault', 'legalHovered'],
          button: ['primaryBg', 'primaryBgActive', 'secondaryBg', 'secondaryBgActive', 'disabledBg', 'textDisabled', 'outlineBorder', 'outlineBorderActive', 'outlineText', 'outlineTextActive', 'darkBg'],
          tech: ['success', 'error', 'info', 'warning'],
        }).map(([g, names]) => (
          <div key={g} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
            <span style={{ ...caption, width: 70 }}>{g}/</span>
            {names.map((n) => <div key={n} style={{ width: 96 }}><Swatch v={`--${g}-${n}`} label={n} /></div>)}
          </div>
        ))}
      </Section>
    </div>
  ),
};

const textStyles = ['heading/H1', 'heading/H2', 'heading/H3', 'heading/H3-compact', 'heading/H4', 'body/L', 'body/L-compact', 'body/L-strong', 'body/M', 'body/M-compact', 'body/M-strong', 'body/S', 'body/S-strong', 'description/L', 'description/L-strong', 'button/L', 'display/L'];

export const Typography: Story = {
  name: 'Типографика',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {textStyles.map((s) => (
        <div key={s} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'baseline', gap: 16, borderBottom: '1px solid var(--border-light)', paddingBottom: 12 }}>
          <span style={caption}>{s}</span>
          <span className={`ts-${s.replace('/', '-')}`}>{s === 'display/L' ? '78 %' : 'Съешь же ещё этих мягких французских булок'}</span>
        </div>
      ))}
    </div>
  ),
};

const spacing = ['0', '05', '1', '1-5', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '16', '20'];
const radii = ['0', '05', '1', '2', '3', '4', '6', '100'];

export const SpacingRadius: Story = {
  name: 'Отступы и радиусы',
  render: () => (
    <div>
      <Section title="spacing/*">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {spacing.map((s) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ ...caption, width: 80 }}>spacing/{s.replace('-', ' ')}</span>
              <div style={{ height: 12, width: `var(--spacing-${s})`, background: 'var(--brand-300)', borderRadius: 2 }} />
            </div>
          ))}
        </div>
      </Section>
      <Section title="border radius/*">
        <div style={{ display: 'flex', gap: 16 }}>
          {radii.map((r) => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
              <div style={{ width: 64, height: 64, background: 'var(--bg-baseGray)', border: '1px solid var(--border-hover)', borderRadius: `var(--radius-${r})` }} />
              <span style={caption}>{r}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};

export const Icons: Story = {
  name: 'Иконки',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 110px)', gap: 12 }}>
      {iconNames.map((n) => (
        <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 12, borderRadius: 12, background: 'var(--bg-baseGray)' }}>
          <Icon name={n} color="var(--icons-primaryLineIcon)" />
          <span style={{ ...caption, textAlign: 'center' }}>{icons[n].size}px / {n}</span>
        </div>
      ))}
    </div>
  ),
};
