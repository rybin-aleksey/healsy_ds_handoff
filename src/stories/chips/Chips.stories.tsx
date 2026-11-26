import type { Meta, StoryObj } from '@storybook/react';
import { BiomarkerState, Chip, biomarkerStateLabels, type BiomarkerStateValue } from '../../components/chips';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Чипы и теги/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: figma('1813:1483', 'Фильтр, легенда графика, тег-фактор, дата задачи. Обводка не входит в размер: M/S — 32, Date — 38.'),
  args: { label: 'Биохимия', type: 'Filter', selected: false, size: 'M' },
  argTypes: { type: { control: 'inline-radio' }, size: { control: 'inline-radio' }, dotColor: { control: 'color' } },
} satisfies Meta<typeof Chip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  name: 'Все варианты',
  render: () => {
    const v: Array<[string, Parameters<typeof Chip>[0]]> = [
      ['Filter, Selected=No', { label: 'Биохимия' }],
      ['Filter, Selected=Yes', { label: 'Биохимия', selected: true }],
      ['Legend, Size=M', { label: 'Биохимия', type: 'Legend' }],
      ['Legend, Size=S', { label: 'Биохимия', type: 'Legend', size: 'S' }],
      ['Tag', { label: 'Биохимия', type: 'Tag' }],
      ['Date', { label: 'Сегодня, 20:00', type: 'Date' }],
    ];
    return <Matrix cols={v.map((x) => x[0])} render={(c) => <Chip {...v[c][1]} />} />;
  },
};

const states = Object.keys(biomarkerStateLabels) as BiomarkerStateValue[];
export const BiomarkerStates: Story = {
  name: 'biomarkerState',
  parameters: figma('1108:5478', 'Бейдж статуса биомаркера. Medium = «Средний приоритет» (смешивает статус и приоритет — замечание из скана). Фоны — примитивы */50.'),
  render: () => <Matrix cols={states.map((s) => s)} render={(c) => <BiomarkerState state={states[c]} />} />,
};
