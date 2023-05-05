import React, { FC } from "react";

import { IChartData } from "../interfaces/IChartData";
import Chart from "../../../../components/chart/Chart";

interface Props {
    data: IChartData;
}

const chartStyles = {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    border: "1px solid black",
    borderRadius: "12px",
    padding: "16px",
}

const ProductChart: FC<Props> = (props) => {
    const { data } = props;

    const chartOptions = {
        chart: {
            type: 'column',
        },
        xAxis: {
            min: 0,
            max: 11,
            categories:["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        },
        series: [{
            name: `Фабрика 1`,
            data: data[1],
            color: 'red',
        }, {
            name: `Фабрика 2`,
            data: data[2],
            color: 'blue',
        }],
    } as Highcharts.Options;

    return (
        <div style={chartStyles as React.CSSProperties}>
            <Chart options={chartOptions}/>
        </div>
    )
}

export default ProductChart;