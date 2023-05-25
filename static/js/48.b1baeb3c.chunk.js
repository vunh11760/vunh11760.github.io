(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[48],{2774:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),i=a(30),c=a(31),r=a(2647),o=a(377),s=a(610),l=a(2741),d=a(38),j=a(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,O=e.moreLink,x=void 0===O?[]:O,h=e.sx,p=Object(i.a)(e,b);return Object(j.jsxs)(r.a,{sx:h,mb:5,spacing:2,children:[Object(j.jsxs)(r.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(d.c,Object(n.a)({links:t},p))]}),a&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(x)?Object(j.jsx)(l.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2778:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(3),i=a(610),c=a(2767),r=a(2792),o=a(377),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(i.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,i=e.children;return Object(s.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(r.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:i})]})}},2792:function(e,t,a){"use strict";var n=a(5),i=a(8),c=a(2),r=a(1),o=(a(12),a(11)),s=a(2701),l=a(610),d=a(14),j=a(7),b=a(2641),u=a(2702);function O(e){return Object(b.a)("MuiCardHeader",e)}var x=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(x.title),t.title),Object(n.a)(a,"& .".concat(x.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),m=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,r=a.avatar,j=a.className,b=a.component,u=void 0===b?"div":b,x=a.disableTypography,g=void 0!==x&&x,y=a.subheader,C=a.subheaderTypographyProps,k=a.title,M=a.titleTypographyProps,S=Object(i.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),T=Object(c.a)({},a,{component:u,disableTypography:g}),w=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},O,t)}(T),D=k;null==D||D.type===l.a||g||(D=Object(h.jsx)(l.a,Object(c.a)({variant:r?"body2":"h5",className:w.title,component:"span",display:"block"},M,{children:D})));var P=y;return null==P||P.type===l.a||g||(P=Object(h.jsx)(l.a,Object(c.a)({variant:r?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:P}))),Object(h.jsxs)(p,Object(c.a)({className:Object(o.a)(w.root,j),as:u,ref:t,styleProps:T},S,{children:[r&&Object(h.jsx)(f,{className:w.avatar,styleProps:T,children:r}),Object(h.jsxs)(m,{className:w.content,styleProps:T,children:[D,P]}),n&&Object(h.jsx)(v,{className:w.action,styleProps:T,children:n})]}))}));t.a=g},3116:function(e,t,a){"use strict";var n=a(8),i=a(2),c=a(1),r=(a(12),a(11)),o=a(2701),s=a(7),l=a(14),d=a(2641),j=a(2702);function b(e){return Object(d.a)("MuiDialogActions",e)}Object(j.a)("MuiDialogActions",["root","spacing"]);var u=a(0),O=Object(s.a)("div",{},{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(i.a)({},t.root,!a.disableSpacing&&t.spacing)}})((function(e){var t=e.styleProps;return Object(i.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),x=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogActions"}),c=a.className,s=a.disableSpacing,d=void 0!==s&&s,j=Object(n.a)(a,["className","disableSpacing"]),x=Object(i.a)({},a,{disableSpacing:d}),h=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(o.a)(a,b,t)}(x);return Object(u.jsx)(O,Object(i.a)({className:Object(r.a)(h.root,c),styleProps:x,ref:t},j))}));t.a=x},3199:function(e,t,a){"use strict";var n=a(612),i=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a(1));var c=n(a(613)),r=a(0),o=(0,c.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},3256:function(e,t,a){"use strict";var n=a(2),i=a(8),c=a(1),r=(a(12),a(11)),o=a(2701),s=a(610),l=a(7),d=a(14),j=a(2641),b=a(2702);function u(e){return Object(j.a)("MuiDialogTitle",e)}Object(b.a)("MuiDialogTitle",["root"]);var O=a(0),x=Object(l.a)("div",{},{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{margin:0,padding:"16px 24px",flex:"0 0 auto"}})),h=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogTitle"}),c=a.children,l=a.className,j=a.disableTypography,b=void 0!==j&&j,h=Object(i.a)(a,["children","className","disableTypography"]),p=Object(n.a)({},a,{disableTypography:b}),f=function(e){var t=e.classes;return Object(o.a)({root:["root"]},u,t)}(p);return Object(O.jsx)(x,Object(n.a)({className:Object(r.a)(f.root,l),styleProps:p,ref:t},h,{children:b?c:Object(O.jsx)(s.a,{component:"h2",variant:"h6",children:c})}))}));t.a=h},3258:function(e,t,a){"use strict";var n=a(8),i=a(2),c=a(1),r=(a(12),a(11)),o=a(2701),s=a(7),l=a(14),d=a(2641),j=a(2702);function b(e){return Object(d.a)("MuiDialogContent",e)}Object(j.a)("MuiDialogContent",["root","dividers"]);var u=a(0),O=Object(s.a)("div",{},{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(i.a)({},t.root,a.dividers&&t.dividers)}})((function(e){var t=e.theme,a=e.styleProps;return Object(i.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-of-type":{paddingTop:20}},a.dividers&&{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)})})),x=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogContent"}),c=a.className,s=a.dividers,d=void 0!==s&&s,j=Object(n.a)(a,["className","dividers"]),x=Object(i.a)({},a,{dividers:d}),h=function(e){var t=e.classes,a={root:["root",e.dividers&&"dividers"]};return Object(o.a)(a,b,t)}(x);return Object(u.jsx)(O,Object(i.a)({className:Object(r.a)(h.root,c),styleProps:x,ref:t},j))}));t.a=x},4308:function(e,t,a){"use strict";var n=a(612),i=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a(1));var c=n(a(613)),r=a(0),o=(0,c.default)((0,r.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=o},4309:function(e,t,a){"use strict";var n=a(612),i=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a(1));var c=n(a(613)),r=a(0),o=(0,c.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},4360:function(e,t,a){"use strict";var n=a(8),i=a(2),c=a(1),r=(a(12),a(2701)),o=a(7),s=a(14),l=a(610),d=a(2641),j=a(2702);function b(e){return Object(d.a)("MuiDialogContentText",e)}Object(j.a)("MuiDialogContentText",["root"]);var u=a(0),O=Object(o.a)(l.a,{shouldForwardProp:function(e){return Object(o.b)(e)||"classes"===e}},{name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({marginBottom:12}),x=c.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiDialogContentText"}),c=Object(n.a)(a,["children"]),o=function(e){var t=e.classes,a=Object(r.a)({root:["root"]},b,t);return Object(i.a)({},t,a)}(c);return Object(u.jsx)(O,Object(i.a)({component:"p",variant:"body1",color:"text.secondary",ref:t,styleProps:c},a,{classes:o}))}));t.a=x},4451:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ce}));var n=a(7),i=a(377),c=a(2756),r=a(2735),o=a(22),s=a(380),l=a(2774),d=a(17),j=a(1),b=a(2743),u=a(3256),O=a(3258),x=a(4360),h=a(2762),p=a(3116),f=a(298),v=a(38),m=a(0);function g(){var e=Object(j.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(v.d,{variant:"outlined",color:"warning",onClick:function(){n(!0)},children:"Form Dialogs"}),Object(m.jsxs)(b.a,{open:a,onClose:i,children:[Object(m.jsx)(u.a,{children:"Subscribe"}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(x.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(m.jsx)(h.a,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address"})]}),Object(m.jsxs)(p.a,{children:[Object(m.jsx)(f.a,{onClick:i,color:"inherit",children:"Cancel"}),Object(m.jsx)(f.a,{onClick:i,variant:"contained",children:"Subscribe"})]})]})]})}function y(){var e=Object(j.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(v.d,{color:"info",variant:"outlined",onClick:function(){n(!0)},children:"Open alert dialog"}),Object(m.jsxs)(b.a,{open:a,onClose:i,children:[Object(m.jsx)(u.a,{children:"Use Google's location service?"}),Object(m.jsx)(O.a,{children:Object(m.jsx)(x.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(m.jsxs)(p.a,{children:[Object(m.jsx)(f.a,{onClick:i,children:"Disagree"}),Object(m.jsx)(f.a,{onClick:i,autoFocus:!0,children:"Agree"})]})]})]})}var C=a(19);function k(){var e=Object(j.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],i=Object(j.useState)("paper"),c=Object(d.a)(i,2),r=c[0],o=c[1],s=function(e){return function(){n(!0),o(e)}},l=function(){n(!1)},h=Object(j.useRef)(null);return Object(j.useEffect)((function(){if(a){var e=h.current;null!==e&&e.focus()}}),[a]),Object(m.jsxs)("div",{children:[Object(m.jsx)(f.a,{variant:"outlined",onClick:s("paper"),sx:{mr:2},children:"scroll=paper"}),Object(m.jsx)(f.a,{variant:"outlined",onClick:s("body"),children:"scroll=body"}),Object(m.jsxs)(b.a,{open:a,onClose:l,scroll:r,children:[Object(m.jsx)(u.a,{sx:{pb:2},children:"Subscribe"}),Object(m.jsx)(O.a,{dividers:"paper"===r,children:Object(m.jsx)(x.a,{id:"scroll-dialog-description",ref:h,tabIndex:-1,children:Object(C.a)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),Object(m.jsxs)(p.a,{children:[Object(m.jsx)(f.a,{onClick:l,children:"Cancel"}),Object(m.jsx)(f.a,{variant:"contained",onClick:l,children:"Subscribe"})]})]})]})}var M=a(3199),S=a.n(M),T=a(4308),w=a.n(T),D=a(610),P=a(2747),R=a(374),N=a(2760),A=a(2733),F=a(2751),W=["username@gmail.com","user02@gmail.com"];function H(){var e=Object(j.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(j.useState)(W[1]),r=Object(d.a)(c,2),o=r[0],s=r[1],l=function(e){n(!1),s(e)};return Object(m.jsxs)(i.a,{sx:{textAlign:"center"},children:[Object(m.jsxs)(D.a,{variant:"subtitle1",component:"div",children:["Selected: ",o]}),Object(m.jsx)("br",{}),Object(m.jsx)(f.a,{variant:"outlined",onClick:function(){n(!0)},children:"Open simple dialog"}),Object(m.jsxs)(b.a,{open:a,onClose:function(){return l(o)},children:[Object(m.jsx)(u.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(m.jsxs)(P.a,{children:[W.map((function(e){return Object(m.jsxs)(R.b,{button:!0,onClick:function(){return l(e)},children:[Object(m.jsx)(N.a,{children:Object(m.jsx)(A.a,{sx:{color:"info.main",backgroundColor:"info.lighter"},children:Object(m.jsx)(w.a,{})})}),Object(m.jsx)(F.a,{primary:e})]},e)})),Object(m.jsxs)(R.b,{autoFocus:!0,button:!0,onClick:function(){return l("addAccount")},children:[Object(m.jsx)(N.a,{children:Object(m.jsx)(A.a,{children:Object(m.jsx)(S.a,{})})}),Object(m.jsx)(F.a,{primary:"Add account"})]})]})]})]})}var _=a(2764),G=a(2729),B=a(2725),I=a(2759),L=a(2766),z=a(2740);function U(){var e=Object(j.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(j.useState)(!0),r=Object(d.a)(c,2),o=r[0],s=r[1],l=Object(j.useState)("sm"),h=Object(d.a)(l,2),v=h[0],g=h[1],y=function(){n(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{variant:"outlined",onClick:function(){n(!0)},children:"Max Width Dialog"}),Object(m.jsxs)(b.a,{open:a,maxWidth:v,onClose:y,fullWidth:o,children:[Object(m.jsx)(u.a,{children:"Optional sizes"}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(x.a,{children:"You can set my maximum width and whether to adapt or not."}),Object(m.jsxs)(i.a,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[Object(m.jsxs)(_.a,{sx:{mt:2,minWidth:120},children:[Object(m.jsx)(G.a,{htmlFor:"max-width",children:"maxWidth"}),Object(m.jsxs)(B.a,{autoFocus:!0,value:v,onChange:function(e){g(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[Object(m.jsx)(I.a,{value:!1,children:"false"}),Object(m.jsx)(I.a,{value:"xs",children:"xs"}),Object(m.jsx)(I.a,{value:"sm",children:"sm"}),Object(m.jsx)(I.a,{value:"md",children:"md"}),Object(m.jsx)(I.a,{value:"lg",children:"lg"}),Object(m.jsx)(I.a,{value:"xl",children:"xl"})]})]}),Object(m.jsx)(L.a,{control:Object(m.jsx)(z.a,{checked:o,onChange:function(e){s(e.target.checked)}}),label:"Full width",sx:{mt:1}})]})]}),Object(m.jsx)(p.a,{children:Object(m.jsx)(f.a,{onClick:y,variant:"contained",children:"Close"})})]})]})}var q=a(3),E=a(4309),J=a.n(E),V=a(2709),Y=a(2755),K=a(2754),Q=a(2739),X=a(2656),Z=Object(j.forwardRef)((function(e,t){return Object(m.jsx)(V.a,Object(q.a)({direction:"up",ref:t},e))}));function $(){var e=Object(j.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v.d,{variant:"outlined",color:"error",onClick:function(){n(!0)},children:"Full Screen Dialogs"}),Object(m.jsxs)(b.a,{fullScreen:!0,open:a,onClose:i,TransitionComponent:Z,children:[Object(m.jsx)(Y.a,{position:"relative",children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)(Q.a,{color:"inherit",edge:"start",onClick:i,children:Object(m.jsx)(J.a,{})}),Object(m.jsx)(D.a,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),Object(m.jsx)(f.a,{autoFocus:!0,color:"inherit",onClick:i,children:"Save"})]})}),Object(m.jsxs)(P.a,{children:[Object(m.jsx)(R.b,{button:!0,children:Object(m.jsx)(F.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(m.jsx)(X.a,{}),Object(m.jsx)(R.b,{button:!0,children:Object(m.jsx)(F.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var ee=Object(j.forwardRef)((function(e,t){return Object(m.jsx)(V.a,Object(q.a)({direction:"up",ref:t},e))}));function te(){var e=Object(j.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(v.d,{variant:"outlined",color:"success",onClick:function(){n(!0)},children:"Transitions Dialogs"}),Object(m.jsxs)(b.a,{open:a,TransitionComponent:ee,keepMounted:!0,onClose:i,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(m.jsx)(u.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(m.jsx)(O.a,{children:Object(m.jsx)(x.a,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(m.jsxs)(p.a,{children:[Object(m.jsx)(f.a,{color:"inherit",onClick:i,children:"Disagree"}),Object(m.jsx)(f.a,{variant:"contained",onClick:i,children:"Agree"})]})]})]})}var ae=a(2778),ne={display:"flex",alignItems:"center",justifyContent:"center"},ie=Object(n.a)(s.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function ce(){return Object(m.jsxs)(ie,{title:"Components: Dialog | Minimal-UI",children:[Object(m.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(c.a,{maxWidth:"lg",children:Object(m.jsx)(l.a,{heading:"Dialog",links:[{name:"Components",href:o.d.components},{name:"Dialog"}],moreLink:"https://next.material-ui.com/components/dialogs"})})}),Object(m.jsx)(c.a,{maxWidth:"lg",children:Object(m.jsxs)(r.a,{container:!0,spacing:3,children:[Object(m.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(m.jsx)(ae.a,{title:"Simple",sx:ne,children:Object(m.jsx)(H,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(m.jsx)(ae.a,{title:"Alerts",sx:ne,children:Object(m.jsx)(y,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(m.jsx)(ae.a,{title:"Transitions",sx:ne,children:Object(m.jsx)(te,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(m.jsx)(ae.a,{title:"Form",sx:ne,children:Object(m.jsx)(g,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(m.jsx)(ae.a,{title:"Full Screen",sx:ne,children:Object(m.jsx)($,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(m.jsx)(ae.a,{title:"Max Width Dialog",sx:ne,children:Object(m.jsx)(U,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(m.jsx)(ae.a,{title:"Scrolling Content Dialogs",sx:ne,children:Object(m.jsx)(k,{})})})]})})]})}}}]);
//# sourceMappingURL=48.b1baeb3c.chunk.js.map