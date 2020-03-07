import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getSearchId, getStatus } from "src/store/search/selectors";

export const searchState = (state: IStore) => state.search;
export const searchGetSearchId = createSelector(searchState, getSearchId);
export const searchGetSearchStatus = createSelector(searchState, getStatus);

export const ticketState = (state: IStore) => state.tickets;
