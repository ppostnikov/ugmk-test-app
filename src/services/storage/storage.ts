export interface IStorage {
    getData(key: string): any;
    setData(key: string, data: any): void;
}

export class LocalStorage implements IStorage {
    setData(key: string, data: any) {
        localStorage[key] = JSON.stringify(data);
    }

    getData(key: string): any {
        return localStorage[key] ? JSON.parse(localStorage[key]) : undefined;
    }
}

export const Storage = new LocalStorage();