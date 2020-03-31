import React from "react";
import styled from "styled-components";
import { Loader5 } from "@styled-icons/remix-fill/Loader5";

interface IPreloadProps {
    text: string;
}

export default function Preload(props: IPreloadProps) {
    return (
        <Wrapper>
            <LoadIcon size="28" /> {props.text}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 20px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
`;

const LoadIcon = styled(Loader5)`
    animation: rotate 2s linear infinite;
    color: #2196f3;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;
