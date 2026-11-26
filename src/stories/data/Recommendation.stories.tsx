import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RecommendationCard, RecommendationSelectionBar } from '../../components/data';
import { Matrix, Phone, figma } from '../Matrix';

const meta = {
  title: 'Данные и карточки/Recommendation Card',
  component: RecommendationCard,
  tags: ['autodocs'],
  parameters: { ...figma('1800:1661', 'View: Full | Compact × Selected: No | Yes. Нижняя панель — Recommendation Selection Bar (1800:1828).'), width: 354 },
  args: { view: 'Full', selected: false },
  argTypes: { view: { control: 'inline-radio' } },
} satisfies Meta<typeof RecommendationCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [sel, setSel] = useState(args.selected ?? false);
    return <RecommendationCard {...args} selected={sel} onSelectedChange={setSel} />;
  },
};

export const AllVariants: Story = {
  name: 'Все варианты',
  parameters: { width: null },
  render: () => (
    <Matrix cellWidth={354} cols={['View=Full', 'View=Compact']} rows={['Selected=No', 'Selected=Yes']}
      render={(c, r) => <RecommendationCard view={c === 0 ? 'Full' : 'Compact'} selected={r === 1} />} />
  ),
};

function Flow({ width }: { width: number }) {
  const [sel, setSel] = useState<number[]>([0]);
  const toggle = (i: number) => setSel((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  const titles = ['Обсудить коррекцию витамина D с врачом', 'Сдать анализ на ферритин', 'Добавить в рацион рыбу 2 раза в неделю'];
  return (
    <Phone width={width} padding={0}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 24 }}>
        {titles.map((t, i) => <RecommendationCard key={t} title={t} view="Compact" selected={sel.includes(i)} onSelectedChange={() => toggle(i)} />)}
      </div>
      {sel.length > 0 && <RecommendationSelectionBar label={`Выбрано рекомендаций: ${sel.length}`} />}
    </Phone>
  );
}

export const SelectionBar: Story = {
  name: 'Selection Bar: выбор (393 / 440)',
  parameters: { ...figma('1800:1828'), width: null },
  render: () => <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}><Flow width={393} /><Flow width={440} /></div>,
};
