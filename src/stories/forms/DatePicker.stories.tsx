import type { Meta, StoryObj } from '@storybook/react';
import { DatePickerCell, DatePickerContent, DatePickerHeader, type DatePickerDay } from '../../components/forms';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Ввод и формы/DatePicker',
  component: DatePickerCell,
  tags: ['autodocs'],
  parameters: figma('1172:5103', 'DatePickerHeader `1176:5733`, DatePickerCell `1172:5103`, DatePickerContent `1172:5127`. Фон и цвет текста шапки, цвет выбранной даты — переменные внешней библиотеки (вне ДС).'),
  args: { day: 1, state: 'Default', range: 'none' },
  argTypes: { state: { control: 'inline-radio' }, range: { control: 'inline-radio', options: ['none', 'middle', 'start', 'end'] } },
} satisfies Meta<typeof DatePickerCell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const CellVariants: Story = {
  name: 'DatePickerCell: все варианты',
  render: () => {
    const v: Array<[string, Parameters<typeof DatePickerCell>[0]]> = [
      ['Default', { day: 1 }],
      ['Hovered', { day: 1, state: 'Hovered' }],
      ['Selected', { day: 1, state: 'Selected' }],
      ['Range (середина)', { day: 1, range: 'middle' }],
      ['Selected + Start Range', { day: 1, state: 'Selected', range: 'start' }],
      ['Selected + End Range', { day: 1, state: 'Selected', range: 'end' }],
    ];
    return <Matrix cols={v.map((x) => x[0])} render={(c) => <DatePickerCell {...v[c][1]} />} />;
  },
};

/* October 2026 starts on Thursday */
const weeks: DatePickerDay[][] = (() => {
  const days: DatePickerDay[] = [null, null, null];
  for (let d = 1; d <= 31; d++) {
    days.push({
      day: d,
      state: d === 12 || d === 16 ? 'Selected' : 'Default',
      range: d === 12 ? 'start' : d === 16 ? 'end' : d > 12 && d < 16 ? 'middle' : 'none',
    });
  }
  while (days.length % 7) days.push(null);
  return Array.from({ length: days.length / 7 }, (_, i) => days.slice(i * 7, i * 7 + 7));
})();

export const Calendar: Story = {
  name: 'Календарь: Header + Content',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 354 }}>
      <DatePickerHeader month="Октябрь 2026" />
      <DatePickerContent weeks={weeks} />
    </div>
  ),
};
