import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Product from "src/models/product";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreProduct = Map<Product["id"], Product>;

const reducer = (state: TStoreProduct = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return state;

        case types.ADD_PRODUCTS:
            action.products.forEach((product: Product) => {
                state = state.set(product.id, product);
            });
            return state;

        case types.CREATE_PRODUCT_SUCCESS:
            return state.set(action.product.id, action.product);

        default:
            return state;
    }
};

export default reducer;
