import React from "react";
import styled from "styled-components";
import SegmentModel from "src/models/segment";

interface ISegmentProps {
    segment: SegmentModel;
}

export default function Segment(props: ISegmentProps) {
    return (
        <Wrapper>
            <Route>
                <FirstLine>
                    {props.segment.origin} - {props.segment.destination}
                </FirstLine>
                <SecondLine>{getTimeToString(props.segment.date, props.segment.duration)}</SecondLine>
            </Route>
            <Duration>
                <FirstLine>В ПУТИ</FirstLine>
                <SecondLine>{getDurationToString(props.segment.duration)}</SecondLine>
            </Duration>
            <Stops>
                <FirstLine>
                    {props.segment.stops.size === 0
                        ? "без пересадок"
                        : props.segment.stops.size === 1
                        ? "1 пересадка"
                        : props.segment.stops.size + " пересадки"}
                </FirstLine>
                <SecondLine>{props.segment.stops.join(", ")}</SecondLine>
            </Stops>
        </Wrapper>
    );
}

const getDurationToString = (duration: number) => {
    return Math.floor(duration / 60).toString() + "ч " + (duration % 60) + "м";
};

const getTimeToString = (date: string, duration: number) => {
    let dateStart = new Date(date);
    let dateEnd = new Date(dateStart.getTime() + duration * 60 * 1000);
    return dateStart.toTimeString().slice(0, 5) + " - " + dateEnd.toTimeString().slice(0, 5);
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`;

const Route = styled.div`
    flex-basis: 33.33%;
`;

const Duration = styled.div`
    flex-basis: 33.33%;
`;

const Stops = styled.div`
    flex-basis: 33.33%;
`;

const FirstLine = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #a0b0b9;
`;

const SecondLine = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #4a4a4a;
`;
