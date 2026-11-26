import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as w}from"./index--qcDGAq6.js";import{B as r}from"./index-DwJ5-azd.js";import{b as j}from"./index-C3C9tsUM.js";import{M as k,P as S,f as y}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";import"./index-SfOnHUpW.js";import"./index-C606Hs3-.js";const H={title:"Данные и карточки/Biomarker Card",component:r,tags:["autodocs"],parameters:{...y("1312:2736","Раскрывающаяся строка биомаркера. Отрезки шкалы warning/normal — примитивы warning/200, success/200 (смысловых токенов нет)."),width:318},args:{name:"Витамин D",status:"High",expanded:!1,target:"Цель: 20–50 нг/мл",value:"14",units:"нг/мл",markerOffset:36},argTypes:{status:{control:"select",options:Object.keys(j)}}},s={render:function(o){const[d,f]=w.useState(o.expanded);return e.jsx(r,{...o,expanded:d,onToggle:()=>f(!d)})}},t={name:"Все варианты",parameters:{width:null},render:()=>e.jsx(k,{cellWidth:318,cols:["State=Collapsed","State=Expanded"],render:a=>e.jsx(r,{expanded:a===1})})},n={name:"Список результатов (393 / 440)",parameters:{width:null},render:()=>e.jsx("div",{style:{display:"flex",gap:24},children:[393,440].map(a=>e.jsx(S,{width:a,children:e.jsxs("div",{children:[e.jsx(r,{name:"Витамин D",status:"High",expanded:!0}),e.jsx(r,{name:"Ферритин",status:"Lower"}),e.jsx(r,{name:"Гемоглобин",status:"Normal"})]})},a))})};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState(args.expanded);
    return <BiomarkerCard {...args} expanded={open} onToggle={() => setOpen(!open)} />;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    width: null
  },
  render: () => <Matrix cellWidth={318} cols={['State=Collapsed', 'State=Expanded']} render={c => <BiomarkerCard expanded={c === 1} />} />
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var x,g,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Список результатов (393 / 440)',
  parameters: {
    width: null
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w}>\r
          <div>\r
            <BiomarkerCard name="Витамин D" status="High" expanded />\r
            <BiomarkerCard name="Ферритин" status="Lower" />\r
            <BiomarkerCard name="Гемоглобин" status="Normal" />\r
          </div>\r
        </Phone>)}\r
    </div>
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const M=["Playground","AllVariants","List"];export{t as AllVariants,n as List,s as Playground,M as __namedExportsOrder,H as default};
