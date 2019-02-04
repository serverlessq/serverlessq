'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const mock_1 = require("./sample_routes/mock");
function route(event, context) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("This is a mock event");
        let l = new index_1.LambdaEvent(event);
        let request = l.req();
        let route = new mock_1.mock_route();
        let data = yield route.r(request);
        console.log(data);
        // return {
        //   status: 200,
        //   body: data
        // }
        return l.res(data);
    });
}
exports.route = route;
;
