import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import products, { TStoreProduct } from "./products/reducer";

export interface IStore {
    router: typeof connectRouter;
    products: TStoreProduct;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        products,
    });

export default createRootReducer;
