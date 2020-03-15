import { IHttp } from "../IHttp";

export interface IApiSearch {
    searchId: string;
}

export default class ApiSearch {
    constructor(private http: IHttp, private url: string = "search") {}

    loadSearchId = () => this.http.get(this.url).then((response: IApiSearch) => response.searchId);
}
