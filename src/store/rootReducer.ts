import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import main, { TStoreMain } from "./main/reducer";
import parameters, { TStoreParameter } from "./parameters/reducer";
import products, { TStoreProduct } from "./products/reducer";

export interface IStore {
    router: typeof connectRouter;
    main: TStoreMain;
    parameters: TStoreParameter;
    products: TStoreProduct;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        main,
        parameters,
        products,
    });

export default createRootReducer;
