import { FC } from "react";

import { Api } from "src/services/api/api";
import { ProductStorage } from "src/services/productStorage/productStorage";

import ViewController from "./ViewController";
import { DetailsViewModel } from "./viewModel";
import { DetailsRepositoryImpl } from "../data/repository";
import { GetDetailsCase } from "../domain/usecases/getDetails";

const api = new Api(ProductStorage);
const repository = new DetailsRepositoryImpl(api);
const getDetailsCase = new GetDetailsCase(repository);
const viewModel = new DetailsViewModel({ getDetailsCase });

const Provider: FC = () => {
    return (
        <ViewController viewModel={viewModel} />
    )
}

export default Provider;