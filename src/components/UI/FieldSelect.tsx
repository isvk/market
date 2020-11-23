import React, { ReactNode, RefObject } from "react";
import { IThemeProps } from "src/App";
import styled from "styled-components";

interface IFieldSelectProps {
    className?: string;
    children?: ReactNode;
    innerRef?: RefObject<HTMLSelectElement>;
}

export default function FieldSelect(props: IFieldSelectProps) {
    return (
        <FieldSelectStyled {...props} ref={props.innerRef}>
            {props.children}
        </FieldSelectStyled>
    );
}

const FieldSelectStyled = styled.select`
    display: block;
    width: 100%;
    border: 1px solid #9abbce;
    border-radius: 2px;
    line-height: 3em;
    height: 3em;
    padding: 0 1em;
    box-sizing: border-box;

    &:hover,
    &:focus {
        border: 1px solid ${(props: IThemeProps) => props.theme.color_main};
    }
`;
