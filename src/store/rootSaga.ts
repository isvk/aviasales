import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import searchSaga from "src/store/search/saga";
import ticketSaga from "src/store/tickets/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([searchSaga(services), ticketSaga(services)]);
    };
};
