import { IApiTicket } from "./apiTicket";

export interface IApiTickets {
    tickets: IApiTicket[];
    stop: boolean;
}
