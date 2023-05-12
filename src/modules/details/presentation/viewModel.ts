import { makeAutoObservable, runInAction } from "mobx";

import { ValidationError } from "src/utility/exceptions";

import { Product } from "../../products/types/Product";
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
        if (this.getIsDataValid(parseInt(factoryId), parseInt(monthNumber))) {
            this._isLoading = true;

            try {
                const response = await this.useCases.getDetailsCase.getProducts(factoryId, monthNumber);

                runInAction(() => this._products = response);
            } finally {
                runInAction(() => this._isLoading = false);
            }
        } else {
            throw new ValidationError('Неверный Id фабрики или номер месяца.');
        }
    }

    private getIsDataValid (factoryId: number, monthNumber: number): boolean {
        return (
            monthNumber !== -1
            && monthNumber >= 1
            && monthNumber <= 12
            && factoryId !== -1
            && (factoryId === 1 || factoryId === 2)
        );
    }
}