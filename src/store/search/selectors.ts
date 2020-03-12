import { TStoreSearch } from "./reducer";

export const getSearchId = (state: TStoreSearch) => state.searchId;
export const getStatus = (state: TStoreSearch) => state.status;
export const getSort = (state: TStoreSearch) => state.sort;
export const getFilterNumberStops = (state: TStoreSearch) => state.filterNumberStops;
