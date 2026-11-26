import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as s,b as o}from"./index-VXl8eS0O.js";import{P as S,f as w}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";import"./index-C606Hs3-.js";import"./index--qcDGAq6.js";import"./index-SfOnHUpW.js";import"./index-C3C9tsUM.js";import"./index-CZVIt4Sn.js";const v={title:"Экранные компоненты/План · Пояснения",component:s,tags:["autodocs"],parameters:{...w("2018:3536","Plan / Task Row `2018:3536` (чекбокс скрыт по умолчанию), Explanation / Source Item `2015:3362` (точка — примитив brand/700)."),width:354},args:{title:"Проверить питание и текущие добавки",time:"Сегодня, 20:00–22:00",showCheckbox:!1,checked:!1}},r={name:"Plan / Task Row"},t={name:"Explanation / Source Item",parameters:w("2015:3362"),render:()=>e.jsx(o,{})},a={name:"Композиция (393 / 440)",parameters:{width:null},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[393,440].map(m=>e.jsxs(S,{width:m,children:[e.jsx(s,{}),e.jsx(s,{title:"Сдать анализ на ферритин",time:"Чт, 11 октября",showCheckbox:!0,checked:!0}),e.jsx("div",{style:{height:12}}),e.jsx(o,{}),e.jsx(o,{title:"Минздрав России — клинические рекомендации"})]},m))})};var i,n,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Plan / Task Row'
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Explanation / Source Item',
  parameters: figma('2015:3362'),
  render: () => <SourceItem />
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <TaskRow />\r
          <TaskRow title="Сдать анализ на ферритин" time="Чт, 11 октября" showCheckbox checked />\r
          <div style={{
        height: 12
      }} />\r
          <SourceItem />\r
          <SourceItem title="Минздрав России — клинические рекомендации" />\r
        </Phone>)}\r
    </div>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const E=["TaskRowStory","SourceItemStory","Screen"];export{a as Screen,t as SourceItemStory,r as TaskRowStory,E as __namedExportsOrder,v as default};
