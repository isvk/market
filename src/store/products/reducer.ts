import { List } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Product from "src/models/product";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreProduct = List<Product>;

const reducer = (state: TStoreProduct = List([]), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return state;

        case types.ADD_PRODUCTS:
            action.products.forEach((product: Product) => {
                state = state.push(product);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
