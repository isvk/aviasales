import * as types from "./types";

export const getSearchId = () =>
    ({
        type: types.GET_SEARCH_ID
    } as const);

export const getSearchIdSuccess = (id: string) =>
    ({
        type: types.GET_SEARCH_ID_SUCCESS,
        id
    } as const);
