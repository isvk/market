import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getStatusLoadingProducts } from "./main/selectors";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusLoadingProducts = createSelector(mainState, getStatusLoadingProducts);

export const productState = (state: Readonly<IStore>) => state.products;

export const productsGetById = createSelector(productState, propsFirstSelector, (products, id) => {
    return products.find((product) => product.id === id);
});
