import {Product} from "../../types/Product";
import {ProductType} from "../../types/ProductType";
import {ProductRepositoryImpl} from "../../data/repository";

export class GetProductsCase {
    constructor(private readonly repository: ProductRepositoryImpl) {}

    async getProducts(type: ProductType) {
        const response = await this.repository.getProducts();

        return this.selectProductsByType(response, type);
    }

    private selectProductsByType (products: Product[], type: ProductType) {
        if (!products) {
            return [];
        }

        //TODO: add new Model()
        return products.map(product => ({
            id: product.id,
            factory_id: product.factory_id,
            date: product.date,
            value: this.calculateProductValue(product, type),
        }))
    }

    private calculateProductValue (product: Product, type: ProductType) {
        if (type === ProductType.ALL) {
            return (product.product1 || 0) + (product.product2 || 0);
        }

        return product[type];
    }
}