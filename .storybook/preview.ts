import { createElement } from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  /* parameters.width: fixed width of the component frame (e.g. 354 as the Figma master); null = no frame */
  decorators: [
    (Story, ctx) => {
      const w = ctx.parameters.width as number | null | undefined;
      return w ? createElement('div', { style: { width: w } }, createElement(Story)) : createElement(Story);
    },
  ],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f2f3f3' },
        { name: 'dark', value: '#181b1b' },
      ],
    },
    viewport: {
      viewports: {
        min393: { name: 'Mobile 393', styles: { width: '393px', height: '852px' }, type: 'mobile' },
        max440: { name: 'Mobile 440', styles: { width: '440px', height: '956px' }, type: 'mobile' },
      },
    },
    options: {
      storySort: {
        order: ['Foundations', 'Действия', 'Ввод и формы', 'Чипы и теги', 'Навигация', 'Обратная связь', 'Данные и карточки', 'Экранные компоненты'],
      },
    },
  },
};

export default preview;
