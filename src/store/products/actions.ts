import * as types from "./types";
import Product from "src/models/product";

export const loadProducts = () =>
    ({
        type: types.LOAD_PRODUCTS,
    } as const);

export const addProducts = (products: Product[]) =>
    ({
        type: types.ADD_PRODUCTS,
        products,
    } as const);

export const createProduct = (product: Product) =>
    ({
        type: types.CREATE_PRODUCT,
        product,
    } as const);

export const createProductSuccess = (product: Product) =>
    ({
        type: types.CREATE_PRODUCT_SUCCESS,
        product,
    } as const);
