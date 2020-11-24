import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import main, { TStoreMain } from "src/store/main/reducer";
import parameters, { TStoreParameter } from "src/store/parameters/reducer";
import products, { TStoreProduct } from "src/store/products/reducer";

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
