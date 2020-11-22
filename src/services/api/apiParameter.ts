import { IHttp } from "../IHttp";
import Parameter from "src/models/parameter";

export interface IApiParameter {
    id: string;
    name: string;
    description: string;
}

export default class ApiParameter {
    constructor(private http: IHttp, private url: string = "/parameters") {}

    loadAll = () => {
        return this.http
            .get(this.url + "/")
            .then((response) => response.map((apiParameter: IApiParameter) => new Parameter(apiParameter)));
    };
}
