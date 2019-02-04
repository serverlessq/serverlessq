"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Route defines a path and method that returns a function handler
 * e.g. GET /somepath
 */
class Route {
    constructor(method, path, handler) {
        this.method = 'GET'; //DEFAULT: GET //GET, POST, PUT
        this.method = method;
        this.path = path;
        this.handler = handler;
    }
}
exports.Route = Route;
