import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../../components/navigation';
import { iconNames } from '../../icons/Icon';
import { figma } from '../Matrix';

const meta = {
  title: 'Навигация/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: { width: 393, layout: 'fullscreen', backgrounds: { default: 'gray' }, ...figma('763:2321', 'Верхняя панель. Фон #ffffff и цвет заголовка #141414 в Figma — сырые значения (вне ДС). Отступ сверху 60 — под статус-бар.') },
  args: {
    isIconLeft: true, iconLeft: 'menu', isPrimaryLabel: true, primaryLabelText: 'Сегодня', isSecondaryLabel: true, secondaryLabelText: 'Август',
    isPrimaryRightIcon: true, primaryRightIcon: 'check-done', isSecondaryRightIcon: true, secondaryRightIcon: 'filter-funnel',
  },
  argTypes: {
    iconLeft: { control: 'select', options: iconNames },
    primaryRightIcon: { control: 'select', options: iconNames },
    secondaryRightIcon: { control: 'select', options: iconNames },
  },
} satisfies Meta<typeof Navbar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Widths: Story = {
  name: '393 / 440',
  parameters: { width: null },
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, padding: 24 }}>
      <div style={{ width: 393 }}><Navbar {...args} /></div>
      <div style={{ width: 440 }}><Navbar {...args} /></div>
    </div>
  ),
};

export const BackOnly: Story = {
  name: 'Назад + заголовок',
  args: { iconLeft: 'back', isSecondaryLabel: false, primaryLabelText: 'Пояснения', isPrimaryRightIcon: false, isSecondaryRightIcon: false },
};
