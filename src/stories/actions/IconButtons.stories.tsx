import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, IconButtonDark, IconButtonLight, ShutterButton } from '../../components/actions';
import { iconNames } from '../../icons/Icon';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Действия/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: figma('1822:2857', 'Квадратная кнопка-иконка 40×40. Disabled — предложение агента, на экранах не встречается.'),
  args: { icon: 'chevron-left', disabled: false, 'aria-label': 'Назад' },
  argTypes: { icon: { control: 'select', options: iconNames } },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  name: 'Все варианты',
  render: () => (
    <Matrix cols={['State=Default', 'State=Disabled']} render={(c) => <IconButton aria-label="Назад" disabled={c === 1} />} />
  ),
};

export const CameraButtons: Story = {
  name: 'IconButton Dark · Shutter · Light',
  parameters: { backgrounds: { default: 'gray' }, ...figma('1993:1682', 'IconButton Dark `1993:1682`, Shutter Button `1993:1685`, IconButton Light `1999:1524`.') },
  render: () => (
    <Matrix
      cols={['IconButton Dark / flash', 'IconButton Dark / help-circle', 'Shutter Button', 'IconButton Light / right', 'IconButton Light / left']}
      render={(c) => [
        <IconButtonDark key={0} aria-label="Вспышка" />,
        <IconButtonDark key={1} icon="help-circle" aria-label="Справка" />,
        <ShutterButton key={2} />,
        <IconButtonLight key={3} aria-label="Вперёд" />,
        <IconButtonLight key={4} icon="chevron-left" aria-label="Назад" />,
      ][c]}
    />
  ),
};
