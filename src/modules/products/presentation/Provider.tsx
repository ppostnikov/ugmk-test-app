import { FC } from "react";

import ViewController from "./ViewController";
import { Api } from "../../../services/api/api";
import { ProductsViewModel } from "./viewModel";
import { ProductRepositoryImpl } from "../data/repository";
import { Storage } from "../../../services/storage/storage";
import { GetProductsCase } from "../domain/usecases/getProducts";

const api = new Api(Storage);
const repository = new ProductRepositoryImpl(api);
const getProductsCase = new GetProductsCase(repository);
const viewModel = new ProductsViewModel({ getProductsCase });

const Provider: FC = () => {
    return (
        <ViewController viewModel={viewModel} />
    )
}

export default Provider;