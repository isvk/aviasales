import { Record } from "immutable";
import Segment from "./segment";

export interface ISegments {
    from: Segment;
    to: Segment;
}

const initialSegments: ISegments = {
    from: new Segment(),
    to: new Segment()
};

export default class Segments extends Record(initialSegments) {}
