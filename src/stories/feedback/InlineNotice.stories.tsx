import type { Meta, StoryObj } from '@storybook/react';
import { InlineNotice } from '../../components/feedback';
import { iconNames } from '../../icons/Icon';
import { Matrix, figma } from '../Matrix';

const meta = {
  title: 'Обратная связь/Inline Notice',
  component: InlineNotice,
  tags: ['autodocs'],
  parameters: { ...figma('2016:1554', 'Короткая подсказка в рамке. Ширина — FILL.'), width: 354 },
  args: { text: 'Обсудите результаты с врачом', icon: 'alert-circle', showIcon: true },
  argTypes: { icon: { control: 'select', options: iconNames } },
} satisfies Meta<typeof InlineNotice>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  name: 'Все варианты',
  parameters: { width: null },
  render: () => <Matrix cellWidth={354} cols={['showIcon=true', 'showIcon=false']} render={(c) => <InlineNotice text="Обсудите результаты с врачом" showIcon={c === 0} />} />,
};
