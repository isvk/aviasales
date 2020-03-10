import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getSearchId, getStatus, getSort } from "src/store/search/selectors";
import Ticket, { sortPrice, sortTime } from "src/models/ticket";
import { typeSort } from "./typeSort";

export const searchState = (state: Readonly<IStore>) => state.search;
export const searchGetSearchId = createSelector(searchState, getSearchId);
export const searchGetSearchStatus = createSelector(searchState, getStatus);
export const searchGetSearchSort = createSelector(searchState, getSort);

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
    const newState = { ...state };
    const filterNumberStops = newState.search.filterNumberStops;
    if (filterNumberStops.length === 0) return newState;

    newState.tickets = newState.tickets.filter((item: Ticket) => {
        const arrayNumberStopsTicket = [item.segments.from.stops.size, item.segments.to.stops.size];
        return arrayNumberStopsTicket.every(NumberStopsTicket => filterNumberStops.includes(NumberStopsTicket));
    });
    return newState;
};
export const ticketsGetTicketsFilter = createSelector(ticketStateFilterNumberStops, ticketState);
export const ticketStateFilterAndSort = createSelector(ticketStateFilterNumberStops, ticketStateSort);
export const ticketsGetTicketsFilterAndSort = createSelector(ticketStateFilterAndSort, ticketState);
