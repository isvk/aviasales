import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getSearchId, getStatus, getSort, getFilterNumberStops } from "src/store/search/selectors";
import { sortPrice, sortTime, filterNumberStops, limit } from "src/models/ticket";
import { typeSort } from "./typeSort";

export const searchState = (state: Readonly<IStore>) => state.search;
export const searchGetSearchId = createSelector(searchState, getSearchId);
export const searchGetSearchStatus = createSelector(searchState, getStatus);
export const searchGetSearchSort = createSelector(searchState, getSort);
export const searchGetSearchFilterNumberStops = createSelector(searchState, getFilterNumberStops);

export const ticketState = (state: Readonly<IStore>) => state.tickets;
export const ticketStateSort = (state: Readonly<IStore>) => {
    switch (state.search.sort) {
        case typeSort.time:
            return { ...state, tickets: sortTime(state.tickets) };
        case typeSort.price:
            return { ...state, tickets: sortPrice(state.tickets) };
        default:
            return state;
    }
};
export const ticketsGetTicketsSort = createSelector(ticketStateSort, ticketState);
export const ticketStateFilterNumberStops = (state: Readonly<IStore>) => {
    if (state.search.filterNumberStops.size === 0) return state;
    return { ...state, tickets: filterNumberStops(state.tickets, state.search.filterNumberStops) };
};

export const ticketStateLimit = (state: Readonly<IStore>) => {
    if (state.search.limit === 0) return state;
    return { ...state, tickets: limit(state.tickets, state.search.limit) };
};

export const ticketsGetTicketsFilter = createSelector(ticketStateFilterNumberStops, ticketState);
export const ticketStateFilterAndSort = createSelector(ticketStateFilterNumberStops, ticketStateSort);
export const ticketsGetTicketsFilterAndSort = createSelector(ticketStateFilterAndSort, ticketState);
export const ticketStateFilterAndSortAndLimit = createSelector(ticketStateFilterAndSort, ticketStateLimit);
export const ticketsGetTicketsFilterAndSortAndLimit = createSelector(ticketStateFilterAndSortAndLimit, ticketState);
