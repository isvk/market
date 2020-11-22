import * as types from "./types";
import Parameter from "src/models/parameter";

export const addParameters = (parameters: Parameter[]) =>
    ({
        type: types.ADD_PARAMETERS,
        parameters,
    } as const);

export const loadParameters = () =>
    ({
        type: types.LOAD_PARAMETERS,
    } as const);
