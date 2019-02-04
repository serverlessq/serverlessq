
interface IHttpResponse{
    header:Array<string>;
    body:string;
}

export class HttpResponse implements IHttpResponse{
    header:Array<string>;
    body:string;
    json:string;

    constructor(body:any){
        this.body=body;
        this.json=JSON.stringify(body);
        //don't set headers at moment, handled by API Gateway in Lambda
    }

    public Body(){
        return this.body;
    }

    public JSON(){
        return this.json;
    }

    public Header(){
        return this.header;
    }
}
