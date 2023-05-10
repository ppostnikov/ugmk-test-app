export class ProductModel {
    id: number = 0;
    factory_id: number = 0;
    date: string = '';
    value: number = 0;

    constructor(data: ProductModel) {
        this.id = data.id;
        this.factory_id = data.factory_id;
        this.date = data.date;
        this.value = data.value;
    }
}