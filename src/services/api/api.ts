import { Product } from "src/modules/products/types/Product";
import { getMonthFromDate } from "src/utility/getMonthFromDate";
import { IProductStorage } from "src/services/productStorage/productStorage";

import { ProductResponse } from "./types/ProductResponse";

export interface IProductsApi {
    getProducts(): Promise<Product[]>;
    getFactoryDetails(id: string, month: string): Promise<Product[]>
}

export class Api implements IProductsApi {
    constructor(private readonly storage: IProductStorage) {}

    async getProducts() {
       return this.getData();
    }

    async getFactoryDetails(factoryId: string, monthNumber: string) {
        const response  = await this.getData();

        return response.filter(product => (
            String(product.factory_id) === factoryId && String(getMonthFromDate(product.date)) === monthNumber
        ))
    }

    private async getData(): Promise<Product[]> {
        const storageProducts = this.storage.getData();
        
        if (storageProducts?.length) {
            return storageProducts;
        } else {
            const response = await fetch('http://localhost:3001/products ', { method: 'GET',});
            const data = (await response.json())?.filter((product: ProductResponse) => product?.date !== null);

            this.storage.setData(data);

            return data;
        }
    }
}