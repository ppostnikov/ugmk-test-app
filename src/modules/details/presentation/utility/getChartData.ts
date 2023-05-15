import { formatWeight } from "src/utility/formatWeight";
import { MONTH_CATEGORIES } from "src/utility/constants";
import { Product } from "src/modules/products/types/Product";

import { IChartData } from "../interfaces/IChartData";

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


    return {
        ...chartData,
        product1: formatWeight(chartData.product1),
        product2: formatWeight(chartData.product2),
        product3: formatWeight(chartData.product3),
    };
}