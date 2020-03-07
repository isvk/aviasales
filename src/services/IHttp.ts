export interface IHttp {
    get(url: string, data?: object): Promise<any>;
}
