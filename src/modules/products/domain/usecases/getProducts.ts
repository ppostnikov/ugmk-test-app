import { Product } from "../../types/Product";
import { ProductModel } from "../models/ProductModel";
import { ProductType } from "../../types/ProductType";
import { ProductRepositoryImpl } from "../../data/repository";

export class GetProductsCase {
    constructor(private readonly repository: ProductRepositoryImpl) {}

    async getProducts(type: ProductType): Promise<ProductModel[]> {
        const response = await this.repository.getProducts();

        return this.selectProductsByType(response, type);
    }

    private selectProductsByType (products: Product[], type: ProductType): ProductModel[] {
        if (!products) {
            return [];
        }

        return products.map(product => new ProductModel({
            id: product.id,
            factory_id: product.factory_id,
            date: product.date,
            value: this.calculateProductValue(product, type) || 0,
        }))
    }

    private calculateProductValue (product: Product, type: ProductType): number | null {
        if (type === ProductType.ALL) {
            return (product.product1 || 0) + (product.product2 || 0);
        }

        return product[type];
    }
}