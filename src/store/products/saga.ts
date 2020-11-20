import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadProducts } from "./actions";
import { addProducts } from "src/store/products/actions";
import { updateStatusLoadingProducts } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadProductsAsync(services: typeof bottle, action: ReturnType<typeof loadProducts>) {
    try {
        let products = yield call(services.container.ApiProduct.loadAll);
        yield put(addProducts(products));
        yield put(updateStatusLoadingProducts(loadStatus.loaded));
    } catch (e) {
        console.error(e);
        yield put(updateStatusLoadingProducts(loadStatus.errorServer));
    }
}

export default function* mainSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_PRODUCTS, loadProductsAsync, services);
}
