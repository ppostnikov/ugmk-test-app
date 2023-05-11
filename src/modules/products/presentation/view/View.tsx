import React, { FC } from "react";

import Header from "./Header";
import ProductChart from "./ProductChart";
import { IChartData } from "../interfaces/IChartData";
import { ProductType } from "../../types/ProductType";
import { ProductOption } from "../../types/ProductOption";

interface Props {
    isLoading: boolean;
    data: IChartData;
    productType: ProductType;
    changeProductType: (value: ProductType) => void,
}

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    marginTop: "24px",
}

const View: FC<Props> = (props) => {
    const { isLoading, data, productType, changeProductType } = props;

    const filterOptions: ProductOption[] = [
        { value: ProductType.ALL, label: 'Все продукты' },
        { value: ProductType.PRODUCT_1, label: 'Продукт 1' },
        { value: ProductType.PRODUCT_2, label: 'Продукт 2' },
    ];

    return (
        <div style={containerStyles as React.CSSProperties}>
            <Header
                productType={productType}
                options={filterOptions}
                onChangeFilter={changeProductType}
            />
            {
                isLoading
                    ? <h4>Loading...</h4>
                    :  <ProductChart data={data} />
            }
        </div>
    )
}

export default View