import { Record, Set } from "immutable";
import { searchStatus } from "src/store/searchStatus";
import { typeSort } from "src/store/typeSort";

export interface ISearch {
    searchId: string;
    status: searchStatus;
    sort: typeSort;
    filterNumberStops: Set<number>;
}

const initialSearch: ISearch = {
    searchId: "",
    status: searchStatus.notStarted,
    sort: typeSort.price,
    filterNumberStops: Set([])
};

export default class Search extends Record(initialSearch) {}
