import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { parameterState } from "src/store/rootSelector";
import { Link } from "react-router-dom";
import ProductModel from "src/models/product";
import ListParameters from "./ListParameters/ListParameters";

interface IProductProps {
    product: ProductModel;
}

export default function Product(props: IProductProps) {
    const parameters = useCustomSelector(parameterState);

    return (
        <Wrapper>
            <Link to={"/products/" + props.product.id}>Редактировать товар</Link>
            <Name>{props.product.name}</Name>
            <Description>{props.product.description}</Description>
            <ListParameters productParameters={props.product.parameters} libraryParameters={parameters} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 20px 0;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const Name = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #2196f3;
`;

const Description = styled.div`
    color: #353535;
`;
