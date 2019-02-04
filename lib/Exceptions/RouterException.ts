import {Exception} from './Exception';

export class RouterException extends Exception{
   
}
export enum RouterCodes{
    UNRESOLVED='UNRESOLVED_ROUTE',
    FUNC='FUNCTION_EXECUTION_FAILED'
}
