import { List, Record } from "immutable";

export interface ISegment {
    origin: string;
    destination: string;
    date: string;
    stops: List<string>;
    duration: number;
}

const initialSegment: ISegment = {
    origin: "",
    destination: "",
    date: "",
    stops: List([]),
    duration: 0
};

export default class Segment extends Record(initialSegment) {}
