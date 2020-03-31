import { put, call, takeEvery } from "@redux-saga/core/effects";
import bottle from "src/services/index";
import * as types from "./types";
import { loadSearchIdSuccess, setStatus } from "./actions";
import { searchStatus } from "../searchStatus";

function* loadSearchIdAsync(services: typeof bottle) {
    try {
        const id = yield call(services.container.ApiSearch.loadSearchId);
        yield put(loadSearchIdSuccess(id));
    } catch (e) {
        yield put(setStatus(searchStatus.isErrorServer));
        console.error(e);
    }
}

export default function* searchSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_SEARCH_ID, loadSearchIdAsync, services);
}
