

interface IException{
    number?:Number;
    code:string;
    message:string;
}

export class Exception implements IException{
    number?:Number;
    code:string;
    message:string;

    constructor(code:string, message:string, number?:Number){
        this.code=code;
        this.message=message;
        if(number!=undefined){
            this.number=number;
        }
    }
    public getMessage(){
        return this.message;
    }

}

enum Codes{

}