import { put, call, takeEvery } from "@redux-saga/core/effects";
import bottle from "src/services/index";
import * as types from "./types";
import { getSearchId, getSearchIdSuccess } from "./actions";

function* getSearchIdAsync(services: typeof bottle) {
    try {
        const id = yield call(services.container.ApiSearch.getSearchId);
        yield put(getSearchIdSuccess(id));
    } catch (e) {
        console.log(e);
    }
}

export default function* searchSaga(services: typeof bottle) {
    yield takeEvery(types.GET_SEARCH_ID, getSearchIdAsync, services);
}
