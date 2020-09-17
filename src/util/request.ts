import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestCongig extends AxiosRequestConfig {}
export interface Response<T = any> extends AxiosResponse<T>{}

export class Request {
    
    constructor(private request = Axios){

    }

    public get<T>(url: string, config: RequestCongig = {}): Promise<Response> {
        return this.request.get<T, Response<T>>(url, config)
    }

    public static isRequestError(error: AxiosError): boolean {
        return !!(error.response && error.response.status);
    }

}