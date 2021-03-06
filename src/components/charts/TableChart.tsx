import { GoogleAnalyticsEmbedAPI, Query, TableChartOptions } from 'react-use-analytics-api';
import * as React from 'react';
import { DataChart } from './DataChart';

export interface TableChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** Provide an ID for the `div` that will contain the chart. */
  query: Query;
  /** **Required.** The [`Query`](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) for the Analytics data. See the Query Prop section of [DataChart](https://devboldly.github.io/react-analytics-charts/DataChart). */
  container: string;
  /** Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for [tables](https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options). */
  options?: TableChartOptions;
}

/**
 * See documentation: [TableChart](https://devboldly.github.io/react-analytics-charts/TableChart)
 *
 * A table shows sortable rows of analytics data under labeled columns.
 *
 * You can use this to create a custom table by providing your own data query (see [DataChart](https://devboldly.github.io/react-analytics-charts/DataChart) for more info on queries) and,
 * optionally, [table options](https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options) for the table.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export function TableChart(props: TableChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'query', 'container', 'options'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <DataChart
      {...divProps}
      gapi={props.gapi}
      query={props.query}
      chart={{
        container: props.container,
        type: 'TABLE',
        options: {
          width: '100%',
          ...props.options,
        },
      }}
    />
  );
}
