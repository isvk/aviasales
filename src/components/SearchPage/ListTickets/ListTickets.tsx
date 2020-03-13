import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { ticketsGetTicketsFilterAndSortAndLimit } from "src/store/rootSelector";
import Ticket from "./Ticket/Ticket";

export default function ListTickets() {
    let tickets = useCustomSelector(ticketsGetTicketsFilterAndSortAndLimit);

    return (
        <>
            {tickets.map((ticket, index) => (
                <Ticket ticket={ticket} key={index} />
            ))}
        </>
    );
}
