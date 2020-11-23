import React from "react";
import styled from "styled-components";
import ProductModel from "src/models/product";
import { TStoreParameter } from "src/store/parameters/reducer";

interface IListParametersProps {
    productParameters: ProductModel["parameters"];
    libraryParameters: TStoreParameter;
}

export default function ListParameters(props: IListParametersProps) {
    const dictionaryGetByKey = (key: string) =>
        props.libraryParameters.find((libraryParameter) => libraryParameter.key === key);

    return (
        <Wrapper>
            {Object.entries(props.productParameters).map((keyValue) => (
                <Parameter key={keyValue[0]}>
                    <Label>{dictionaryGetByKey(keyValue[0])?.name + ":"}</Label>
                    <Value>
                        {keyValue[1]} {dictionaryGetByKey(keyValue[0])?.suffix}
                    </Value>
                </Parameter>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const Parameter = styled.div`
    display: flex;
    width: 100%;
`;

const Label = styled.div`
    flex-basis: 50%;
    padding-right: 5px;
    font-weight: 600;
    color: #a0b0b9;
    line-height: 2em;
`;

const Value = styled.div`
    line-height: 2em;
`;
