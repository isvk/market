import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { IThemeProps } from "src/App";

interface IFieldTextareaProps {
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FieldTextarea(props: IFieldTextareaProps) {
    return <FieldTextareaStyled className={props.className} value={props.value} onChange={props.onChange} />;
}

const FieldTextareaStyled = styled.textarea`
    display: block;
    width: 100%;
    border: 1px solid #9abbce;
    border-radius: 2px;
    line-height: 1.5em;
    padding: 1em;
    box-sizing: border-box;

    &:hover,
    &:focus {
        border: 1px solid ${(props: IThemeProps) => props.theme.color_main};
    }
`;
