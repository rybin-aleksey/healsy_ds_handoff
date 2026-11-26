import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as k}from"./index--qcDGAq6.js";import{C as o,c as P,m as S}from"./index-VXl8eS0O.js";import{M,f as h,P as g}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";import"./index-C606Hs3-.js";import"./index-SfOnHUpW.js";import"./index-C3C9tsUM.js";import"./index-CZVIt4Sn.js";const R={title:"Экранные компоненты/Тренд",component:o,tags:["autodocs"],parameters:{...h("2033:4309","Trend / Conclusion Option `2033:4309`, Trend / Metric Picker `2045:4458` (Count 0–4; при 4 выбор закрыт, шеврона нет)."),width:354},args:{title:"Витамин D и магний",meta:"2 показателя · 24 августа",selected:!1}},n={name:"Trend / Conclusion Option",render:function(){const[t,c]=k.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(o,{selected:t===0,onSelect:()=>c(0)}),e.jsx(o,{title:"Ферритин и железо",meta:"2 показателя · 12 июля",selected:t===1,onSelect:()=>c(1)})]})}},s={name:"Trend / Metric Picker: Count 0–4",parameters:{...h("2045:4458"),width:null},render:()=>e.jsx(M,{cellWidth:354,cols:["Metric Picker"],rows:["Count=0","Count=1","Count=2","Count=3","Count=4"],render:(r,t)=>e.jsx(P,{metrics:S.slice(0,t)})})},i={name:"Metric Picker (393 / 440)",parameters:{width:null},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[393,440].map(r=>e.jsx(g,{width:r,children:e.jsx(P,{metrics:S})},r))})};var a,l,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Trend / Conclusion Option',
  render: function Render() {
    const [sel, setSel] = useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>\r
        <ConclusionOption selected={sel === 0} onSelect={() => setSel(0)} />\r
        <ConclusionOption title="Ферритин и железо" meta="2 показателя · 12 июля" selected={sel === 1} onSelect={() => setSel(1)} />\r
      </div>;
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Trend / Metric Picker: Count 0–4',
  parameters: {
    ...figma('2045:4458'),
    width: null
  },
  render: () => <Matrix cellWidth={354} cols={['Metric Picker']} rows={['Count=0', 'Count=1', 'Count=2', 'Count=3', 'Count=4']} render={(_, r) => <MetricPicker metrics={metricPickerSample.slice(0, r)} />} />
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,C,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Metric Picker (393 / 440)',
  parameters: {
    width: null
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w}><MetricPicker metrics={metricPickerSample} /></Phone>)}\r
    </div>
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const I=["ConclusionOptionStory","MetricPickerVariants","Widths"];export{n as ConclusionOptionStory,s as MetricPickerVariants,i as Widths,I as __namedExportsOrder,R as default};
