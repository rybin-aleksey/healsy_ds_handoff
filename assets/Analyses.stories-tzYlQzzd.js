import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s,S as o}from"./index-VXl8eS0O.js";import{P as f,f as h}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";import"./index-C606Hs3-.js";import"./index--qcDGAq6.js";import"./index-SfOnHUpW.js";import"./index-C3C9tsUM.js";import"./index-CZVIt4Sn.js";const P={title:"Экранные компоненты/Анализы",component:s,tags:["autodocs"],parameters:{...h("2002:3187","Analyses / Result Summary `2002:3187` (плашка «вне нормы» — примитив warning/50), Analyses / Start Option `1980:2854`. Логотип лаборатории — IMAGE, в сторис пустой круг."),width:312},args:{lab:"Инвитро",title:"Общий анализ крови",outOfNorm:"1 вне нормы",showOutOfNorm:!0,changes:"есть изменения",showChanges:!0}},r={name:"Analyses / Result Summary"},t={name:"Analyses / Start Option",parameters:{...h("1980:2854"),width:345},render:()=>e.jsx(o,{})},a={name:"Композиция (393 / 440)",parameters:{width:null},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[393,440].map(n=>e.jsxs(f,{width:n,children:[e.jsx(o,{label:"Загрузите результаты анализов",icon:"download-04"}),e.jsx(o,{label:"Сфотографируйте бланк",icon:"file"}),e.jsx("div",{style:{height:12}}),e.jsx(s,{}),e.jsx(s,{title:"Биохимия крови",showOutOfNorm:!1})]},n))})};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Analyses / Result Summary'
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Analyses / Start Option',
  parameters: {
    ...figma('1980:2854'),
    width: 345
  },
  render: () => <StartOption />
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,S,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Композиция (393 / 440)',
  parameters: {
    width: null
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w}>\r
          <StartOption label="Загрузите результаты анализов" icon="download-04" />\r
          <StartOption label="Сфотографируйте бланк" icon="file" />\r
          <div style={{
        height: 12
      }} />\r
          <ResultSummary />\r
          <ResultSummary title="Биохимия крови" showOutOfNorm={false} />\r
        </Phone>)}\r
    </div>
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const E=["ResultSummaryStory","StartOptionStory","Screen"];export{r as ResultSummaryStory,a as Screen,t as StartOptionStory,E as __namedExportsOrder,P as default};
