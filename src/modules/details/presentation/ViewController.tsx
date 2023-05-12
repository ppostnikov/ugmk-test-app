import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useErrorBoundary } from 'react-error-boundary';

import View from "./view/View";
import { DetailsViewModel } from "./viewModel";
import { getChartData } from "./utility/getChartData";

interface Props {
    viewModel: DetailsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
    const { showBoundary } = useErrorBoundary();
    const { factoryId = '-1', month = '-1' } = useParams();

    useEffect( () => {
        (async () => {
            try {
                if (factoryId && month) {
                    await viewModel.getDetails(factoryId, month);
                }
            } catch (error) {
                showBoundary(error);
            }
        })();
    }, []);

    return (
        <View
            isLoading={viewModel.isLoading}
            factoryId={parseInt(factoryId)}
            monthNumber={parseInt(month)}
            chartData={getChartData(parseInt(factoryId), parseInt(month), viewModel.products)}
        />
    )
}

export default observer(ViewController);