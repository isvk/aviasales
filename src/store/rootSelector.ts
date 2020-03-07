import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getSearchId } from "src/store/search/selectors";

export const searchState = (state: IStore) => state.search;
export const searchGetSearchId = createSelector(searchState, getSearchId);
