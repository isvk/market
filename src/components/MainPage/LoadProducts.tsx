import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadProducts } from "src/store/products/actions";
import Alert from "src/components/Alert/Alert";

export default function LoadProducts() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadProducts());
        // eslint-disable-next-line
    }, []);

    return <Alert type="preload" text="Загрузка..." />;
}
