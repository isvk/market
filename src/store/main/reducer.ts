import { ActionTypesInfer } from "src/store/actionTypes";
import Main from "src/models/main";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreMain = Main;

const reducer = (state: TStoreMain = new Main(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.UPDATE_STATUS_LOADING_PRODUCT:
            return state.set("statusLoadingProduct", action.status);

        case types.UPDATE_STATUS_LOADING_PRODUCTS:
            return state.set("statusLoadingProducts", action.status);

        case types.UPDATE_STATUS_LOADING_PARAMETERS:
            return state.set("statusLoadingParameters", action.status);

        case types.UPDATE_SEARCH_WORD:
            return state.set("searchWord", action.searchWord.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"));

        default:
            return state;
    }
};

export default reducer;
