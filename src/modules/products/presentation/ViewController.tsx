import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import View from "./view/View";
import { ProductsViewModel } from "./viewModel";
import { getChartData } from "./utility/getChartsData";

interface Props {
    viewModel: ProductsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
    useEffect( () => {
        (async () => {
            try {
                await viewModel.getProducts();
            } catch (error) {
                console.log('ERROR:', error);
            }
        })();
    }, []);

    return (
        <View isLoading={viewModel.isLoading} data={getChartData(viewModel.products)} />
    )
}

export default observer(ViewController);