import * as types from "./types";
import * as actions from "./actions";
import { ActionTypesInfer } from "src/store/actionTypes";
import Search from "src/models/search";
import { searchStatus } from "src/store/searchStatus";

export type TStoreSearch = Search;

const reducer = (state: TStoreSearch = new Search(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.GET_SEARCH_ID:
            return state;

        case types.GET_SEARCH_ID_SUCCESS:
            return state.set("searchId", action.id);

        case types.SET_STATUS:
            return state.set("status", action.status);

        default:
            return state;
    }
};

export default reducer;
