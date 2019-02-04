interface ISQSMessage {
    messageId: string;
    receiptHandle: string;
    attributes: Array<string>;
    messageAttributes?: Array<string>;
    body: object;
}
export declare class SQSMessage implements ISQSMessage {
    messageId: string;
    receiptHandle: string;
    attributes: Array<string>;
    messageAttributes?: Array<string>;
    body: object;
    constructor();
}
export {};
