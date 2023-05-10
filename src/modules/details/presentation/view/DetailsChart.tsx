import React, { FC } from "react";
import Highcharts from 'highcharts';

import { IChartData } from "../interfaces/IChartData";
import Chart from "../../../../components/chart/Chart";

interface Props {
    data: IChartData;
}

const chartStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    width: "auto",
    minWidth: "720px",
}

const DetailsChart: FC<Props> = (props) => {
    const { data } = props;

    const chartOptions = {
        chart: {
            type: 'pie',
        },
        series: [{
            name: `Объем`,
            colorByPoint: true,
            data: [
                {
                    name: 'Продукт 1',
                    color: 'green',
                    y: data.product1,
                },
                {
                    name: 'Продукт 2',
                    color: 'orange',
                    y: data.product2,
                },
            ],
        }],
    } as Highcharts.Options;

    return (
        <div style={chartStyles as React.CSSProperties}>
            <Chart options={chartOptions}/>
        </div>
    )
}

export default DetailsChart;