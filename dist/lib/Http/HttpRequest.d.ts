interface IHttpRequest {
    method: string;
    path: string;
    header: Array<string>;
    body?: object;
}
export declare class HttpRequest implements IHttpRequest {
    method: string;
    path: string;
    header: Array<string>;
    body?: object;
    constructor();
}
export {};
