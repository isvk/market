import { ActionTypesInfer } from "src/store/actionTypes";
import Main from "src/models/main";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreMain = Main;

const reducer = (state: TStoreMain = new Main(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.UPDATE_STATUS_LOADING_PRODUCTS:
            return state.set("statusLoadingProducts", action.status);

        default:
            return state;
    }
};

export default reducer;
