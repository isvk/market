import Bottle from "bottlejs";
import Http from "./http";
import ApiParameter from "./api/apiParameter";
import ApiProduct from "./api/apiProduct";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiParameter", ApiParameter, "Http");
bottle.service("ApiProduct", ApiProduct, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiParameter: ApiParameter;
        ApiProduct: ApiProduct;
    }
}
