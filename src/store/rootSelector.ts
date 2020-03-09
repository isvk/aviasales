import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getSearchId, getStatus, getSort } from "src/store/search/selectors";
import Ticket from "src/models/ticket";
import { typeSort } from "./typeSort";

export const searchState = (state: IStore) => state.search;
export const searchGetSearchId = createSelector(searchState, getSearchId);
export const searchGetSearchStatus = createSelector(searchState, getStatus);
export const searchGetSearchSort = createSelector(searchState, getSort);

export const ticketState = (state: IStore) => state.tickets;
export const ticketsGetTicketsSort = (state: IStore) => {
    return state.tickets.sort((a: Ticket, b: Ticket) => {
        switch (state.search.sort) {
            case typeSort.time:
                let a_duration = a.segments.from.duration + a.segments.to.duration;
                let b_duration = b.segments.from.duration + b.segments.to.duration;
                if (a_duration < b_duration) return -1;
                if (a_duration > b_duration) return 1;
                break;
            case typeSort.price:
            default:
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                break;
        }
        return 0;
    });
};
