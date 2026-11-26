import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/actions';
import { Matrix, Phone, figma } from '../Matrix';

const meta = {
  title: 'Действия/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: figma('987:2870', 'Type × State × Size, 18 вариантов. Active = нажатие (:active), Hover в мобильном приложении нет. Текст Secondary и Outline M — Regular 16/24 без стиля (вне ДС).'),
  args: { label: 'Button name', variant: 'Primary', size: 'L', active: false, disabled: false, fullWidth: false },
  argTypes: { variant: { control: 'inline-radio' }, size: { control: 'inline-radio' } },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const types = ['Primary', 'Secondary', 'Outline'] as const;
const states = ['Default', 'Active', 'Disabled'] as const;

export const AllVariants: Story = {
  name: 'Все варианты',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      {(['L', 'M'] as const).map((size) => (
        <Matrix key={size} cols={types.map((t) => `Type=${t}`)} rows={states.map((s) => `State=${s}, Size=${size}`)}
          render={(c, r) => <Button label="Button name" variant={types[c]} size={size} active={states[r] === 'Active'} disabled={states[r] === 'Disabled'} />} />
      ))}
    </div>
  ),
};

export const FullWidth: Story = {
  name: 'На ширину экрана (393 / 440)',
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <Button label="Сохранить" fullWidth />
          <Button label="Отмена" variant="Secondary" fullWidth />
          <Button label="Подробнее" variant="Outline" size="M" fullWidth />
        </Phone>
      ))}
    </div>
  ),
};
