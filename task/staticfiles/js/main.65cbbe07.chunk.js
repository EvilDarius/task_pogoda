(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(t,e,a){},25:function(t,e,a){},50:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a.n(n),o=a(17),r=a.n(o),c=(a(24),a(19)),s=(a.p,a(25),a(18)),d=a.n(s),m=a(3),p=a(1);var l=function(){var t=Object(n.useState)([]),e=Object(c.a)(t,2),a=e[0],i=e[1];Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/weather/"}).then((function(t){i(t.data)}))}),[]);var o=a.map((function(t){return t.dateOfWeatherSummary})),r={grid:{top:8,right:8,bottom:24,left:36},xAxis:{type:"category",data:o,name:"\u0414\u0430\u0442\u0430 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",nameLocation:"middle"},yAxis:{type:"value",name:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u2103",nameLocation:"middle",nameGap:25},series:[{data:a.map((function(t){return t.temperature})),type:"line",smooth:!0}],tooltip:{trigger:"axis"}},s={grid:{top:8,right:8,bottom:24,left:36},xAxis:{type:"category",data:o,name:"\u0414\u0430\u0442\u0430 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",nameLocation:"middle"},yAxis:{type:"value",name:"\u0410\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u043c\u043c.\u0440\u0442.\u0441\u0442",nameLocation:"middle",nameGap:28},series:[{data:a.map((function(t){return t.atmospherePressure})),type:"line",smooth:!0}],tooltip:{trigger:"axis"}},l={grid:{top:8,right:8,bottom:24,left:36},xAxis:{type:"category",data:o,name:"\u0414\u0430\u0442\u0430 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",nameLocation:"middle"},yAxis:{type:"value",name:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c, %",nameLocation:"middle",nameGap:25},series:[{data:a.map((function(t){return t.humidity})),type:"line",smooth:!0}],tooltip:{trigger:"axis"}};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:" Echarts \u0433\u0440\u0430\u0444\u0438\u043a\u0438 (React + Django + Echarts + PostgreSQL)"}),Object(p.jsx)("div",{class:"Graphic",children:Object(p.jsx)(m.a,{option:r})}),Object(p.jsx)("div",{class:"Graphic",children:Object(p.jsx)(m.a,{option:s})}),Object(p.jsx)("div",{class:"Graphic",children:Object(p.jsx)(m.a,{option:l})})]})},u=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),n(t),i(t),o(t),r(t)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(l,{})}),document.getElementById("root")),u()}},[[50,1,2]]]);
//# sourceMappingURL=main.65cbbe07.chunk.js.map