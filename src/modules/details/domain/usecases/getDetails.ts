import { Product } from "../../../products/types/Product";
import { DetailsRepositoryImpl } from "../../data/repository";

export class GetDetailsCase {
    constructor(private readonly repository: DetailsRepositoryImpl) {}

    async getProducts(factoryId: string, monthNumber: string): Promise<Product[]> {
        return this.repository.getDetails(factoryId, monthNumber);
    }
}