import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index--qcDGAq6.js";import{c as d,T as k,d as w}from"./index-SfOnHUpW.js";import{M as a,f as O}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";const M={title:"Ввод и формы/Switcher · Toggle · Segment control",component:d,tags:["autodocs"],parameters:O("754:1983","Switcher `754:1983` (по контракту — переключатель по умолчанию), Toggle - Switch `980:2223` (iOS-кит, цвета из внешней библиотеки), Segment control `754:2224`."),args:{checked:!0}},s={render:function(t){const[c,j]=f.useState(t.checked);return e.jsx(d,{checked:c,onChange:j})}},n={name:"Все варианты",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx(a,{cols:["isActive=false","isActive=true"],rows:["Switcher"],render:r=>e.jsx(d,{checked:r===1})}),e.jsx(a,{cols:["Is On=False","Is On=True"],rows:["State=Idle","State=Pressed"],render:(r,t)=>e.jsx(k,{checked:r===1,pressed:t===1})}),e.jsx(a,{cols:["Segments=1","Segments=2"],rows:["Segment control"],render:r=>e.jsx(w,{selected:r+1})})]})},o={name:"Segment control: интерактив",render:function(){const[t,c]=f.useState(1);return e.jsx(w,{selected:t,onChange:c})}};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    const [on, setOn] = useState(args.checked);
    return <Switcher checked={on} onChange={setOn} />;
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var S,g,u;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Все варианты',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>\r
      <Matrix cols={['isActive=false', 'isActive=true']} rows={['Switcher']} render={c => <Switcher checked={c === 1} />} />\r
      <Matrix cols={['Is On=False', 'Is On=True']} rows={['State=Idle', 'State=Pressed']} render={(c, r) => <ToggleSwitch checked={c === 1} pressed={r === 1} />} />\r
      <Matrix cols={['Segments=1', 'Segments=2']} rows={['Segment control']} render={c => <SegmentControl selected={c + 1 as 1 | 2} />} />\r
    </div>
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,h,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Segment control: интерактив',
  render: function Render() {
    const [s, setS] = useState<1 | 2>(1);
    return <SegmentControl selected={s} onChange={setS} />;
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const R=["Playground","AllVariants","Segment"];export{n as AllVariants,s as Playground,o as Segment,R as __namedExportsOrder,M as default};
