(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[89],{2774:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(3),r=a(30),o=a(31),i=a(2647),c=a(377),s=a(610),l=a(2741),d=a(38),u=a(0),b=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,a=e.action,j=e.heading,p=e.moreLink,h=void 0===p?[]:p,m=e.sx,v=Object(r.a)(e,b);return Object(u.jsxs)(i.a,{sx:m,mb:5,spacing:2,children:[Object(u.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(u.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:j}),Object(u.jsx)(d.c,Object(n.a)({links:t},v))]}),a&&Object(u.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(o.isString)(h)?Object(u.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(u.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2778:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(3),r=a(610),o=a(2767),i=a(2792),c=a(377),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,r=e.children;return Object(s.jsxs)(o.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(c.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},2792:function(e,t,a){"use strict";var n=a(5),r=a(8),o=a(2),i=a(1),c=(a(12),a(11)),s=a(2701),l=a(610),d=a(14),u=a(7),b=a(2641),j=a(2702);function p(e){return Object(b.a)("MuiCardHeader",e)}var h=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(0),v=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(n.a)(a,"& .".concat(h.title),t.title),Object(n.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),O=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,u=a.className,b=a.component,j=void 0===b?"div":b,h=a.disableTypography,g=void 0!==h&&h,y=a.subheader,k=a.subheaderTypographyProps,C=a.title,P=a.titleTypographyProps,T=Object(r.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=Object(o.a)({},a,{component:j,disableTypography:g}),H=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(w),M=C;null==M||M.type===l.a||g||(M=Object(m.jsx)(l.a,Object(o.a)({variant:i?"body2":"h5",className:H.title,component:"span",display:"block"},P,{children:M})));var R=y;return null==R||R.type===l.a||g||(R=Object(m.jsx)(l.a,Object(o.a)({variant:i?"body2":"body1",className:H.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:R}))),Object(m.jsxs)(v,Object(o.a)({className:Object(c.a)(H.root,u),as:j,ref:t,styleProps:w},T,{children:[i&&Object(m.jsx)(x,{className:H.avatar,styleProps:w,children:i}),Object(m.jsxs)(f,{className:H.content,styleProps:w,children:[M,R]}),n&&Object(m.jsx)(O,{className:H.action,styleProps:w,children:n})]}))}));t.a=g},4419:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(17),r=a(1),o=a(7),i=a(377),c=a(2756),s=a(2647),l=a(298),d=a(2655),u=a(610),b=a(22),j=a(380),p=a(2774),h=a(2778),m=a(0),v=Object(o.a)(j.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),x={display:"flex",alignItems:"center",justifyContent:"center"};function O(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],o=t[1],j=Object(r.useState)(null),O=Object(n.a)(j,2),f=O[0],g=O[1],y=function(){g(null)};return Object(m.jsxs)(v,{title:"Components: Popover | Minimal-UI",children:[Object(m.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(c.a,{maxWidth:"lg",children:Object(m.jsx)(p.a,{heading:"Popover",links:[{name:"Components",href:b.d.components},{name:"Popover"}],moreLink:"https://next.material-ui.com/components/popover"})})}),Object(m.jsx)(c.a,{maxWidth:"lg",children:Object(m.jsxs)(s.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(m.jsxs)(h.a,{title:"Click",sx:x,children:[Object(m.jsx)(l.a,{variant:"contained",onClick:function(e){o(e.currentTarget)},children:"Open Popover"}),Object(m.jsx)(d.a,{open:Boolean(a),anchorEl:a,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(m.jsxs)(i.a,{sx:{p:2,maxWidth:280},children:[Object(m.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),Object(m.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),Object(m.jsxs)(h.a,{title:"Hover",sx:x,children:[Object(m.jsx)(u.a,{"aria-owns":f?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){g(e.currentTarget)},onMouseLeave:y,children:"Hover with a Popover."}),Object(m.jsx)(d.a,{id:"mouse-over-popover",open:Boolean(f),anchorEl:f,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:y,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:Object(m.jsxs)(i.a,{sx:{p:2,maxWidth:280},children:[Object(m.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),Object(m.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})})]})}}}]);
//# sourceMappingURL=89.da22d5f4.chunk.js.map