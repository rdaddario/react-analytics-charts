(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Zhl7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return u})),a.d(t,"default",(function(){return O}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),r=a("TjRS"),i=a("ZFoC"),o=a("AdhA"),b=a("5Jen"),c=a("fAuu"),l=a("atnT"),p=a("bAZo"),s=a("W10L");a("aD51");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/charts/common/SessionsBySourceChart.mdx"}});var m={_frontmatter:u},h=r.a;function O(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(h,d({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o.a,{trackingId:b.a,mdxType:"GoogleAnalytics"}),Object(n.b)("h1",null,"SessionsBySourceChart"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"This ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/PieChart"}),"PieChart")," charts the number of sessions for each source (such as ",Object(n.b)("inlineCode",{parentName:"p"},"(direct)"),", ",Object(n.b)("inlineCode",{parentName:"p"},"google"),", or a domain name), in the date range specified (number of days ago, until today)."),Object(n.b)("p",null,"Useful for knowing what sites your traffic is coming from."),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for a list of all charts available."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)(i.c,{__position:2,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    return <SessionsBySourceChart gapi={gapi} viewId={viewId} days={28} />\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:i.c,Props:i.d,GoogleAnalytics:o.a,TRACKING_ID:b.a,CreatedBy:c.a,clientId:l.a,AnalyticsDashboard:p.a,SessionsBySourceChart:s.a},mdxType:"Playground"},Object(n.b)(p.a,{authOptions:{clientId:l.a},renderCharts:function(e,t){return Object(n.b)(s.a,{gapi:e,viewId:t,days:28,mdxType:"SessionsBySourceChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",d({parentName:"tr"},{align:null}),"Prop"),Object(n.b)("th",d({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",d({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"gapi"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ready and authorized ",Object(n.b)("a",d({parentName:"td"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"viewId"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," View ID for the view the chart pertains to. See ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/ViewSelector"}),"ViewSelector")," for more information.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"days"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"undefined")),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. Number of days the chart shows data for. Defaults to ",Object(n.b)("inlineCode",{parentName:"td"},"28"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"container"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"undefined")),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. HTML element ID for the container to which the ",Object(n.b)("a",d({parentName:"td"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API")," renders. One will be created if no value is provided.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"options"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/PieChart#chart-options"}),"PieChartOptions")),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. The options for this chart have been preconfigured, but you can add or override any ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/PieChart#chart-options"}),"PieChartOptions")," you'd like here, such as the ",Object(n.b)("inlineCode",{parentName:"td"},"width")," or ",Object(n.b)("inlineCode",{parentName:"td"},"title"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"query"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))),Object(n.b)("td",d({parentName:"tr"},{align:null}),"Optional. The ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),"query")," for this chart has been preconfigured, but you can override any ",Object(n.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),"query properties")," you'd like here.")))),Object(n.b)("p",null,"This component also supports ",Object(n.b)("strong",{parentName:"p"},"all ",Object(n.b)("inlineCode",{parentName:"strong"},"div")," props"),", such as ",Object(n.b)("inlineCode",{parentName:"p"},"className"),", ",Object(n.b)("inlineCode",{parentName:"p"},"style"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(n.b)("p",null,"If you have more than one of this chart on the page, be sure to specify a unique ",Object(n.b)("inlineCode",{parentName:"p"},"container")," ID."),Object(n.b)("h2",{id:"data-queried"},"Data Queried"),Object(n.b)("p",null,"This query's date range spans from a ",Object(n.b)("inlineCode",{parentName:"p"},"start-date")," of ",Object(n.b)("inlineCode",{parentName:"p"},"NdaysAgo"),", where ",Object(n.b)("inlineCode",{parentName:"p"},"N")," is the ",Object(n.b)("inlineCode",{parentName:"p"},"days")," prop provided, until an ",Object(n.b)("inlineCode",{parentName:"p"},"end-date")," of ",Object(n.b)("inlineCode",{parentName:"p"},"today"),". See ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/DataChart"}),"DataChart")," for more information on queries."),Object(n.b)("h3",{id:"metrics"},"Metrics"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ga:sessions"))),Object(n.b)("h3",{id:"dimensions"},"Dimensions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ga:source"))),Object(n.b)("h2",{id:"customizing"},"Customizing"),Object(n.b)("p",null,"This chart has been preconfigured for ease of use, but you can customize it by providing a ",Object(n.b)("inlineCode",{parentName:"p"},"query")," or ",Object(n.b)("inlineCode",{parentName:"p"},"options")," prop."),Object(n.b)("p",null,"The properties you specify in either prop object will override the ones used by this chart."),Object(n.b)("p",null,"This means you can cherry-pick the properties you'd like to override, such as the ",Object(n.b)("inlineCode",{parentName:"p"},"metrics")," in the ",Object(n.b)("inlineCode",{parentName:"p"},"query"),", or the ",Object(n.b)("inlineCode",{parentName:"p"},"width")," in ",Object(n.b)("inlineCode",{parentName:"p"},"options"),", without having to create a completely ",Object(n.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/charts#custom-charts"}),"custom chart"),"."),Object(n.b)(c.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/charts/common/SessionsBySourceChart.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-charts-common-sessions-by-source-chart-mdx-6ab034a85019ab074625.js.map