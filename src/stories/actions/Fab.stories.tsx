import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Fab, FabGroup, FabMenu, FabMenuItem } from '../../components/actions';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Действия/FAB',
  component: Fab,
  tags: ['autodocs'],
  parameters: figma('1816:1456', 'Плавающая кнопка 56 px. Open: плюс повёрнут на 45°, над кнопкой меню из FAB Menu Item (1816:1447).'),
  args: { state: 'Closed' },
  argTypes: { state: { control: 'inline-radio' } },
} satisfies Meta<typeof Fab>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  name: 'Все варианты',
  render: () => <Matrix cols={['State=Closed', 'State=Open']} render={(c) => <Fab state={c ? 'Open' : 'Closed'} />} />,
};

export const MenuItem: Story = {
  name: 'FAB Menu Item',
  parameters: figma('1816:1447'),
  render: () => (
    <Matrix cols={['showIcon=false', 'showIcon=true']} render={(c) => <FabMenuItem label="Анализы" showIcon={c === 1} />} />
  ),
};

function Interactive() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', width: 240, height: 220 }}>
      <FabGroup open={open} onOpenChange={setOpen}>
        <FabMenuItem label="Анализы" />
        <FabMenuItem label="Консультация" />
      </FabGroup>
    </div>
  );
}

export const WithMenu: Story = {
  name: 'Интерактив: меню с анимацией',
  parameters: figma('1980:3016', 'FabGroup: FAB + FabMenu. Открытие — пункты всплывают снизу вверх по очереди (50 мс, пружина), плюс поворачивается в крестик. Закрытие — быстрее, в обратном порядке. Закрывается тапом мимо или Esc. При prefers-reduced-motion — только прозрачность.'),
  render: () => <Interactive />,
};

export const OpenState: Story = {
  name: 'Состояние Open (статично)',
  parameters: figma('1980:3016'),
  render: () => (
    <div className="hs-fab-group">
      <FabMenu open>
        <FabMenuItem label="Анализы" />
        <FabMenuItem label="Консультация" />
      </FabMenu>
      <Fab state="Open" />
    </div>
  ),
};
