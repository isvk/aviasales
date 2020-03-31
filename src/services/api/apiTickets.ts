import { IHttp } from "../IHttp";
import { IApiTickets } from "./typings/apiTickets";
import { apiTicketToModelTicket } from "./apiTicketToModelTicket";

export default class ApiTicket {
    constructor(private http: IHttp) {}
    private url: string = "tickets";

    loadTickets = (searchId: string) => {
        return this.http.get(this.url + "?searchId=" + searchId).then((response: IApiTickets) => {
            return {
                tickets: response.tickets.map(ticket => apiTicketToModelTicket(ticket)),
                stop: response.stop
            };
        });
    };
}
