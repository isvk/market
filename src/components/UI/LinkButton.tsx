import React, { ReactNode } from "react";
import styled from "styled-components";
import { IThemeProps } from "src/App";
import { Link } from "react-router-dom";

interface ILinkButtonProps {
    className?: string;
    children?: ReactNode;
    to: string;
}

export default function LinkButton(props: ILinkButtonProps) {
    return <LinkButtonStyled {...props}>{props.children}</LinkButtonStyled>;
}

const LinkButtonStyled = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props: IThemeProps) => props.theme.color_main};
    border: 1px solid ${(props: IThemeProps) => props.theme.color_main};
    border-radius: 2px;
    padding: 0.5em 1em;
    text-decoration: none;
    line-height: 2em;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #359eef;
    }
`;
