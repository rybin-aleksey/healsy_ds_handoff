import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarAction } from '../../components/actions';
import { iconNames } from '../../icons/Icon';
import { Phone, figma } from '../Matrix';

const meta = {
  title: 'Действия/Toolbar Action',
  component: ToolbarAction,
  tags: ['autodocs'],
  parameters: figma('1999:1527', 'Действие нижней панели «иконка + подпись». В панели растягивается (FILL).'),
  args: { icon: 'file-plus', label: 'Добавить', fill: false },
  argTypes: { icon: { control: 'select', options: iconNames } },
} satisfies Meta<typeof ToolbarAction>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InToolbar: Story = {
  name: 'Панель экрана проверки (393 / 440)',
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w} padding={0}>
          <div style={{ display: 'flex', padding: '8px 16px' }}>
            <ToolbarAction fill icon="file-plus" label="Добавить" />
            <ToolbarAction fill icon="refresh-ccw" label="Переснять" />
            <ToolbarAction fill icon="crop" label="Кадрировать" />
            <ToolbarAction fill icon="trash" label="Удалить" />
          </div>
        </Phone>
      ))}
    </div>
  ),
};
