import React, { FC } from "react";

import DetailsChart from "./DetailsChart";
import { IChartData } from "../interfaces/IChartData";
import { MONTH_CATEGORIES } from "../../../../utility/constants";
import { factoryIdToFactoryName } from "../../../../utility/factoryIdToFactoryName";

interface Props {
    isLoading: boolean;
    isDataValid: boolean;
    factoryId: number;
    monthNumber: number;
    chartData: IChartData;
}

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    marginTop: "24px",
}

const titleStyles = {
    textAlign: "center",
}

const View: FC<Props> = (props) => {
    const { isLoading, factoryId, monthNumber, chartData, isDataValid } = props;

    const month = MONTH_CATEGORIES[monthNumber - 1];
    const factory = factoryIdToFactoryName(factoryId);

    return (
        <div style={containerStyles as React.CSSProperties}>
            {
                isDataValid
                    ? <>
                        <h1 style={titleStyles as React.CSSProperties}>
                            {`Статистика по продукции фабрики ${factory} за ${month}`}
                        </h1>
                        { isLoading ? <h4>Loading...</h4> : <DetailsChart data={chartData} /> }
                    </>
                    : <h1 style={titleStyles as React.CSSProperties}>
                        {`Id фабрики или номер месяца не верны`}
                    </h1>
            }
        </div>
    )
}

export default View