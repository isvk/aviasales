import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import searchSaga from "src/store/search/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([searchSaga(services)]);
    };
};
