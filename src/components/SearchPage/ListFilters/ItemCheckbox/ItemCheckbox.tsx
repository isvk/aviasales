import React from "react";
import styled from "styled-components";
import { Check as IconCheck } from "@styled-icons/boxicons-regular/Check";

interface IItemCheckboxProps {
    value: string | number;
    handleChange: (value: string, checked: boolean) => void;
    checked: boolean;
    id: string;
    text: string;
}

export default function ItemCheckbox(props: IItemCheckboxProps) {
    return (
        <>
            <Checkbox
                type="checkbox"
                value={props.value}
                onChange={e => props.handleChange(e.target.value, e.target.checked)}
                checked={props.checked}
                id={props.id}
            />
            <Label htmlFor={props.id}>
                <Check size="18" />
                {props.text}
            </Label>
        </>
    );
}

const Checkbox = styled.input`
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
    position: relative;
    display: flex;
    width: 100%;
    padding: 10px 20px;
    font-size: 13px;
    line-height: 20px;
    &:hover {
        cursor: pointer;
        background: #f1fcff;
    }
    &:before {
        content: "";
        height: 20px;
        width: 20px;
        margin-right: 10px;
        border: 1px solid #9abbce;
        border-radius: 2px;
    }

    ${Checkbox}:checked + &:before {
        border: 1px solid #2196f3;
    }
`;

const Check = styled(IconCheck)`
    color: #2196f3;
    height: 0;
    width: 18px;
    position: absolute;
    left: 21px;
    top: 10px;
    ${Checkbox}:checked + ${Label} > & {
        height: 18px;
    }
`;
