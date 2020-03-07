import { Record } from "immutable";
import { searchStatus } from "src/store/searchStatus";
import { typeSort } from "src/store/typeSort";

export interface ISearch {
    searchId: string;
    status: searchStatus;
    sort: typeSort;
}

const initialSearch: ISearch = {
    searchId: "",
    status: searchStatus.notStarted,
    sort: typeSort.price
};

export default class Search extends Record(initialSearch) {}
