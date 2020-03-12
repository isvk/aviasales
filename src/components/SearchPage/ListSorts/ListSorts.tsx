import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { searchGetSearchSort } from "src/store/rootSelector";
import { typeSort } from "src/store/typeSort";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { setSort } from "src/store/search/actions";
import styled from "styled-components";

export default function ListSorts() {
    const dispatch = useCustomDispatch();
    let sortValue = useCustomSelector(searchGetSearchSort);

    const handleChange = (value: string) => {
        dispatch(setSort(Number(value)));
    };

    return (
        <Wrapper>
            {sortItems.map(sort => (
                <React.Fragment key={sort.value}>
                    <Radio
                        value={sort.value}
                        type="radio"
                        checked={sort.value === sortValue}
                        onChange={e => handleChange(e.target.value)}
                        id={"sort-" + sort.value}
                    />
                    <Label htmlFor={"sort-" + sort.value}>{sort.label}</Label>
                </React.Fragment>
            ))}
        </Wrapper>
    );
}

const sortItems = [
    { value: typeSort.price, label: "Самый дешевый" },
    { value: typeSort.time, label: "Самый быстрый" }
];

const Wrapper = styled.div`
    display: flex;
    margin: 10px;
    height: 50px;
`;

const Radio = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const Label = styled.label`
    display: flex;
    flex-grow: 1;
    margin: 0;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #dfe5ec;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #4a4a4a;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    ${Radio}:checked + & {
        background-color: #2196f3;
        border: 1px solid #2196f3;
        color: #ffffff;
    }

    &:nth-child(2) {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;
