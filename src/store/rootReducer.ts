import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import products, { TStoreProduct } from "./products/reducer";
import main, { TStoreMain } from "./main/reducer";

export interface IStore {
    router: typeof connectRouter;
    main: TStoreMain;
    products: TStoreProduct;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        main,
        products,
    });

export default createRootReducer;
