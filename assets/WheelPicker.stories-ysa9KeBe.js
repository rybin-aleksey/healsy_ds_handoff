import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index--qcDGAq6.js";import{W as i}from"./index-SfOnHUpW.js";import{P as R,f as T}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";const I={title:"Ввод и формы/Wheel Picker",component:i,tags:["autodocs"],parameters:{...T("2068:1593","Барабан выбора в стиле iOS. Type=Time — часы и минуты, Type=List — список (уведомление). Раскрывается под Select Row в шторке календаря. Ширина мастера 353, на экранах FILL."),width:353},args:{columns:[]}},f=e=>String(e).padStart(2,"0"),L=Array.from({length:24},(e,n)=>f(n)),W=Array.from({length:60},(e,n)=>f(n)),v=["За 5 минут","За 10 минут","За 15 минут","За полчаса","За 1 час"];function S(){const[e,n]=o.useState(20),[j,y]=o.useState(0);return r.jsx(i,{ariaLabel:"Время",columns:[{options:L,value:e,onChange:n,width:64,ariaLabel:"Часы"},{options:W,value:j,onChange:y,width:64,ariaLabel:"Минуты"}]})}function w(){const[e,n]=o.useState(0);return r.jsx(i,{ariaLabel:"Уведомление",columns:[{options:v,value:e,onChange:n}]})}const a={name:"Время (часы и минуты)",render:()=>r.jsx(S,{})},s={name:"Уведомление",render:()=>r.jsx(w,{})},t={name:"Как на экране (393 / 440)",parameters:{width:null},render:()=>r.jsx("div",{style:{display:"flex",gap:24},children:[393,440].map(e=>r.jsxs(R,{width:e,padding:20,children:[r.jsx(S,{}),r.jsx(w,{})]},e))})};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Время (часы и минуты)',
  render: () => <Time />
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Уведомление',
  render: () => <Reminder />
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Как на экране (393 / 440)',
  parameters: {
    width: null
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w} padding={20}>\r
          <Time />\r
          <Reminder />\r
        </Phone>)}\r
    </div>
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const A=["TimeWheel","ReminderWheel","InSheet"];export{t as InSheet,s as ReminderWheel,a as TimeWheel,A as __namedExportsOrder,I as default};
