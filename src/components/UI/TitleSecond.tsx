import React, { ReactNode } from "react";
import styled from "styled-components";
import { IThemeProps } from "src/App";

interface ITitleSecondProps {
    children: ReactNode;
}

export default function TitleSecond(props: ITitleSecondProps) {
    return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.h1`
    font-weight: 600;
    font-size: 1.2em;
    line-height: 2em;
    color: ${(props: IThemeProps) => props.theme.color_title};
`;
