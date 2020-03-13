import React from "react";
import styled from "styled-components";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { getSearchId } from "src/store/search/actions";
import { searchGetSearchId, searchGetSearchStatus } from "src/store/rootSelector";
import { getTickets } from "src/store/tickets/actions";
import { searchStatus } from "src/store/searchStatus";
import Logo from "./Logo/Logo";
import ListFilters from "./ListFilters/ListFilters";
import ListSorts from "./ListSorts/ListSorts";
import ListTickets from "./ListTickets/ListTickets";

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
            <Container>
                <Header>
                    <Logo />
                </Header>
                <Body>
                    <LeftMenu>
                        <ListFilters />
                    </LeftMenu>
                    <Content>
                        <ListSorts />
                        {status === searchStatus.completed && <ListTickets />}
                    </Content>
                </Body>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 754px;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
`;

const Body = styled.div`
    display: flex;
    width: 100%;
`;

const LeftMenu = styled.div`
    width: 232px;
    min-width: 232px;
    margin-right: 20px;
`;

const Content = styled.div`
    width: 100%;
`;
