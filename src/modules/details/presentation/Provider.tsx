import { FC } from "react";

import ViewController from "./ViewController";
import { Api } from "../../../services/api/api";
import { DetailsViewModel } from "./viewModel";
import { DetailsRepositoryImpl } from "../data/repository";
import { Storage } from "../../../services/storage/storage";
import { GetDetailsCase } from "../domain/usecases/getDetails";

const api = new Api(Storage);
const repository = new DetailsRepositoryImpl(api);
const getDetailsCase = new GetDetailsCase(repository);
const viewModel = new DetailsViewModel({ getDetailsCase });

const Provider: FC = () => {
    return (
        <ViewController viewModel={viewModel} />
    )
}

export default Provider;