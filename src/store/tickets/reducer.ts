import { List } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Ticket from "src/models/ticket";
import { typeSort } from "../typeSort";

export type TStoreTicket = List<Ticket>;

const reducer = (state: TStoreTicket = List([]), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.GET_TICKETS:
            return state;

        case types.ADD_TICKETS:
            action.tickets.forEach((item: Ticket) => {
                state = state.push(item);
            });
            return state;

        case types.SORT_TICKETS:
            return state.sort((a: Ticket, b: Ticket) => {
                if (action.typeSort === typeSort.price) {
                    if (a.price < b.price) return -1;
                    if (a.price > b.price) return 1;
                }

                if (action.typeSort === typeSort.time) {
                    let a_duration = a.segments[0].duration + a.segments[1].duration;
                    let b_duration = b.segments[0].duration + b.segments[1].duration;
                    if (a_duration < b_duration) return -1;
                    if (a_duration > b_duration) return 1;
                }
                return 0;
            });

        default:
            return state;
    }
};

export default reducer;
