import { FC } from "react";

import { Api } from "src/services/api/api";
import { Storage } from "src/services/storage/storage";
import { ProductStorage } from "src/services/productStorage/productStorage";

import ViewController from "./ViewController";
import { ProductsViewModel } from "./viewModel";
import { ProductRepositoryImpl } from "../data/repository";
import { GetProductsCase } from "../domain/usecases/getProducts";

const api = new Api(ProductStorage);
const repository = new ProductRepositoryImpl(api);
const getProductsCase = new GetProductsCase(repository);
const viewModel = new ProductsViewModel({ getProductsCase }, Storage);

const Provider: FC = () => {
    return (
        <ViewController viewModel={viewModel} />
    )
}

export default Provider;