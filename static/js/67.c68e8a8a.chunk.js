(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[67],{2774:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(3),i=n(30),a=n(31),c=n(2647),o=n(377),s=n(610),l=n(2741),j=n(38),d=n(0),b=["links","action","heading","moreLink","sx"];function h(e){var t=e.links,n=e.action,h=e.heading,u=e.moreLink,x=void 0===u?[]:u,O=e.sx,p=Object(i.a)(e,b);return Object(d.jsxs)(c.a,{sx:O,mb:5,spacing:2,children:[Object(d.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:h}),Object(d.jsx)(j.c,Object(r.a)({links:t},p))]}),n&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(a.isString)(x)?Object(d.jsx)(l.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2777:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j}));var r=n(31),i=n(2806),a=n.n(i);function c(e){return a()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function o(e){return a()(e/100).format("0.0%")}function s(e){return a()(e).format()}function l(e){return Object(r.replace)(a()(e).format("0.00a"),".00","")}function j(e){return a()(e).format("0.0 b")}},2860:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),i=n(30),a=n(2744),c=n(610),o=n(0),s=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(i.a)(e,s);return Object(o.jsxs)(a.a,Object(r.a)(Object(r.a)({},l),{},{children:[Object(o.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsxs)(c.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(o.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},2978:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(30),i=n(3),a=n(1),c=n(3160),o=n(2700),s=n(25),l=n(610),j=n(0),d=["images","photoIndex","setPhotoIndex","isOpen","onClose"],b=Object(o.a)((function(e){var t="rtl"===e.direction,n=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(s.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return{root:{backdropFilter:"blur(8px)",backgroundColor:Object(s.a)(e.palette.grey[900],.88),"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-child":{flexGrow:1},"& li:not(:first-child)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":n("maximize-outline"),"&.ril__zoomOutButton":n("minimize-outline"),"&.ril__closeButton":n("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(i.a)({left:e.spacing(2),right:"auto"},n(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(i.a)({right:e.spacing(2),left:"auto"},n(t?"arrow-ios-back":"arrow-ios-forward"))}}}}));function h(e){var t=e.images,n=e.photoIndex,o=e.setPhotoIndex,s=e.isOpen,h=e.onClose,u=Object(r.a)(e,d),x=b();Object(a.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var O=[Object(j.jsx)(l.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(j.jsx)(j.Fragment,{children:s&&Object(j.jsx)(c.a,Object(i.a)({mainSrc:t[n],nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onCloseRequest:h,onMovePrevRequest:function(){return o((n+t.length-1)%t.length)},onMoveNextRequest:function(){return o((n+1)%t.length)},toolbarButtons:O,reactModalStyle:{overlay:{zIndex:9999}},wrapperClassName:x.root},u))})}},3339:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(17),i=n(30),a=n(3),c=(n(3549),n(3573)),o=n(27),s=n(1),l=n(3550),j=n.n(l),d=n(7),b=n(25),h=n(54),u=n(2710),x=n(2739),O=n(0),p=["disabled","value","setValue","alignRight"],m=Object(d.a)("div")({position:"relative"}),f=Object(d.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadiusMd,"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(a.a)(Object(a.a)({},t.typography.subtitle2),{},{backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:t.palette.text.primary,backgroundColor:Object(b.a)(t.palette.background.paper,.8)}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function g(e){var t,n=e.disabled,l=e.value,d=e.setValue,b=e.alignRight,g=void 0!==b&&b,v=Object(i.a)(e,p),y=Object(h.a)(),w=Object(s.useState)(!1),k=Object(r.a)(w,2),I=k[0],C=k[1];I&&(t=Object(O.jsx)(c.a,{color:y.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return d(l+e.native)}}));return Object(O.jsx)(u.a,{onClickAway:function(){C(!1)},children:Object(O.jsxs)(m,Object(a.a)(Object(a.a)({},v),{},{children:[Object(O.jsx)(f,{sx:Object(a.a)({},g&&{right:-2,left:"auto !important"}),children:t}),Object(O.jsx)(x.a,{disabled:n,size:"small",onClick:function(e){e.preventDefault(),C(!I)},children:Object(O.jsx)(o.Icon,{icon:j.a,width:20,height:20})})]}))})}},4444:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return nt}));var r=n(17),i=n(5),a=n(27),c=n(2712),o=n(1),s=n(2927),l=n.n(s),j=n(410),d=n.n(j),b=n(4237),h=n.n(b),u=n(3240),x=n.n(u),O=n(7),p=n(2756),m=n(2767),f=n(4456),g=n(4488),v=n(377),y=n(299),w=n(394),k=n(22),I=n(53),C=n(380),S=n(2774),F=n(2735),R=n(2647),_=n(3241),z=n.n(_),L=n(2996),B=n.n(L),P=n(4238),W=n.n(P),A=n(2792),T=n(610),M=n(2741),N=n(0),U=Object(O.a)(a.Icon)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function D(e){var t=e.profile,n=t.quote,r=t.country,i=t.email,a=t.role,c=t.company,o=t.school;return Object(N.jsxs)(m.a,{children:[Object(N.jsx)(A.a,{title:"About"}),Object(N.jsxs)(R.a,{spacing:2,sx:{p:3},children:[Object(N.jsx)(T.a,{variant:"body2",children:n}),Object(N.jsxs)(R.a,{direction:"row",children:[Object(N.jsx)(U,{icon:z.a}),Object(N.jsxs)(T.a,{variant:"body2",children:["Live at \xa0",Object(N.jsx)(M.a,{component:"span",variant:"subtitle2",color:"text.primary",children:r})]})]}),Object(N.jsxs)(R.a,{direction:"row",children:[Object(N.jsx)(U,{icon:B.a}),Object(N.jsx)(T.a,{variant:"body2",children:i})]}),Object(N.jsxs)(R.a,{direction:"row",children:[Object(N.jsx)(U,{icon:W.a}),Object(N.jsxs)(T.a,{variant:"body2",children:[a," at \xa0",Object(N.jsx)(M.a,{component:"span",variant:"subtitle2",color:"text.primary",children:c})]})]}),Object(N.jsxs)(R.a,{direction:"row",children:[Object(N.jsx)(U,{icon:W.a}),Object(N.jsxs)(T.a,{variant:"body2",children:["Studied at \xa0",Object(N.jsx)(M.a,{component:"span",variant:"subtitle2",color:"text.primary",children:o})]})]})]})]})}var G=n(34),q=n(3242),E=n.n(q),Q=n(2832),V=n.n(Q),J=n(2836),$=n.n(J),H=n(4239),K=n.n(H),X=n(2983),Y=n.n(X),Z=n(2739),ee=n(2766),te=n(3257),ne=n(2733),re=n(2744),ie=n(2762),ae=n(2758),ce=n(381),oe=n(2777),se=n(242),le=n(3339),je=n(38);function de(e){var t=e.post,n=Object(I.a)().user,i=Object(o.useRef)(null),c=Object(o.useRef)(null),s=Object(o.useState)(t.isLiked),j=Object(r.a)(s,2),d=j[0],b=j[1],h=Object(o.useState)(t.personLikes.length),u=Object(r.a)(h,2),x=u[0],O=u[1],p=Object(o.useState)(""),f=Object(r.a)(p,2),g=f[0],y=f[1],w=t.comments.length>0;return Object(N.jsxs)(m.a,{children:[Object(N.jsx)(A.a,{disableTypography:!0,avatar:Object(N.jsx)(se.a,{}),title:Object(N.jsx)(M.a,{to:"#",variant:"subtitle2",color:"text.primary",component:G.b,children:n.displayName}),subheader:Object(N.jsx)(T.a,{variant:"caption",sx:{display:"block",color:"text.secondary"},children:Object(ce.a)(t.createdAt)}),action:Object(N.jsx)(Z.a,{children:Object(N.jsx)(a.Icon,{icon:$.a,width:20,height:20})})}),Object(N.jsxs)(R.a,{spacing:3,sx:{p:3},children:[Object(N.jsx)(T.a,{variant:"body1",children:t.message}),Object(N.jsx)(v.a,{sx:{position:"relative",pt:"calc(100% / 16 * 9)"},children:Object(N.jsx)(v.a,{component:"img",alt:"post media",src:t.media,sx:{top:0,width:1,height:1,borderRadius:1,objectFit:"cover",position:"absolute"}})}),Object(N.jsxs)(R.a,{direction:"row",alignItems:"center",children:[Object(N.jsx)(ee.a,{control:Object(N.jsx)(je.f,{size:"small",color:"error",checked:d,icon:Object(N.jsx)(a.Icon,{icon:l.a,width:20,height:20}),checkedIcon:Object(N.jsx)(a.Icon,{icon:l.a,width:20,height:20}),onChange:d?function(){b(!1),O((function(e){return e-1}))}:function(){b(!0),O((function(e){return e+1}))}}),label:Object(oe.e)(x),sx:{minWidth:72,mr:0}}),Object(N.jsx)(te.a,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32}},children:t.personLikes.map((function(e){return Object(N.jsx)(ne.a,{alt:e.name,src:e.avatarUrl},e.name)}))}),Object(N.jsx)(v.a,{sx:{flexGrow:1}}),Object(N.jsx)(Z.a,{onClick:function(){i.current.focus()},children:Object(N.jsx)(a.Icon,{icon:K.a,width:20,height:20})}),Object(N.jsx)(Z.a,{children:Object(N.jsx)(a.Icon,{icon:V.a,width:20,height:20})})]}),w&&Object(N.jsx)(R.a,{spacing:1.5,children:t.comments.map((function(e){return Object(N.jsxs)(R.a,{direction:"row",spacing:2,children:[Object(N.jsx)(ne.a,{alt:e.author.name,src:e.author.avatarUrl}),Object(N.jsxs)(re.a,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[Object(N.jsxs)(R.a,{direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:.5},children:[Object(N.jsx)(T.a,{variant:"subtitle2",children:e.author.name}),Object(N.jsx)(T.a,{variant:"caption",sx:{color:"text.disabled"},children:Object(ce.a)(e.createdAt)})]}),Object(N.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:e.message})]})]},e.id)}))}),Object(N.jsxs)(R.a,{direction:"row",alignItems:"center",children:[Object(N.jsx)(se.a,{}),Object(N.jsx)(ie.a,{fullWidth:!0,size:"small",value:g,inputRef:i,placeholder:"Write a comment\u2026",onChange:function(e){y(e.target.value)},InputProps:{endAdornment:Object(N.jsxs)(ae.a,{position:"end",children:[Object(N.jsx)(Z.a,{size:"small",onClick:function(){c.current.click()},children:Object(N.jsx)(a.Icon,{icon:Y.a,width:24,height:24})}),Object(N.jsx)(le.a,{alignRight:!0,value:g,setValue:y})]})},sx:{ml:2,mr:1,"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),Object(N.jsx)(Z.a,{children:Object(N.jsx)(a.Icon,{icon:E.a,width:24,height:24})}),Object(N.jsx)("input",{type:"file",ref:c,style:{display:"none"}})]})]})]})}var be=n(2984),he=n.n(be),ue=n(298);function xe(){var e=Object(o.useRef)(null),t=function(){e.current.click()};return Object(N.jsxs)(m.a,{sx:{p:3},children:[Object(N.jsx)(ie.a,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),Object(N.jsxs)(v.a,{sx:{mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(N.jsxs)(v.a,{sx:{display:"flex"},children:[Object(N.jsx)(Z.a,{size:"small",onClick:t,sx:{mr:1},children:Object(N.jsx)(a.Icon,{icon:Y.a,width:24,height:24})}),Object(N.jsx)(Z.a,{size:"small",onClick:t,children:Object(N.jsx)(a.Icon,{icon:he.a,width:24,height:24})})]}),Object(N.jsx)(ue.a,{variant:"contained",children:"Post"})]}),Object(N.jsx)("input",{ref:e,type:"file",style:{display:"none"}})]})}var Oe=n(2656);function pe(e){var t=e.profile,n=t.follower,r=t.following;return Object(N.jsx)(m.a,{sx:{py:3},children:Object(N.jsxs)(R.a,{direction:"row",divider:Object(N.jsx)(Oe.a,{orientation:"vertical",flexItem:!0}),children:[Object(N.jsxs)(R.a,{width:1,textAlign:"center",children:[Object(N.jsx)(T.a,{variant:"h4",children:Object(oe.c)(n)}),Object(N.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:"Follower"})]}),Object(N.jsxs)(R.a,{width:1,textAlign:"center",children:[Object(N.jsx)(T.a,{variant:"h4",children:Object(oe.c)(r)}),Object(N.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:"Following"})]})]})})}var me=n(232),fe=n.n(me),ge=n(233),ve=n.n(ge),ye=n(390),we=n.n(ye),ke=n(2834),Ie=n.n(ke),Ce=Object(O.a)(a.Icon)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function Se(e){var t=e.profile,n=t.facebookLink,r=t.instagramLink,i=t.linkedinLink,a=t.twitterLink,c=[{name:"Linkedin",icon:Object(N.jsx)(Ce,{icon:we.a,color:"#006097"}),href:i},{name:"Twitter",icon:Object(N.jsx)(Ce,{icon:fe.a,color:"#1C9CEA"}),href:a},{name:"Instagram",icon:Object(N.jsx)(Ce,{icon:Ie.a,color:"#D7336D"}),href:r},{name:"Facebook",icon:Object(N.jsx)(Ce,{icon:ve.a,color:"#1877F2"}),href:n}];return Object(N.jsxs)(m.a,{children:[Object(N.jsx)(A.a,{title:"Social"}),Object(N.jsx)(R.a,{spacing:2,sx:{p:3},children:c.map((function(e){return Object(N.jsxs)(R.a,{direction:"row",alignItems:"center",children:[e.icon,Object(N.jsx)(M.a,{component:"span",variant:"body2",color:"text.primary",noWrap:!0,children:e.href})]},e.name)}))})]})}function Fe(e){var t=e.myProfile,n=e.posts;return Object(N.jsxs)(F.a,{container:!0,spacing:3,children:[Object(N.jsx)(F.a,{item:!0,xs:12,md:4,children:Object(N.jsxs)(R.a,{spacing:3,children:[Object(N.jsx)(pe,{profile:t}),Object(N.jsx)(D,{profile:t}),Object(N.jsx)(Se,{profile:t})]})}),Object(N.jsx)(F.a,{item:!0,xs:12,md:8,children:Object(N.jsxs)(R.a,{spacing:3,children:[Object(N.jsx)(xe,{}),n.map((function(e){return Object(N.jsx)(de,{post:e},e.id)}))]})})]})}var Re=n(25),_e=Object(O.a)("div")((function(e){var t=e.theme;return{"&:before":{top:0,zIndex:9,width:"100%",content:"''",height:"100%",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",backgroundColor:Object(Re.a)(t.palette.primary.darker,.72)}}})),ze=Object(O.a)("div")((function(e){var t=e.theme;return Object(i.a)({left:0,right:0,zIndex:99,position:"absolute",marginTop:t.spacing(5)},t.breakpoints.up("md"),{right:"auto",display:"flex",alignItems:"center",left:t.spacing(3),bottom:t.spacing(3)})})),Le=Object(O.a)("img")({zIndex:8,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function Be(e){var t=e.myProfile,n=Object(I.a)().user,r=t.position,i=t.cover;return Object(N.jsxs)(_e,{children:[Object(N.jsxs)(ze,{children:[Object(N.jsx)(se.a,{sx:{mx:"auto",borderWidth:2,borderStyle:"solid",borderColor:"common.white",width:{xs:80,md:128},height:{xs:80,md:128}}}),Object(N.jsxs)(v.a,{sx:{ml:{md:3},mt:{xs:1,md:0},color:"common.white",textAlign:{xs:"center",md:"left"}},children:[Object(N.jsx)(T.a,{variant:"h4",children:n.displayName}),Object(N.jsx)(T.a,{sx:{opacity:.72},children:r})]})]}),Object(N.jsx)(Le,{alt:"profile cover",src:i})]})}var Pe=n(3),We=n(31),Ae=n(303),Te=n.n(Ae),Me=n(2736),Ne=n(2761),Ue=n(2860),De=[{name:"Facebook",icon:Object(N.jsx)(a.Icon,{icon:ve.a,width:20,height:20,color:"#1877F2"})},{name:"Instagram",icon:Object(N.jsx)(a.Icon,{icon:Ie.a,width:20,height:20,color:"#D7336D"})},{name:"Linkedin",icon:Object(N.jsx)(a.Icon,{icon:we.a,width:20,height:20,color:"#006097"})},{name:"Twitter",icon:Object(N.jsx)(a.Icon,{icon:fe.a,width:20,height:20,color:"#1C9CEA"})}],Ge=Object(O.a)(Me.a)((function(e){var t=e.theme;return{width:240,marginBottom:t.spacing(5),transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function qe(e){var t=e.friend,n=t.name,r=t.role,i=t.avatarUrl;return Object(N.jsxs)(m.a,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[Object(N.jsx)(ne.a,{alt:n,src:i,sx:{width:64,height:64,mb:3}}),Object(N.jsx)(M.a,{to:"#",variant:"subtitle1",color:"text.primary",component:G.b,children:n}),Object(N.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},children:r}),Object(N.jsx)(v.a,{sx:{display:"flex",mt:1},children:De.map((function(e){return Object(N.jsx)(Ne.a,{title:e.name,children:Object(N.jsx)(Z.a,{children:e.icon})},e.name)}))}),Object(N.jsx)(Z.a,{sx:{top:8,right:8,position:"absolute"},children:Object(N.jsx)(a.Icon,{icon:$.a,width:20,height:20})})]})}function Ee(e){var t=e.friends,n=e.findFriends,r=e.onFindFriends,i=e.sx,c=function(e,t){var n=e;return t&&(n=Object(We.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))),n}(t,n),o=0===c.length;return Object(N.jsxs)(v.a,{sx:Object(Pe.a)({mt:5},i),children:[Object(N.jsx)(T.a,{variant:"h4",sx:{mb:3},children:"Friends"}),Object(N.jsx)(Ge,{value:n,onChange:r,placeholder:"Find friends...",startAdornment:Object(N.jsx)(ae.a,{position:"start",children:Object(N.jsx)(v.a,{component:a.Icon,icon:Te.a,sx:{color:"text.disabled"}})})}),Object(N.jsx)(F.a,{container:!0,spacing:3,children:c.map((function(e){return Object(N.jsx)(F.a,{item:!0,xs:12,md:4,children:Object(N.jsx)(qe,{friend:e})},e.id)}))}),o&&Object(N.jsx)(v.a,{sx:{mt:5},children:Object(N.jsx)(Ue.a,{searchQuery:n})})]})}var Qe=n(2880),Ve=n(2978),Je=Object(O.a)(Qe.a)((function(e){var t=e.theme;return{bottom:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",justifyContent:"space-between",color:t.palette.common.white,backgroundColor:Object(Re.a)(t.palette.grey[900],.72),borderBottomLeftRadius:t.shape.borderRadiusMd,borderBottomRightRadius:t.shape.borderRadiusMd}})),$e=Object(O.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function He(e){var t=e.image,n=e.onOpenLightbox,r=t.imageUrl,i=t.title,c=t.postAt;return Object(N.jsxs)(m.a,{sx:{pt:"100%",cursor:"pointer"},children:[Object(N.jsx)($e,{alt:"gallery image",src:r,onClick:function(){return n(r)}}),Object(N.jsxs)(Je,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(T.a,{variant:"subtitle1",children:i}),Object(N.jsx)(T.a,{variant:"body2",sx:{opacity:.72},children:Object(ce.a)(c)})]}),Object(N.jsx)(Z.a,{color:"inherit",children:Object(N.jsx)(a.Icon,{icon:$.a,width:20,height:20})})]})]})}function Ke(e){var t=e.gallery,n=Object(o.useState)(!1),i=Object(r.a)(n,2),a=i[0],c=i[1],s=Object(o.useState)(null),l=Object(r.a)(s,2),j=l[0],d=l[1],b=t.map((function(e){return e.imageUrl})),h=function(e){var t=Object(We.findIndex)(b,(function(t){return t===e}));c(!0),d(t)};return Object(N.jsxs)(v.a,{sx:{mt:5},children:[Object(N.jsx)(T.a,{variant:"h4",sx:{mb:3},children:"Gallery"}),Object(N.jsxs)(m.a,{sx:{p:3},children:[Object(N.jsx)(F.a,{container:!0,spacing:3,children:t.map((function(e){return Object(N.jsx)(F.a,{item:!0,xs:12,sm:6,md:4,children:Object(N.jsx)(He,{image:e,onOpenLightbox:h})},e.id)}))}),Object(N.jsx)(Ve.a,{images:b,photoIndex:j,setPhotoIndex:d,isOpen:a,onClose:function(){return c(!1)}})]})]})}var Xe=n(2858),Ye=n.n(Xe);function Ze(e){var t=e.follower,n=e.onToggle,r=t.name,i=t.country,c=t.avatarUrl,o=t.isFollowed;return Object(N.jsxs)(m.a,{sx:{display:"flex",alignItems:"center",p:3},children:[Object(N.jsx)(ne.a,{alt:r,src:c,sx:{width:48,height:48}}),Object(N.jsxs)(v.a,{sx:{flexGrow:1,minWidth:0,pl:2,pr:1},children:[Object(N.jsx)(T.a,{variant:"subtitle2",noWrap:!0,children:r}),Object(N.jsxs)(v.a,{sx:{display:"flex",alignItems:"center"},children:[Object(N.jsx)(v.a,{component:a.Icon,icon:z.a,sx:{width:16,height:16,mr:.5,flexShrink:0}}),Object(N.jsx)(T.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:i})]})]}),Object(N.jsx)(ue.a,{size:"small",onClick:n,variant:o?"text":"outlined",color:o?"primary":"inherit",startIcon:o&&Object(N.jsx)(a.Icon,{icon:Ye.a}),children:o?"Followed":"Follow"})]})}function et(e){var t=e.followers,n=e.onToggleFollow;return Object(N.jsxs)(v.a,{sx:{mt:5},children:[Object(N.jsx)(T.a,{variant:"h4",sx:{mb:3},children:"Followers"}),Object(N.jsx)(F.a,{container:!0,spacing:3,children:t.map((function(e){return Object(N.jsx)(F.a,{item:!0,xs:12,md:4,children:Object(N.jsx)(Ze,{follower:e,onToggle:function(){return n(e.id)}})},e.id)}))})]})}var tt=Object(O.a)("div")((function(e){var t,n=e.theme;return t={zIndex:9,bottom:0,width:"100%",display:"flex",position:"absolute",backgroundColor:n.palette.background.paper},Object(i.a)(t,n.breakpoints.up("sm"),{justifyContent:"center"}),Object(i.a)(t,n.breakpoints.up("md"),{justifyContent:"flex-end",paddingRight:n.spacing(3)}),t}));function nt(){var e=Object(y.c)(),t=Object(y.d)((function(e){return e.user})),n=t.myProfile,i=t.posts,s=t.followers,j=t.friends,b=t.gallery,u=Object(I.a)().user,O=Object(o.useState)("profile"),F=Object(r.a)(O,2),R=F[0],_=F[1],z=Object(o.useState)(""),L=Object(r.a)(z,2),B=L[0],P=L[1];Object(o.useEffect)((function(){e(Object(w.k)()),e(Object(w.j)()),e(Object(w.e)()),e(Object(w.f)()),e(Object(w.g)())}),[e]);if(!n)return null;var W=[{value:"profile",icon:Object(N.jsx)(a.Icon,{icon:x.a,width:20,height:20}),component:Object(N.jsx)(Fe,{myProfile:n,posts:i})},{value:"followers",icon:Object(N.jsx)(a.Icon,{icon:l.a,width:20,height:20}),component:Object(N.jsx)(et,{followers:s,onToggleFollow:function(t){e(Object(w.n)(t))}})},{value:"friends",icon:Object(N.jsx)(a.Icon,{icon:d.a,width:20,height:20}),component:Object(N.jsx)(Ee,{friends:j,findFriends:B,onFindFriends:function(e){P(e.target.value)}})},{value:"gallery",icon:Object(N.jsx)(a.Icon,{icon:h.a,width:20,height:20}),component:Object(N.jsx)(Ke,{gallery:b})}];return Object(N.jsx)(C.a,{title:"User: Profile | Minimal-UI",children:Object(N.jsxs)(p.a,{children:[Object(N.jsx)(S.a,{heading:"Profile",links:[{name:"Dashboard",href:k.b.root},{name:"User",href:k.b.user.root},{name:u.displayName}]}),Object(N.jsxs)(m.a,{sx:{mb:3,height:280,position:"relative"},children:[Object(N.jsx)(Be,{myProfile:n}),Object(N.jsx)(tt,{children:Object(N.jsx)(f.a,{value:R,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){_(t)},children:W.map((function(e){return Object(N.jsx)(g.a,{disableRipple:!0,value:e.value,icon:e.icon,label:Object(c.a)(e.value)},e.value)}))})})]}),W.map((function(e){return e.value===R&&Object(N.jsx)(v.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=67.c68e8a8a.chunk.js.map