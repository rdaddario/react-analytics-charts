import { GoogleAnalyticsEmbedAPI, LineChartOptions, Query } from 'react-use-analytics-api';
import * as React from 'react';
import { LineChart } from '../LineChart';

export interface SessionsByDateChartChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://devboldly.github.io/react-analytics-charts/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. Set to `true` to show the page view count on the chart. Defaults to `false`. */
  showPageViews?: boolean;
  /** Optional. Set to `true` to show the user count on the chart. Defaults to `false`. */
  showUsers?: boolean;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [LineChartOptions](https://devboldly.github.io/react-analytics-charts/LineChart#chart-options) you'd like here, such as the `width` or `title`. */
  options?: LineChartOptions;
  /** Optional. The [query](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [SessionsByDateChart](https://devboldly.github.io/react-analytics-charts/SessionsByDateChart)
 *
 * This [LineChart](https://devboldly.github.io/react-analytics-charts/LineChart) charts the number of sessions, and optionally pageviews and/or users, for each date, until today.
 *
 * This is useful for seeing how a site's traffic changes and grows over time.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export function SessionsByDateChart(
  props: SessionsByDateChartChartProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'viewId', 'days', 'container', 'showPageViews', 'showUsers', 'options', 'query'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  const metrics = ['ga:sessions'];
  if (props.showPageViews) {
    metrics.push('ga:pageviews');
  }
  if (props.showUsers) {
    metrics.push('ga:users');
  }

  return (
    <LineChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: metrics.join(','),
        dimensions: 'ga:date',
        'start-date': `${days}daysAgo`,
        'end-date': 'today',
        ids: props.viewId,
        ...props.query,
      }}
      container={props.container ? props.container : `gapi-sessions-by-date-chart-${days}-days`}
      options={{
        title: `Sessions (${days} Day${days !== 1 ? 's' : ''})`,
        ...props.options,
      }}
    />
  );
}

SessionsByDateChart.defaultProps = {
  showPageViews: false,
  showUsers: false,
};
