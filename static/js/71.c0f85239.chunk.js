"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[71],{1294:function(e,n,t){t.d(n,{$:function(){return s}});var r=t(6314),a=t(3900),o=t(3329),s=function(e){var n=e.title,t=e.children;return(0,o.jsxs)(r.Z,{component:"section",sx:{margin:"0 auto 32px",maxWidth:"450px"},children:[(0,o.jsx)(a.fN,{variant:"h4",component:"h2",children:n}),t]})}},71:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r=t(2791),a=t(9434),o=t(3634),s=t(6916),c=function(e){return e.contacts.isLoading},i=function(e){return e.contacts.filter},u=function(e){return e.contacts.items},l=function(e){return e.contacts.error},d=(0,s.P1)([u,i],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())}))})),m=t(6907),f=t(890),h=t(1294),x=t(4942),p=t(1413),j=t(9439),v=t(5206),y=t(6314),b=t(4925),Z=t(292),C=t(3900),g=t(3329),w={name:"",number:""},R=function(){var e=(0,a.I0)(),n=(0,a.v9)(u),t=(0,a.v9)(l),s=(0,r.useState)(w),c=(0,j.Z)(s,2),i=c[0],d=i.name,m=i.number,f=c[1],h=function(e){var t=e.toLowerCase();return!n.find((function(e){return e.name.toLowerCase()===t}))||(v.Am.error("".concat(e," is already in contacts.")),!1)},R=function(e){var n=e.target,t=n.name,r=n.value;f((function(e){return(0,p.Z)((0,p.Z)({},e),{},(0,x.Z)({},t,r))}))};return t?(v.Am.error("ERROR"),null):(0,g.jsxs)(y.Z,{sx:{alignItems:"center"},component:"form",onSubmit:function(n){n.preventDefault(),h(d)&&(e((0,o.uK)({name:d,number:m})),v.Am.success("".concat(d," added to your contacts.")),f(w))},autoComplete:"off",children:[(0,g.jsxs)(C.__,{required:!0,autoComplete:"off",fullWidth:!0,children:[(0,g.jsx)(b.Z,{htmlFor:"standard-adornment-name",children:"Name"}),(0,g.jsx)(Z.Z,{id:"standard-adornment-name",type:"text",name:"name",value:d,onChange:R,autoComplete:"off",inputProps:{pattern:"[A-Za-z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\\-' ]+",title:"Only letters, apostrophe, dash, spaces, and Polish characters are allowed"}})]}),(0,g.jsxs)(C.__,{required:!0,autoComplete:"off",fullWidth:!0,children:[(0,g.jsx)(b.Z,{htmlFor:"standard-adornment-number",children:"Number"}),(0,g.jsx)(Z.Z,{id:"standard-adornment-number",type:"tel",name:"number",value:m,onChange:R,autoComplete:"off",inputProps:{pattern:"^[+]?[0-9 \\u0028\\u0029\\u002D]*$",title:"Phone number must consist of digits and may include spaces, dashes, and parentheses. It can start with '+'"}})]}),(0,g.jsx)(C.Sn,{type:"submit",children:"Add Contact"})]})},k=t(7593),A=t(7840),P=t(9402),_=function(){var e=(0,a.v9)(i),n=(0,a.I0)();return(0,g.jsx)(y.Z,{children:(0,g.jsx)(P.Z,{label:"Find contacts by name",type:"search",variant:"standard",value:e,name:"filter",onChange:function(e){n((0,A.T)(e.target.value))}})})},E=t(5021),F=t(6278),I=t(6259),L=function(e){var n=e.contact,t=(0,a.I0)();return(0,a.v9)(l)?(v.Am.error("ERROR"),(0,g.jsx)("h2",{className:"text",style:{fontSize:"40px"},children:"ERROR"})):(0,g.jsx)(E.ZP,{secondaryAction:(0,g.jsx)(C.m1,{edge:"end","aria-label":"delete contact",onClick:function(){t((0,o.GK)(n.id)),v.Am.info("".concat(n.name," removed from your contacts."))},type:"button",children:"Delete"}),disablePadding:!0,children:(0,g.jsxs)(F.Z,{role:"undefined",dense:!0,children:[(0,g.jsx)(I.Z,{primary:n.name,sx:{flexBasis:"20%"}}),(0,g.jsx)(I.Z,{secondary:n.number,sx:{flexBasis:"50%"}})]})})},N=function(){var e=(0,a.v9)(d);return(0,a.v9)(l)?(v.Am.info("Error"),(0,g.jsx)("h2",{className:"text",style:{fontSize:"40px"},children:"ERROR"})):0===e.length?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)("div",{children:(0,g.jsx)(C.CK,{sx:{width:"100%",marginTop:2},children:e.map((function(e){return(0,g.jsx)(L,{contact:e},e.id)}))})})};function O(){var e=(0,a.I0)(),n=(0,a.v9)(c),t=(0,a.v9)(u);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.ql,{children:(0,g.jsx)("title",{children:"Your contacts"})}),(0,g.jsxs)(h.$,{title:"Phonebook",children:[(0,g.jsx)(R,{}),n&&(0,g.jsx)(k.Z,{})]}),(0,g.jsxs)(h.$,{title:"Contacts",children:[t.length>0?(0,g.jsx)(_,{}):(0,g.jsx)(f.Z,{align:"center",children:"Looks like you don`t have any contacts yet or just clear them all. Please add new contact."}),(0,g.jsx)(N,{})]})]})}}}]);
//# sourceMappingURL=71.c0f85239.chunk.js.map