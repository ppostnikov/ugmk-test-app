import { makeAutoObservable, runInAction } from "mobx";

import { Product } from "../../products/types/Product";
import { ValidationError } from "../../../utility/exceptions";
import { GetDetailsCase } from "../domain/usecases/getDetails";

type UseCases = {
    getDetailsCase: GetDetailsCase;
}

export class DetailsViewModel {
    private _products: Product[] = [];
    private _isLoading: boolean = false;

    constructor(private readonly useCases: UseCases) {
        makeAutoObservable(this);
    }

    get products() {
        return this._products;
    }

    get isLoading() {
        return this._isLoading;
    }

    async getDetails(factoryId: string, monthNumber: string) {
        if (parseInt(monthNumber) !== -1 && parseInt(monthNumber) >= 1 && parseInt(monthNumber) <= 12 && parseInt(factoryId) !== -1) {
            this._isLoading = true;

            try {
                const response = await this.useCases.getDetailsCase.getProducts(factoryId, monthNumber);

                runInAction(() => this._products = response);
            } finally {
                runInAction(() => this._isLoading = false);
            }
        } else {
            throw new ValidationError('Id фабрики или номер месяца не верны.');
        }
    }
}