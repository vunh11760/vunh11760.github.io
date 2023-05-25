(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[131],{4470:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var r=a(5),i=a(2712),n=a(34),s=a(7),c=a(2767),l=a(2741),o=a(610),d=a(2756),j=a(377),m=a(2761),u=a(53),b=a(22),x=a(539),h=a(380),O=a(38),p=a(3),f=a(16),g=a.n(f),v=a(26),w=a(17),y=a(230),N=a(1),S=a(27),k=a(160),q=a(229),T=a(392),C=a.n(T),W=a(194),B=a.n(W),I=a(413),L=a.n(I),P=a(2647),A=a(2722),E=a(2762),F=a(2758),M=a(2739),D=a(2711),R=a(165),z=a(0);function G(){var e=Object(u.a)().register,t=Object(R.a)(),a=Object(k.b)(),r=a.enqueueSnackbar,i=a.closeSnackbar,n=Object(N.useState)(!1),s=Object(w.a)(n,2),c=s[0],l=s[1],o=y.e().shape({firstName:y.g().min(2,"Too Short!").max(50,"Too Long!").required("First name required"),lastName:y.g().min(2,"Too Short!").max(50,"Too Long!").required("Last name required"),email:y.g().email("Email must be a valid email address").required("Email is required"),password:y.g().required("Password is required")}),d=Object(q.d)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:o,onSubmit:function(){var a=Object(v.a)(g.a.mark((function a(n,s){var c,l;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=s.setErrors,l=s.setSubmitting,a.prev=1,a.next=4,e(n.email,n.password,n.firstName,n.lastName);case 4:r("Register success",{variant:"success",action:function(e){return Object(z.jsx)(O.k,{size:"small",onClick:function(){return i(e)},children:Object(z.jsx)(S.Icon,{icon:B.a})})}}),t.current&&l(!1),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0),t.current&&(c({afterSubmit:a.t0.message}),l(!1));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}),j=d.errors,m=d.touched,b=d.handleSubmit,x=d.isSubmitting,h=d.getFieldProps;return Object(z.jsx)(q.b,{value:d,children:Object(z.jsx)(q.a,{autoComplete:"off",noValidate:!0,onSubmit:b,children:Object(z.jsxs)(P.a,{spacing:3,children:[j.afterSubmit&&Object(z.jsx)(A.a,{severity:"error",children:j.afterSubmit}),Object(z.jsxs)(P.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(z.jsx)(E.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"First name"},h("firstName")),{},{error:Boolean(m.firstName&&j.firstName),helperText:m.firstName&&j.firstName})),Object(z.jsx)(E.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Last name"},h("lastName")),{},{error:Boolean(m.lastName&&j.lastName),helperText:m.lastName&&j.lastName}))]}),Object(z.jsx)(E.a,Object(p.a)(Object(p.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email address"},h("email")),{},{error:Boolean(m.email&&j.email),helperText:m.email&&j.email})),Object(z.jsx)(E.a,Object(p.a)(Object(p.a)({fullWidth:!0,autoComplete:"current-password",type:c?"text":"password",label:"Password"},h("password")),{},{InputProps:{endAdornment:Object(z.jsx)(F.a,{position:"end",children:Object(z.jsx)(M.a,{edge:"end",onClick:function(){return l((function(e){return!e}))},children:Object(z.jsx)(S.Icon,{icon:c?C.a:L.a})})})},error:Boolean(m.password&&j.password),helperText:m.password&&j.password})),Object(z.jsx)(D.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:x,children:"Register"})]})})})}var J=a(560),U=Object(s.a)(h.a)((function(e){var t=e.theme;return Object(r.a)({},t.breakpoints.up("md"),{display:"flex"})})),V=Object(s.a)(c.a)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),_=Object(s.a)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function H(){var e=Object(u.a)().method;return Object(z.jsxs)(U,{title:"Register | Minimal-UI",children:[Object(z.jsxs)(x.a,{children:["Already have an account? \xa0",Object(z.jsx)(l.a,{underline:"none",variant:"subtitle2",component:n.b,to:b.a.login,children:"Login"})]}),Object(z.jsx)(O.j,{width:"mdDown",children:Object(z.jsxs)(V,{children:[Object(z.jsx)(o.a,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Manage the job more effectively with Minimal"}),Object(z.jsx)("img",{alt:"register",src:"/static/illustrations/illustration_register.png"})]})}),Object(z.jsx)(d.a,{children:Object(z.jsxs)(_,{children:[Object(z.jsxs)(j.a,{sx:{mb:5,display:"flex",alignItems:"center"},children:[Object(z.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(z.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),Object(z.jsx)(o.a,{sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]}),Object(z.jsx)(m.a,{title:Object(i.a)(e),children:Object(z.jsx)(j.a,{component:"img",src:"/static/auth/ic_".concat(e,".png"),sx:{width:32,height:32}})})]}),"firebase"===e&&Object(z.jsx)(J.a,{}),Object(z.jsx)(G,{}),Object(z.jsxs)(o.a,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Minimal\xa0",Object(z.jsx)(l.a,{underline:"always",sx:{color:"text.primary"},children:"Terms of Service"}),"\xa0and\xa0",Object(z.jsx)(l.a,{underline:"always",sx:{color:"text.primary"},children:"Privacy Policy"}),"."]}),Object(z.jsx)(O.j,{width:"smUp",children:Object(z.jsxs)(o.a,{variant:"subtitle2",sx:{mt:3,textAlign:"center"},children:["Already have an account?\xa0",Object(z.jsx)(l.a,{to:b.a.login,component:n.b,children:"Login"})]})})]})})]})}}}]);
//# sourceMappingURL=131.70b03b84.chunk.js.map