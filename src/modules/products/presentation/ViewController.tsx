import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import View from "./view/View";
import { ProductsViewModel } from "./viewModel";
import { ProductType } from "../types/ProductType";
import { getChartData } from "./utility/getChartsData";

interface Props {
    viewModel: ProductsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
    useEffect( () => {
        (async () => {
            await viewModel.getProducts();
        })();
    }, []);

    const changeProductType = (value: ProductType) => {
        viewModel.changeProductType(value);
    }

    return (
        <View
            isLoading={viewModel.isLoading}
            data={getChartData(viewModel.products)}
            changeProductType={changeProductType}
        />
    )
}

export default observer(ViewController);