import {Router} from '../lib/Router';

let routes=new Router();

export class mock_route{
    async r(req:any){
        return await route(req);
    }
}

/**
 * Route asks for a request object it can work with so it can resolve
 * data to be sent back.
 * 
 * @param req 
 */
async function route(req:any){
    routes.add(
        'GET', 
        '/mock', 
        async function(){
            return {
                id: 1,
                first: 'Jane',
                last: 'Smith'
            }
    });
    
    return routes.process(
        req
    );
}

