export class Response {
    code: string;
    name: string;
    message: string;

    constructor(code: string, name: string, message: string) {
        this.code = code;
        this.name = name;
        this.message = message;
    }
}
