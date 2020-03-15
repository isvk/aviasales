import { List } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Ticket from "src/models/ticket";

export type TStoreTicket = List<Ticket>;

const reducer = (state: TStoreTicket = List([]), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_TICKETS:
            return state;

        case types.ADD_TICKETS:
            action.tickets.forEach((item: Ticket) => {
                state = state.push(item);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
