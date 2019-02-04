"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpResponse {
    constructor(body) {
        this.body = body;
        this.json = JSON.stringify(body);
        //don't set headers at moment, handled by API Gateway in Lambda
    }
    Body() {
        return this.body;
    }
    JSON() {
        return this.json;
    }
    Header() {
        return this.header;
    }
}
exports.HttpResponse = HttpResponse;
