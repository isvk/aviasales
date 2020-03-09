import { Record } from "immutable";
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

export default class Ticket extends Record(initialTicket) implements ITicket {}
