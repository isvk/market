import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { useParams } from "react-router";
import { mainGetStatusLoadingParameters, mainGetStatusLoadingProduct, productsGetById } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/components/Alert/Alert";
import LoadParameters from "src/components/Loading/LoadParameters";
import LoadProduct from "src/components/Loading/LoadProduct";
import FormProduct from "src/components/FormProduct/FormProduct";

interface IParam {
    idProduct: string;
}

export default function EditProductPage() {
    const statusParameters = useCustomSelector(mainGetStatusLoadingParameters);
    const statusProduct = useCustomSelector(mainGetStatusLoadingProduct);
    const { idProduct } = useParams<IParam>();
    const product = useCustomSelector(productsGetById, idProduct);

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
            {!product && statusProduct !== loadStatus.errorServer && <LoadProduct idProduct={idProduct} />}
            {statusProduct === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            {product && <FormProduct product={product} typeForm="edit" />}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
