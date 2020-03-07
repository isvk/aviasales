import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import Ticket from "src/models/ticket";
import { getTickets, addTickets } from "./actions";
import { IApiTicket } from "src/services/api/apiTickets";

function* getTicketsAsync(services: typeof bottle, action: ReturnType<typeof getTickets>) {
    try {
        const response = yield call(services.container.ApiTicket.getTickets, action.searchId);
        yield put(addTickets(response.tickets.map((ticket: IApiTicket) => new Ticket(ticket))));
    } catch (e) {
        console.log(e);
    }
}

export default function* cardSaga(services: typeof bottle) {
    yield takeEvery(types.GET_TICKETS, getTicketsAsync, services);
}
