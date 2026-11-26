import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConclusionOption, MetricPicker, metricPickerSample } from '../../components/screen';
import { Matrix, Phone, figma } from '../Matrix';

const meta = {
  title: 'Экранные компоненты/Тренд',
  component: ConclusionOption,
  tags: ['autodocs'],
  parameters: { ...figma('2033:4309', 'Trend / Conclusion Option `2033:4309`, Trend / Metric Picker `2045:4458` (Count 0–4; при 4 выбор закрыт, шеврона нет).'), width: 354 },
  args: { title: 'Витамин D и магний', meta: '2 показателя · 24 августа', selected: false },
} satisfies Meta<typeof ConclusionOption>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ConclusionOptionStory: Story = {
  name: 'Trend / Conclusion Option',
  render: function Render() {
    const [sel, setSel] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <ConclusionOption selected={sel === 0} onSelect={() => setSel(0)} />
        <ConclusionOption title="Ферритин и железо" meta="2 показателя · 12 июля" selected={sel === 1} onSelect={() => setSel(1)} />
      </div>
    );
  },
};

export const MetricPickerVariants: Story = {
  name: 'Trend / Metric Picker: Count 0–4',
  parameters: { ...figma('2045:4458'), width: null },
  render: () => (
    <Matrix cellWidth={354} cols={['Metric Picker']} rows={['Count=0', 'Count=1', 'Count=2', 'Count=3', 'Count=4']}
      render={(_, r) => <MetricPicker metrics={metricPickerSample.slice(0, r)} />} />
  ),
};

export const Widths: Story = {
  name: 'Metric Picker (393 / 440)',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}><MetricPicker metrics={metricPickerSample} /></Phone>
      ))}
    </div>
  ),
};
