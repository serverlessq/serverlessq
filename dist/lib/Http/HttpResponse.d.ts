interface IHttpResponse {
    header: Array<string>;
    body: string;
}
export declare class HttpResponse implements IHttpResponse {
    header: Array<string>;
    body: string;
    json: string;
    constructor(body: any);
    Body(): string;
    JSON(): string;
    Header(): string[];
}
export {};
