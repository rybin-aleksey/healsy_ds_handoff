import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, PlanItem, Radio } from '../../components/forms';
import { Matrix, Phone, figma } from '../Matrix';

const meta = {
  title: 'Ввод и формы/Checkbox · Radio · Plan Item',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: figma('753:1992', 'Checkbox `753:1992`, radioButton `1108:5145`, Plan Item `1834:1486`. Галочка Checkbox в Figma — сырой hex #4262b3 (вне ДС).'),
  args: { checked: true },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  name: 'Все варианты',
  render: () => (
    <Matrix cols={['isActive=Yes', 'isActive=No']} rows={['Checkbox', 'radioButton']}
      render={(c, r) => (r === 0 ? <Checkbox checked={c === 0} /> : <Radio checked={c === 0} />)} />
  ),
};

function PlanList() {
  const [sel, setSel] = useState(0);
  const plans = ['Поднять витамин D', 'Нормализовать ферритин', 'Снизить холестерин'];
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {plans.map((p, i) => <PlanItem key={p} title={p} selected={sel === i} onSelect={() => setSel(i)} />)}
          </div>
        </Phone>
      ))}
    </div>
  );
}

export const PlanItems: Story = {
  name: 'Plan Item (393 / 440)',
  parameters: figma('1834:1486', 'Selected: No | Yes. Высота 52, вертикальный отступ 14 — без токена.'),
  render: () => <PlanList />,
};
