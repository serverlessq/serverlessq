/**
 * A Route defines a path and method that returns a function handler
 * e.g. GET /somepath
 */
export declare class Route implements IRoute {
    method: string;
    path: string;
    handler: Function;
    constructor(method: string, path: string, handler: Function);
}
interface IRoute {
    method: string;
    path: string;
    handler: Function;
}
export {};
