
interface IHttpRequest{
    method:string;
    path:string;
    header:Array<string>;
    body?:object;
}

export class HttpRequest implements IHttpRequest{
    public method:string;
    public path:string;
    public header:Array<string>;
    public body?:object;

    // constructor(method:string, path:string,header:Array<string>, body:object){
    //     this.body=body;
    //     this.path=path;
    //     this.header=header;
    //     this.method=method;
    // }
    constructor(){

    }
}