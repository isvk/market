import * as types from "./types";
import Product from "src/models/product";

export const addProducts = (products: Product[]) =>
    ({
        type: types.ADD_PRODUCTS,
        products,
    } as const);

export const loadProducts = () =>
    ({
        type: types.LOAD_PRODUCTS,
    } as const);

export const loadProductById = (id: Product["id"]) =>
    ({
        type: types.LOAD_PRODUCT_BY_ID,
        id,
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

export const updateProduct = (id: Product["id"], product: Product) =>
    ({
        type: types.UPDATE_PRODUCT,
        id,
        product,
    } as const);

export const updateProductSuccess = (product: Product) =>
    ({
        type: types.UPDATE_PRODUCT_SUCCESS,
        product,
    } as const);
