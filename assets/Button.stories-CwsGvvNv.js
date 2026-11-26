import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as r}from"./index-C606Hs3-.js";import{M as b,P as g,f as S}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./Icon-CKpBa_z7.js";const w={title:"Действия/Button",component:r,tags:["autodocs"],parameters:S("987:2870","Type × State × Size, 18 вариантов. Active = нажатие (:active), Hover в мобильном приложении нет. Текст Secondary и Outline M — Regular 16/24 без стиля (вне ДС)."),args:{label:"Button name",variant:"Primary",size:"L",active:!1,disabled:!1,fullWidth:!1},argTypes:{variant:{control:"inline-radio"},size:{control:"inline-radio"}}},s={},d=["Primary","Secondary","Outline"],n=["Default","Active","Disabled"],i={name:"Все варианты",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:48},children:["L","M"].map(a=>e.jsx(b,{cols:d.map(t=>`Type=${t}`),rows:n.map(t=>`State=${t}, Size=${a}`),render:(t,o)=>e.jsx(r,{label:"Button name",variant:d[t],size:a,active:n[o]==="Active",disabled:n[o]==="Disabled"})},a))})},l={name:"На ширину экрана (393 / 440)",render:()=>e.jsx("div",{style:{display:"flex",gap:24},children:[393,440].map(a=>e.jsxs(g,{width:a,children:[e.jsx(r,{label:"Сохранить",fullWidth:!0}),e.jsx(r,{label:"Отмена",variant:"Secondary",fullWidth:!0}),e.jsx(r,{label:"Подробнее",variant:"Outline",size:"M",fullWidth:!0})]},a))})};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,y,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Все варианты',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>\r
      {(['L', 'M'] as const).map(size => <Matrix key={size} cols={types.map(t => \`Type=\${t}\`)} rows={states.map(s => \`State=\${s}, Size=\${size}\`)} render={(c, r) => <Button label="Button name" variant={types[c]} size={size} active={states[r] === 'Active'} disabled={states[r] === 'Disabled'} />} />)}\r
    </div>
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,x,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'На ширину экрана (393 / 440)',
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w}>\r
          <Button label="Сохранить" fullWidth />\r
          <Button label="Отмена" variant="Secondary" fullWidth />\r
          <Button label="Подробнее" variant="Outline" size="M" fullWidth />\r
        </Phone>)}\r
    </div>
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const A=["Playground","AllVariants","FullWidth"];export{i as AllVariants,l as FullWidth,s as Playground,A as __namedExportsOrder,w as default};
