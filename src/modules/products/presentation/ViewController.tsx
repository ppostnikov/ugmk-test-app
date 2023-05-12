import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useErrorBoundary } from 'react-error-boundary';

import View from "./view/View";
import { ProductsViewModel } from "./viewModel";
import { ProductType } from "../types/ProductType";
import { getChartData } from "./utility/getChartsData";

interface Props {
    viewModel: ProductsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
    const { showBoundary } = useErrorBoundary();

    useEffect( () => {
        (async () => {
            try {
                await viewModel.getProducts();
            } catch (error) {
                showBoundary(error);
            }
        })();
    }, []);

    const changeProductType = (value: ProductType) => {
        viewModel.changeProductType(value);
    }

    return (
        <View
            isLoading={viewModel.isLoading}
            productType={viewModel.productType}
            data={getChartData(viewModel.products)}
            changeProductType={changeProductType}
        />
    )
}

export default observer(ViewController);