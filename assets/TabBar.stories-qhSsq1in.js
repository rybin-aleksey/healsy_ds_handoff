import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index--qcDGAq6.js";import{T as s,a as h}from"./index-CZVIt4Sn.js";import{M as y,f as v}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";const D={title:"Навигация/App Footer (Tabbar)",component:s,tags:["autodocs"],parameters:{width:393,backgrounds:{default:"gray"},...v("754:2016","Нижний таббар из 4 инстансов Tabbar / Item (1985:1595). Цвет верхней границы icons/grey — из внешней библиотеки (вне ДС).")},args:{activeTab:1},argTypes:{activeTab:{control:"inline-radio",options:[1,2,3,4]}}},t={render:function(T){const[f,x]=g.useState(T.activeTab??1);return e.jsx(s,{activeTab:f,onChange:x})}},r={name:"Все варианты",parameters:{width:null},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[1,2,3,4].map(a=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsxs("span",{style:{font:"11px Inter",color:"#9747ff",width:80},children:["activeTab=",a]}),e.jsx("div",{style:{width:393},children:e.jsx(s,{activeTab:a})}),e.jsx("div",{style:{width:440},children:e.jsx(s,{activeTab:a})})]},a))})},n={name:"Tabbar / Item",parameters:{...v("1985:1595"),width:null},render:()=>e.jsx(y,{cellWidth:86,cols:["State=Default","State=Active"],render:a=>e.jsx(h,{label:"Главная",icon:"home",active:a===1})})};var i,o,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    const [tab, setTab] = useState(args.activeTab ?? 1);
    return <TabBar activeTab={tab} onChange={setTab} />;
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    width: null
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      {([1, 2, 3, 4] as const).map(t => <div key={t} style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>\r
          <span style={{
        font: '11px Inter',
        color: '#9747ff',
        width: 80
      }}>activeTab={t}</span>\r
          <div style={{
        width: 393
      }}><TabBar activeTab={t} /></div>\r
          <div style={{
        width: 440
      }}><TabBar activeTab={t} /></div>\r
        </div>)}\r
    </div>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Tabbar / Item',
  parameters: {
    ...figma('1985:1595'),
    width: null
  },
  render: () => <Matrix cellWidth={86} cols={['State=Default', 'State=Active']} render={c => <TabBarItem label="Главная" icon="home" active={c === 1} />} />
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const E=["Playground","AllVariants","Item"];export{r as AllVariants,n as Item,t as Playground,E as __namedExportsOrder,D as default};
