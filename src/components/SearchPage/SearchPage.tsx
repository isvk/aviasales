import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { getSearchId } from "src/store/search/actions";
import { searchGetSearchId, searchGetSearchStatus, ticketState } from "src/store/rootSelector";
import { getTickets } from "src/store/tickets/actions";
import { searchStatus } from "src/store/searchStatus";

import "./SearchPage.scss";

export default function SearchPage() {
    const dispatch = useCustomDispatch();
    const searchId = useCustomSelector(searchGetSearchId);
    const status = useCustomSelector(searchGetSearchStatus);
    const tickets = useCustomSelector(ticketState);

    if (searchId === "") {
        dispatch(getSearchId());
    } else {
        if (status === searchStatus.notStarted) {
            dispatch(getTickets(searchId));
        }
    }

    return (
        <div className="searchPage">
            <h1>Aviasales Test Task</h1>
            {status === searchStatus.started && <div>Идёт загрузка</div>}
            {status === searchStatus.completed && <div>Загрузка завершена. Найдено вариантов: {tickets.size - 1}</div>}
        </div>
    );
}
