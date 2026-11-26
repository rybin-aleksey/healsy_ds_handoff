import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index--qcDGAq6.js";import{F as p,a,b as v,c as y}from"./index-C606Hs3-.js";import{M as A,f as m}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";const _={title:"Действия/FAB",component:p,tags:["autodocs"],parameters:m("1816:1456","Плавающая кнопка 56 px. Open: плюс повёрнут на 45°, над кнопкой меню из FAB Menu Item (1816:1447)."),args:{state:"Closed"},argTypes:{state:{control:"inline-radio"}}},s={},t={name:"Все варианты",render:()=>e.jsx(A,{cols:["State=Closed","State=Open"],render:r=>e.jsx(p,{state:r?"Open":"Closed"})})},n={name:"FAB Menu Item",parameters:m("1816:1447"),render:()=>e.jsx(A,{cols:["showIcon=false","showIcon=true"],render:r=>e.jsx(a,{label:"Анализы",showIcon:r===1})})};function B(){const[r,w]=C.useState(!1);return e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",width:240,height:220},children:e.jsxs(y,{open:r,onOpenChange:w,children:[e.jsx(a,{label:"Анализы"}),e.jsx(a,{label:"Консультация"})]})})}const o={name:"Интерактив: меню с анимацией",parameters:m("1980:3016","FabGroup: FAB + FabMenu. Открытие — пункты всплывают снизу вверх по очереди (50 мс, пружина), плюс поворачивается в крестик. Закрытие — быстрее, в обратном порядке. Закрывается тапом мимо или Esc. При prefers-reduced-motion — только прозрачность."),render:()=>e.jsx(B,{})},c={name:"Состояние Open (статично)",parameters:m("1980:3016"),render:()=>e.jsxs("div",{className:"hs-fab-group",children:[e.jsxs(v,{open:!0,children:[e.jsx(a,{label:"Анализы"}),e.jsx(a,{label:"Консультация"})]}),e.jsx(p,{state:"Open"})]})};var d,l,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,b,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Все варианты',
  render: () => <Matrix cols={['State=Closed', 'State=Open']} render={c => <Fab state={c ? 'Open' : 'Closed'} />} />
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,F,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'FAB Menu Item',
  parameters: figma('1816:1447'),
  render: () => <Matrix cols={['showIcon=false', 'showIcon=true']} render={c => <FabMenuItem label="Анализы" showIcon={c === 1} />} />
}`,...(M=(F=n.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var g,h,I;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Интерактив: меню с анимацией',
  parameters: figma('1980:3016', 'FabGroup: FAB + FabMenu. Открытие — пункты всплывают снизу вверх по очереди (50 мс, пружина), плюс поворачивается в крестик. Закрытие — быстрее, в обратном порядке. Закрывается тапом мимо или Esc. При prefers-reduced-motion — только прозрачность.'),
  render: () => <Interactive />
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var j,O,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Состояние Open (статично)',
  parameters: figma('1980:3016'),
  render: () => <div className="hs-fab-group">\r
      <FabMenu open>\r
        <FabMenuItem label="Анализы" />\r
        <FabMenuItem label="Консультация" />\r
      </FabMenu>\r
      <Fab state="Open" />\r
    </div>
}`,...(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const R=["Playground","AllVariants","MenuItem","WithMenu","OpenState"];export{t as AllVariants,n as MenuItem,c as OpenState,s as Playground,o as WithMenu,R as __namedExportsOrder,_ as default};
