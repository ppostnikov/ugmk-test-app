export class ApplicationException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class APIError extends ApplicationException {
    constructor () {
        super('API error. Невозможно получить данные.');
    }
}

export class ValidationError extends ApplicationException {
    constructor (message?: string) {
        super(message || 'Validation error. Что-то пошло не так.');
    }
}