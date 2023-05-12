import { Api } from "src/services/api/api";
import { APIError } from "src/utility/exceptions";

import { Product } from "../types/Product";

interface IProductsRepository {
    getProducts(): Promise<Product[]>;
}

export class ProductRepositoryImpl implements IProductsRepository{
    constructor(private readonly api: Api) {}

    async getProducts() {
        try {
            return await this.api.getProducts();
        } catch (err) {
            throw new APIError();
        }
    }
}