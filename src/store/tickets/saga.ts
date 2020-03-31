import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { addTickets, loadTickets } from "./actions";
import { setStatus } from "src/store/search/actions";
import { searchStatus } from "src/store/searchStatus";

function* loadTicketsAsync(services: typeof bottle, action: ReturnType<typeof loadTickets>) {
    try {
        let response = yield call(services.container.ApiTicket.loadTickets, action.searchId);
        yield put(addTickets(response.tickets));

        if (response.stop) {
            yield put(setStatus(searchStatus.isLoadedTickets));
        } else {
            yield put(loadTickets(action.searchId));
        }
    } catch (e) {
        if (e.status === 500) {
            yield put(loadTickets(action.searchId));
        } else {
            yield put(setStatus(searchStatus.isErrorServer));
            console.error(e);
        }
    }
}

export default function* ticketSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_TICKETS, loadTicketsAsync, services);
}
