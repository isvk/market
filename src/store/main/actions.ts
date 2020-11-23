import * as types from "./types";
import { loadStatus } from "src/store/loadStatus";

export const updateStatusLoadingProduct = (status: loadStatus) =>
    ({
        type: types.UPDATE_STATUS_LOADING_PRODUCT,
        status,
    } as const);

export const updateStatusLoadingProducts = (status: loadStatus) =>
    ({
        type: types.UPDATE_STATUS_LOADING_PRODUCTS,
        status,
    } as const);

export const updateStatusLoadingParameters = (status: loadStatus) =>
    ({
        type: types.UPDATE_STATUS_LOADING_PARAMETERS,
        status,
    } as const);

export const updateSearchWord = (searchWord: string) =>
    ({
        type: types.UPDATE_SEARCH_WORD,
        searchWord,
    } as const);
