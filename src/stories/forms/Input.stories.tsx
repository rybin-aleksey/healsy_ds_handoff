import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/forms';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Ввод и формы/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { ...figma('1813:1501', 'Поле ввода, высота поля 54. Без `state` Focused и Filled включаются сами: по фокусу и по введённому значению.'), width: 316 },
  args: { label: 'Название', showLabel: true, hint: 'Подсказка к полю', showHint: true, placeholder: 'Введите название показателя' },
  argTypes: { state: { control: 'select', options: [undefined, 'Default', 'Focused', 'Filled', 'Error', 'Disabled'] } },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const states = ['Default', 'Focused', 'Filled', 'Error', 'Disabled'] as const;
export const AllVariants: Story = {
  name: 'Все варианты',
  parameters: { width: null },
  render: () => (
    <Matrix cellWidth={316} cols={['Input']} rows={states.map((s) => `State=${s}`)}
      render={(_, r) => (
        <Input state={states[r]} defaultValue={states[r] === 'Filled' ? 'Введите название показателя' : undefined}
          hint={states[r] === 'Error' ? 'Текст ошибки' : 'Подсказка к полю'} />
      )} />
  ),
};
