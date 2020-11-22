import { IHttp } from "../IHttp";
import Product from "src/models/product";

export interface IApiProduct {
    id: string;
    name: string;
    description: string;
    parameters: { [key: string]: string };
}

export default class ApiProduct {
    constructor(private http: IHttp, private url: string = "/products") {}

    loadAll = () => {
        return this.http
            .get(this.url + "/")
            .then((response) => response.map((apiProduct: IApiProduct) => new Product(apiProduct)));
    };

    create = (product: Product) => {
        return this.http.put(this.url + "/", product.toJSON()).then((response) => new Product(response));
    };

    read = (id: Product["id"]) => {
        return this.http.get(this.url + "/" + id).then((response) => new Product(response));
    };

    update = (id: Product["id"], product: Product) => {
        return this.http.post(this.url + "/" + id, product.toJSON()).then((response) => new Product(response));
    };
}
