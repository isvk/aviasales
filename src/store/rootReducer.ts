import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import search, { TStoreSearch } from "./search/reducer";
import tickets, { TStoreTicket } from "./tickets/reducer";

export interface IStore {
    router: typeof connectRouter;
    search: TStoreSearch;
    tickets: TStoreTicket;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        search,
        tickets
    });

export default createRootReducer;
