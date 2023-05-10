import { FC, useMemo } from "react";
import Highcharts from "highcharts";
import merge from "lodash/merge";
import HighchartsReact from "highcharts-react-official";

const baseOptions = {
    title: {
        text: '',
    },
    boost: {
        enabled: true,
        useGPUTranslations: true
    },
    legend: {
        symbolRadius: 0,
        labelFormatter: function () {
            return '<span style="color: ' + this.color + '">' + this.name + '</span>';
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                connectorWidth: 0,
                formatter: function () {
                    return (
                        '<span style="color: ' + this.color + '">' + this.y + '</span>'
                    );
                }
            },
            showInLegend: true
        }
    },
} as Highcharts.Options;

const Chart: FC<HighchartsReact.Props> = (props) => {
    const { options, ...rest } = props;
    const mergedOptions = useMemo(() => merge(options, baseOptions), [options]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={mergedOptions}
            {...rest}
        />
    )
}

export default Chart;