import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadProducts } from "./actions";
import { addProducts } from "src/store/products/actions";

function* loadProductsAsync(services: typeof bottle, action: ReturnType<typeof loadProducts>) {
    try {
        let products = yield call(services.container.ApiProduct.loadAll);
        yield put(addProducts(products));
    } catch (e) {
        console.error(e);
    }
}

export default function* mainSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_PRODUCTS, loadProductsAsync, services);
}
