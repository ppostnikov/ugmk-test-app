import { number, object, string } from 'yup';

import { Model } from "../../../../utility/model";

export class ProductModel extends Model {
    id: number | null = null;
    factory_id: number | null = null;
    date: string | null = null;
    value: number | null = null;

    getSchema() {
        return object().shape({
            id: number(),
            factory_id: number(),
            date: string().nullable(),
            value: number().nullable()
        });
    }
}