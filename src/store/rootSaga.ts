import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import parameterSaga from "src/store/parameters/saga";
import productSaga from "src/store/products/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([parameterSaga(services), productSaga(services)]);
    };
};
