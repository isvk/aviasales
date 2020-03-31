import { List } from "immutable";
import Ticket from "src/models/ticket";
import Segments from "src/models/segments";
import Segment from "src/models/segment";
import { IApiTicket } from "./typings/apiTicket";

export const apiTicketToModelTicket = (ticket: IApiTicket) => {
    return new Ticket({
        ...ticket,
        segments: new Segments({
            from: new Segment({
                ...ticket.segments[0],
                stops: List(ticket.segments[0].stops)
            }),
            to: new Segment({
                ...ticket.segments[1],
                stops: List(ticket.segments[1].stops)
            })
        })
    });
};
