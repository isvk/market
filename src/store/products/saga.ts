import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { createProduct, createProductSuccess, loadProductById, updateProduct, updateProductSuccess } from "./actions";
import { addProducts } from "src/store/products/actions";
import {
    updateStatusLoadingProduct,
    updateStatusLoadingProducts,
    updateStatusSavingProduct,
} from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";
import { saveStatus } from "../saveStatus";
import { push } from "connected-react-router";

function* loadProductsAsync(services: typeof bottle) {
    try {
        let products = yield call(services.container.ApiProduct.loadAll);
        yield put(addProducts(products));
        yield put(updateStatusLoadingProducts(loadStatus.loaded));
    } catch (e) {
        console.error(e);
        yield put(updateStatusLoadingProducts(loadStatus.errorServer));
    }
}

function* createProductAsync(services: typeof bottle, action: ReturnType<typeof createProduct>) {
    try {
        let product = yield call(services.container.ApiProduct.create, action.product);
        yield put(createProductSuccess(product));
        yield put(updateStatusSavingProduct(saveStatus.saved));
        yield put(push("/products/" + product.id));
    } catch (e) {
        console.error(e);
        yield put(updateStatusSavingProduct(saveStatus.errorServer));
    }
}

function* loadProductByIdAsync(services: typeof bottle, action: ReturnType<typeof loadProductById>) {
    try {
        let product = yield call(services.container.ApiProduct.read, action.id);
        yield put(addProducts([product]));
        yield put(updateStatusLoadingProduct(loadStatus.loaded));
    } catch (e) {
        console.error(e);
        yield put(updateStatusLoadingProduct(loadStatus.errorServer));
    }
}

function* updateProductAsync(services: typeof bottle, action: ReturnType<typeof updateProduct>) {
    try {
        let product = yield call(services.container.ApiProduct.update, action.id, action.product);
        yield put(updateProductSuccess(product));
        yield put(updateStatusSavingProduct(saveStatus.saved));
    } catch (e) {
        console.error(e);
        yield put(updateStatusSavingProduct(saveStatus.errorServer));
    }
}

export default function* mainSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_PRODUCTS, loadProductsAsync, services);
    yield takeEvery(types.LOAD_PRODUCT_BY_ID, loadProductByIdAsync, services);
    yield takeEvery(types.CREATE_PRODUCT, createProductAsync, services);
    yield takeEvery(types.UPDATE_PRODUCT, updateProductAsync, services);
}
