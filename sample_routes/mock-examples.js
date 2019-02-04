var Router=require('../lib/Router');
var routes=new Router();

export class mock_route{
    async r(req){
        return await route(req);
    }
}

/**
 * Route asks for a request object it can work with so it can resolve
 * data to be sent back.
 * 
 * @param req 
 */
async function route(req){
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

module.exports=route