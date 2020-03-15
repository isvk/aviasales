import * as types from "./types";
import Ticket from "src/models/ticket";

export const loadTickets = (searchId: string) =>
    ({
        type: types.LOAD_TICKETS,
        searchId
    } as const);

export const addTickets = (tickets: Ticket[]) =>
    ({
        type: types.ADD_TICKETS,
        tickets
    } as const);
