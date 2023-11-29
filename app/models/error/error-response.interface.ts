import {ErrorResult} from "@/app/models/error/error-result.interface";

export interface ErrorResponse {
    status: string;
    results: ErrorResult;
}