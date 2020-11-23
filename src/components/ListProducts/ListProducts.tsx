import React from "react";
import styled from "styled-components";
import Product from "./Product/Product";
import { TStoreProduct } from "src/store/products/reducer";

interface IListProductsProps {
    products: TStoreProduct;
}

export default function ListProducts(props: IListProductsProps) {
    return (
        <Wrapper>
            {props.products.valueSeq().map((product) => (
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
