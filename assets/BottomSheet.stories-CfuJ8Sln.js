import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index--qcDGAq6.js";import{B as s}from"./index-C606Hs3-.js";import{B as n}from"./index-B09blztd.js";import{f as g}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";const v=({children:t})=>e.jsx("div",{style:{position:"relative",width:393,height:852,overflow:"hidden",borderRadius:32,background:"var(--neutral-50)",transform:"translateZ(0)",boxShadow:"0 0 0 1px var(--border-default)"},children:t}),f=["Сканировать","Загрузить PDF","Ручной ввод"],w={title:"Обратная связь/Bottom Sheet",component:n,tags:["autodocs"],parameters:g("1992:2997","Шторка снизу: затемнение neutral/alpha/32, панель с радиусом 32 сверху, «ручка», заголовок heading/H2, крестик, описание body/M, содержимое. Анимация: затемнение проявляется, панель выезжает снизу (380 мс, iOS-кривая); закрытие быстрее (240 мс). Закрывается крестиком, тапом по затемнению или Esc. Компонента пока нет в Figma-ДС — собран по экрану upload-sheet."),args:{open:!0,title:"Загрузить анализ",description:"Вы также можете отсканировать код на бланке анализа лаборатории",showClose:!0,showGrabber:!0},decorators:[t=>e.jsx(v,{children:e.jsx(t,{})})]},a={name:"Открыта (статично)",render:t=>e.jsx(n,{...t,children:f.map(r=>e.jsx(s,{label:r,variant:"Secondary",size:"L",fullWidth:!0},r))})},o={name:"Интерактив: открыть / закрыть",render:function(r){const[S,i]=x.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(s,{label:"Открыть шторку",fullWidth:!0,onClick:()=>i(!0)}),e.jsx(n,{...r,open:S,onClose:()=>i(!1),children:f.map(l=>e.jsx(s,{label:l,variant:"Secondary",size:"L",fullWidth:!0},l))})]})}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Открыта (статично)',
  render: args => <BottomSheet {...args}>\r
      {actions.map(a => <Button key={a} label={a} variant="Secondary" size="L" fullWidth />)}\r
    </BottomSheet>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Интерактив: открыть / закрыть',
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 24
    }}>\r
        <Button label="Открыть шторку" fullWidth onClick={() => setOpen(true)} />\r
        <BottomSheet {...args} open={open} onClose={() => setOpen(false)}>\r
          {actions.map(a => <Button key={a} label={a} variant="Secondary" size="L" fullWidth />)}\r
        </BottomSheet>\r
      </div>;
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const C=["OpenState","Interactive"];export{o as Interactive,a as OpenState,C as __namedExportsOrder,w as default};
