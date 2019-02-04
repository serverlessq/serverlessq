"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../lib/Router");
let routes = new Router_1.Router();
class mock_route {
    r(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield route(req);
        });
    }
}
exports.mock_route = mock_route;
/**
 * Route asks for a request object it can work with so it can resolve
 * data to be sent back.
 *
 * @param req
 */
function route(req) {
    return __awaiter(this, void 0, void 0, function* () {
        routes.add('GET', '/mock', function () {
            return __awaiter(this, void 0, void 0, function* () {
                return {
                    id: 1,
                    first: 'Jane',
                    last: 'Smith'
                };
            });
        });
        return routes.process(req);
    });
}
