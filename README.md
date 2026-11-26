# Healsy: React-база дизайн-системы

Дизайн-система Healsy в коде: токены (примитивы, смысловые, типографика) и React-компоненты на них, плюс каталог компонентов в Storybook. Источник — дизайн-система в Figma, файл [Healsy – Startup MVP](https://www.figma.com/design/6sKLERpyny3kZzIBYMr1Zd/Healsy-%E2%80%93-Startup-MVP?node-id=746-2772) (страницы Components & States и Foundations).

**Каталог онлайн:** https://rybin-aleksey.github.io/healsy_ds_handoff/

Стек: React 18.3 + TypeScript 5.8, Storybook 8.6 (react-vite), обычный CSS с CSS-переменными. Шрифт Inter (300–500, кириллица, ось оптического размера) подключён из Google Fonts в `.storybook/preview-head.html`.

| Команда | Что делает | Адрес |
|---|---|---|
| `npm run storybook` | Каталог компонентов (Storybook) | http://localhost:6006 |
| `npm run build-storybook` | Статичная сборка каталога в папку `storybook-static/` | — |
| `npm run typecheck` | Проверка типов | — |

## Storybook: запуск и остановка

### Первый запуск на компьютере

Нужен Node.js 18+ (проверка: `node -v`). Один раз установите зависимости:

1. Склонируйте репозиторий и перейдите в его папку:
   ```bash
   git clone https://github.com/rybin-aleksey/healsy_ds_handoff.git
   cd healsy_ds_handoff
   ```
2. Установите зависимости (несколько минут):
   ```bash
   npm ci
   ```

### Запустить

```bash
npm run storybook
```

Через 5–10 секунд в терминале появится рамка **Storybook started** с адресом, и каталог откроется в браузере. Если не открылся — перейдите на http://localhost:6006.

Терминал при этом занят сервером — это нормально. Не закрывайте его, пока работаете с каталогом.

### Остановить

В терминале, где запущен Storybook, нажмите **Ctrl+C**. Если спросит «Terminate batch job (Y/N)?» — введите `Y` и Enter.

### Если что-то пошло не так

| Симптом | Что делать |
|---|---|
| «Port 6006 is not available…» | Storybook уже запущен в другом терминале. Ответьте `n` и откройте http://localhost:6006 — или остановите старый сервер. |
| Сервер запущен, а терминал закрыт | В PowerShell: `Get-NetTCPConnection -LocalPort 6006 -State Listen \| ForEach-Object { Stop-Process -Id $_.OwningProcess }` |
| `npm: command not found` / `node: command not found` | Установите Node.js LTS с nodejs.org и перезапустите терминал. |

## Структура

| Путь | Что внутри |
|---|---|
| `src/styles/tokens.css` | Все Variables из Figma: Colors, Typography, Dimensions. Смысловые токены ссылаются на примитивы так же, как алиасы в Figma |
| `src/styles/typography.css` | Text Styles как классы `.ts-<группа>-<имя>`, например `.ts-body-M-strong` |
| `src/icons/` | Иконки из таблицы Icons. Цвет задаётся через `currentColor` |
| `src/components/<раздел>/` | Компоненты, разложенные так же, как разделы витрины в Figma |
| `src/stories/<раздел>/` | Сторис: Playground с контролами по свойствам Figma, «Все варианты» матрицей, как на витрине, и композиции на ширине 393 и 440 |

Имена токенов: `primitives/brand/500` → `--brand-500`, `bg/mainWhite` → `--bg-mainWhite`, `border radius/3` → `--radius-3`, `spacing/1 5` → `--spacing-1-5`.

## Компоненты

- **Действия:** Button, IconButton, IconButtonDark, ShutterButton, IconButtonLight, ToolbarAction, Fab, FabMenuItem, FabMenu, FabGroup
- **Ввод и формы:** Input, Checkbox, Radio, PlanItem, Switcher, ToggleSwitch, SegmentControl, DatePickerHeader, DatePickerCell, DatePickerContent, SelectRow, Wheel Picker
- **Чипы и теги:** BiomarkerState, Chip
- **Навигация:** Navbar, TabBar (App Footer), TabBarItem, SettingsItem, ListLink
- **Обратная связь:** InlineNotice, BottomSheet (в Figma-ДС компонента пока нет)
- **Данные и карточки:** BiomarkerCard, RecommendationCard, RecommendationSelectionBar
- **Экранные компоненты:** TodayCard, PlanRow, MetricCard, StartOption, ResultSummary, SourceItem, TaskRow, ConclusionOption, MetricPicker

Свойства React повторяют свойства Figma. Исключения: опечатки исправлены (`isSecondaryLable` → `isSecondaryLabel`, `suppportText` → `supportText`), а варианты-состояния вроде `State=Active` и `Selected` стали булевыми пропсами.

**BottomSheet:** панель никогда не поднимается выше 64 px от верха экрана (`--hs-sheet-top`), чтобы статус-бар iOS оставался видимым. Шторки со своей высотой задают её как `min(…, calc(100% - var(--hs-sheet-top)))`.

## Что в Figma вне ДС: перенесено как есть

Эти значения в Figma не привязаны к токенам ДС. В коде они повторены 1:1 и помечены комментарием `off-DS` / «вне ДС».

| Компонент | Значение | Откуда |
|---|---|---|
| Button Secondary, Outline M | текст Regular 16/24 без стиля | Text Style не назначен |
| Checkbox | галочка `#4262b3` | сырой hex |
| Toggle - Switch | зелёный `#34c759`, белый ползунок | Accents/Green из внешней библиотеки (iOS-кит) |
| DatePickerHeader / Content | фон `#ffffff`, текст `#11181c` | Background/primary, Text/primary — внешняя библиотека |
| DatePickerCell Selected | цвет цифры `#ffffff` | Text/primary inverse — внешняя библиотека |
| Navbar | фон `#ffffff`, заголовок `#141414`, радиус 16 снизу | сырые значения |
| App Footer (Tabbar) | верхняя граница `#e9edf4` | icons/grey — внешняя библиотека |
| settingsItem | фон `#f2f3f3`, Medium/Regular 16/20, цвета neutral/900 и 500 | сырые значения без стилей |
| Today Card | радужная обводка | сырой angular-градиент |
| Plan Item, List Link L | вертикальный отступ 14 / 15 | нет шага в `spacing` |
| Radio, Source Item, biomarkerState Medium | `brand/700`, `brand/50` | примитивы: смыслового токена бренда нет |
| biomarkerState, Result Summary, шкала Biomarker Card | `error/50`, `warning/50`, `success/50`, `warning/200`, `success/200` | примитивы: смысловых фонов статусов нет |

## Упрощения: проверить глазами

- **Toggle - Switch, State=Pressed.** «Стеклянный» ползунок iOS 26 передан приближённо: увеличенный полупрозрачный ползунок.
- **Today Card.** Фото в сторис — заглушка: в Figma это IMAGE-заливка, которая меняется в каждом инстансе.
- **Result Summary.** Логотип лаборатории в сторис — пустой круг: в Figma это картинка.
- **Checkbox и стрелка biomarkerState.** Векторы перерисованы по размерам из Figma, а не экспортированы.
- **DatePickerContent.** Данные месяца передаются массивом `weeks`; в сторис показан октябрь 2026 с выбранным диапазоном.

## Тексты

После коротких слов (в, к, с, и, а, на, по, для, без, не…) и перед тире стоит неразрывный пробел U+00A0 — в редакторе он невидим. В новых текстах ставьте так же.

## Источник правды

- Макеты и UI-кит: [Figma — Healsy – Startup MVP](https://www.figma.com/design/6sKLERpyny3kZzIBYMr1Zd/Healsy-%E2%80%93-Startup-MVP?node-id=746-2772).
- Токены и варианты компонентов соответствуют Figma; изменения в ДС вносятся сначала в Figma.
- Стили — только через токены из `src/styles/`, без прибитых значений. Новый компонент — сначала в ДС, затем в базе и каталоге.

## Публикация каталога

Каталог на GitHub Pages раздаётся из ветки `gh-pages` — это статичная сборка (`npm run build-storybook`) с файлом `.nojekyll`. После изменений пересоберите каталог и замените содержимое ветки `gh-pages` содержимым `storybook-static/`.
