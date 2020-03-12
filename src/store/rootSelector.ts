import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getSearchId, getStatus, getSort, getFilterNumberStops } from "src/store/search/selectors";
import Ticket, { sortPrice, sortTime } from "src/models/ticket";
import { typeSort } from "./typeSort";

export const searchState = (state: Readonly<IStore>) => state.search;
export const searchGetSearchId = createSelector(searchState, getSearchId);
export const searchGetSearchStatus = createSelector(searchState, getStatus);
export const searchGetSearchSort = createSelector(searchState, getSort);
export const searchGetSearchFilterNumberStops = createSelector(searchState, getFilterNumberStops);

export const ticketState = (state: Readonly<IStore>) => state.tickets;
export const ticketStateSort = (state: Readonly<IStore>) => {
    const newState = { ...state };
    switch (newState.search.sort) {
        case typeSort.time:
            newState.tickets = sortTime(newState.tickets);
            break;
        case typeSort.price:
        default:
            newState.tickets = sortPrice(newState.tickets);
            break;
    }
    return newState;
};
export const ticketsGetTicketsSort = createSelector(ticketStateSort, ticketState);
export const ticketStateFilterNumberStops = (state: Readonly<IStore>) => {
    if (state.search.filterNumberStops.size === 0) return state;

    const newState = { ...state };
    newState.tickets = newState.tickets.filter((item: Ticket) =>
        [item.segments.from.stops.size, item.segments.to.stops.size].every(numberStopsTicket =>
            newState.search.filterNumberStops.has(numberStopsTicket)
        )
    );
    return newState;
};
export const ticketsGetTicketsFilter = createSelector(ticketStateFilterNumberStops, ticketState);
export const ticketStateFilterAndSort = createSelector(ticketStateFilterNumberStops, ticketStateSort);
export const ticketsGetTicketsFilterAndSort = createSelector(ticketStateFilterAndSort, ticketState);
