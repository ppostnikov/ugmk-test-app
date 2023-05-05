import { makeAutoObservable, runInAction } from "mobx";

import { ProductType } from "../types/ProductType";
import { GetProductsCase } from "../domain/usecases/getProducts";
import {ProductModel} from "../domain/models/ProductModel";

type UseCases = {
    getProductsCase: GetProductsCase;
}

export class ProductsViewModel {
    private _products: ProductModel[] = [];
    private _isLoading: boolean = false;
    private _productType: ProductType = ProductType.ALL;

    constructor(private readonly useCases: UseCases) {
        makeAutoObservable(this);
    }

    get products() {
        return this._products;
    }

    get isLoading() {
        return this._isLoading;
    }

    async getProducts() {
        this._isLoading = true;

        try {
            const response = await this.useCases.getProductsCase.getProducts(this._productType);

            //TODO: remove as ProductModel[]
            runInAction(() => this._products = response as ProductModel[]);
        } finally {
            runInAction(() => this._isLoading = false);
        }
    }
}