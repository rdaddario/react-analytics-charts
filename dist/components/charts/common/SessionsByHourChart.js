"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ColumnChart_1 = require("../ColumnChart");
/**
 * See documentation: [SessionsByHourChart](https://devboldly.github.io/react-analytics-charts/SessionsByHourChart)
 *
 * This [ColumnChart](https://devboldly.github.io/react-analytics-charts/ColumnChart) charts the number of sessions for each hour of the day (`0` for midnight, `12` for noon, `18` for 6pm, etc), in the date range specified (number of days ago, until today).
 *
 * This shows what time of day users are most active and can be helpful for knowing when to post.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function SessionsByHourChart(props) {
    var days = props.days ? Math.max(1, Math.abs(props.days)) : 28;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement(ColumnChart_1.ColumnChart, __assign({}, divProps, { gapi: props.gapi, query: __assign({ metrics: 'ga:sessions', dimensions: 'ga:hour', 'start-date': days + "daysAgo", 'end-date': 'today', ids: props.viewId }, props.query), container: props.container ? props.container : "gapi-sessions-by-hour-chart-" + days + "-days", options: __assign({ title: "Sessions By Hour (" + days + " Day" + (days !== 1 ? 's' : '') + ")" }, props.options) })));
}
exports.SessionsByHourChart = SessionsByHourChart;
