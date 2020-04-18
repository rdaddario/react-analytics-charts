(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{J81F:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return h})),a.d(t,"default",(function(){return g}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var r=a("/FXl"),n=a("TjRS"),o=a("ZFoC"),c=a("AdhA"),i=a("5Jen"),l=a("fAuu"),b=a("atnT"),p=a("bAZo"),s=a("/KvX");a("aD51");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var h={};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/charts/DataChart.mdx"}});var m={_frontmatter:h},O=n.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(O,d({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.a,{trackingId:i.a,mdxType:"GoogleAnalytics"}),Object(r.b)("h1",null,"DataChart"),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"A DataChart is the base chart component used for all analytics charts. "),Object(r.b)("p",null,"You can use this to create a custom chart by providing your own data query (see ",Object(r.b)("a",d({parentName:"p"},{href:"#query-prop"}),"Query Prop")," below),\nthe container and type of chart (see ",Object(r.b)("a",d({parentName:"p"},{href:"#chart-prop"}),"Chart Prop")," below), and options for the chart depending on the type of chart you've chosen."),Object(r.b)("p",null,"For convenience you can use the ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/BarChart"}),"BarChart"),", ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/ColumnChart"}),"ColumnChart"),", ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/GeoChart"}),"GeoChart"),", ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/LineChart"}),"LineChart"),",\n",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/LineChart"}),"PieChart"),", and ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/TableChart"}),"TableChart")," components, which wrap DataChart and handle configuring the chart prop of a\nDataChart for you. (Those components also include ",Object(r.b)("a",d({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," types for each set of options.)"),Object(r.b)("p",null,"There are also a number of ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/charts#common-charts"}),"ready-made charts")," available for you to use with preconfigured queries and chart options. Refer to the ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for a list of all charts that wrap DataChart."),Object(r.b)("p",null,"This component wraps the ",Object(r.b)("a",d({parentName:"p"},{href:"https://react-use-analytics-api.netlify.app/useDataChart"}),Object(r.b)("inlineCode",{parentName:"a"},"useDataChart"))," hook, which uses the ",Object(r.b)("a",d({parentName:"p"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API")," to query the analytics data and render the chart into a container on the page."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)(o.c,{__position:2,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    return (\n      <DataChart\n        gapi={gapi}\n        query={{\n          ids: viewId,\n          'start-date': '28daysAgo',\n          'end-date': 'today',\n          metrics: 'ga:sessions',\n          dimensions: 'ga:browser',\n        }}\n        chart={{\n          container: 'data-chart-container',\n          type: 'BAR',\n          options: {\n            title: 'Sessions By Browser (28 Days)',\n          },\n        }}\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:n.a,Playground:o.c,Props:o.d,GoogleAnalytics:c.a,TRACKING_ID:i.a,CreatedBy:l.a,clientId:b.a,AnalyticsDashboard:p.a,DataChart:s.a},mdxType:"Playground"},Object(r.b)(p.a,{authOptions:{clientId:b.a},renderCharts:function(e,t){return Object(r.b)(s.a,{gapi:e,query:{ids:t,"start-date":"28daysAgo","end-date":"today",metrics:"ga:sessions",dimensions:"ga:browser"},chart:{container:"data-chart-container",type:"BAR",options:{title:"Sessions By Browser (28 Days)"}},mdxType:"DataChart"})},mdxType:"AnalyticsDashboard"})),Object(r.b)("br",null),Object(r.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",d({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",d({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",d({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"gapi"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," The ready and authorized ",Object(r.b)("a",d({parentName:"td"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"query"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("a",d({parentName:"td"},{href:"#query-prop"}),Object(r.b)("inlineCode",{parentName:"a"},"Query"))),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," The ",Object(r.b)("a",d({parentName:"td"},{href:"#query-prop"}),Object(r.b)("inlineCode",{parentName:"a"},"Query"))," for the Analytics data. See below.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"chart"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("a",d({parentName:"td"},{href:"#chart-prop"}),Object(r.b)("inlineCode",{parentName:"a"},"Chart"))),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," Specifies the ",Object(r.b)("a",d({parentName:"td"},{href:"#chart-prop"}),Object(r.b)("inlineCode",{parentName:"a"},"Chart"))," to be rendered. See below.")))),Object(r.b)("p",null,"This component also supports ",Object(r.b)("strong",{parentName:"p"},"all ",Object(r.b)("inlineCode",{parentName:"strong"},"div")," props"),", such as ",Object(r.b)("inlineCode",{parentName:"p"},"className"),", ",Object(r.b)("inlineCode",{parentName:"p"},"style"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(r.b)("h3",{id:"query-prop"},"Query Prop"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"query")," prop specifies the analytics data to retrieve. The following properties are all required except for ",Object(r.b)("inlineCode",{parentName:"p"},"dimensions")," (although many queries require at least one dimension to work)."),Object(r.b)("p",null,"There are many additional properties not listed here. See Google's ",Object(r.b)("a",d({parentName:"p"},{href:"https://developers.google.com/analytics/devguides/reporting/core/v3/reference#q_details"}),Object(r.b)("inlineCode",{parentName:"a"},"Query")," spec")," for a full list of Query properties."),Object(r.b)("p",null,"Refer to the ",Object(r.b)("a",d({parentName:"p"},{href:"https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/"}),"Dimensions ","&"," Metrics Explorer")," for possible metrics and dimensions."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",d({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",d({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",d({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"ids"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," The unique view ID used to retrieve the Analytics data. This ID is the concatenation of the namespace ga: with the Analytics view (profile) ID. See ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/analytics/devguides/reporting/core/v3/reference#ids"}),"official ",Object(r.b)("inlineCode",{parentName:"a"},"ids")," docs")," for more info.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"start-date"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," All Analytics data requests must specify a date range. If you do not include ",Object(r.b)("inlineCode",{parentName:"td"},"start-date")," and ",Object(r.b)("inlineCode",{parentName:"td"},"end-date")," parameters in the request, the server returns an error. Date values can be for a specific date by using the pattern ",Object(r.b)("inlineCode",{parentName:"td"},"YYYY-MM-DD")," or relative by using ",Object(r.b)("inlineCode",{parentName:"td"},"today"),", ",Object(r.b)("inlineCode",{parentName:"td"},"yesterday"),", or the ",Object(r.b)("inlineCode",{parentName:"td"},"NdaysAgo")," pattern. See ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startDate"}),"official ",Object(r.b)("inlineCode",{parentName:"a"},"start-date")," docs")," for more info.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"end-date"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," All Analytics data requests must specify a date range. If you do not include ",Object(r.b)("inlineCode",{parentName:"td"},"start-date")," and ",Object(r.b)("inlineCode",{parentName:"td"},"end-date")," parameters in the request, the server returns an error. Date values can be for a specific date by using the pattern ",Object(r.b)("inlineCode",{parentName:"td"},"YYYY-MM-DD")," or relative by using ",Object(r.b)("inlineCode",{parentName:"td"},"today"),", ",Object(r.b)("inlineCode",{parentName:"td"},"yesterday"),", or the ",Object(r.b)("inlineCode",{parentName:"td"},"NdaysAgo")," pattern. See ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/analytics/devguides/reporting/core/v3/reference#endDate"}),"official ",Object(r.b)("inlineCode",{parentName:"a"},"end-date")," docs")," for more info.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"metrics"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," One or more comma separated metrics for the query. See the ",Object(r.b)("a",d({parentName:"td"},{href:"https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/"}),"Dimensions ","&"," Metrics Explorer")," for possible metrics. See ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/analytics/devguides/reporting/core/v3/reference#metrics"}),"official ",Object(r.b)("inlineCode",{parentName:"a"},"metrics")," docs")," for more info.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"dimensions"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",d({parentName:"tr"},{align:null}),"Optional. One or more comma separated dimensions for the query. See the ",Object(r.b)("a",d({parentName:"td"},{href:"https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/"}),"Dimensions ","&"," Metrics Explorer")," for possible dimensions. See ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/analytics/devguides/reporting/core/v3/reference#metrics"}),"official ",Object(r.b)("inlineCode",{parentName:"a"},"dimensions")," docs")," for more info.")))),Object(r.b)("h4",{id:"example-query-prop"},"Example Query Prop"),Object(r.b)("pre",null,Object(r.b)("code",d({parentName:"pre"},{className:"language-jsx"}),"{\n  ids: viewId,\n  'start-date': `14daysAgo`,\n  'end-date': 'yesterday',\n  metrics: 'ga:sessions,ga:pageviews,ga:users',\n  dimensions: 'ga:date',\n}\n")),Object(r.b)("h3",{id:"chart-prop"},"Chart Prop"),Object(r.b)("p",null,"The chart prop is an object that specifies the ",Object(r.b)("inlineCode",{parentName:"p"},"container")," ID, chart ",Object(r.b)("inlineCode",{parentName:"p"},"type"),", and chart ",Object(r.b)("inlineCode",{parentName:"p"},"options")," that the ",Object(r.b)("a",d({parentName:"p"},{href:"https://react-use-analytics-api.netlify.app/"}),"Google Analytics Embed API")," will use to generate the chart."),Object(r.b)("p",null,"The API will render your chart into the container with the ID provided. See the official ",Object(r.b)("a",d({parentName:"p"},{href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart-options"}),"Chart specs")," by Google for more information."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",d({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",d({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",d({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"container"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," Provide a unique ID for the ",Object(r.b)("inlineCode",{parentName:"td"},"div")," that will contain the chart.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/linechart"}),Object(r.b)("inlineCode",{parentName:"a"},'"LINE"'))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/columnchart"}),Object(r.b)("inlineCode",{parentName:"a"},'"COLUMN"'))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/barchart"}),Object(r.b)("inlineCode",{parentName:"a"},'"BAR"'))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart"}),Object(r.b)("inlineCode",{parentName:"a"},'"PIE"'))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table"}),Object(r.b)("inlineCode",{parentName:"a"},'"TABLE"'))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart"}),Object(r.b)("inlineCode",{parentName:"a"},'"GEO"'))),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Required.")," The chart type, as a string. See the ",Object(r.b)("a",d({parentName:"td"},{href:"/react-analytics-charts/charts"}),"Charts Overview"),". Choose from ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/linechart"}),"line chart"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/columnchart"}),"column chart"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/barchart"}),"bar chart"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart"}),"pie chart"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table"}),"table"),", or ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart"}),"geo chart"),". Refer to the ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery"}),"chart gallery")," to decide which chart you'd like.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",d({parentName:"tr"},{align:null}),"options"),Object(r.b)("td",d({parentName:"tr"},{align:null}),Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/linechart#configuration-options"}),Object(r.b)("inlineCode",{parentName:"a"},"LineChartOptions"))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options"}),Object(r.b)("inlineCode",{parentName:"a"},"ColumnChartOptions"))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options"}),Object(r.b)("inlineCode",{parentName:"a"},"BarChartOptions"))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options"}),Object(r.b)("inlineCode",{parentName:"a"},"PieChartOptions"))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options"}),Object(r.b)("inlineCode",{parentName:"a"},"TableChartOptions"))," ","|"," ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options"}),Object(r.b)("inlineCode",{parentName:"a"},"GeoChartOptions"))),Object(r.b)("td",d({parentName:"tr"},{align:null}),"Optional. The options for the chart, if any. To determine what to use here, refer to the Configuration Options section for ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/linechart#configuration-options"}),"line charts"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options"}),"column charts"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options"}),"bar charts"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options"}),"pie charts"),", ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options"}),"tables"),", or ",Object(r.b)("a",d({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options"}),"geo charts"),", for the chart ",Object(r.b)("inlineCode",{parentName:"td"},"type")," you've chosen.")))),Object(r.b)("h4",{id:"example-chart-prop"},"Example Chart Prop"),Object(r.b)("pre",null,Object(r.b)("code",d({parentName:"pre"},{className:"language-jsx"}),"{\n  container: 'sessions-data-chart-container',\n  type: 'LINE',\n  options: {\n    title: 'Sessions (28 Days)',\n  },\n}\n")),Object(r.b)("p",null,"For convenience you can use the ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/BarChart"}),"BarChart"),", ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/ColumnChart"}),"ColumnChart"),", ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/GeoChart"}),"GeoChart"),", ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/LineChart"}),"LineChart"),", ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/PieChart"}),"PieChart"),", and ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/TableChart"}),"TableChart")," components, which handle configuring the chart prop of a DataChart for you. Refer to the ",Object(r.b)("a",d({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for all charts that wrap DataChart."),Object(r.b)("h2",{id:"styling"},"Styling"),Object(r.b)("p",null,"The data chart is rendered as a ",Object(r.b)("inlineCode",{parentName:"p"},"div")," with the class name ",Object(r.b)("inlineCode",{parentName:"p"},"gapi-data-chart-container"),". Inspect the DOM to see what Google renders there."),Object(r.b)("p",null,"The following will style all charts used by this library:"),Object(r.b)("pre",null,Object(r.b)("code",d({parentName:"pre"},{className:"language-css"}),".gapi-data-chart-container {\n  /* Custom styles */\n}\n")),Object(r.b)(l.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/charts/DataChart.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-charts-data-chart-mdx-36b6350fd7d513c5cbab.js.map