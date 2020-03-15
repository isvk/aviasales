import * as types from "./types";
import { Set } from "immutable";

export const loadSearchId = () =>
    ({
        type: types.LOAD_SEARCH_ID
    } as const);

export const loadSearchIdSuccess = (id: string) =>
    ({
        type: types.LOAD_SEARCH_ID_SUCCESS,
        id
    } as const);

export const setStatus = (status: number) =>
    ({
        type: types.SET_STATUS,
        status
    } as const);

export const setFilterNumberStops = (value: Set<number>) =>
    ({
        type: types.SET_FILTER_NUMBER_STOPS,
        value
    } as const);

export const setSort = (value: number) =>
    ({
        type: types.SET_SORT,
        value
    } as const);
