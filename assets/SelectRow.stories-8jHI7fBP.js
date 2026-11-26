import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as r}from"./index-SfOnHUpW.js";import{i as p}from"./Icon-CKpBa_z7.js";import{P as d,f as u}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const k={title:"Ввод и формы/Select Row",component:r,tags:["autodocs"],parameters:{...u("1818:2825","Строка выбора параметра в шторке календаря. Ширина мастера 354, на экранах FILL."),width:354},args:{label:"Срок исполнения",icon:"clock",showValue:!1,value:"Не задано"},argTypes:{icon:{control:"select",options:p}}},a={},o={name:"Как на экране (393 / 440)",parameters:{width:null},render:()=>e.jsx("div",{style:{display:"flex",gap:24},children:[393,440].map(l=>e.jsxs(d,{width:l,children:[e.jsx(r,{label:"Срок исполнения",icon:"clock",showValue:!0,value:"20:00"}),e.jsx(r,{label:"Уведомление",icon:"alarm-clock",showValue:!0,value:"Во время"}),e.jsx(r,{label:"Срок исполнения",icon:"clock"})]},l))})};var s,t,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Как на экране (393 / 440)',
  parameters: {
    width: null
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w}>\r
          <SelectRow label="Срок исполнения" icon="clock" showValue value="20:00" />\r
          <SelectRow label="Уведомление" icon="alarm-clock" showValue value="Во время" />\r
          <SelectRow label="Срок исполнения" icon="clock" />\r
        </Phone>)}\r
    </div>
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const v=["Playground","InSheet"];export{o as InSheet,a as Playground,v as __namedExportsOrder,k as default};
