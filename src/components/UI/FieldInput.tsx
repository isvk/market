import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { IThemeProps } from "../../App";

interface IFieldInputProps {
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FieldInput(props: IFieldInputProps) {
    return <FieldInputStyled className={props.className} value={props.value} onChange={props.onChange} />;
}

const FieldInputStyled = styled.input`
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
