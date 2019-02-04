
interface ISQSMessage{
    messageId:string;
    receiptHandle:string;
    attributes:Array<string>;
    messageAttributes?:Array<string>;
    body:object;
}

export class SQSMessage implements ISQSMessage{
    public messageId:string;
    public receiptHandle:string;
    public attributes:Array<string>;
    public messageAttributes?:Array<string>;
    public body:object;

    constructor(){

    }
}