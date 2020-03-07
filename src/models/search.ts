import { Record } from "immutable";

export interface ISearch {
    searchId: string;
}

const initialSearch: ISearch = {
    searchId: ""
};

export default class Search extends Record(initialSearch) {}
