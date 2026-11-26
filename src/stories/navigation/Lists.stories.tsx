import type { Meta, StoryObj } from '@storybook/react';
import { ListLink, SettingsItem } from '../../components/navigation';
import { Phone, figma } from '../Matrix';

const meta = {
  title: 'Навигация/List Link · settingsItem',
  component: ListLink,
  tags: ['autodocs'],
  parameters: { ...figma('1834:1475', 'List Link `1834:1475` (L — 80, M — 60). settingsItem `772:2495`: все значения в Figma сырые (вне ДС), имя свойства `suppportText` с опечаткой.'), width: 354 },
  args: { title: 'Динамика показателя', subtitle: 'Сравните результаты по датам', size: 'L', showChevron: true },
  argTypes: { size: { control: 'inline-radio' } },
} satisfies Meta<typeof ListLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  name: 'Все варианты (393 / 440)',
  parameters: { width: null },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {[393, 440].map((w) => (
        <Phone key={w} width={w}>
          <ListLink title="Динамика показателя" subtitle="Сравните результаты по датам" size="L" />
          <ListLink title="Настроить график" size="M" />
          <SettingsItem />
          <SettingsItem isSupportText={false} headlineText="Уведомления" />
        </Phone>
      ))}
    </div>
  ),
};

export const Settings: Story = {
  name: 'settingsItem',
  parameters: figma('772:2495'),
  render: () => <SettingsItem />,
};
