import { IHttp } from "./IHttp";
import axios, { AxiosResponse } from "axios";
import { mock } from "./mock";

mock(axios);

export default class Http implements IHttp {
    get = (url: string, data: object) => {
        return this.request("GET", url, data);
    };

    post = (url: string, data: object) => {
        return this.request("POST", url, data);
    };

    put = (url: string, data: object) => {
        return this.request("PUT", url, data);
    };

    delete = (url: string, data: object) => {
        return this.request("DELETE", url, data);
    };

    request = (method: "GET" | "POST" | "PUT" | "DELETE" = "GET", url: string, data = {}) => {
        return axios({ method: method, url: "/api" + url, data: data }).then(
            (response: AxiosResponse) => response.data
        );
    };
}
