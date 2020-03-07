import { IHttp } from "../IHttp";

export interface IApiSearch {
    searchId: string;
}

export default class ApiSearch {
    constructor(private http: IHttp, private url: string = "search") {}

    getSearchId = () => {
        return this.http.get(this.url).then((response: IApiSearch) => {
            return response.searchId;
        });
    };
}
