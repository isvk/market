import React, { MouseEvent, ReactNode } from "react";
import styled from "styled-components";
import { IThemeProps } from "src/App";

interface IButtonProps {
    className?: string;
    children?: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: IButtonProps) {
    return (
        <ButtonStyled className={props.className} onClick={props.onClick}>
            {props.children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    background-color: ${(props: IThemeProps) => props.theme.color_main};
    border: 1px solid ${(props: IThemeProps) => props.theme.color_main};
    border-radius: 2px;
    color: #fff;
    height: 3em;
    padding: 0 1em;
    cursor: pointer;

    &:hover {
        background-color: #359eef;
    }
`;
