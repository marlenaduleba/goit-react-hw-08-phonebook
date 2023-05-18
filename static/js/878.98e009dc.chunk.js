"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[878],{8878:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var a=t(2791),r=t(9434),s=t(3634),i=t(6916),o=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.filter},d=function(e){return e.contacts.items},l=function(e){return e.contacts.error},u=(0,i.P1)([d,c],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())}))})),m=t(4270),f=t(9164),h=t(890),x=t(6314),p=t(3329),y=function(e){var n=e.title,t=e.children;return(0,p.jsxs)(x.Z,{component:"section",sx:{paddingLeft:5,paddingRight:5,marginBottom:5},children:[(0,p.jsx)(h.Z,{variant:"h4",component:"h2",align:"center",children:n}),t]})},j=t(9439),v=t(1413),b=t(1686),g=t(9036),Z=t(6151),C={name:"",number:""},w=function(e,n){switch(n.type){case"name":return(0,v.Z)((0,v.Z)({},e),{},{name:n.payload});case"number":return(0,v.Z)((0,v.Z)({},e),{},{number:n.payload});case"reset":return(0,v.Z)({},n.payload);default:return e}},R=function(){var e=(0,r.I0)(),n=(0,r.v9)(d),t=(0,r.v9)(l),i=(0,a.useReducer)(w,C),o=(0,j.Z)(i,2),c=o[0],u=c.name,m=c.number,f=o[1],h=function(e){var t=e.toLowerCase();return!n.find((function(e){return e.name.toLowerCase()===t}))||(b.Notify.failure("".concat(e," is already in contacts.")),!1)},y=function(e){var n=e.target,t=n.name,a=n.value;f({type:t,payload:a})};if(!t)return(0,p.jsx)("form",{onSubmit:function(n){n.preventDefault(),h(u)&&(e((0,s.uK)({name:u,number:m})),b.Notify.success("".concat(u," added to your contacts."))),f({type:"reset",payload:C})},children:(0,p.jsxs)(x.Z,{spacing:4,sx:{margin:"0 auto"},children:[(0,p.jsx)(g.Z,{id:"name",label:"Name",variant:"standard",type:"text",name:"name",inputProps:{pattern:"^[a-zA-Z\xc0-\xff]+(([' -][a-zA-Z\xc0-\xff ])?[a-zA-Z\xc0-\xff]*)*$"},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:u,onChange:y,required:!0}),(0,p.jsx)(g.Z,{id:"number",label:"Number",variant:"standard",type:"tel",name:"number",inputProps:{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:m,onChange:y,required:!0}),(0,p.jsx)(Z.Z,{type:"submit",variant:"outlined",children:"Add Contact"})]})});b.Notify.error("ERROR")},N=t(1523),k=function(e){return(0,p.jsx)(N.g4,(0,v.Z)({height:"70",width:"70",radius:"9",color:"#6096ba",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0},e))},L=t(7840),P=function(){var e=(0,r.v9)(c),n=(0,r.I0)();return(0,p.jsx)(x.Z,{children:(0,p.jsx)(g.Z,{label:"Find contacts by name",type:"search",variant:"standard",value:e,name:"filter",onChange:function(e){n((0,L.T)(e.target.value))}})})},A=t(5021),z=t(6278),E=t(6259),B=function(e){var n=e.contact,t=(0,r.I0)();return(0,r.v9)(l)?(b.Notify.error("ERROR"),(0,p.jsx)("h2",{className:"text",style:{fontSize:"40px"},children:"ERROR"})):(0,p.jsx)(A.ZP,{secondaryAction:(0,p.jsx)(Z.Z,{edge:"end","aria-label":"delete contact",onClick:function(){t((0,s.GK)(n.id)),b.Notify.info("".concat(n.name," removed from your contacts."))},type:"button",children:"Delete"}),disablePadding:!0,children:(0,p.jsxs)(z.Z,{role:"undefined",dense:!0,children:[(0,p.jsx)(E.Z,{primary:n.name,sx:{flexBasis:"20%"}}),(0,p.jsx)(E.Z,{secondary:n.number,sx:{flexBasis:"50%"}})]})})},F=t(493),I=function(){var e=(0,r.v9)(u);return(0,r.v9)(l)?(b.Notify.info("Error"),(0,p.jsx)("h2",{className:"text",style:{fontSize:"40px"},children:"ERROR"})):0===e.length?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{children:(0,p.jsx)(F.Z,{sx:{width:"100%",marginTop:2},children:e.map((function(e){return(0,p.jsx)(B,{contact:e},e.id)}))})})};function O(){var e=(0,r.I0)(),n=(0,r.v9)(o),t=(0,r.v9)(d);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.q,{children:(0,p.jsx)("title",{children:"Your contacts"})}),(0,p.jsxs)(f.Z,{maxWidth:"sm",sx:{paddingBottom:10},children:[(0,p.jsxs)(y,{title:"Phonebook",children:[(0,p.jsx)(R,{}),n&&(0,p.jsx)(k,{})]}),(0,p.jsxs)(y,{title:"Contacts",children:[t.length>0?(0,p.jsx)(P,{}):(0,p.jsx)(h.Z,{align:"center",children:"Looks like you don`t have any contacts yet or just clear them all. Please add new contact."}),(0,p.jsx)(I,{})]})]})]})}}}]);
//# sourceMappingURL=878.98e009dc.chunk.js.map