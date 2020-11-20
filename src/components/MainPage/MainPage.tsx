import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadProducts } from "src/store/products/actions";

export default function MainPage() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadProducts());
        // eslint-disable-next-line
    }, []);

    return <></>;
}
