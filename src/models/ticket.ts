import { Record } from "immutable";
import Segments from "./segments";

export interface ITicket {
    price: number;
    carrier: string;
    segments: Segments;
    visible: boolean;
}

const initialTicket: ITicket = {
    price: 0,
    carrier: "",
    segments: new Segments(),
    visible: true
};

export default class Ticket extends Record(initialTicket) implements ITicket {}
