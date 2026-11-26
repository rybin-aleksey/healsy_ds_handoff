import type { Meta, StoryObj } from '@storybook/react';
import { SourceItem, TaskRow } from '../../components/screen';
import { Phone, figma } from '../Matrix';

const meta = {
  title: 'Экранные компоненты/План · Пояснения',
  component: TaskRow,
  tags: ['autodocs'],
  parameters: { ...figma('2018:3536', 'Plan / Task Row `2018:3536` (чекбокс скрыт по умолчанию), Explanation / Source Item `2015:3362` (точка — примитив brand/700).'), width: 354 },
  args: { title: 'Проверить питание и текущие добавки', time: 'Сегодня, 20:00–22:00', showCheckbox: false, checked: false },
} satisfies Meta<typeof TaskRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TaskRowStory: Story = { name: 'Plan / Task Row' };

export const SourceItemStory: Story = {
  name: 'Explanation / Source Item',
  parameters: figma('2015:3362'),
  render: () => <SourceItem />,
};

export const Screen: Story = {
  name: 'Композиция (393 / 440)',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <TaskRow />
          <TaskRow title="Сдать анализ на ферритин" time="Чт, 11 октября" showCheckbox checked />
          <div style={{ height: 12 }} />
          <SourceItem />
          <SourceItem title="Минздрав России — клинические рекомендации" />
        </Phone>
      ))}
    </div>
  ),
};
