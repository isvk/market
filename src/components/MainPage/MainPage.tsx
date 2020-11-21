import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusLoadingProducts, productState } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import LoadProducts from "./LoadProducts";
import Alert from "src/components/Alert/Alert";
import ListProducts from "src/components/ListProducts/ListProducts";

export default function MainPage() {
    const status = useCustomSelector(mainGetStatusLoadingProducts);
    const products = useCustomSelector(productState);

    return (
        <Wrapper>
            {status === loadStatus.notLoaded && <LoadProducts />}
            {status === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            {status === loadStatus.loaded && <ListProducts products={products} />}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
