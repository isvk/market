import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import productSaga from "src/store/products/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([productSaga(services)]);
    };
};
