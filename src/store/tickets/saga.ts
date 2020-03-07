import bottle from "src/services";
import { call, put, takeEvery, select } from "@redux-saga/core/effects";
import * as types from "./types";
import { IApiTicket } from "src/services/api/apiTickets";
import Ticket from "src/models/ticket";
import { addTickets, getTickets, sortTickets } from "./actions";
import { setStatus } from "src/store/search/actions";
import { searchStatus } from "src/store/searchStatus";
import { IStore } from "src/store/rootReducer";

function* getTicketsAsync(services: typeof bottle, action: ReturnType<typeof getTickets>) {
    try {
        yield put(setStatus(searchStatus.started));
        let response = yield call(services.container.ApiTicket.getTickets, action.searchId);

        if (response.tickets) {
            yield put(addTickets(response.tickets.map((ticket: IApiTicket) => new Ticket(ticket))));
            if (response.stop === true) {
                const sort = yield select((state: IStore) => state.search.sort);
                yield put(sortTickets(sort));
                yield put(setStatus(searchStatus.completed));
            }
        }

        if ((response.tickets && response.stop === false) || response.status === 500) {
            yield put(getTickets(action.searchId));
        } else {
            yield put(setStatus(searchStatus.completed));
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* cardSaga(services: typeof bottle) {
    yield takeEvery(types.GET_TICKETS, getTicketsAsync, services);
}
