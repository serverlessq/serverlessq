/**
 * A Route defines a path and method that returns a function handler
 * e.g. GET /somepath
 */
export class Route implements IRoute{
    method:string='GET'; //DEFAULT: GET //GET, POST, PUT
    path:string;    // /somepath
    handler:Function; // /Object

    constructor(method:string, path:string, handler:Function){
        this.method=method;
        this.path=path;
        this.handler=handler;
    }
}

interface IRoute{
    method:string; //GET, POST, PUT
    path:string;    // /somepath
    handler:Function; // /Function
}