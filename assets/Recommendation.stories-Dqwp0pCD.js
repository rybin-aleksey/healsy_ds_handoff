import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as j}from"./index--qcDGAq6.js";import{R as c,a as F}from"./index-DwJ5-azd.js";import{M as V,f as R,P as B}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";import"./index-C3C9tsUM.js";import"./index-SfOnHUpW.js";import"./index-C606Hs3-.js";const _={title:"Данные и карточки/Recommendation Card",component:c,tags:["autodocs"],parameters:{...R("1800:1661","View: Full | Compact × Selected: No | Yes. Нижняя панель — Recommendation Selection Bar (1800:1828)."),width:354},args:{view:"Full",selected:!1},argTypes:{view:{control:"inline-radio"}}},n={render:function(t){const[i,d]=j.useState(t.selected??!1);return e.jsx(c,{...t,selected:i,onSelectedChange:d})}},l={name:"Все варианты",parameters:{width:null},render:()=>e.jsx(V,{cellWidth:354,cols:["View=Full","View=Compact"],rows:["Selected=No","Selected=Yes"],render:(s,t)=>e.jsx(c,{view:s===0?"Full":"Compact",selected:t===1})})};function m({width:s}){const[t,i]=j.useState([0]),d=r=>i(a=>a.includes(r)?a.filter(y=>y!==r):[...a,r]),v=["Обсудить коррекцию витамина D с врачом","Сдать анализ на ферритин","Добавить в рацион рыбу 2 раза в неделю"];return e.jsxs(B,{width:s,padding:0,children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:24},children:v.map((r,a)=>e.jsx(c,{title:r,view:"Compact",selected:t.includes(a),onSelectedChange:()=>d(a)},r))}),t.length>0&&e.jsx(F,{label:`Выбрано рекомендаций: ${t.length}`})]})}const o={name:"Selection Bar: выбор (393 / 440)",parameters:{...R("1800:1828"),width:null},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[e.jsx(m,{width:393}),e.jsx(m,{width:440})]})};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args) {
    const [sel, setSel] = useState(args.selected ?? false);
    return <RecommendationCard {...args} selected={sel} onSelectedChange={setSel} />;
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,S,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    width: null
  },
  render: () => <Matrix cellWidth={354} cols={['View=Full', 'View=Compact']} rows={['Selected=No', 'Selected=Yes']} render={(c, r) => <RecommendationCard view={c === 0 ? 'Full' : 'Compact'} selected={r === 1} />} />
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,h,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Selection Bar: выбор (393 / 440)',
  parameters: {
    ...figma('1800:1828'),
    width: null
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}><Flow width={393} /><Flow width={440} /></div>
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const b=["Playground","AllVariants","SelectionBar"];export{l as AllVariants,n as Playground,o as SelectionBar,b as __namedExportsOrder,_ as default};
