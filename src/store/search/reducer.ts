import * as types from "./types";
import * as actions from "./actions";
import { ActionTypesInfer } from "src/store/actionTypes";
import Search from "src/models/search";

export type TStoreSearch = Search;

const reducer = (state: TStoreSearch = new Search(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.GET_SEARCH_ID:
            return state;

        case types.GET_SEARCH_ID_SUCCESS:
            return state.set("searchId", action.id);

        case types.SET_STATUS:
            return state.set("status", action.status);

        case types.SET_FILTER_NUMBER_STOPS:
            return state.set("filterNumberStops", action.value);

        case types.SET_SORT:
            return state.set("sort", action.value);

        default:
            return state;
    }
};

export default reducer;
