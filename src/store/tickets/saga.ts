import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import Ticket from "src/models/ticket";
import { getTickets, addTickets } from "./actions";
import { IApiTicket } from "src/services/api/apiTickets";
import { setStatus } from "src/store/search/actions";
import { searchStatus } from "src/store/searchStatus";

function* getTicketsAsync(services: typeof bottle, action: ReturnType<typeof getTickets>) {
    try {
        yield put(setStatus(searchStatus.started));
        let response = yield call(services.container.ApiTicket.getTickets, action.searchId);

        if (response.tickets) {
            yield put(addTickets(response.tickets.map((ticket: IApiTicket) => new Ticket(ticket))));
            if (response.stop === true) {
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
