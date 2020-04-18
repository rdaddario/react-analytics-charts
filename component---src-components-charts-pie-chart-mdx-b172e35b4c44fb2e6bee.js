(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{cuyp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return h})),a.d(t,"default",(function(){return O}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),r=a("TjRS"),i=a("ZFoC"),o=a("AdhA"),l=a("5Jen"),c=a("fAuu"),b=a("atnT"),d=a("bAZo"),p=a("r1FN");a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h={};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/charts/PieChart.mdx"}});var u={_frontmatter:h},m=r.a;function O(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(m,s({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o.a,{trackingId:l.a,mdxType:"GoogleAnalytics"}),Object(n.b)("h1",null,"PieChart"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"A pie chart shows data as slices of pie. You can also display a pie chart as a donut."),Object(n.b)("p",null,"You can use this to create a custom chart by providing your own data query (see ",Object(n.b)("a",s({parentName:"p"},{href:"/react-analytics-charts/DataChart"}),"DataChart")," for more info on queries) and,\noptionally, ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options"}),"pie chart options")," for the chart."),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",s({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for a list of all charts available."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)(i.c,{__position:2,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    return (\n      <PieChart\n        gapi={gapi}\n        query={{\n          ids: viewId,\n          'start-date': '30daysAgo',\n          'end-date': 'today',\n          metrics: 'ga:sessions,ga:users,ga:pageviews',\n          dimensions: 'ga:deviceCategory',\n        }}\n        container=\"traffic-by-device-category-chart\"\n        options={{\n          title: 'Traffic By Device Category (30 Days)',\n        }}\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:i.c,Props:i.d,GoogleAnalytics:o.a,TRACKING_ID:l.a,CreatedBy:c.a,clientId:b.a,AnalyticsDashboard:d.a,PieChart:p.a},mdxType:"Playground"},Object(n.b)(d.a,{authOptions:{clientId:b.a},renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,query:{ids:t,"start-date":"30daysAgo","end-date":"today",metrics:"ga:sessions,ga:users,ga:pageviews",dimensions:"ga:deviceCategory"},container:"traffic-by-device-category-chart",options:{title:"Traffic By Device Category (30 Days)"},mdxType:"PieChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("br",null),Object(n.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Prop"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"gapi"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ready and authorized ",Object(n.b)("a",s({parentName:"td"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"container"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," Provide an ID for the ",Object(n.b)("inlineCode",{parentName:"td"},"div")," that will contain the chart.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"query"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("a",s({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ",Object(n.b)("a",s({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))," for the Analytics data. See the Query Prop section of ",Object(n.b)("a",s({parentName:"td"},{href:"/react-analytics-charts/DataChart"}),"DataChart"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"donut"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Optional.")," When ",Object(n.b)("inlineCode",{parentName:"td"},"true"),", the pie chart will become a donut chart, using an aesthetically pleasing golden ratio ",Object(n.b)("inlineCode",{parentName:"td"},"pieHole")," of ",Object(n.b)("inlineCode",{parentName:"td"},"0.382"),". Default ",Object(n.b)("inlineCode",{parentName:"td"},"false"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"options"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("a",s({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options"}),Object(n.b)("inlineCode",{parentName:"a"},"PieChartOptions"))),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for ",Object(n.b)("a",s({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options"}),"pie charts"),".")))),Object(n.b)("p",null,"This component also supports ",Object(n.b)("strong",{parentName:"p"},"all ",Object(n.b)("inlineCode",{parentName:"strong"},"div")," props"),", such as ",Object(n.b)("inlineCode",{parentName:"p"},"className"),", ",Object(n.b)("inlineCode",{parentName:"p"},"style"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(n.b)("p",null,"If you have more than one of this chart on the page, be sure to specify a unique ",Object(n.b)("inlineCode",{parentName:"p"},"container")," ID."),Object(n.b)("h3",{id:"query"},"Query"),Object(n.b)("p",null,"Refer to ",Object(n.b)("a",s({parentName:"p"},{href:"/react-analytics-charts/DataChart#query-prop"}),"DataChart Query Prop")," to build your own data ",Object(n.b)("inlineCode",{parentName:"p"},"query"),"."),Object(n.b)("h3",{id:"chart-options"},"Chart Options"),Object(n.b)("p",null,"There are numerous ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options"}),"chart options")," available for\npie charts, allowing you to customize the appearance. Provide these via the ",Object(n.b)("inlineCode",{parentName:"p"},"options")," prop."),Object(n.b)("p",null,"Below are a few of the notable ones:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Option"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"title"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Text to display above the chart.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Width of the chart, in pixels. Also supports a percentage string. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"100%"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Height of the chart, in pixels.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"is3D"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"If ",Object(n.b)("inlineCode",{parentName:"td"},"true"),", displays a three-dimensional chart. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"false"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"pieHole"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"If between ",Object(n.b)("inlineCode",{parentName:"td"},"0")," and ",Object(n.b)("inlineCode",{parentName:"td"},"1"),", displays a donut chart. The hole with have a radius equal to number times the radius of the chart. Default: ",Object(n.b)("inlineCode",{parentName:"td"},"0"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"pieSliceText"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"The content of the text displayed on the slice.",Object(n.b)("br",null),"Can be one of the following:",Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"'percentage'")," - The percentage of the slice size out of the total."),Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"'value'")," - The quantitative value of the slice."),Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"'label'")," - The name of the slice."),Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"'none'")," - No text is displayed.")),"Default: ",Object(n.b)("inlineCode",{parentName:"td"},"'percentage'"))))),Object(n.b)("p",null,"The containing element is rendered as a ",Object(n.b)("inlineCode",{parentName:"p"},"div")," and you can size and style it as you see fit using CSS."),Object(n.b)("p",null,"See all ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options"}),"chart options"),"."),Object(n.b)("h2",{id:"donut-chart-example"},"Donut Chart Example"),Object(n.b)(i.c,{__position:5,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  dashId=\"donut\"\n  renderCharts={(gapi, viewId) => {\n    return (\n      <PieChart\n        gapi={gapi}\n        query={{\n          ids: viewId,\n          'start-date': '30daysAgo',\n          'end-date': 'today',\n          metrics: 'ga:sessions',\n          dimensions: 'ga:source',\n        }}\n        container=\"donut-traffic-by-device-category-chart\"\n        donut\n        options={{\n          title: 'Traffic By Source (30 Days)',\n        }}\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:i.c,Props:i.d,GoogleAnalytics:o.a,TRACKING_ID:l.a,CreatedBy:c.a,clientId:b.a,AnalyticsDashboard:d.a,PieChart:p.a},mdxType:"Playground"},Object(n.b)(d.a,{authOptions:{clientId:b.a},dashId:"donut",renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,query:{ids:t,"start-date":"30daysAgo","end-date":"today",metrics:"ga:sessions",dimensions:"ga:source"},container:"donut-traffic-by-device-category-chart",donut:!0,options:{title:"Traffic By Source (30 Days)"},mdxType:"PieChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("h2",{id:"3d-chart-example"},"3D Chart Example"),Object(n.b)(i.c,{__position:6,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  dashId=\"3d-pie\"\n  renderCharts={(gapi, viewId) => {\n    return (\n      <PieChart\n        gapi={gapi}\n        query={{\n          ids: viewId,\n          'start-date': '30daysAgo',\n          'end-date': 'today',\n          metrics: 'ga:pageviews',\n          dimensions: 'ga:pagePath',\n        }}\n        container=\"3d-pie-pageviews-per-path-chart\"\n        options={{\n          title: 'Pageviews Per Path (30 Days)',\n          is3D: true,\n        }}\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:i.c,Props:i.d,GoogleAnalytics:o.a,TRACKING_ID:l.a,CreatedBy:c.a,clientId:b.a,AnalyticsDashboard:d.a,PieChart:p.a},mdxType:"Playground"},Object(n.b)(d.a,{authOptions:{clientId:b.a},dashId:"3d-pie",renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,query:{ids:t,"start-date":"30daysAgo","end-date":"today",metrics:"ga:pageviews",dimensions:"ga:pagePath"},container:"3d-pie-pageviews-per-path-chart",options:{title:"Pageviews Per Path (30 Days)",is3D:!0},mdxType:"PieChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)(c.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/charts/PieChart.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-charts-pie-chart-mdx-b172e35b4c44fb2e6bee.js.map