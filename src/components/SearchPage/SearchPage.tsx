import React from "react";
import styled from "styled-components";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { getSearchId } from "src/store/search/actions";
import { searchGetSearchId, searchGetSearchStatus } from "src/store/rootSelector";
import { getTickets } from "src/store/tickets/actions";
import { searchStatus } from "src/store/searchStatus";
import ListTickets from "./ListTickets/ListTickets";
import ListFilters from "./ListFilters/ListFilters";

const Wrapper = styled.div`
    width: 542px; //hardcode временно
`;

export default function SearchPage() {
    const dispatch = useCustomDispatch();
    const searchId = useCustomSelector(searchGetSearchId);
    const status = useCustomSelector(searchGetSearchStatus);

    if (searchId === "") {
        dispatch(getSearchId());
    } else {
        if (status === searchStatus.notStarted) {
            dispatch(getTickets(searchId));
        }
    }

    return (
        <Wrapper>
            <h1>Aviasales Test Task</h1>
            <ListFilters />
            {status === searchStatus.started && <div>Идёт загрузка</div>}
            {status === searchStatus.completed && <div>Загрузка завершена</div>}
            {status === searchStatus.completed && <ListTickets />}
        </Wrapper>
    );
}
