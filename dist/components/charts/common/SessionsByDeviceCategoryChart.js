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
var PieChart_1 = require("../PieChart");
/**
 * See documentation: [SessionsByDeviceCategoryChart](https://devboldly.github.io/react-analytics-charts/SessionsByDeviceCategoryChart)
 *
 * This [PieChart](https://devboldly.github.io/react-analytics-charts/PieChart) charts the number of sessions for each device category (such as `desktop`, `mobile`), in the date range specified (number of days ago, until today).
 *
 * This chart is useful for seeing, proportionately by device, how your users are consuming your site's content.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function SessionsByDeviceCategoryChart(props) {
    var days = props.days ? Math.max(1, Math.abs(props.days)) : 28;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement(PieChart_1.PieChart, __assign({}, divProps, { gapi: props.gapi, query: __assign({ metrics: 'ga:sessions', dimensions: 'ga:deviceCategory', 'start-date': days + "daysAgo", 'end-date': 'today', ids: props.viewId }, props.query), container: props.container ? props.container : "gapi-sessions-by-device-category-chart-" + days + "-days", options: __assign({ title: "Sessions By Device Category (" + days + " Day" + (days !== 1 ? 's' : '') + ")" }, props.options) })));
}
exports.SessionsByDeviceCategoryChart = SessionsByDeviceCategoryChart;
