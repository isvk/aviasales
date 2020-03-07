import { IHttp } from "./IHttp";

export default class Http implements IHttp {
    get = (url: string, data: object) => {
        return this.request("GET", url, data);
    };

    request = (method: string, url: string, data = {}) => {
        return fetch("https://front-test.beta.aviasales.ru/" + url, {
            method
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response;
            }
        });
    };
}
