import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusLoadingParameters, mainGetStatusLoadingProducts, productState } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/components/Alert/Alert";
import LoadParameters from "./LoadParameters";
import LoadProducts from "./LoadProducts";
import ListProducts from "src/components/ListProducts/ListProducts";

export default function MainPage() {
    const statusProducts = useCustomSelector(mainGetStatusLoadingProducts);
    const statusParameters = useCustomSelector(mainGetStatusLoadingParameters);
    const products = useCustomSelector(productState);

    if (statusParameters !== loadStatus.loaded) {
        return (
            <>
                {statusParameters === loadStatus.notLoaded && <LoadParameters />}
                {statusParameters === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            </>
        );
    }

    return (
        <Wrapper>
            {statusProducts === loadStatus.notLoaded && <LoadProducts />}
            {statusProducts === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            {statusProducts === loadStatus.loaded && <ListProducts products={products} />}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
