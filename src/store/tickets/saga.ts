import bottle from "src/services";
import { call, put, takeEvery, select } from "@redux-saga/core/effects";
import * as types from "./types";
import { addTickets, getTickets, sortTickets } from "./actions";
import { setStatus } from "src/store/search/actions";
import { searchStatus } from "src/store/searchStatus";
import { searchGetSearchSort } from "src/store/rootSelector";

function* getTicketsAsync(services: typeof bottle, action: ReturnType<typeof getTickets>) {
    try {
        yield put(setStatus(searchStatus.started));
        let response = yield call(services.container.ApiTicket.getTickets, action.searchId);
        yield put(addTickets(response.tickets));

        if (response.stop) {
            const sort = yield select(searchGetSearchSort);
            yield put(sortTickets(sort));
            yield put(setStatus(searchStatus.completed));
        } else {
            yield put(getTickets(action.searchId));
        }
    } catch (e) {
        if (e.status === 500) {
            yield put(getTickets(action.searchId));
        } else {
            yield put(setStatus(searchStatus.completed));
        }
    }
}

export default function* cardSaga(services: typeof bottle) {
    yield takeEvery(types.GET_TICKETS, getTicketsAsync, services);
}
