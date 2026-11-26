import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as o}from"./index-C606Hs3-.js";import{i as d}from"./Icon-CKpBa_z7.js";import{P as m,f}from"./Matrix-Dda3lrhE.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const T={title:"Действия/Toolbar Action",component:o,tags:["autodocs"],parameters:f("1999:1527","Действие нижней панели «иконка + подпись». В панели растягивается (FILL)."),args:{icon:"file-plus",label:"Добавить",fill:!1},argTypes:{icon:{control:"select",options:d}}},e={},l={name:"Панель экрана проверки (393 / 440)",render:()=>r.jsx("div",{style:{display:"flex",gap:24},children:[393,440].map(a=>r.jsx(m,{width:a,padding:0,children:r.jsxs("div",{style:{display:"flex",padding:"8px 16px"},children:[r.jsx(o,{fill:!0,icon:"file-plus",label:"Добавить"}),r.jsx(o,{fill:!0,icon:"refresh-ccw",label:"Переснять"}),r.jsx(o,{fill:!0,icon:"crop",label:"Кадрировать"}),r.jsx(o,{fill:!0,icon:"trash",label:"Удалить"})]})},a))})};var i,s,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,c,p;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Панель экрана проверки (393 / 440)',
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>\r
      {[393, 440].map(w => <Phone key={w} width={w} padding={0}>\r
          <div style={{
        display: 'flex',
        padding: '8px 16px'
      }}>\r
            <ToolbarAction fill icon="file-plus" label="Добавить" />\r
            <ToolbarAction fill icon="refresh-ccw" label="Переснять" />\r
            <ToolbarAction fill icon="crop" label="Кадрировать" />\r
            <ToolbarAction fill icon="trash" label="Удалить" />\r
          </div>\r
        </Phone>)}\r
    </div>
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const j=["Playground","InToolbar"];export{l as InToolbar,e as Playground,j as __namedExportsOrder,T as default};
