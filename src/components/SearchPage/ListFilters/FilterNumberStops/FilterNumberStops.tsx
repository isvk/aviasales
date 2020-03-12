import React from "react";
import styled from "styled-components";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { setFilterNumberStops } from "src/store/search/actions";
import { searchGetSearchFilterNumberStops } from "src/store/rootSelector";
import ItemCheckbox from "../ItemCheckbox/ItemCheckbox";

export default function FilterNumberStops() {
    const dispatch = useCustomDispatch();
    let filterValues = useCustomSelector(searchGetSearchFilterNumberStops);

    const handleChangeFilter = (value: string, checked: boolean) => {
        if (value === "reset") {
            filterValues = filterValues.clear();
        } else {
            if (checked) filterValues = filterValues.add(Number(value));
            else filterValues = filterValues.remove(Number(value));
        }
        dispatch(setFilterNumberStops(filterValues));
    };

    return (
        <>
            <Title>Количество пересадок</Title>
            {filterItems.map(item => (
                <ItemCheckbox
                    value={item.value}
                    text={item.label}
                    checked={typeof item.value === "number" ? filterValues.has(item.value) : filterValues.size === 0}
                    handleChange={handleChangeFilter}
                    id={"filterNumberStops-" + item.value}
                    key={item.value}
                />
            ))}
        </>
    );
}

const filterItems = [
    { value: "reset", label: "Все" },
    { value: 0, label: "Без пересадок" },
    { value: 1, label: "1 пересадка" },
    { value: 2, label: "2 пересадки" },
    { value: 3, label: "3 пересадки" }
];

const Title = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4a4a4a;
    margin: 0 20px 10px 20px;
`;
