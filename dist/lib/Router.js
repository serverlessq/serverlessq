"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("./Http/Route");
const RouterException_1 = require("./Exceptions/RouterException");
class Router {
    constructor() {
        this.routes = [];
    }
    add(method, path, handler) {
        this.routes.push(new Route_1.Route(method, path, handler));
        //handler();
    }
    /**
     * Resolves the handler that should be run based
     * on the provided HttpRequest
     */
    process(req) {
        let appRoutes = this.routes;
        let filter = appRoutes.filter(route => { if (route.method == req.method && route.path == req.path)
            return route; });
        if (filter.length > 0) {
            try {
                return filter[0].handler();
            }
            catch (e) {
                throw e;
            }
        }
        else {
            let error = {
                code: RouterException_1.RouterCodes.UNRESOLVED,
                message: "No routes provided for that METHOD and Path, please try another request",
            };
            throw new RouterException_1.RouterException(error.code, error.message);
        }
        // const resolver=function(routes:Array<Route>){
        //     let appRoutes=routes;
        //     return new Promise(async function(resolve, reject){
        //         let filter=appRoutes.filter(route => {if(route.method==req.method && route.path==req.path) return route; });
        //         if(filter.length>0){
        //             try{
        //                 let result=filter[0].handler();
        //                 console.log(result);
        //                 resolve(result);
        //             }catch(e){
        //                 reject(e);
        //             }
        //         }else{
        //             reject("Problem resolving router in resolve() function and handler()");
        //         }
        //     });
        // }
        //console.log(this.routes[0].handler());
        //return resolver(this.routes);
    }
}
exports.Router = Router;
