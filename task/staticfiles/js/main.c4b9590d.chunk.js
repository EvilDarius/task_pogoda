(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(18),r=n.n(i),o=(n(24),n(6)),s=(n.p,n(25),n(4)),u=n.n(s),h=n(19),d=n(2);var p=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=(e[0],e[1]);Object(a.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/test-api/"}).then((function(t){n(t.data)}))}),[]);var c=Object(a.useState)([]),i=Object(o.a)(c,2),r=i[0],s=i[1];Object(a.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/weather/"}).then((function(t){s(t.data)}))}),[]);var p={grid:{top:8,right:8,bottom:24,left:36},xAxis:{type:"category",data:r.map((function(t){return t.dateWeatherOfSummary}))},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}],tooltip:{trigger:"axis"}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:" Echarts \u0433\u0440\u0430\u0444\u0438\u043a\u0438 (React + Django + Echarts + PostgreSQL)"}),Object(d.jsxs)("div",{class:"Graphic",children:[Object(d.jsx)(h.a,{option:p}),";"]})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[50,1,2]]]);
//# sourceMappingURL=main.c4b9590d.chunk.js.map