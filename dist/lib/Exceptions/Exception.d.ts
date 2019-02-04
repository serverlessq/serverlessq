interface IException {
    number?: Number;
    code: string;
    message: string;
}
export declare class Exception implements IException {
    number?: Number;
    code: string;
    message: string;
    constructor(code: string, message: string, number?: Number);
    getMessage(): string;
}
export {};
