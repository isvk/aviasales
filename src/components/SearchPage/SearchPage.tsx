import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { searchGetSearchStatus } from "src/store/rootSelector";
import { searchStatus } from "src/store/searchStatus";
import Preload from "../Preload/Preload";
import Warning from "../Warning/Warning";
import LoadSearchId from "../LoadSearchId/LoadSearchId";
import LoadTickets from "../LoadTickets/LoadTickets";
import Logo from "./Logo/Logo";
import ListFilters from "./ListFilters/ListFilters";
import ListSorts from "./ListSorts/ListSorts";
import ListTickets from "./ListTickets/ListTickets";

export default function SearchPage() {
    const status = useCustomSelector(searchGetSearchStatus);

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
                        {status === searchStatus.isNotLoadedSearchId && <LoadSearchId />}
                        {status === searchStatus.isLoadedSearchId && <LoadTickets />}
                        {status !== searchStatus.isLoadedTickets && status !== searchStatus.isErrorServer && (
                            <Preload text="Загрузка..." />
                        )}
                        {status === searchStatus.isLoadedTickets && <ListTickets />}
                        {status === searchStatus.isErrorServer && <Warning text="Ошибка сервера" />}
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
