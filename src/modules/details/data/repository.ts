import { Api } from "../../../services/api/api";
import { Product } from "../../products/types/Product";
import { APIError } from "../../../utility/exceptions";

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