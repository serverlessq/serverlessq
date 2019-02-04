import { HttpRequest } from '../Http/HttpRequest';
import { SQSMessage } from '../SQS/SQSMessage';
interface ILambdaEvent {
    /** Type is derived from the Lambda's event message structure */
    type: string;
}
/**
 * Figures out how to handle different Lambda event types:
 * HTTP/API
 * S3
 * SQS
 * DynamoDB
 */
export declare class LambdaEvent implements ILambdaEvent {
    type: string;
    httpReq?: HttpRequest;
    sqsMessages?: Array<SQSMessage>;
    constructor(event: any);
    /**
     * tranforms event based on event type.
     *
     * @param event Lambda event parsed from calling function/objects
     */
    transform(event: any): void;
    /**
     * Transforms HTTP event
     *
     * @param event
     */
    transformHttp(event: any): void;
    /**
     * Transforms SQS event
     *
     * @param event
     */
    transformSQS(event: any): void;
    /**
     * Alias of getRequest
     */
    req(): HttpRequest;
    /**Return HttpRequest Object */
    getRequest(): HttpRequest;
    /**
     * Alias of getSQSMessages
     */
    sqs(): SQSMessage[];
    /** Return SQSMessage Object */
    getSQSMessages(): SQSMessage[];
    /**
     * Outputs response - alias of getResponse
     * @param data data to use for outputting response
     */
    res(data: any): {
        statusCode: number;
        body: string;
    };
    getResponse(data: any): {
        statusCode: number;
        body: string;
    };
    /**
     * Checks for what type of event this is.
     * If not found then it returns a type of NONE
     *
     * @param event
     */
    selectEventType(event: any): string;
}
export {};
