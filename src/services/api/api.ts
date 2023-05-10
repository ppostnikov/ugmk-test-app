import { IStorage } from "../storage/storage";
import { APIError } from "../../utility/exceptions";
import { ProductResponse } from "./types/ProductResponse";
import { Product } from "../../modules/products/types/Product";
import { getMonthFromDate } from "../../utility/getMonthFromDate";

export interface IProductsApi {
    getProducts(): Promise<Product[]>;
    getFactoryDetails(id: string, month: string): Promise<Product[]>
}

export class Api implements IProductsApi {
    constructor(private readonly storage: IStorage) {}

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
        const storageKey = 'products';
        const storageProducts = this.storage.getData(storageKey);
        
        if (storageProducts) {
            return storageProducts;
        } else {
            try {
                const response = await fetch('http://localhost:3001/products ', { method: 'GET',});
                const data = (await response.json())?.filter((product: ProductResponse) => product?.date !== null);

                this.storage.setData(storageKey, data);

                return data;
            } catch (e) {
                throw new APIError();
            }
        }
    }
}