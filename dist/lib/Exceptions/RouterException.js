"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = require("./Exception");
class RouterException extends Exception_1.Exception {
}
exports.RouterException = RouterException;
var RouterCodes;
(function (RouterCodes) {
    RouterCodes["UNRESOLVED"] = "UNRESOLVED_ROUTE";
    RouterCodes["FUNC"] = "FUNCTION_EXECUTION_FAILED";
})(RouterCodes = exports.RouterCodes || (exports.RouterCodes = {}));
