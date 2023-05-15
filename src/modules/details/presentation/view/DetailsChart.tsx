import React, { FC } from "react";
import Highcharts from 'highcharts';

import Chart from "src/components/chart/Chart";

import { IChartData } from "../interfaces/IChartData";

interface Props {
    data: IChartData;
}

const chartStyles: React.CSSProperties = {
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
                {
                    name: 'Продукт 3',
                    color: 'brown',
                    y: data.product3,
                },
            ],
        }],
    } as Highcharts.Options;

    return (
        <div style={chartStyles}>
            {
                data.product1 !== 0 || data.product2 !== 0 || data.product3 !== 0
                    ? <Chart options={chartOptions}/>
                    : <h3>Нет данных</h3>
            }
        </div>
    )
}

export default DetailsChart;