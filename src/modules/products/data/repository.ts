import { Product } from "../types/Product";
import { Api } from "../../../services/api/api";

interface IProductsRepository {
    getProducts(): Promise<Product[]>;
}

export class ProductRepositoryImpl implements IProductsRepository{
    constructor(private readonly api: Api) {}

    async getProducts() {
        try {
            return await this.api.getProducts();
        } catch (err) {
            console.log('ERROR:', err);
        }
    }
}