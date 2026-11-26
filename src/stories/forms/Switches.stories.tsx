import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentControl, Switcher, ToggleSwitch } from '../../components/forms';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Ввод и формы/Switcher · Toggle · Segment control',
  component: Switcher,
  tags: ['autodocs'],
  parameters: figma('754:1983', 'Switcher `754:1983` (по контракту — переключатель по умолчанию), Toggle - Switch `980:2223` (iOS-кит, цвета из внешней библиотеки), Segment control `754:2224`.'),
  args: { checked: true },
} satisfies Meta<typeof Switcher>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [on, setOn] = useState(args.checked);
    return <Switcher checked={on} onChange={setOn} />;
  },
};

export const AllVariants: Story = {
  name: 'Все варианты',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <Matrix cols={['isActive=false', 'isActive=true']} rows={['Switcher']} render={(c) => <Switcher checked={c === 1} />} />
      <Matrix cols={['Is On=False', 'Is On=True']} rows={['State=Idle', 'State=Pressed']}
        render={(c, r) => <ToggleSwitch checked={c === 1} pressed={r === 1} />} />
      <Matrix cols={['Segments=1', 'Segments=2']} rows={['Segment control']} render={(c) => <SegmentControl selected={(c + 1) as 1 | 2} />} />
    </div>
  ),
};

export const Segment: Story = {
  name: 'Segment control: интерактив',
  render: function Render() {
    const [s, setS] = useState<1 | 2>(1);
    return <SegmentControl selected={s} onChange={setS} />;
  },
};
