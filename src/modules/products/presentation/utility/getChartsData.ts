import { IChartData } from "../interfaces/IChartData";
import { getMonthFromDate } from "./getMonthFromDate";
import { ProductModel } from "../../domain/models/ProductModel";

export function getChartData (products: ProductModel[]): IChartData {
    const chartData: IChartData = {};

    products.forEach(product => {
        if (product.date !== null && product.factory_id !== null && product.value !== null) {
            if (!chartData[product.factory_id]) {
                chartData[product.factory_id] = (new Array(12)).fill(0);
            }

            const month= getMonthFromDate(product.date);

            chartData[product.factory_id][month - 1] += product.value;
        }
    });

    return chartData;
}