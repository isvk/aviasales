import { List } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Ticket from "src/models/ticket";
import { typeSort } from "src/store/typeSort";

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
                    let a_duration = a.segments.from.duration + a.segments.to.duration;
                    let b_duration = b.segments.from.duration + b.segments.to.duration;
                    if (a_duration < b_duration) return -1;
                    if (a_duration > b_duration) return 1;
                }
                return 0;
            });

        case types.FILTER_NUMBER_STOPS:
            if (!action.values) return state;

            let newState = state.clear();

            state.forEach((item: Ticket) => {
                let arrayNumberStopsItem = [
                    item.segments.from.stops.size.toString(),
                    item.segments.to.stops.size.toString()
                ];

                let difference = arrayNumberStopsItem.filter(x => !action.values.includes(x));
                if (difference.length > 0) {
                    item = item.set("visible", false);
                }
                newState = newState.push(item);
            });

            return newState;

        default:
            return state;
    }
};

export default reducer;
