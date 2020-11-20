import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getStatusLoadingProducts } from "./main/selectors";

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusLoadingProducts = createSelector(mainState, getStatusLoadingProducts);

export const productState = (state: Readonly<IStore>) => state.products;
