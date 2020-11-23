import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getStatusLoadingProduct, getStatusLoadingProducts, getStatusLoadingParameters } from "./main/selectors";
import { filterBySearchWord } from "../models/product";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusLoadingProduct = createSelector(mainState, getStatusLoadingProduct);
export const mainGetStatusLoadingProducts = createSelector(mainState, getStatusLoadingProducts);
export const mainGetStatusLoadingParameters = createSelector(mainState, getStatusLoadingParameters);

export const parameterState = (state: Readonly<IStore>) => state.parameters;

export const productState = (state: Readonly<IStore>) => state.products;
export const productsGetById = createSelector(productState, propsFirstSelector, (products, id) => {
    return products.find((product) => product.id === id);
});

export const productFilterBySearchWord = (state: Readonly<IStore>) => {
    if (state.main.searchWord.length === 0) return state;

    return { ...state, products: filterBySearchWord(state.products, state.main.searchWord) };
};

export const productGetProductsFilterBySearchWord = createSelector(productFilterBySearchWord, productState);
