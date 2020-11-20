import * as types from "./types";
import { loadStatus } from "src/store/loadStatus";

export const updateStatusLoadingProducts = (status: loadStatus) =>
    ({
        type: types.UPDATE_STATUS_LOADING_PRODUCTS,
        status,
    } as const);
