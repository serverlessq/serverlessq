import { Exception } from './Exception';
export declare class RouterException extends Exception {
}
export declare enum RouterCodes {
    UNRESOLVED = "UNRESOLVED_ROUTE",
    FUNC = "FUNCTION_EXECUTION_FAILED"
}
