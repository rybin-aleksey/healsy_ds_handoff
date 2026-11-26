import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard, PlanRow, TodayCard } from '../../components/screen';
import { Phone, figma } from '../Matrix';

/* Placeholder photo: the real image is an IMAGE fill overridden per instance in Figma */
const photo = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="216"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfece1"/><stop offset="1" stop-color="#6abcff"/></linearGradient></defs><rect width="200" height="216" fill="url(#g)"/><rect x="70" y="40" width="60" height="120" rx="10" fill="#ffffff" opacity=".7"/></svg>')}`;

const meta = {
  title: 'Экранные компоненты/Главная',
  component: TodayCard,
  tags: ['autodocs'],
  parameters: figma('1840:2782', 'Home / Today Card `1840:2782`, Home / Plan Row `1840:2784`, Home / Metric Card `1840:2787`. Фото в сторис — заглушка.'),
  args: { title: 'Пейте воду', imageUrl: photo },
} satisfies Meta<typeof TodayCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TodayCardStory: Story = { name: 'Home / Today Card' };

export const PlanRowStory: Story = {
  name: 'Home / Plan Row',
  parameters: figma('1840:2784'),
  render: () => <div style={{ width: 354 }}><PlanRow /></div>,
};

export const MetricCardStory: Story = {
  name: 'Home / Metric Card',
  parameters: figma('1840:2787', 'Мастер 169×165. В сетке из двух колонок — `fill`.'),
  render: () => <MetricCard />,
};

export const HomeComposition: Story = {
  name: 'Композиция главной (393 / 440)',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto' }}>
            <TodayCard title="Пейте воду" imageUrl={photo} />
            <TodayCard title="Сон 8 часов" imageUrl={photo} />
            <TodayCard title="Прогулка" imageUrl={photo} />
          </div>
          <PlanRow />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <MetricCard fill />
            <MetricCard fill title="Сон" subtitle="лучше, чем вчера" value="7,5" unit="ч" />
          </div>
        </Phone>
      ))}
    </div>
  ),
};
