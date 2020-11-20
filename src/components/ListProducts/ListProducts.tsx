import React from "react";
import styled from "styled-components";
import { productState } from "src/store/rootSelector";
import useCustomSelector from "src/hooks/useCustomSelector";
import Product from "./Product/Product";

export default function ListProducts() {
    const products = useCustomSelector(productState);

    return (
        <Wrapper>
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 935px;
    margin: 0 auto;
    font-size: 16px;
    background-color: #fafafa;
`;
