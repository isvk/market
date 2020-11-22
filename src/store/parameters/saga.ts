import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { addParameters, loadParameters } from "./actions";
import { updateStatusLoadingParameters } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadParametersAsync(services: typeof bottle, action: ReturnType<typeof loadParameters>) {
    try {
        const parameters = yield call(services.container.ApiParameter.loadAll);
        yield put(addParameters(parameters));
        yield put(updateStatusLoadingParameters(loadStatus.loaded));
    } catch (e) {
        console.error(e);
    }
}

export default function* mainSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_PARAMETERS, loadParametersAsync, services);
}
