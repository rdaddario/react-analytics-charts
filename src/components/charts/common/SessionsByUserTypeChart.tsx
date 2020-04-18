import { PieChartOptions, GoogleAnalyticsEmbedAPI, Query } from '@devboldly/react-use-google-analytics-embed-api';
import * as React from 'react';
import { PieChart } from '../PieChart';

export interface SessionsByUserTypeChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://react-analytics-charts.netlify.com/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [PieChartOptions](https://react-analytics-charts.netlify.com/PieChart#chart-options) you'd like here, such as the `width` or `title`. */
  options?: PieChartOptions;
  /** Optional. The [query](https://react-analytics-charts.netlify.com/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://react-analytics-charts.netlify.com/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [SessionsByUserTypeChart](https://react-analytics-charts.netlify.com/SessionsByUserTypeChart)
 *
 * This [PieChart](https://react-analytics-charts.netlify.com/PieChart) charts the number of sessions for each user type (new visitors vs. returning visitors), in the date range specified (number of days ago, until today).
 *
 * This chart is useful for seeing what proportion of your visitors are new or returning.
 *
 * Refer to the [Charts Overview](https://react-analytics-charts.netlify.com/charts) for a list of all charts available.
 */
export function SessionsByUserTypeChart(
  props: SessionsByUserTypeChartProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <PieChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: 'ga:sessions',
        dimensions: 'ga:userType',
        'start-date': `${days}daysAgo`,
        'end-date': 'today',
        ids: props.viewId,
        ...props.query,
      }}
      container={props.container ? props.container : `gapi-sessions-by-user-type-chart-${days}-days`}
      donut
      options={{
        title: `Sessions By User Type (${days} Day${days !== 1 ? 's' : ''})`,
        ...props.options,
      }}
    />
  );
}