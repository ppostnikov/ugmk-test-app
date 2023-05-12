import { IChartData } from "../interfaces/IChartData";
import { Product } from "../../../products/types/Product";
import { MONTH_CATEGORIES } from "../../../../utility/constants";

export function getChartData (factoryId: number, monthNumber: number, products: Product[]): IChartData {
    const chartData: IChartData = {
        factoryId,
        month: MONTH_CATEGORIES[monthNumber - 1],
        product1: 0,
        product2: 0,
        product3: 0,
    };

    products?.forEach((product) => {
        chartData.product1 += product.product1 || 0;
        chartData.product2 += product.product2 || 0;
        chartData.product3 += product.product3 || 0;
    });


    return chartData;
}