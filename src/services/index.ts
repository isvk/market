import Bottle from "bottlejs";
import Http from "./http";
import ApiProduct from "./api/apiProduct";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiProduct", ApiProduct, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiProduct: ApiProduct;
    }
}
