import * as types from "./types";
import Ticket from "src/models/ticket";

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
