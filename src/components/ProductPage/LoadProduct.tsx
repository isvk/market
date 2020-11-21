import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { loadProductById } from "src/store/products/actions";
import ProductModel from "src/models/product";
import { productsGetById } from "src/store/rootSelector";
import FormProduct from "./FormProduct";

interface ILoadProductProps {
    idProduct: ProductModel["id"];
}

export default function LoadProduct(props: ILoadProductProps) {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadProductById(props.idProduct));
        // eslint-disable-next-line
    }, []);

    const product = useCustomSelector(productsGetById, props.idProduct);

    return product ? <FormProduct product={product} typeForm="create" /> : <>404</>;
}
