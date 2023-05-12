import React, { FC } from "react";
import Highcharts from 'highcharts';
import { useNavigate } from 'react-router-dom';

import Chart from "src/components/chart/Chart";
import { MONTH_CATEGORIES } from "src/utility/constants";
import { factoryIdToFactoryName } from "src/utility/factoryIdToFactoryName";

import { IChartData } from "../interfaces/IChartData";

interface Props {
    data: IChartData;
}

const chartStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "12px",
    padding: "16px",
    width: "auto",
    minWidth: "720px",
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
        yAxis: {
            title: {
                text: '',
            },
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
        <div style={chartStyles}>
            {
                Object.values(data)?.length > 0
                    ? <Chart options={chartOptions}/>
                    : <h3>Нет данных</h3>
            }
        </div>
    )
}

export default ProductChart;