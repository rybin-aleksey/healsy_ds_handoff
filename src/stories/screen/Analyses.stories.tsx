import type { Meta, StoryObj } from '@storybook/react';
import { ResultSummary, StartOption } from '../../components/screen';
import { Phone, figma } from '../Matrix';

const meta = {
  title: 'Экранные компоненты/Анализы',
  component: ResultSummary,
  tags: ['autodocs'],
  parameters: { ...figma('2002:3187', 'Analyses / Result Summary `2002:3187` (плашка «вне нормы» — примитив warning/50), Analyses / Start Option `1980:2854`. Логотип лаборатории — IMAGE, в сторис пустой круг.'), width: 312 },
  args: { lab: 'Инвитро', title: 'Общий анализ крови', outOfNorm: '1 вне нормы', showOutOfNorm: true, changes: 'есть изменения', showChanges: true },
} satisfies Meta<typeof ResultSummary>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ResultSummaryStory: Story = { name: 'Analyses / Result Summary' };

export const StartOptionStory: Story = {
  name: 'Analyses / Start Option',
  parameters: { ...figma('1980:2854'), width: 345 },
  render: () => <StartOption />,
};

export const Screen: Story = {
  name: 'Композиция (393 / 440)',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <StartOption label="Загрузите результаты анализов" icon="download-04" />
          <StartOption label="Сфотографируйте бланк" icon="file" />
          <div style={{ height: 12 }} />
          <ResultSummary />
          <ResultSummary title="Биохимия крови" showOutOfNorm={false} />
        </Phone>
      ))}
    </div>
  ),
};
