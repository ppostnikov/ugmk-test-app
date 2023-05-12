import { Product } from "src/modules/products/types/Product";

export interface IProductStorage {
    getData(): Product[];
    setData(data: Product[]): void;
}

export class LocalProductStorage implements IProductStorage {
    private _products: Product[] = [];

    setData(data: Product[]) {
        this._products = data;
    }

    getData(): Product[] {
        return this._products;
    }
}

export const ProductStorage = new LocalProductStorage();