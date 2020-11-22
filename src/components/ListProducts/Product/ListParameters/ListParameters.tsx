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
                <div key={keyValue[0]}>
                    <div>{dictionaryGetByKey(keyValue[0])?.name}:</div>
                    <div>{keyValue[1]}</div>
                </div>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
