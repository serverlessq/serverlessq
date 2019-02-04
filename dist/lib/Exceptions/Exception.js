"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception {
    constructor(code, message, number) {
        this.code = code;
        this.message = message;
        if (number != undefined) {
            this.number = number;
        }
    }
    getMessage() {
        return this.message;
    }
}
exports.Exception = Exception;
var Codes;
(function (Codes) {
})(Codes || (Codes = {}));
