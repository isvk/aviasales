import { List, Record } from "immutable";
import Segments from "./segments";

export interface ITicket {
    price: number;
    carrier: string;
    segments: Segments;
}

const initialTicket: ITicket = {
    price: 0,
    carrier: "",
    segments: new Segments()
};

export const sortTime = (tickets: Readonly<List<Ticket>>) => {
    return tickets.sort((a: Ticket, b: Ticket) => {
        let a_duration = a.segments.from.duration + a.segments.to.duration;
        let b_duration = b.segments.from.duration + b.segments.to.duration;
        if (a_duration < b_duration) return -1;
        if (a_duration > b_duration) return 1;
        return 0;
    });
};

export const sortPrice = (tickets: Readonly<List<Ticket>>) => {
    return tickets.sort((a: Ticket, b: Ticket) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
    });
};

export default class Ticket extends Record(initialTicket) implements ITicket {}
