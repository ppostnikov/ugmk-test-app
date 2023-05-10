import React, { FC } from "react";
import Highcharts from 'highcharts';
import { useNavigate } from 'react-router-dom';

import { IChartData } from "../interfaces/IChartData";
import Chart from "../../../../components/chart/Chart";
import { MONTH_CATEGORIES } from "../../../../utility/constants";
import {factoryIdToFactoryName} from "../../../../utility/factoryIdToFactoryName";

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
    const navigate = useNavigate();

    const onSeriesClick = (factoryId: number, category: string | number) => {
        const currentMonthIndex = MONTH_CATEGORIES.findIndex(item => item === category);

        if (currentMonthIndex !== -1) {
            navigate(`/details/${factoryId}/${currentMonthIndex + 1}`);
        }
    };

    const chartOptions = {
        chart: {
            type: 'column',
        },
        xAxis: {
            min: 0,
            max: 11,
            categories: MONTH_CATEGORIES,
        },
        series: [{
            name: `Фабрика ${factoryIdToFactoryName(1)}`,
            data: data[1],
            color: 'red',
            events: {
                click: ({point}) => onSeriesClick(1, point.category),
            },
        }, {
            name: `Фабрика ${factoryIdToFactoryName(2)}`,
            data: data[2],
            color: 'blue',
            events: {
                click: ({point}) => onSeriesClick(2, point.category),
            },
        }],
    } as Highcharts.Options;

    return (
        <div style={chartStyles as React.CSSProperties}>
            <Chart options={chartOptions}/>
        </div>
    )
}

export default ProductChart;