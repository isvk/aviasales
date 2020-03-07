import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import search, { TStoreSearch } from "./search/reducer";

export interface IStore {
    router: typeof connectRouter;
    search: TStoreSearch;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        search
    });

export default createRootReducer;
