import * as types from "./types";
import Ticket from "src/models/ticket";
import { typeSort } from "src/store/typeSort";

export const getTickets = (searchId: string) =>
    ({
        type: types.GET_TICKETS,
        searchId
    } as const);

export const addTickets = (tickets: Ticket[]) =>
    ({
        type: types.ADD_TICKETS,
        tickets
    } as const);

export const sortTickets = (typeSort: typeSort) =>
    ({
        type: types.SORT_TICKETS,
        typeSort
    } as const);
