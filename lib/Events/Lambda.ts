import {HttpRequest} from '../Http/HttpRequest';
import {SQSMessage} from '../SQS/SQSMessage';

interface ILambdaEvent{
    /** Type is derived from the Lambda's event message structure */
    type:string;
}

const EVENT_TYPES={
    HTTP: 'http',
    S3: 's3',
    DYNAMO: 'dynamo',
    SQS: 'sqs',
    NONE: 'UNKNOWN'
};

const EVENT_SOURCE_SQS="aws:sqs";

/**
 * Figures out how to handle different Lambda event types:
 * HTTP/API
 * S3
 * SQS
 * DynamoDB
 */
export class LambdaEvent implements ILambdaEvent{
    type:string;
    httpReq?:HttpRequest;
    sqsMessages?:Array<SQSMessage>=[];

    constructor(event:any){
        this.type=this.selectEventType(event);
        this.transform(event);
    }
    /**
     * tranforms event based on event type.
     * 
     * @param event Lambda event parsed from calling function/objects
     */
    transform(event:any){
        switch(this.type){
            case EVENT_TYPES.HTTP:{
                this.transformHttp(event);
                break;
            }
            case EVENT_TYPES.SQS:{
                this.transformSQS(event);
                break;
            }
            default: {
                
                break;
            }
        }
    } 

    /**
     * Transforms HTTP event
     * 
     * @param event 
     */
    transformHttp(event:any){
        let newHttpReq=new HttpRequest();
        console.log("transformHttp");
        console.log(JSON.stringify(event));
        newHttpReq.path=event.path;
        newHttpReq.method=event.httpMethod;
        if(['POST', 'PUT'].includes(event.httpMethod)){
            if(event.body.length>0) newHttpReq.body=JSON.parse(event.body);
        }
        newHttpReq.header=event.headers;
        this.httpReq= newHttpReq;
    }

    /**
     * Transforms SQS event
     * 
     * @param event 
     */
    transformSQS(event:any){
        event.Records.forEach(record => {
            let sqsM=new SQSMessage();
            sqsM.attributes=record.attributes;
            sqsM.body=record.body;
            sqsM.messageAttributes=record.messageAttributes;
            sqsM.messageId=record.messageId;
            sqsM.receiptHandle=record.receiptHandle;
            this.sqsMessages.push(sqsM);
        });
    }

    /**
     * Alias of getRequest
     */
    public req(){
        return this.getRequest();
    }
    
    /**Return HttpRequest Object */
    public getRequest(){
        return this.httpReq;
    }

    /**
     * Alias of getSQSMessages
     */
    public sqs(){
        return this.getSQSMessages();
    }

    /** Return SQSMessage Object */
    public getSQSMessages(){
        return this.sqsMessages;
    }

    /**
     * Outputs response - alias of getResponse
     * @param data data to use for outputting response
     */
    public res(data:any){
        console.log("res");
        return this.getResponse(data);
    }

    public getResponse(data:any){
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    }

    /**
     * Checks for what type of event this is.
     * If not found then it returns a type of NONE
     * 
     * @param event 
     */
    selectEventType(event:any):string{
        if(event.httpMethod!=undefined){
            return EVENT_TYPES.HTTP;
        }else if(event.Records!=undefined){
            if(event.Records[0].eventSource==EVENT_SOURCE_SQS){
                return EVENT_TYPES.SQS;
            }else{
                return EVENT_TYPES.NONE;
            }
        } else{
            return EVENT_TYPES.NONE
        }
    }
}
