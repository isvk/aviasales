import { List } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Ticket from "src/models/ticket";

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
