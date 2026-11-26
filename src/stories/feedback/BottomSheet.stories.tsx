import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/actions';
import { BottomSheet } from '../../components/feedback';
import { figma } from '../Matrix';

/* Phone-sized frame; transform makes it the containing block for the sheet's position: fixed */
const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: 'relative', width: 393, height: 852, overflow: 'hidden', borderRadius: 32, background: 'var(--neutral-50)', transform: 'translateZ(0)', boxShadow: '0 0 0 1px var(--border-default)' }}>
    {children}
  </div>
);

const actions = ['Сканировать', 'Загрузить PDF', 'Ручной ввод'];

const meta = {
  title: 'Обратная связь/Bottom Sheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: figma('1992:2997', 'Шторка снизу: затемнение neutral/alpha/32, панель с радиусом 32 сверху, «ручка», заголовок heading/H2, крестик, описание body/M, содержимое. Анимация: затемнение проявляется, панель выезжает снизу (380 мс, iOS-кривая); закрытие быстрее (240 мс). Закрывается крестиком, тапом по затемнению или Esc. Компонента пока нет в Figma-ДС — собран по экрану upload-sheet.'),
  args: { open: true, title: 'Загрузить анализ', description: 'Вы также можете отсканировать код на бланке анализа лаборатории', showClose: true, showGrabber: true },
  decorators: [(S) => <Phone><S /></Phone>],
} satisfies Meta<typeof BottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

export const OpenState: Story = {
  name: 'Открыта (статично)',
  render: (args) => (
    <BottomSheet {...args}>
      {actions.map((a) => <Button key={a} label={a} variant="Secondary" size="L" fullWidth />)}
    </BottomSheet>
  ),
};

export const Interactive: Story = {
  name: 'Интерактив: открыть / закрыть',
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 24 }}>
        <Button label="Открыть шторку" fullWidth onClick={() => setOpen(true)} />
        <BottomSheet {...args} open={open} onClose={() => setOpen(false)}>
          {actions.map((a) => <Button key={a} label={a} variant="Secondary" size="L" fullWidth />)}
        </BottomSheet>
      </div>
    );
  },
};
