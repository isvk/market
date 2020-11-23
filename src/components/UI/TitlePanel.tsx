import React, { ReactNode } from "react";
import styled from "styled-components";
import { IThemeProps } from "src/App";

interface ITitlePanelProps {
    children?: ReactNode;
}

export default function TitlePanel(props: ITitlePanelProps) {
    return <TitlePanelStyled>{props.children}</TitlePanelStyled>;
}

const TitlePanelStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    @media (max-width: ${(props: IThemeProps) => props.theme.media_mobile}px) {
        flex-flow: column;
    }
`;
