import {Product} from "../../modules/products/types/Product";

export interface IStorage {
    getData(key: string): Product[];
    setData(key: string, data: Product[]): void;
}

export class LocalStorage implements IStorage {
    setData(key: string, data: Product[]) {
        localStorage[key] = JSON.stringify(data);
    }

    getData(key: string): Product[] {
        return localStorage[key] ? JSON.parse(localStorage[key]) : undefined;
    }
}

export const Storage = new LocalStorage();