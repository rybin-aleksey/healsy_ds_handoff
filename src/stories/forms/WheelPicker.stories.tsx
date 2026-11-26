import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WheelPicker } from '../../components/forms';
import { Phone, figma } from '../Matrix';

const meta = {
  title: 'Ввод и формы/Wheel Picker',
  component: WheelPicker,
  tags: ['autodocs'],
  parameters: { ...figma('2068:1593', 'Барабан выбора в стиле iOS. Type=Time — часы и минуты, Type=List — список (уведомление). Раскрывается под Select Row в шторке календаря. Ширина мастера 353, на экранах FILL.'), width: 353 },
  args: { columns: [] },
} satisfies Meta<typeof WheelPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

const two = (n: number) => String(n).padStart(2, '0');
const hours = Array.from({ length: 24 }, (_, i) => two(i));
const minutes = Array.from({ length: 60 }, (_, i) => two(i));
const reminders = ['За 5 минут', 'За 10 минут', 'За 15 минут', 'За полчаса', 'За 1 час'];

function Time() {
  const [h, setH] = useState(20);
  const [m, setM] = useState(0);
  return (
    <WheelPicker
      ariaLabel="Время"
      columns={[
        { options: hours, value: h, onChange: setH, width: 64, ariaLabel: 'Часы' },
        { options: minutes, value: m, onChange: setM, width: 64, ariaLabel: 'Минуты' },
      ]}
    />
  );
}
function Reminder() {
  const [r, setR] = useState(0);
  return <WheelPicker ariaLabel="Уведомление" columns={[{ options: reminders, value: r, onChange: setR }]} />;
}

export const TimeWheel: Story = { name: 'Время (часы и минуты)', render: () => <Time /> };
export const ReminderWheel: Story = { name: 'Уведомление', render: () => <Reminder /> };
export const InSheet: Story = {
  name: 'Как на экране (393 / 440)',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w} padding={20}>
          <Time />
          <Reminder />
        </Phone>
      ))}
    </div>
  ),
};
