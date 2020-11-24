import React from "react";
import styled from "styled-components";
import FieldInput from "src/components/UI/FieldInput";
import { IThemeProps } from "src/App";

interface IFormSearchProps {
    handleChangeSearch: (searchWord: string) => void;
}

export default function FormSearch(props: IFormSearchProps) {
    return (
        <Wrapper>
            <Label>Поиск:</Label>
            <FieldSearchInput
                onChange={(e) => props.handleChangeSearch(e.target.value)}
                placeholder="К примеру: apple, фото, 42"
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    margin: 15px 0;
`;

const Label = styled.div`
    flex-grow: 0;
    white-space: nowrap;
    font-weight: 600;
    font-size: 1.2em;
    line-height: 2em;
    padding-right: 0.5em;
    color: ${(props: IThemeProps) => props.theme.color_main};
`;

const FieldSearchInput = styled(FieldInput)`
    flex-grow: 1;
`;
