import React from "react";
import styled from "styled-components";

import logo from "./logo.svg";

export default function Logo() {
    return (
        <Shadow>
            <Svg src={logo} alt="logo" />
        </Shadow>
    );
}

const SizeLogo = 60;

const Svg = styled.img`
    display: block;
    width: ${SizeLogo}px;
    height: ${SizeLogo}px;
    border-radius: ${SizeLogo / 2}px;
    background-color: #2196f3;
`;

const Shadow = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    width: ${SizeLogo}px;
    height: ${SizeLogo}px;
    border-radius: ${SizeLogo / 2}px;
    box-shadow: 0 1px 11px rgba(55, 104, 142, 0.3);

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        width: 44px;
        height: 44px;
        border-radius: 22px;
        box-shadow: 0 8px 11px rgba(55, 104, 142, 0.25);
    }
`;
