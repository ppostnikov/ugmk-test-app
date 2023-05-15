import React, { FC } from "react";

import { MONTH_CATEGORIES } from "src/utility/constants";
import { factoryIdToFactoryName } from "src/utility/factoryIdToFactoryName";

import DetailsChart from "./DetailsChart";
import { IChartData } from "../interfaces/IChartData";

interface Props {
    isLoading: boolean;
    factoryId: number;
    monthNumber: number;
    chartData: IChartData;
}

const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    marginTop: "24px",
}

const titleStyles: React.CSSProperties = {
    textAlign: "center",
}

const View: FC<Props> = (props) => {
    const { isLoading, factoryId, monthNumber, chartData } = props;

    const month = MONTH_CATEGORIES[monthNumber - 1];
    const factory = factoryIdToFactoryName(factoryId);

    return (
        <div style={containerStyles}>
            <h1 style={titleStyles}>
                {`Статистика по продукции фабрики ${factory} за ${month}`}
            </h1>
            { isLoading ? <h4>Loading...</h4> : <DetailsChart data={chartData} /> }
        </div>
    )
}

export default View