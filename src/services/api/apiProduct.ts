import { IHttp } from "../IHttp";
import Product from "src/models/product";

export interface IApiProduct {
    id: string;
    name: string;
    description: string;
}

export default class ApiProduct {
    constructor(private http: IHttp, private url: string = "/products") {}

    loadAll = () => {
        return this.http
            .get(this.url + "/")
            .then((response) => response.map((apiProduct: IApiProduct) => new Product(apiProduct)));
    };
}
