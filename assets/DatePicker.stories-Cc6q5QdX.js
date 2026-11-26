import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{D,a as S,b as f}from"./index-SfOnHUpW.js";import{M as x,f as k}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./Icon-CKpBa_z7.js";const w={title:"Ввод и формы/DatePicker",component:D,tags:["autodocs"],parameters:k("1172:5103","DatePickerHeader `1176:5733`, DatePickerCell `1172:5103`, DatePickerContent `1172:5127`. Фон и цвет текста шапки, цвет выбранной даты — переменные внешней библиотеки (вне ДС)."),args:{day:1,state:"Default",range:"none"},argTypes:{state:{control:"inline-radio"},range:{control:"inline-radio",options:["none","middle","start","end"]}}},r={},n={name:"DatePickerCell: все варианты",render:()=>{const a=[["Default",{day:1}],["Hovered",{day:1,state:"Hovered"}],["Selected",{day:1,state:"Selected"}],["Range (середина)",{day:1,range:"middle"}],["Selected + Start Range",{day:1,state:"Selected",range:"start"}],["Selected + End Range",{day:1,state:"Selected",range:"end"}]];return t.jsx(x,{cols:a.map(e=>e[0]),render:e=>t.jsx(D,{...a[e][1]})})}},P=(()=>{const a=[null,null,null];for(let e=1;e<=31;e++)a.push({day:e,state:e===12||e===16?"Selected":"Default",range:e===12?"start":e===16?"end":e>12&&e<16?"middle":"none"});for(;a.length%7;)a.push(null);return Array.from({length:a.length/7},(e,d)=>a.slice(d*7,d*7+7))})(),s={name:"Календарь: Header + Content",render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:354},children:[t.jsx(S,{month:"Октябрь 2026"}),t.jsx(f,{weeks:P})]})};var l,o,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,m,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'DatePickerCell: все варианты',
  render: () => {
    const v: Array<[string, Parameters<typeof DatePickerCell>[0]]> = [['Default', {
      day: 1
    }], ['Hovered', {
      day: 1,
      state: 'Hovered'
    }], ['Selected', {
      day: 1,
      state: 'Selected'
    }], ['Range (середина)', {
      day: 1,
      range: 'middle'
    }], ['Selected + Start Range', {
      day: 1,
      state: 'Selected',
      range: 'start'
    }], ['Selected + End Range', {
      day: 1,
      state: 'Selected',
      range: 'end'
    }]];
    return <Matrix cols={v.map(x => x[0])} render={c => <DatePickerCell {...v[c][1]} />} />;
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Календарь: Header + Content',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 354
  }}>\r
      <DatePickerHeader month="Октябрь 2026" />\r
      <DatePickerContent weeks={weeks} />\r
    </div>
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const E=["Playground","CellVariants","Calendar"];export{s as Calendar,n as CellVariants,r as Playground,E as __namedExportsOrder,w as default};
