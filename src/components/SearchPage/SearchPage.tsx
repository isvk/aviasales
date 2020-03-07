import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { getSearchId } from "src/store/search/actions";
import { searchGetSearchId, ticketState } from "src/store/rootSelector";
import { getTickets } from "src/store/tickets/actions";

import "./SearchPage.scss";

export default function SearchPage() {
    const dispatch = useCustomDispatch();
    const searchId = useCustomSelector(searchGetSearchId);
    const tickets = useCustomSelector(ticketState);

    if (searchId === "") {
        dispatch(getSearchId());
    } else {
        if (tickets.size === 0) {
            dispatch(getTickets(searchId));
        }
    }

    return (
        <div className="searchPage">
            <h1>Aviasales Test Task</h1>
        </div>
    );
}
