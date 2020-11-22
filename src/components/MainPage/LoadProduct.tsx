import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadProductById } from "src/store/products/actions";
import Alert from "src/components/Alert/Alert";

interface ILoadProductProps {
    idProduct: string;
}

export default function LoadProduct(props: ILoadProductProps) {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadProductById(props.idProduct));
        // eslint-disable-next-line
    }, []);

    return <Alert type="preload" text="Загрузка..." />;
}
