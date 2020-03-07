import { Record } from "immutable";
import { searchStatus } from "src/store/searchStatus";

export interface ISearch {
    searchId: string;
    status: searchStatus;
}

const initialSearch: ISearch = {
    searchId: "",
    status: searchStatus.notStarted
};

export default class Search extends Record(initialSearch) {}
