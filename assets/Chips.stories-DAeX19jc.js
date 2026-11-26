import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{C as b,B as M,b as f}from"./index-C3C9tsUM.js";import{M as y,f as x}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";const C={title:"Чипы и теги/Chip",component:b,tags:["autodocs"],parameters:x("1813:1483","Фильтр, легенда графика, тег-фактор, дата задачи. Обводка не входит в размер: M/S — 32, Date — 38."),args:{label:"Биохимия",type:"Filter",selected:!1,size:"M"},argTypes:{type:{control:"inline-radio"},size:{control:"inline-radio"},dotColor:{control:"color"}}},r={},a={name:"Все варианты",render:()=>{const e=[["Filter, Selected=No",{label:"Биохимия"}],["Filter, Selected=Yes",{label:"Биохимия",selected:!0}],["Legend, Size=M",{label:"Биохимия",type:"Legend"}],["Legend, Size=S",{label:"Биохимия",type:"Legend",size:"S"}],["Tag",{label:"Биохимия",type:"Tag"}],["Date",{label:"Сегодня, 20:00",type:"Date"}]];return s.jsx(y,{cols:e.map(n=>n[0]),render:n=>s.jsx(b,{...e[n][1]})})}},o=Object.keys(f),t={name:"biomarkerState",parameters:x("1108:5478","Бейдж статуса биомаркера. Medium = «Средний приоритет» (смешивает статус и приоритет — замечание из скана). Фоны — примитивы */50."),render:()=>s.jsx(y,{cols:o.map(e=>e),render:e=>s.jsx(M,{state:o[e]})})};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Все варианты',
  render: () => {
    const v: Array<[string, Parameters<typeof Chip>[0]]> = [['Filter, Selected=No', {
      label: 'Биохимия'
    }], ['Filter, Selected=Yes', {
      label: 'Биохимия',
      selected: true
    }], ['Legend, Size=M', {
      label: 'Биохимия',
      type: 'Legend'
    }], ['Legend, Size=S', {
      label: 'Биохимия',
      type: 'Legend',
      size: 'S'
    }], ['Tag', {
      label: 'Биохимия',
      type: 'Tag'
    }], ['Date', {
      label: 'Сегодня, 20:00',
      type: 'Date'
    }]];
    return <Matrix cols={v.map(x => x[0])} render={c => <Chip {...v[c][1]} />} />;
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,S,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'biomarkerState',
  parameters: figma('1108:5478', 'Бейдж статуса биомаркера. Medium = «Средний приоритет» (смешивает статус и приоритет — замечание из скана). Фоны — примитивы */50.'),
  render: () => <Matrix cols={states.map(s => s)} render={c => <BiomarkerState state={states[c]} />} />
}`,...(u=(S=t.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const B=["Playground","AllVariants","BiomarkerStates"];export{a as AllVariants,t as BiomarkerStates,r as Playground,B as __namedExportsOrder,C as default};
