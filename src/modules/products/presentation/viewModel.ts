import { makeAutoObservable, runInAction } from "mobx";

import { IStorage } from "src/services/storage/storage";

import { ProductType } from "../types/ProductType";
import { ProductModel } from "../domain/models/ProductModel";
import { GetProductsCase } from "../domain/usecases/getProducts";

type UseCases = {
    getProductsCase: GetProductsCase;
}

const PRODUCTS_FILTER_STORAGE_KEY = 'products_filter';

export class ProductsViewModel {
    private _products: ProductModel[] = [];
    private _isLoading: boolean = false;
    private _productType: ProductType = ProductType.ALL;

    constructor(private readonly useCases: UseCases, private readonly storage: IStorage) {
        makeAutoObservable(this);

        this.initFilterValue();
    }

    get products() {
        return this._products;
    }

    get productType() {
        return this._productType;
    }

    get isLoading() {
        return this._isLoading;
    }

    async changeProductType(value: ProductType) {
        this._productType = value;

        this.setFilterValue();
        await this.getProducts();
    }

    async getProducts() {
        this._isLoading = true;

        try {
            const response = await this.useCases.getProductsCase.getProducts(this._productType);

            runInAction(() => this._products = response);
        } finally {
            runInAction(() => this._isLoading = false);
        }
    }

    private setFilterValue() {
        this.storage.setData(PRODUCTS_FILTER_STORAGE_KEY, this._productType);
    }

    private initFilterValue() {
        const productType = this.storage.getData(PRODUCTS_FILTER_STORAGE_KEY) as ProductType;

        if (productType && Object.values(ProductType).includes(productType)) {
            this._productType = productType;
        } else {
            this._productType = ProductType.ALL;

            this.setFilterValue();
        }
    }
}