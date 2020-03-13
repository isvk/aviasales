import React from "react";
import styled from "styled-components";
import FilterNumberStops from "./FilterNumberStops/FilterNumberStops";

export default function ListFilters() {
    return (
        <Wrapper>
            <FilterNumberStops />
        </Wrapper>
    );
}
const Wrapper = styled.div`
    padding: 10px 0;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;
