import { Route } from "./Http/Route";
import { HttpRequest } from './Http/HttpRequest';
import { HttpResponse } from './Http/HttpResponse';
import {RouterException, RouterCodes} from './Exceptions/RouterException';

export class Router implements IRouter{
    routes:Array<Route>;

    constructor(){
        this.routes=[];
    }
    public add(method:string, path:string, handler:Function){
        this.routes.push(new Route(method, path, handler));
        //handler();
    }

    /**
     * Resolves the handler that should be run based 
     * on the provided HttpRequest
     */
    public process(req:HttpRequest){
        let appRoutes=this.routes;
        let filter=appRoutes.filter(route => {if(route.method==req.method && route.path==req.path) return route; });
        if(filter.length>0){
            try{
                return filter[0].handler();
            }catch(e){
                throw e;
            }
        }else{
            let error={
                code: RouterCodes.UNRESOLVED,
                message: "No routes provided for that METHOD and Path, please try another request",
            }
            throw new RouterException(error.code, error.message);
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

interface IRouter{
    routes:Array<Route>;
}
