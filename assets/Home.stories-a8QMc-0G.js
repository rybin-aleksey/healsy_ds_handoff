import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as s,P as j,M as d}from"./index-VXl8eS0O.js";import{P,f as l}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./Icon-CKpBa_z7.js";import"./index-C606Hs3-.js";import"./index--qcDGAq6.js";import"./index-SfOnHUpW.js";import"./index-C3C9tsUM.js";import"./index-CZVIt4Sn.js";const i=`data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="216"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfece1"/><stop offset="1" stop-color="#6abcff"/></linearGradient></defs><rect width="200" height="216" fill="url(#g)"/><rect x="70" y="40" width="60" height="120" rx="10" fill="#ffffff" opacity=".7"/></svg>')}`,X={title:"Экранные компоненты/Главная",component:s,tags:["autodocs"],parameters:l("1840:2782","Home / Today Card `1840:2782`, Home / Plan Row `1840:2784`, Home / Metric Card `1840:2787`. Фото в сторис — заглушка."),args:{title:"Пейте воду",imageUrl:i}},r={name:"Home / Today Card"},a={name:"Home / Plan Row",parameters:l("1840:2784"),render:()=>e.jsx("div",{style:{width:354},children:e.jsx(j,{})})},t={name:"Home / Metric Card",parameters:l("1840:2787","Мастер 169×165. В сетке из двух колонок — `fill`."),render:()=>e.jsx(d,{})},o={name:"Композиция главной (393 / 440)",render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[393,440].map(m=>e.jsxs(P,{width:m,children:[e.jsxs("div",{style:{display:"flex",gap:8,overflowX:"auto"},children:[e.jsx(s,{title:"Пейте воду",imageUrl:i}),e.jsx(s,{title:"Сон 8 часов",imageUrl:i}),e.jsx(s,{title:"Прогулка",imageUrl:i})]}),e.jsx(j,{}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx(d,{fill:!0}),e.jsx(d,{fill:!0,title:"Сон",subtitle:"лучше, чем вчера",value:"7,5",unit:"ч"})]})]},m))})};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Home / Today Card'
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Home / Plan Row',
  parameters: figma('1840:2784'),
  render: () => <div style={{
    width: 354
  }}><PlanRow /></div>
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var u,x,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Home / Metric Card',
  parameters: figma('1840:2787', 'Мастер 169×165. В сетке из двух колонок — \`fill\`.'),
  render: () => <MetricCard />
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,C,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Композиция главной (393 / 440)',
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w}>\r
          <div style={{
        display: 'flex',
        gap: 8,
        overflowX: 'auto'
      }}>\r
            <TodayCard title="Пейте воду" imageUrl={photo} />\r
            <TodayCard title="Сон 8 часов" imageUrl={photo} />\r
            <TodayCard title="Прогулка" imageUrl={photo} />\r
          </div>\r
          <PlanRow />\r
          <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }}>\r
            <MetricCard fill />\r
            <MetricCard fill title="Сон" subtitle="лучше, чем вчера" value="7,5" unit="ч" />\r
          </div>\r
        </Phone>)}\r
    </div>
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const _=["TodayCardStory","PlanRowStory","MetricCardStory","HomeComposition"];export{o as HomeComposition,t as MetricCardStory,a as PlanRowStory,r as TodayCardStory,_ as __namedExportsOrder,X as default};
