(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[33],{2777:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return d}));var r=a(31),n=a(2806),i=a.n(n);function o(t){return i()(t).format(Number.isInteger(t)?"$0,0":"$0,0.00")}function c(t){return i()(t/100).format("0.0%")}function s(t){return i()(t).format()}function l(t){return Object(r.replace)(i()(t).format("0.00a"),".00","")}function d(t){return i()(t).format("0.0 b")}},2836:function(t,e){e.__esModule=!0,e.default={body:'<g fill="currentColor"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></g>',width:24,height:24}},2840:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return j})),a.d(e,"c",(function(){return m})),a.d(e,"d",(function(){return O})),a.d(e,"e",(function(){return g})),a.d(e,"f",(function(){return y})),a.d(e,"g",(function(){return C})),a.d(e,"h",(function(){return M})),a.d(e,"j",(function(){return A})),a.d(e,"i",(function(){return S})),a.d(e,"k",(function(){return I})),a.d(e,"m",(function(){return P})),a.d(e,"l",(function(){return F}));var r=a(3),n=a(4386),i=a(2700),o=a(54),c=Object(i.a)((function(t){return Object(n.a)({"@global":{".apexcharts-tooltip,.apexcharts-xaxistooltip":{border:"0 !important",boxShadow:"".concat(t.customShadows.z24," !important"),color:"".concat(t.palette.text.primary," !important"),borderRadius:"".concat(t.shape.borderRadiusSm,"px !important"),backgroundColor:"".concat(t.palette.background.default," !important")},".apexcharts-tooltip-title":{border:"0 !important",fontWeight:t.typography.fontWeightBold,backgroundColor:"".concat(t.palette.grey[50016]," !important"),color:t.palette.text["light"===t.palette.mode?"secondary":"primary"]},".apexcharts-xaxistooltip-bottom":{"&:before":{borderBottomColor:"transparent !important"},"&:after":{borderBottomColor:"".concat(t.palette.background.paper," !important")}},".apexcharts-legend":{padding:"0 !important"},".apexcharts-legend-series":{alignItems:"center",display:"flex !important"},".apexcharts-legend-marker":{marginTop:"-2px !important",marginRight:"8px !important"},".apexcharts-legend-text":{lineHeight:"18px",textTransform:"capitalize"}}})}));function s(){c();var t=Object(o.a)(),e=Object(r.a)({show:!0,label:"Total",color:t.palette.text.secondary},t.typography.subtitle2),a=Object(r.a)({offsetY:8,color:t.palette.text.primary},t.typography.h3);return{colors:[t.palette.primary.main,t.palette.warning.main,t.palette.info.main,t.palette.error.main,t.palette.success.main],chart:{toolbar:{show:!1},zoom:{enabled:!1},foreColor:t.palette.text.disabled,fontFamily:t.typography.fontFamily},states:{hover:{filter:{type:"lighten",value:.04}},active:{filter:{type:"darken",value:.88}}},fill:{opacity:1,gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:0,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},grid:{strokeDashArray:3,borderColor:t.palette.divider},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1}},markers:{size:0,strokeColors:t.palette.background.paper},tooltip:{x:{show:!1}},legend:{show:!0,fontSize:13,position:"top",horizontalAlign:"right",markers:{radius:12},itemMargin:{horizontal:12},labels:{colors:t.palette.text.primary}},plotOptions:{pie:{donut:{labels:{show:!0,value:a,total:e}}},radialBar:{track:{strokeWidth:"100%",background:t.palette.grey[50016]},dataLabels:{value:a,total:e}},radar:{polygons:{strokeWidth:1,fill:{colors:["transparent"]},strokeColors:t.palette.divider,connectorColors:t.palette.divider}}}}}var l=a(31),d=a(2779),p=a.n(d),u=a(0),b=[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}];function j(){var t=Object(l.merge)(s(),{xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}});return Object(u.jsx)(p.a,{type:"area",series:b,options:t,height:320})}var h=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function m(){var t=Object(l.merge)(s(),{stroke:{show:!1},plotOptions:{bar:{horizontal:!0,barHeight:"30%",borderRadius:4}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return Object(u.jsx)(p.a,{type:"bar",series:h,options:t,height:320})}var x=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}];function O(){var t=Object(l.merge)(s(),{stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(t){return"$ ".concat(t," thousands")}}},plotOptions:{bar:{columnWidth:"34%",borderRadius:4}}});return Object(u.jsx)(p.a,{type:"bar",series:x,options:t,height:320})}var f=[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}];function g(){var t=Object(o.a)(),e=Object(l.merge)(s(),{stroke:{show:!1},yaxis:{labels:{formatter:function(t){return"".concat(t.toFixed(0),"%")}}},xaxis:{type:"datetime",categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"]},plotOptions:{bar:{columnWidth:"58%",borderRadius:4,colors:{ranges:[{from:-100,to:-46,color:t.palette.warning.main},{from:-45,to:0,color:t.palette.error.main}]}}}});return Object(u.jsx)(p.a,{type:"bar",series:f,options:e,height:320})}var v=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]}];function y(){var t=Object(l.merge)(s(),{plotOptions:{bar:{columnWidth:"14%",borderRadius:4}},stroke:{show:!1},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(t){return"$ ".concat(t," thousands")}}}});return Object(u.jsx)(p.a,{type:"bar",series:v,options:t,height:320})}var w=[{name:"Product A",data:[44,55,41,67,22,43]},{name:"Product B",data:[13,23,20,8,13,27]},{name:"Product C",data:[11,17,15,15,21,14]},{name:"Product D",data:[21,7,25,13,22,8]}];function C(){var t=Object(l.merge)(s(),{chart:{stacked:!0,zoom:{enabled:!0}},legend:{itemMargin:{vertical:8},position:"right",offsetY:20},plotOptions:{bar:{columnWidth:"14%",borderRadius:4}},stroke:{show:!1},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]}});return Object(u.jsx)(p.a,{type:"bar",series:w,options:t,height:320})}var k=[44,55,13,43];function M(){var t=Object(l.merge)(s(),{labels:["Apple","Mango","Orange","Watermelon"],stroke:{show:!1},legend:{horizontalAlign:"center"},plotOptions:{pie:{donut:{size:"90%"}}}});return Object(u.jsx)(p.a,{type:"donut",series:k,options:t,width:400})}var T=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function A(){var t=Object(l.merge)(s(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"18%",borderRadius:4}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?"".concat(t.toFixed(0)," points"):t}}}});return Object(u.jsx)(p.a,{type:"line",series:T,options:t,height:320})}var z=[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}];function S(){var t=Object(l.merge)(s(),{xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{x:{show:!1},marker:{show:!1}}});return Object(u.jsx)(p.a,{type:"line",series:z,options:t,height:320})}var R=[44,55,13,43];function I(){var t=Object(l.merge)(s(),{labels:["Team A","Team B","Team C","Team D"],legend:{position:"right",offsetX:-20,offsetY:64,itemMargin:{vertical:8}},stroke:{show:!1},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return Object(u.jsx)(p.a,{type:"pie",series:R,options:t,width:400})}var N=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function P(){var t=Object(o.a)(),e=Object(l.merge)(s(),{stroke:{width:2},fill:{opacity:.48},legend:{position:"bottom",horizontalAlign:"center"},xaxis:{categories:["2011","2012","2013","2014","2015","2016"],labels:{style:{colors:[t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary]}}}});return Object(u.jsx)(p.a,{type:"radar",series:N,options:e,width:540})}var H=a(2777),V=[44,55];function F(){var t=Object(o.a)(),e=Object(l.merge)(s(),{labels:["Apples","Oranges"],fill:{type:"gradient",gradient:{colorStops:[[{offset:0,color:t.palette.primary.light},{offset:100,color:t.palette.primary.main}],[{offset:0,color:t.palette.warning.light},{offset:100,color:t.palette.warning.main}]]}},legend:{horizontalAlign:"center"},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return Object(H.c)(2324)}}}}}});return Object(u.jsx)(p.a,{type:"radialBar",series:V,options:e,height:400})}},2880:function(t,e,a){"use strict";var r=a(2),n=a(8),i=a(1),o=(a(12),a(11)),c=a(2701),s=a(7),l=a(14),d=a(2641),p=a(2702);function u(t){return Object(d.a)("MuiCardContent",t)}Object(p.a)("MuiCardContent",["root"]);var b=a(0),j=Object(s.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),h=i.forwardRef((function(t,e){var a=Object(l.a)({props:t,name:"MuiCardContent"}),i=a.className,s=a.component,d=void 0===s?"div":s,p=Object(n.a)(a,["className","component"]),h=Object(r.a)({},a,{component:d}),m=function(t){var e=t.classes;return Object(c.a)({root:["root"]},u,e)}(h);return Object(b.jsx)(j,Object(r.a)({as:d,className:Object(o.a)(m.root,i),styleProps:h,ref:e},p))}));e.a=h},2974:function(t,e,a){"use strict";var r=a(1),n=r.createContext({});e.a=n},2995:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z"/>',width:24,height:24}},3148:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M18 3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 18 3zm-3 10.13a.87.87 0 0 1-.87.87H9.87a.87.87 0 0 1-.87-.87v-.26a.87.87 0 0 1 .87-.87h4.26a.87.87 0 0 1 .87.87zM18 7H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/>',width:24,height:24}},3149:function(t,e){e.__esModule=!0,e.default={body:'<g fill="currentColor"><rect x="4" y="18" width="16" height="2" rx="1" ry="1"/><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"/><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"/><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"/><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g>',width:24,height:24}},3150:function(t,e){e.__esModule=!0,e.default={body:'<path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96c-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38l1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7c.52-10.07-.04-19.36-1.83-27.97c-3.3-18.59-16.45-29.46-33.02-30.13c-15.45-.63-29.65 8-33.28 21.37c-5.91 21.62-2.45 50.07 10.08 98.59c-15.96 38.05-37.05 82.66-51.2 107.54c-18.89 9.74-33.6 18.6-45.96 28.42c-16.3 12.97-26.48 26.3-29.28 40.3c-1.36 6.49.69 14.97 5.36 21.92c5.3 7.88 13.28 13 22.85 13.74c24.15 1.87 53.83-23.03 86.6-79.26c3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11c23.4-7.62 41.1-12.43 57.2-15.17c27.98 14.98 60.32 24.8 82.1 24.8c17.98 0 30.13-9.32 34.52-23.99c3.85-12.88.8-27.82-7.48-36.08c-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 0 1 5.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87c3.92-3.95 8-7.8 12.79-12.12c1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4l-8.12 12.93c-12.32 19.64-23.46 33.78-33 43c-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 0 1-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 0 1-1.12-.15a2.07 2.07 0 0 1-1.27-1.91zM511.17 547.4l-2.26 4l-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38c-.72-15.2.49-24.32 5.29-24.32c6.74 0 9.83 10.8 10.07 27.05c.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05l2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66l-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85c2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01l2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22l8.2-.6c23.3-1.73 39.8-.45 49.42 3.07c4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 0 1-1.36 6.31a6.7 6.7 0 0 1-2.17 1.28z" fill="currentColor"/>',width:1024,height:1024}},3222:function(t,e){e.__esModule=!0,e.default={body:'<path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5c-34.9-50-87.7-77.5-157.3-82.8c-65.9-5.2-138 38.4-164.4 38.4c-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8c23.8 68.2 109.6 235.3 199.1 232.6c46.8-1.1 79.9-33.2 140.8-33.2c59.1 0 89.7 33.2 141.9 33.2c90.3-1.3 167.9-153.2 190.5-221.6c-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7c-44.8 2.6-96.6 30.5-126.1 64.8c-32.5 36.8-51.6 82.3-47.5 133.6c48.4 3.7 92.6-21.2 129-63.7z" fill="currentColor"/>',width:1024,height:1024}},3223:function(t,e){e.__esModule=!0,e.default={body:'<path d="M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z" fill="currentColor"/>',width:1024,height:1024}},3268:function(t,e,a){"use strict";a.d(e,"a",(function(){return y}));var r=a(17),n=a(1),i=a(27),o=a(2995),c=a.n(o),s=a(3148),l=a.n(s),d=a(3149),p=a.n(d),u=a(2836),b=a.n(u),j=a(3150),h=a.n(j),m=a(2739),x=a(604),O=a(2759),f=a(2750),g=a(2751),v=a(0);function y(){var t=Object(n.useRef)(null),e=Object(n.useState)(!1),a=Object(r.a)(e,2),o=a[0],s=a[1],d=[{text:"Import",icon:p.a,action:function(){alert("Hello Import!!"),s(!1)}},{text:"Copy",icon:c.a,action:function(){alert("Hello Copy!!"),s(!1)}},{text:"Export",icon:h.a,action:function(){alert("Hello Export!!"),s(!1)}},{text:"Archive",icon:l.a,action:function(){alert("Hello Archive!!"),s(!1)}}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(m.a,{ref:t,onClick:function(){return s(!0)},children:Object(v.jsx)(i.Icon,{icon:b.a,width:20,height:20})}),Object(v.jsx)(x.a,{open:o,anchorEl:t.current,onClose:function(){return s(!1)},PaperProps:{sx:{width:200,maxWidth:"100%"}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:d.map((function(t){return Object(v.jsxs)(O.a,{onClick:t.action,sx:{color:"text.secondary"},children:[Object(v.jsx)(f.a,{children:Object(v.jsx)(i.Icon,{icon:t.icon,width:24,height:24})}),Object(v.jsx)(g.a,{primary:t.text,primaryTypographyProps:{variant:"body2"}})]},t.text)}))})]})}},3269:function(t,e){e.__esModule=!0,e.default={body:'<path d="M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4c-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8c-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6c-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z" fill="currentColor"/>',width:1024,height:1024}},3271:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var r=a(2641),n=a(2702);function i(t){return Object(r.a)("MuiTimelineContent",t)}var o=Object(n.a)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]);e.a=o},3413:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var r=a(2641),n=a(2702);function i(t){return Object(r.a)("MuiTimelineOppositeContent",t)}var o=Object(n.a)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]);e.a=o},3602:function(t,e){e.__esModule=!0,e.default={body:'<path d="M304 280h416c4.4 0 8-3.6 8-8c0-40-8.8-76.7-25.9-108.1c-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9c-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z" fill="currentColor"/><path d="M940 512H792V412c76.8 0 139-62.2 139-139c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8c0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8c0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8c0-44.2 23.9-82.9 59.6-103.7c6 17.2 13.6 33.6 22.7 49c24.3 41.5 59 76.2 100.5 100.5c28.9 16.9 61 28.8 95.3 34.5c4.4 0 8-3.6 8-8V484c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v464.2c0 4.4 3.6 8 8 8c34.3-5.7 66.4-17.6 95.3-34.5c41.5-24.3 76.2-59 100.5-100.5c9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8c0-79.3-48.1-147.4-116.7-176.7c.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" fill="currentColor"/>',width:1024,height:1024}},3603:function(t,e,a){"use strict";var r=a(8),n=a(2),i=a(1),o=(a(12),a(11)),c=a(9),s=a(7),l=a(14),d=a(2701),p=a(610),u=a(2974),b=a(3271),j=a(0),h=Object(s.a)(p.a,{},{name:"MuiTimelineContent",slot:"Root",overridesResolver:function(t,e){var a=t.styleProps;return Object(n.a)({},e.root,e["position".concat(Object(c.a)(a.position))])}})((function(t){var e=t.styleProps;return Object(n.a)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===e.position&&{textAlign:"right"})})),m=i.forwardRef((function(t,e){var a=Object(l.a)({props:t,name:"MuiTimelineContent"}),s=a.className,p=Object(r.a)(a,["className"]),m=i.useContext(u.a).position,x=Object(n.a)({},a,{position:m||"right"}),O=function(t){var e=t.position,a=t.classes,r={root:["root","position".concat(Object(c.a)(e))]};return Object(d.a)(r,b.b,a)}(x);return Object(j.jsx)(h,Object(n.a)({component:"div",className:Object(o.a)(O.root,s),styleProps:x,ref:e},p))}));e.a=m},4361:function(t,e,a){"use strict";var r=a(5),n=a(8),i=a(2),o=a(1),c=(a(12),a(11)),s=a(9),l=a(127),d=a(7),p=a(14),u=a(2701),b=a(3271),j=a(3413),h=a(2974),m=a(2641),x=a(2702);function O(t){return Object(m.a)("MuiTimelineItem",t)}Object(x.a)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);var f=a(0),g=Object(d.a)("li",{},{name:"MuiTimelineItem",slot:"Root",overridesResolver:function(t,e){var a=t.styleProps;return Object(i.a)({},e.root,e["position".concat(Object(s.a)(a.position))])}})((function(t){var e,a=t.styleProps;return Object(i.a)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===a.position&&{flexDirection:"row-reverse"},"alternate"===a.position&&{"&:nth-of-type(even)":(e={flexDirection:"row-reverse"},Object(r.a)(e,"& .".concat(b.a.root),{textAlign:"right"}),Object(r.a)(e,"& .".concat(j.a.root),{textAlign:"left"}),e)},!a.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})})),v=o.forwardRef((function(t,e){var a=Object(p.a)({props:t,name:"MuiTimelineItem"}),r=a.position,d=a.className,b=Object(n.a)(a,["position","className"]),j=o.useContext(h.a).position,m=!1;o.Children.forEach(a.children,(function(t){Object(l.a)(t,["TimelineOppositeContent"])&&(m=!0)}));var x=Object(i.a)({},a,{position:r||j||"right",hasOppositeContent:m}),v=function(t){var e=t.position,a=t.classes,r=t.hasOppositeContent,n={root:["root","position".concat(Object(s.a)(e)),!r&&"missingOppositeContent"]};return Object(u.a)(n,O,a)}(x);return Object(f.jsx)(h.a.Provider,{value:{position:x.position},children:Object(f.jsx)(g,Object(i.a)({className:Object(c.a)(v.root,d),styleProps:x,ref:e},b))})}));e.a=v},4362:function(t,e,a){"use strict";var r=a(2),n=a(8),i=a(1),o=(a(12),a(11)),c=a(2701),s=a(7),l=a(14),d=a(2641),p=a(2702);function u(t){return Object(d.a)("MuiTimelineSeparator",t)}Object(p.a)("MuiTimelineSeparator",["root"]);var b=a(0),j=Object(s.a)("div",{},{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:function(t,e){return e.root}})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),h=i.forwardRef((function(t,e){var a=Object(l.a)({props:t,name:"MuiTimelineSeparator"}),i=a.className,s=Object(n.a)(a,["className"]),d=Object(r.a)({},a),p=function(t){var e=t.classes;return Object(c.a)({root:["root"]},u,e)}(d);return Object(b.jsx)(j,Object(r.a)({className:Object(o.a)(p.root,i),styleProps:d,ref:e},s))}));e.a=h},4363:function(t,e,a){"use strict";var r=a(2),n=a(8),i=a(1),o=(a(12),a(11)),c=a(2701),s=a(7),l=a(14),d=a(2641),p=a(2702);function u(t){return Object(d.a)("MuiTimelineConnector",t)}Object(p.a)("MuiTimelineConnector",["root"]);var b=a(0),j=Object(s.a)("span",{},{name:"MuiTimelineConnector",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){return{width:2,backgroundColor:t.theme.palette.grey[400],flexGrow:1}})),h=i.forwardRef((function(t,e){var a=Object(l.a)({props:t,name:"MuiTimelineConnector"}),i=a.className,s=Object(n.a)(a,["className"]),d=Object(r.a)({},a),p=function(t){var e=t.classes;return Object(c.a)({root:["root"]},u,e)}(d);return Object(b.jsx)(j,Object(r.a)({className:Object(o.a)(p.root,i),styleProps:d,ref:e},s))}));e.a=h},4364:function(t,e,a){"use strict";var r=a(8),n=a(2),i=a(1),o=(a(12),a(11)),c=a(9),s=a(2701),l=a(7),d=a(14),p=a(2974),u=a(2641),b=a(2702);function j(t){return Object(u.a)("MuiTimeline",t)}Object(b.a)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);var h=a(0),m=Object(l.a)("ul",{},{name:"MuiTimeline",slot:"Root",overridesResolver:function(t,e){var a=t.styleProps;return Object(n.a)({},e.root,a.position&&e["position".concat(Object(c.a)(a.position))])}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),x=i.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiTimeline"}),i=a.position,l=void 0===i?"right":i,u=a.className,b=Object(r.a)(a,["position","className"]),x=Object(n.a)({},a,{position:l}),O=function(t){var e=t.position,a=t.classes,r={root:["root",e&&"position".concat(Object(c.a)(e))]};return Object(s.a)(r,j,a)}(x);return Object(h.jsx)(p.a.Provider,{value:{position:l},children:Object(h.jsx)(m,Object(n.a)({className:Object(o.a)(O.root,u),styleProps:x,ref:e},b))})}));e.a=x},4440:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return Et}));var r=a(2756),n=a(377),i=a(610),o=a(2735),c=a(380),s=a(27),l=a(3602),d=a.n(l),p=a(7),u=a(25),b=a(2767),j=a(2777),h=a(0),m=Object(p.a)(b.a)((function(t){var e=t.theme;return{boxShadow:"none",textAlign:"center",padding:e.spacing(5,0),color:e.palette.error.darker,backgroundColor:e.palette.error.lighter}})),x=Object(p.a)("div")((function(t){var e=t.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:e.spacing(8),height:e.spacing(8),justifyContent:"center",marginBottom:e.spacing(3),color:e.palette.error.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(u.a)(e.palette.error.dark,0)," 0%, ").concat(Object(u.a)(e.palette.error.dark,.24)," 100%)")}}));function O(){return Object(h.jsxs)(m,{children:[Object(h.jsx)(x,{children:Object(h.jsx)(s.Icon,{icon:d.a,width:24,height:24})}),Object(h.jsx)(i.a,{variant:"h3",children:Object(j.e)(234)}),Object(h.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Bug Reports"})]})}var f=a(31),g=a(2779),v=a.n(g),y=a(2792),w=a(2840),C=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function k(){var t=Object(f.merge)(Object(w.a)(),{tooltip:{marker:{show:!1},y:{formatter:function(t){return Object(j.c)(t)},title:{formatter:function(t){return"#".concat(t)}}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y.a,{title:"Conversion Rates",subheader:"(+43%) than last year"}),Object(h.jsx)(n.a,{sx:{mx:3},dir:"ltr",children:Object(h.jsx)(v.a,{type:"bar",series:C,options:t,height:364})})]})}var M=a(54),T=Object(p.a)("div")((function(t){var e=t.theme;return{height:392,marginTop:e.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(e.palette.divider),top:"calc(".concat(320,"px) !important")}}})),A=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function z(){var t=Object(M.a)(),e=Object(f.merge)(Object(w.a)(),{stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,horizontalAlign:"center"},xaxis:{categories:["English","History","Physics","Geography","Chinese","Math"],labels:{style:{colors:[t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary,t.palette.text.secondary]}}}});return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y.a,{title:"Current Subject"}),Object(h.jsx)(T,{dir:"ltr",children:Object(h.jsx)(v.a,{type:"radar",series:A,options:e,height:340})})]})}var S=Object(p.a)("div")((function(t){var e=t.theme;return{height:372,marginTop:e.spacing(5),"& .apexcharts-canvas svg":{height:372},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(e.palette.divider),top:"calc(".concat(300,"px) !important")}}})),R=[4344,5435,1443,4443];function I(){var t=Object(M.a)(),e=Object(f.merge)(Object(w.a)(),{colors:[t.palette.primary.main,t.palette.info.main,t.palette.warning.main,t.palette.error.main],labels:["America","Asia","Europe","Africa"],stroke:{colors:[t.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(t){return Object(j.c)(t)},title:{formatter:function(t){return"#".concat(t)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y.a,{title:"Current Visits"}),Object(h.jsx)(S,{dir:"ltr",children:Object(h.jsx)(v.a,{type:"pie",series:R,options:e,height:280})})]})}var N=a(3223),P=a.n(N),H=Object(p.a)(b.a)((function(t){var e=t.theme;return{boxShadow:"none",textAlign:"center",padding:e.spacing(5,0),color:e.palette.warning.darker,backgroundColor:e.palette.warning.lighter}})),V=Object(p.a)("div")((function(t){var e=t.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:e.spacing(8),height:e.spacing(8),justifyContent:"center",marginBottom:e.spacing(3),color:e.palette.warning.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(u.a)(e.palette.warning.dark,0)," 0%, ").concat(Object(u.a)(e.palette.warning.dark,.24)," 100%)")}}));function F(){return Object(h.jsxs)(H,{children:[Object(h.jsx)(V,{children:Object(h.jsx)(s.Icon,{icon:P.a,width:24,height:24})}),Object(h.jsx)(i.a,{variant:"h3",children:Object(j.e)(1723315)}),Object(h.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Item Orders"})]})}var W=a(19),B=a(4),_=a.n(B),L=a(579),G=a(34),J=a(231),D=a.n(J),E=a(2647),U=a(2741),Z=a(2656),$=a(298),K=a(28),Y=a(97),X=Object(W.a)(Array(5)).map((function(t,e){var a=e+1;return{title:_.a.name.title(),description:_.a.lorem.paragraphs(),image:Object(K.b)(a),postedAt:_.a.date.soon()}}));function q(t){var e=t.news,a=e.image,r=e.title,o=e.description,c=e.postedAt;return Object(h.jsxs)(E.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(h.jsx)(n.a,{component:"img",alt:r,src:a,sx:{width:48,height:48,borderRadius:1.5}}),Object(h.jsxs)(n.a,{sx:{minWidth:240},children:[Object(h.jsx)(U.a,{component:G.b,to:"#",color:"inherit",children:Object(h.jsx)(i.a,{variant:"subtitle2",noWrap:!0,children:r})}),Object(h.jsx)(i.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:o})]}),Object(h.jsx)(i.a,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:Object(L.a)(c,new Date)})]})}function Q(){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y.a,{title:"News Update"}),Object(h.jsx)(Y.a,{children:Object(h.jsx)(E.a,{spacing:3,sx:{p:3,pr:0},children:X.map((function(t){return Object(h.jsx)(q,{news:t},t.title)}))})}),Object(h.jsx)(Z.a,{}),Object(h.jsx)(n.a,{sx:{p:2,textAlign:"right"},children:Object(h.jsx)($.a,{to:"#",size:"small",color:"inherit",component:G.b,endIcon:Object(h.jsx)(s.Icon,{icon:D.a}),children:"View all"})})]})}var tt=a(3222),et=a.n(tt),at=Object(p.a)(b.a)((function(t){var e=t.theme;return{boxShadow:"none",textAlign:"center",padding:e.spacing(5,0),color:e.palette.info.darker,backgroundColor:e.palette.info.lighter}})),rt=Object(p.a)("div")((function(t){var e=t.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:e.spacing(8),height:e.spacing(8),justifyContent:"center",marginBottom:e.spacing(3),color:e.palette.info.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(u.a)(e.palette.info.dark,0)," 0%, ").concat(Object(u.a)(e.palette.info.dark,.24)," 100%)")}}));function nt(){return Object(h.jsxs)(at,{children:[Object(h.jsx)(rt,{children:Object(h.jsx)(s.Icon,{icon:et.a,width:24,height:24})}),Object(h.jsx)(i.a,{variant:"h3",children:Object(j.e)(1352831)}),Object(h.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"New Users"})]})}var it=a(2880),ot=a(4361),ct=a(4362),st=a(4363),lt=a(3603),dt=a(4364),pt=a(381),ut=a(38),bt=[{title:"1983, orders, $4220",time:_.a.date.past(),type:"order1"},{title:"12 Invoices have been paid",time:_.a.date.past(),type:"order2"},{title:"Order #37745 from September",time:_.a.date.past(),type:"order3"},{title:"New order placed #XF-2356",time:_.a.date.past(),type:"order4"},{title:"New order placed #XF-2346",time:_.a.date.past(),type:"order5"}];function jt(t){var e=t.item,a=t.isLast,r=e.type,n=e.title,o=e.time;return Object(h.jsxs)(ot.a,{children:[Object(h.jsxs)(ct.a,{children:[Object(h.jsx)(ut.o,{color:("order1"===r?"primary":"order2"===r&&"success")||"order3"===r&&"info"||"order4"===r&&"warning"||"error"}),a?null:Object(h.jsx)(st.a,{})]}),Object(h.jsxs)(lt.a,{children:[Object(h.jsx)(i.a,{variant:"subtitle2",children:n}),Object(h.jsx)(i.a,{variant:"caption",sx:{color:"text.secondary"},children:Object(pt.b)(o)})]})]})}function ht(){return Object(h.jsxs)(b.a,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:[Object(h.jsx)(y.a,{title:"Order Timeline"}),Object(h.jsx)(it.a,{children:Object(h.jsx)(dt.a,{children:bt.map((function(t,e){return Object(h.jsx)(jt,{item:t,isLast:e===bt.length-1},t.title)}))})})]})}var mt=a(3),xt=a(30),Ot=a(229),ft=a(2766),gt=a(2723),vt=a(3268),yt=["task","checked","formik"],wt=["Create FireStone Logo","Add SCSS and JS files if required","Stakeholder Meeting","Scoping & Estimations","Sprint Showcase"];function Ct(t){var e=t.task,a=t.checked,r=t.formik,n=Object(xt.a)(t,yt),o=r.getFieldProps;return Object(h.jsxs)(E.a,{direction:"row",justifyContent:"space-between",sx:{py:.75},children:[Object(h.jsx)(ft.a,{control:Object(h.jsx)(gt.a,Object(mt.a)(Object(mt.a)({},o("checked")),{},{value:e,checked:a},n)),label:Object(h.jsx)(i.a,{variant:"body2",sx:Object(mt.a)({},a&&{color:"text.disabled",textDecoration:"line-through"}),children:e})}),Object(h.jsx)(vt.a,{})]})}function kt(){var t=Object(Ot.d)({initialValues:{checked:[wt[2]]},onSubmit:function(t){console.log(t)}}),e=t.values,a=t.handleSubmit;return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y.a,{title:"Tasks"}),Object(h.jsx)(n.a,{sx:{px:3,py:1},children:Object(h.jsx)(Ot.b,{value:t,children:Object(h.jsx)(Ot.a,{autoComplete:"off",noValidate:!0,onSubmit:a,children:wt.map((function(a){return Object(h.jsx)(Ct,{task:a,formik:t,checked:e.checked.includes(a)},a)}))})})})]})}var Mt=a(266),Tt=a.n(Mt),At=a(232),zt=a.n(At),St=a(233),Rt=a.n(St),It=a(390),Nt=a.n(It),Pt=a(2744),Ht=[{name:"FaceBook",value:_.a.datatype.number(),icon:Object(h.jsx)(s.Icon,{icon:Rt.a,color:"#1877F2",width:32,height:32})},{name:"Google",value:_.a.datatype.number(),icon:Object(h.jsx)(s.Icon,{icon:Tt.a,color:"#DF3E30",width:32,height:32})},{name:"Linkedin",value:_.a.datatype.number(),icon:Object(h.jsx)(s.Icon,{icon:Nt.a,color:"#006097",width:32,height:32})},{name:"Twitter",value:_.a.datatype.number(),icon:Object(h.jsx)(s.Icon,{icon:zt.a,color:"#1C9CEA",width:32,height:32})}];function Vt(t){var e=t.site,a=e.icon,r=e.value,c=e.name;return Object(h.jsx)(o.a,{item:!0,xs:6,children:Object(h.jsxs)(Pt.a,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[Object(h.jsx)(n.a,{sx:{mb:.5},children:a}),Object(h.jsx)(i.a,{variant:"h6",children:Object(j.e)(r)}),Object(h.jsx)(i.a,{variant:"body2",sx:{color:"text.secondary"},children:c})]})})}function Ft(){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y.a,{title:"Traffic by Site"}),Object(h.jsx)(it.a,{children:Object(h.jsx)(o.a,{container:!0,spacing:2,children:Ht.map((function(t){return Object(h.jsx)(Vt,{site:t},t.name)}))})})]})}var Wt=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function Bt(){var t=Object(f.merge)(Object(w.a)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"11%",borderRadius:4}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?"".concat(t.toFixed(0)," visits"):t}}}});return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y.a,{title:"Website Visits",subheader:"(+43%) than last year"}),Object(h.jsx)(n.a,{sx:{p:3,pb:1},dir:"ltr",children:Object(h.jsx)(v.a,{type:"line",series:Wt,options:t,height:364})})]})}var _t=a(3269),Lt=a.n(_t),Gt=Object(p.a)(b.a)((function(t){var e=t.theme;return{boxShadow:"none",textAlign:"center",padding:e.spacing(5,0),color:e.palette.primary.darker,backgroundColor:e.palette.primary.lighter}})),Jt=Object(p.a)("div")((function(t){var e=t.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:e.spacing(8),height:e.spacing(8),justifyContent:"center",marginBottom:e.spacing(3),color:e.palette.primary.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(u.a)(e.palette.primary.dark,0)," 0%, ").concat(Object(u.a)(e.palette.primary.dark,.24)," 100%)")}}));function Dt(){return Object(h.jsxs)(Gt,{children:[Object(h.jsx)(Jt,{children:Object(h.jsx)(s.Icon,{icon:Lt.a,width:24,height:24})}),Object(h.jsx)(i.a,{variant:"h3",children:Object(j.e)(714e3)}),Object(h.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Weekly Sales"})]})}function Et(){return Object(h.jsx)(c.a,{title:"General: Analytics | Minimal-UI",children:Object(h.jsxs)(r.a,{maxWidth:"xl",children:[Object(h.jsx)(n.a,{sx:{pb:5},children:Object(h.jsx)(i.a,{variant:"h4",children:"Hi, Welcome back"})}),Object(h.jsxs)(o.a,{container:!0,spacing:3,children:[Object(h.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(h.jsx)(Dt,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(h.jsx)(nt,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(h.jsx)(F,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(h.jsx)(Bt,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(h.jsx)(I,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(h.jsx)(k,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(h.jsx)(z,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(h.jsx)(Q,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(h.jsx)(ht,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(h.jsx)(Ft,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(h.jsx)(kt,{})})]})]})})}}}]);
//# sourceMappingURL=33.386f74f8.chunk.js.map