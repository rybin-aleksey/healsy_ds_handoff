import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{i as S,I as B,a as k}from"./Icon-CKpBa_z7.js";import"./index-yBjzXJbu.js";const N={title:"Foundations/Токены",parameters:{layout:"padded"}},a={font:"400 11px/14px Inter, sans-serif",color:"var(--typography-secondary)"},$={font:"500 16px/20px Inter, sans-serif",margin:"24px 0 12px"},r=({title:n,children:i})=>e.jsxs("section",{children:[e.jsx("h3",{style:$,children:n}),i]}),D=["0","50","100","150","200","300","400","500","600","700","800","850","900","950","1000"],p=["brand","neutral","success","warning","error","info","status-01","status-02","status-03","status-04"],L=["4","8","12","16","24","32","40","48","56","64","72","80"],c=({v:n,label:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,width:64},children:[e.jsx("div",{style:{height:40,borderRadius:8,background:`var(${n})`,boxShadow:"inset 0 0 0 1px rgba(0,0,0,.06)"}}),e.jsx("span",{style:a,children:i})]}),s={name:"Цвета",render:()=>e.jsxs("div",{children:[e.jsx(r,{title:"Примитивы (primitives/*)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:p.map(n=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end"},children:[e.jsx("span",{style:{...a,width:70},children:n}),D.map(i=>e.jsx(c,{v:`--${n}-${i}`,label:i},i))]},n))})}),e.jsx(r,{title:"Прозрачность (primitives/*/alpha/*)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[...p,"white"].map(n=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end",background:n==="white"?"#313535":void 0,padding:n==="white"?4:0},children:[e.jsx("span",{style:{...a,width:70},children:n}),L.map(i=>e.jsx(c,{v:`--${n}-alpha-${i}`,label:i},i))]},n))})}),e.jsx(r,{title:"Смысловые токены",children:Object.entries({bg:["mainWhite","baseGray","pictureBg"],typography:["primary","secondary","white","success","danger","warning","info"],border:["default","light","hover","active"],icons:["primaryLineIcon","secondaryLineIcon","disableLineIcon","primarySolidIcon","secondarySolidIcon","disableSolidIcon","whiteSolidIcon"],links:["default","hovered","disable","legalDefault","legalHovered"],button:["primaryBg","primaryBgActive","secondaryBg","secondaryBgActive","disabledBg","textDisabled","outlineBorder","outlineBorderActive","outlineText","outlineTextActive","darkBg"],tech:["success","error","info","warning"]}).map(([n,i])=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:[e.jsxs("span",{style:{...a,width:70},children:[n,"/"]}),i.map(o=>e.jsx("div",{style:{width:96},children:e.jsx(c,{v:`--${n}-${o}`,label:o})},o))]},n))})]})},A=["heading/H1","heading/H2","heading/H3","heading/H3-compact","heading/H4","body/L","body/L-compact","body/L-strong","body/M","body/M-compact","body/M-strong","body/S","body/S-strong","description/L","description/L-strong","button/L","display/L"],t={name:"Типографика",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:A.map(n=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 1fr",alignItems:"baseline",gap:16,borderBottom:"1px solid var(--border-light)",paddingBottom:12},children:[e.jsx("span",{style:a,children:n}),e.jsx("span",{className:`ts-${n.replace("/","-")}`,children:n==="display/L"?"78 %":"Съешь же ещё этих мягких французских булок"})]},n))})},R=["0","05","1","1-5","2","3","4","5","6","7","8","9","10","12","13","14","15","16","20"],T=["0","05","1","2","3","4","6","100"],d={name:"Отступы и радиусы",render:()=>e.jsxs("div",{children:[e.jsx(r,{title:"spacing/*",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:R.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsxs("span",{style:{...a,width:80},children:["spacing/",n.replace("-"," ")]}),e.jsx("div",{style:{height:12,width:`var(--spacing-${n})`,background:"var(--brand-300)",borderRadius:2}})]},n))})}),e.jsx(r,{title:"border radius/*",children:e.jsx("div",{style:{display:"flex",gap:16},children:T.map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx("div",{style:{width:64,height:64,background:"var(--bg-baseGray)",border:"1px solid var(--border-hover)",borderRadius:`var(--radius-${n})`}}),e.jsx("span",{style:a,children:n})]},n))})})]})},l={name:"Иконки",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 110px)",gap:12},children:S.map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,padding:12,borderRadius:12,background:"var(--bg-baseGray)"},children:[e.jsx(B,{name:n,color:"var(--icons-primaryLineIcon)"}),e.jsxs("span",{style:{...a,textAlign:"center"},children:[k[n].size,"px / ",n]})]},n))})};var y,g,m;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Цвета',
  render: () => <div>\r
      <Section title="Примитивы (primitives/*)">\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>\r
          {scales.map(s => <div key={s} style={{
          display: 'flex',
          gap: 8,
          alignItems: 'flex-end'
        }}>\r
              <span style={{
            ...caption,
            width: 70
          }}>{s}</span>\r
              {steps.map(st => <Swatch key={st} v={\`--\${s}-\${st}\`} label={st} />)}\r
            </div>)}\r
        </div>\r
      </Section>\r
      <Section title="Прозрачность (primitives/*/alpha/*)">\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>\r
          {[...scales, 'white'].map(s => <div key={s} style={{
          display: 'flex',
          gap: 8,
          alignItems: 'flex-end',
          background: s === 'white' ? '#313535' : undefined,
          padding: s === 'white' ? 4 : 0
        }}>\r
              <span style={{
            ...caption,
            width: 70
          }}>{s}</span>\r
              {alphas.map(a => <Swatch key={a} v={\`--\${s}-alpha-\${a}\`} label={a} />)}\r
            </div>)}\r
        </div>\r
      </Section>\r
      <Section title="Смысловые токены">\r
        {Object.entries({
        bg: ['mainWhite', 'baseGray', 'pictureBg'],
        typography: ['primary', 'secondary', 'white', 'success', 'danger', 'warning', 'info'],
        border: ['default', 'light', 'hover', 'active'],
        icons: ['primaryLineIcon', 'secondaryLineIcon', 'disableLineIcon', 'primarySolidIcon', 'secondarySolidIcon', 'disableSolidIcon', 'whiteSolidIcon'],
        links: ['default', 'hovered', 'disable', 'legalDefault', 'legalHovered'],
        button: ['primaryBg', 'primaryBgActive', 'secondaryBg', 'secondaryBgActive', 'disabledBg', 'textDisabled', 'outlineBorder', 'outlineBorderActive', 'outlineText', 'outlineTextActive', 'darkBg'],
        tech: ['success', 'error', 'info', 'warning']
      }).map(([g, names]) => <div key={g} style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 16
      }}>\r
            <span style={{
          ...caption,
          width: 70
        }}>{g}/</span>\r
            {names.map(n => <div key={n} style={{
          width: 96
        }}><Swatch v={\`--\${g}-\${n}\`} label={n} /></div>)}\r
          </div>)}\r
      </Section>\r
    </div>
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,h,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Типографика',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      {textStyles.map(s => <div key={s} style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      alignItems: 'baseline',
      gap: 16,
      borderBottom: '1px solid var(--border-light)',
      paddingBottom: 12
    }}>\r
          <span style={caption}>{s}</span>\r
          <span className={\`ts-\${s.replace('/', '-')}\`}>{s === 'display/L' ? '78 %' : 'Съешь же ещё этих мягких французских булок'}</span>\r
        </div>)}\r
    </div>
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var u,b,f;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Отступы и радиусы',
  render: () => <div>\r
      <Section title="spacing/*">\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }}>\r
          {spacing.map(s => <div key={s} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>\r
              <span style={{
            ...caption,
            width: 80
          }}>spacing/{s.replace('-', ' ')}</span>\r
              <div style={{
            height: 12,
            width: \`var(--spacing-\${s})\`,
            background: 'var(--brand-300)',
            borderRadius: 2
          }} />\r
            </div>)}\r
        </div>\r
      </Section>\r
      <Section title="border radius/*">\r
        <div style={{
        display: 'flex',
        gap: 16
      }}>\r
          {radii.map(r => <div key={r} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}>\r
              <div style={{
            width: 64,
            height: 64,
            background: 'var(--bg-baseGray)',
            border: '1px solid var(--border-hover)',
            borderRadius: \`var(--radius-\${r})\`
          }} />\r
              <span style={caption}>{r}</span>\r
            </div>)}\r
        </div>\r
      </Section>\r
    </div>
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,w,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Иконки',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 110px)',
    gap: 12
  }}>\r
      {iconNames.map(n => <div key={n} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      borderRadius: 12,
      background: 'var(--bg-baseGray)'
    }}>\r
          <Icon name={n} color="var(--icons-primaryLineIcon)" />\r
          <span style={{
        ...caption,
        textAlign: 'center'
      }}>{icons[n].size}px / {n}</span>\r
        </div>)}\r
    </div>
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const W=["Colors","Typography","SpacingRadius","Icons"];export{s as Colors,l as Icons,d as SpacingRadius,t as Typography,W as __namedExportsOrder,N as default};
