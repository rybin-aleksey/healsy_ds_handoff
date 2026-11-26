import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBar, TabBarItem } from '../../components/navigation';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Навигация/App Footer (Tabbar)',
  component: TabBar,
  tags: ['autodocs'],
  parameters: { width: 393, backgrounds: { default: 'gray' }, ...figma('754:2016', 'Нижний таббар из 4 инстансов Tabbar / Item (1985:1595). Цвет верхней границы icons/grey — из внешней библиотеки (вне ДС).') },
  args: { activeTab: 1 },
  argTypes: { activeTab: { control: 'inline-radio', options: [1, 2, 3, 4] } },
} satisfies Meta<typeof TabBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [tab, setTab] = useState(args.activeTab ?? 1);
    return <TabBar activeTab={tab} onChange={setTab} />;
  },
};

export const AllVariants: Story = {
  name: 'Все варианты',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {([1, 2, 3, 4] as const).map((t) => (
        <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ font: '11px Inter', color: '#9747ff', width: 80 }}>activeTab={t}</span>
          <div style={{ width: 393 }}><TabBar activeTab={t} /></div>
          <div style={{ width: 440 }}><TabBar activeTab={t} /></div>
        </div>
      ))}
    </div>
  ),
};

export const Item: Story = {
  name: 'Tabbar / Item',
  parameters: { ...figma('1985:1595'), width: null },
  render: () => <Matrix cellWidth={86} cols={['State=Default', 'State=Active']} render={(c) => <TabBarItem label="Главная" icon="home" active={c === 1} />} />,
};
