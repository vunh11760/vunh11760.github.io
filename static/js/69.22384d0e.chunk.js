(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[69],{2774:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(3),a=r(30),o=r(31),c=r(2647),i=r(377),s=r(610),l=r(2741),j=r(38),b=r(0),d=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,r=e.action,u=e.heading,p=e.moreLink,O=void 0===p?[]:p,h=e.sx,x=Object(a.a)(e,d);return Object(b.jsxs)(c.a,{sx:h,mb:5,spacing:2,children:[Object(b.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(b.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(j.c,Object(n.a)({links:t},x))]}),r&&Object(b.jsx)(i.a,{sx:{flexShrink:0},children:r})]}),Object(o.isString)(O)?Object(b.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2777:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return j}));var n=r(31),a=r(2806),o=r.n(a);function c(e){return o()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function i(e){return o()(e/100).format("0.0%")}function s(e){return o()(e).format()}function l(e){return Object(n.replace)(o()(e).format("0.00a"),".00","")}function j(e){return o()(e).format("0.0 b")}},2792:function(e,t,r){"use strict";var n=r(5),a=r(8),o=r(2),c=r(1),i=(r(12),r(11)),s=r(2701),l=r(610),j=r(14),b=r(7),d=r(2641),u=r(2702);function p(e){return Object(d.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=r(0),x=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var r;return Object(o.a)((r={},Object(n.a)(r,"& .".concat(O.title),t.title),Object(n.a)(r,"& .".concat(O.subheader),t.subheader),r),t.root)}})({display:"flex",alignItems:"center",padding:16}),m=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),g=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),v=c.forwardRef((function(e,t){var r=Object(j.a)({props:e,name:"MuiCardHeader"}),n=r.action,c=r.avatar,b=r.className,d=r.component,u=void 0===d?"div":d,O=r.disableTypography,v=void 0!==O&&O,y=r.subheader,w=r.subheaderTypographyProps,R=r.title,C=r.titleTypographyProps,k=Object(a.a)(r,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),P=Object(o.a)({},r,{component:u,disableTypography:v}),I=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(P),D=R;null==D||D.type===l.a||v||(D=Object(h.jsx)(l.a,Object(o.a)({variant:c?"body2":"h5",className:I.title,component:"span",display:"block"},C,{children:D})));var S=y;return null==S||S.type===l.a||v||(S=Object(h.jsx)(l.a,Object(o.a)({variant:c?"body2":"body1",className:I.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:S}))),Object(h.jsxs)(x,Object(o.a)({className:Object(i.a)(I.root,b),as:u,ref:t,styleProps:P},k,{children:[c&&Object(h.jsx)(m,{className:I.avatar,styleProps:P,children:c}),Object(h.jsxs)(f,{className:I.content,styleProps:P,children:[D,S]}),n&&Object(h.jsx)(g,{className:I.action,styleProps:P,children:n})]}))}));t.a=v},2870:function(e,t,r){"use strict";r.d(t,"b",(function(){return z})),r.d(t,"c",(function(){return H})),r.d(t,"a",(function(){return G}));var n=r(3),a=r(30),o=r(5),c=r(31),i=r(27),s=r(2815),l=r(389),j=r.n(l),b=r(194),d=r.n(b),u=r(2730),p=r(2717),O=r(7),h=r(25),x=r(2744),m=r(377),g=r(610),f=r(2741),v=r(2747),y=r(374),w=r(2750),R=r(2751),C=r(4355),k=r(2647),P=r(298),I=r(2777),D=r(38),S=r(158),U=r(382),A=r(0),M=["error","showPreview","files","onRemove","onRemoveAll","sx"],N=Object(O.a)("div")((function(e){var t=e.theme;return Object(o.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function z(e){var t=e.error,r=e.showPreview,o=void 0!==r&&r,l=e.files,b=e.onRemove,O=e.onRemoveAll,z=e.sx,T=Object(a.a)(e,M),L=l.length>0,H=Object(s.a)(Object(n.a)({},T)),B=H.getRootProps,F=H.getInputProps,W=H.isDragActive,J=H.isDragReject,$=H.fileRejections,_=function(){return Object(A.jsx)(x.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(h.a)(e.palette.error.main,.08)}},children:$.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(A.jsxs)(m.a,{sx:{my:1},children:[Object(A.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(I.b)(a)]}),r.map((function(e){return Object(A.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(A.jsxs)(m.a,{sx:Object(n.a)({width:"100%"},z),children:[Object(A.jsxs)(N,Object(n.a)(Object(n.a)({},B()),{},{sx:Object(n.a)(Object(n.a)({},W&&{opacity:.72}),(J||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(A.jsx)("input",Object(n.a)({},F())),Object(A.jsx)(U.l,{sx:{width:220}}),Object(A.jsxs)(m.a,{sx:{p:3,ml:{md:2}},children:[Object(A.jsx)(g.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(A.jsxs)(g.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(A.jsx)(f.a,{underline:"always",children:"browse"}),"\xa0thorough your machine"]})]})]})),$.length>0&&Object(A.jsx)(_,{}),Object(A.jsx)(v.a,{disablePadding:!0,sx:Object(n.a)({},L&&{my:3}),children:Object(A.jsx)(u.a,{children:l.map((function(e){var t=e.name,r=e.size,a=e.preview,s=Object(c.isString)(e)?e:t;return o?Object(A.jsxs)(y.b,Object(n.a)(Object(n.a)({component:p.a.div},S.w),{},{sx:{p:0,m:.5,width:80,height:80,borderRadius:1.5,overflow:"hidden",position:"relative",display:"inline-flex"},children:[Object(A.jsx)(x.a,{variant:"outlined",component:"img",src:Object(c.isString)(e)?e:a,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute"}}),Object(A.jsx)(m.a,{sx:{top:6,right:6,position:"absolute"},children:Object(A.jsx)(D.k,{size:"small",onClick:function(){return b(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(h.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(h.a)(e.palette.grey[900],.48)}}},children:Object(A.jsx)(i.Icon,{icon:d.a})})})]}),s):Object(A.jsxs)(y.b,Object(n.a)(Object(n.a)({component:p.a.div},S.w),{},{sx:{my:1,py:.75,px:2,borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.divider)},bgcolor:"background.paper"},children:[Object(A.jsx)(w.a,{children:Object(A.jsx)(i.Icon,{icon:j.a,width:28,height:28})}),Object(A.jsx)(R.a,{primary:Object(c.isString)(e)?e:t,secondary:Object(c.isString)(e)?"":Object(I.b)(r),primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),Object(A.jsx)(C.a,{children:Object(A.jsx)(D.k,{edge:"end",size:"small",onClick:function(){return b(e)},children:Object(A.jsx)(i.Icon,{icon:d.a})})})]}),s)}))})}),L&&Object(A.jsxs)(k.a,{direction:"row",justifyContent:"flex-end",children:[Object(A.jsx)(P.a,{onClick:O,sx:{mr:1.5},children:"Remove all"}),Object(A.jsx)(P.a,{variant:"contained",children:"Upload files"})]})]})}var T=["error","file","sx"],L=Object(O.a)("div")((function(e){var t=e.theme;return Object(o.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function H(e){var t=e.error,r=e.file,o=e.sx,i=Object(a.a)(e,T),l=Object(s.a)(Object(n.a)({multiple:!1},i)),j=l.getRootProps,b=l.getInputProps,d=l.isDragActive,u=l.isDragReject,p=l.fileRejections,O=function(){return Object(A.jsx)(x.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(h.a)(e.palette.error.main,.08)}},children:p.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(A.jsxs)(m.a,{sx:{my:1},children:[Object(A.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(I.b)(a)]}),r.map((function(e){return Object(A.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(A.jsxs)(m.a,{sx:Object(n.a)({width:"100%"},o),children:[Object(A.jsxs)(L,Object(n.a)(Object(n.a)({},j()),{},{sx:Object(n.a)(Object(n.a)(Object(n.a)({},d&&{opacity:.72}),(u||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),r&&{padding:"12% 0"}),children:[Object(A.jsx)("input",Object(n.a)({},b())),Object(A.jsx)(U.l,{sx:{width:220}}),Object(A.jsxs)(m.a,{sx:{p:3,ml:{md:2}},children:[Object(A.jsx)(g.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(A.jsxs)(g.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(A.jsx)(g.a,{variant:"body2",component:"span",sx:{color:"primary.main"},children:"browse"}),"\xa0thorough your machine"]})]}),r&&Object(A.jsx)(m.a,{component:"img",alt:"file preview",src:Object(c.isString)(r)?r:r.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),p.length>0&&Object(A.jsx)(O,{})]})}var B=r(3097),F=r.n(B),W=["error","file","caption","sx"],J=Object(O.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),$=Object(O.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),_=Object(O.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function G(e){var t=e.error,r=e.file,o=e.caption,l=e.sx,j=Object(a.a)(e,W),b=Object(s.a)(Object(n.a)({multiple:!1},j)),d=b.getRootProps,u=b.getInputProps,p=b.isDragActive,O=b.isDragReject,f=b.fileRejections,v=function(){return Object(A.jsx)(x.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(h.a)(e.palette.error.main,.08)}},children:f.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(A.jsxs)(m.a,{sx:{my:1},children:[Object(A.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(I.b)(a)]}),r.map((function(e){return Object(A.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(J,{sx:l,children:Object(A.jsxs)($,Object(n.a)(Object(n.a)({},d()),{},{sx:Object(n.a)(Object(n.a)({},p&&{opacity:.72}),(O||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(A.jsx)("input",Object(n.a)({},u())),r&&Object(A.jsx)(m.a,{component:"img",alt:"avatar",src:Object(c.isString)(r)?r:r.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(A.jsxs)(_,{className:"placeholder",sx:Object(n.a)({},r&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(A.jsx)(m.a,{component:i.Icon,icon:F.a,sx:{width:24,height:24,mb:1}}),Object(A.jsx)(g.a,{variant:"caption",children:r?"Update photo":"Upload photo"})]})]}))}),o,f.length>0&&Object(A.jsx)(v,{})]})}},2880:function(e,t,r){"use strict";var n=r(2),a=r(8),o=r(1),c=(r(12),r(11)),i=r(2701),s=r(7),l=r(14),j=r(2641),b=r(2702);function d(e){return Object(j.a)("MuiCardContent",e)}Object(b.a)("MuiCardContent",["root"]);var u=r(0),p=Object(s.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),O=o.forwardRef((function(e,t){var r=Object(l.a)({props:e,name:"MuiCardContent"}),o=r.className,s=r.component,j=void 0===s?"div":s,b=Object(a.a)(r,["className","component"]),O=Object(n.a)({},r,{component:j}),h=function(e){var t=e.classes;return Object(i.a)({root:["root"]},d,t)}(O);return Object(u.jsx)(p,Object(n.a)({as:j,className:Object(c.a)(h.root,o),styleProps:O,ref:t},b))}));t.a=O},4432:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return w}));var n=r(3),a=r(17),o=r(1),c=r(7),i=r(377),s=r(2756),l=r(2647),j=r(2767),b=r(2792),d=r(2766),u=r(2740),p=r(2880),O=r(610),h=r(22),x=r(2777),m=r(380),g=r(2774),f=r(2870),v=r(0),y=Object(c.a)(m.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function w(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),r=t[0],c=t[1],m=Object(o.useState)([]),w=Object(a.a)(m,2),R=w[0],C=w[1],k=Object(o.useState)(null),P=Object(a.a)(k,2),I=P[0],D=P[1],S=Object(o.useState)(""),U=Object(a.a)(S,2),A=U[0],M=U[1],N=Object(o.useCallback)((function(e){var t=e[0];t&&D(Object(n.a)(Object(n.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[]),z=Object(o.useCallback)((function(e){var t=e[0];t&&M(Object(n.a)(Object(n.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[]),T=Object(o.useCallback)((function(e){C(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[C]);return Object(v.jsxs)(y,{title:"Components: Upload | Minimal-UI",children:[Object(v.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(s.a,{maxWidth:"lg",children:Object(v.jsx)(g.a,{heading:"Upload",links:[{name:"Components",href:h.d.components},{name:"Upload"}],moreLink:"https://react-dropzone.js.org/#section-basic-example"})})}),Object(v.jsx)(s.a,{maxWidth:"lg",children:Object(v.jsxs)(l.a,{spacing:5,children:[Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{title:"Upload Multi File",action:Object(v.jsx)(d.a,{control:Object(v.jsx)(u.a,{checked:r,onChange:function(e){return c(e.target.checked)}}),label:"Show Preview"})}),Object(v.jsx)(p.a,{children:Object(v.jsx)(f.b,{showPreview:r,files:R,onDrop:T,onRemove:function(e){var t=R.filter((function(t){return t!==e}));C(t)},onRemoveAll:function(){C([])}})})]}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{title:"Upload Single File"}),Object(v.jsx)(p.a,{children:Object(v.jsx)(f.c,{file:I,onDrop:N})})]}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{title:"Upload Avatar"}),Object(v.jsx)(p.a,{children:Object(v.jsx)(f.a,{accept:"image/*",file:A,onDrop:z,caption:Object(v.jsxs)(O.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(v.jsx)("br",{})," max size of ",Object(x.b)(3145728)]})})})]})]})})]})}}}]);
//# sourceMappingURL=69.22384d0e.chunk.js.map