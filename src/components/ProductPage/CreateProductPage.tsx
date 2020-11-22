import React from "react";
import Product from "src/models/product";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusLoadingParameters } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/components/Alert/Alert";
import LoadParameters from "src/components/MainPage/LoadParameters";
import FormProduct from "./FormProduct";

export default function CreateProductPage() {
    const product = new Product();

    const statusParameters = useCustomSelector(mainGetStatusLoadingParameters);

    if (statusParameters !== loadStatus.loaded) {
        return (
            <>
                {statusParameters === loadStatus.notLoaded && <LoadParameters />}
                {statusParameters === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            </>
        );
    }

    return <FormProduct product={product} typeForm="create" />;
}
