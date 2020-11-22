import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { useParams } from "react-router";
import { mainGetStatusLoadingParameters, productsGetById } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/components/Alert/Alert";
import LoadParameters from "src/components/MainPage/LoadParameters";
import FormProduct from "./FormProduct";
import LoadProduct from "./LoadProduct";

interface IParam {
    idProduct: string;
}

export default function EditProductPage() {
    const statusParameters = useCustomSelector(mainGetStatusLoadingParameters);
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

    return product ? <FormProduct product={product} typeForm="edit" /> : <LoadProduct idProduct={idProduct} />;
}
