import React, { FC } from "react";

import Header from "./Header";
import ProductChart from "./ProductChart";
import { IChartData } from "../interfaces/IChartData";

interface Props {
    isLoading: boolean;
    data: IChartData;
}

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
}

const View: FC<Props> = (props) => {
    const { isLoading, data } = props;

    return (
        <div style={containerStyles as React.CSSProperties}>
            <Header/>
            {
                isLoading
                    ? <h4>Loading...</h4>
                    :  <ProductChart data={data} />
            }
        </div>
    )
}

export default View