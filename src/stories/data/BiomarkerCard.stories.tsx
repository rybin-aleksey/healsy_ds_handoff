import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BiomarkerCard } from '../../components/data';
import { biomarkerStateLabels } from '../../components/chips';
import { Matrix, Phone, figma } from '../Matrix';

const meta = {
  title: 'Данные и карточки/Biomarker Card',
  component: BiomarkerCard,
  tags: ['autodocs'],
  parameters: { ...figma('1312:2736', 'Раскрывающаяся строка биомаркера. Отрезки шкалы warning/normal — примитивы warning/200, success/200 (смысловых токенов нет).'), width: 318 },
  args: { name: 'Витамин D', status: 'High', expanded: false, target: 'Цель: 20–50 нг/мл', value: '14', units: 'нг/мл', markerOffset: 36 },
  argTypes: { status: { control: 'select', options: Object.keys(biomarkerStateLabels) } },
} satisfies Meta<typeof BiomarkerCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(args.expanded);
    return <BiomarkerCard {...args} expanded={open} onToggle={() => setOpen(!open)} />;
  },
};

export const AllVariants: Story = {
  name: 'Все варианты',
  parameters: { width: null },
  render: () => <Matrix cellWidth={318} cols={['State=Collapsed', 'State=Expanded']} render={(c) => <BiomarkerCard expanded={c === 1} />} />,
};

export const List: Story = {
  name: 'Список результатов (393 / 440)',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <div>
            <BiomarkerCard name="Витамин D" status="High" expanded />
            <BiomarkerCard name="Ферритин" status="Lower" />
            <BiomarkerCard name="Гемоглобин" status="Normal" />
          </div>
        </Phone>
      ))}
    </div>
  ),
};
