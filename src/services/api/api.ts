import { ProductResponse } from "./types/ProductResponse";
import { Product } from "../../modules/products/types/Product";

type FactoryDetails = {
    factory_id: number;
    products: Product[]
}

export interface IProductsApi {
    getProducts(): Promise<Product[]>;
    getFactoryDetails(id: string, month: string): Promise<FactoryDetails>
}

export class Api implements IProductsApi {
    async getProducts() {
       return this.getData();
    }

    async getFactoryDetails() {
        return this.getData();
    }

    private async getData() {
        const response = await fetch('http://localhost:3001/products ', {
            method: 'GET',
        });

        const data = (await response.json())?.filter((product: ProductResponse) => product?.date !== null);

        return data;
    }
}