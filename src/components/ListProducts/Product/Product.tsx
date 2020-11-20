import React from "react";
import styled from "styled-components";
import ProductModel from "src/models/product";

interface IProductProps {
    product: ProductModel;
}

export default function Product(props: IProductProps) {
    return (
        <Wrapper>
            <Name>{props.product.name}</Name>
            <Description>{props.product.description}</Description>
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
