import { Api } from "src/services/api/api";
import { APIError } from "src/utility/exceptions";
import { Product } from "src/modules/products/types/Product";

interface IDetailsRepository {
    getDetails(factoryId: string, monthNumber: string): Promise<Product[]>;
}

export class DetailsRepositoryImpl implements IDetailsRepository{
    constructor(private readonly api: Api) {}

    async getDetails(factoryId: string, monthNumber: string) {
        try {
            return await this.api.getFactoryDetails(factoryId, monthNumber);
        } catch (err) {
            throw new APIError();
        }
    }
}