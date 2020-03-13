import React from "react";
import styled from "styled-components";
import TicketModel from "src/models/ticket";
import Segment from "../Segment/Segment";

interface ITicketProps {
    ticket: TicketModel;
}

export default function Ticket(props: ITicketProps) {
    return (
        <Wrapper>
            <Header>
                <Price>{getFormatPrice(props.ticket.price)} Р</Price>
                <Carrier>
                    <img src={"//pics.avs.io/110/36/" + props.ticket.carrier + ".png"} alt={props.ticket.carrier} />
                </Carrier>
            </Header>
            <ListSegment>
                {<Segment segment={props.ticket.segments.from} />}
                {<Segment segment={props.ticket.segments.to} />}
            </ListSegment>
        </Wrapper>
    );
}

const getFormatPrice = (price: number) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
};

const Wrapper = styled.div`
    margin: 20px 0;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    padding-bottom: 20px;
`;

const ListSegment = styled.div``;

const Price = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #2196f3;
`;

const Carrier = styled.div`
    width: 110px;
    height: 36px;
`;
