import React, { FC } from "react";

import DetailsChart from "./DetailsChart";
import { IChartData } from "../interfaces/IChartData";
import { MONTH_CATEGORIES } from "../../../../utility/constants";
import { factoryIdToFactoryName } from "../../../../utility/factoryIdToFactoryName";

interface Props {
    isLoading: boolean;
    factoryId: number;
    monthNumber: number;
    chartData: IChartData;
}

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
}

const View: FC<Props> = (props) => {
    const { isLoading, factoryId, monthNumber, chartData } = props;

    const month = MONTH_CATEGORIES[monthNumber - 1];
    const factory = factoryIdToFactoryName(factoryId);

    return (
        <div style={containerStyles as React.CSSProperties}>
            <h1>{`Статистика по продукции фабрики ${factory} за ${month}`}</h1>
            {
                isLoading
                    ? <h4>Loading...</h4>
                    : <DetailsChart data={chartData} />
            }
        </div>
    )
}

export default View