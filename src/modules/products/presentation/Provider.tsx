import { FC } from "react";

import ViewController from "./ViewController";
import { Api } from "../../../services/api/api";
import { ProductsViewModel } from "./viewModel";
import { ProductRepositoryImpl } from "../data/repository";
import { GetProductsCase } from "../domain/usecases/getProducts";

const api = new Api();
const repository = new ProductRepositoryImpl(api);
const getProductsCase = new GetProductsCase(repository);
const viewModel = new ProductsViewModel({ getProductsCase });

const Provider: FC = () => {
    return (
        <ViewController viewModel={viewModel} />
    )
}

export default Provider;