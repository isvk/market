import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Parameter from "src/models/parameter";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreParameter = Map<Parameter["key"], Parameter>;

const reducer = (state: TStoreParameter = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_PARAMETERS:
            return state;

        case types.ADD_PARAMETERS:
            action.parameters.forEach((parameter: Parameter) => {
                state = state.set(parameter.key, parameter);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
