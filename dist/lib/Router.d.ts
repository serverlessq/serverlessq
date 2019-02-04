import { Route } from "./Http/Route";
import { HttpRequest } from './Http/HttpRequest';
export declare class Router implements IRouter {
    routes: Array<Route>;
    constructor();
    add(method: string, path: string, handler: Function): void;
    /**
     * Resolves the handler that should be run based
     * on the provided HttpRequest
     */
    process(req: HttpRequest): any;
}
interface IRouter {
    routes: Array<Route>;
}
export {};
