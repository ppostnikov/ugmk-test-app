import merge from 'lodash/merge';
import { ObjectSchema, object } from 'yup';

export class Model {
    constructor (attributes = {}) {
        merge(this, attributes);
        this.validate();
    }

    validate () {
        const schema = this.getSchema();

        if (!schema) {
            throw new Error('Schema is not defined');
        }

        schema.validateSync(this, { abortEarly: true });
    }

    getSchema():ObjectSchema<{}> {
        return object().shape({});
    }
}
