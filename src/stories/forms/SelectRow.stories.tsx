import type { Meta, StoryObj } from '@storybook/react';
import { SelectRow } from '../../components/forms';
import { iconNames } from '../../icons/Icon';
import { Phone, figma } from '../Matrix';

const meta = {
  title: 'Ввод и формы/Select Row',
  component: SelectRow,
  tags: ['autodocs'],
  parameters: { ...figma('1818:2825', 'Строка выбора параметра в шторке календаря. Ширина мастера 354, на экранах FILL.'), width: 354 },
  args: { label: 'Срок исполнения', icon: 'clock', showValue: false, value: 'Не задано' },
  argTypes: { icon: { control: 'select', options: iconNames } },
} satisfies Meta<typeof SelectRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InSheet: Story = {
  name: 'Как на экране (393 / 440)',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <SelectRow label="Срок исполнения" icon="clock" showValue value="20:00" />
          <SelectRow label="Уведомление" icon="alarm-clock" showValue value="Во время" />
          <SelectRow label="Срок исполнения" icon="clock" />
        </Phone>
      ))}
    </div>
  ),
};
