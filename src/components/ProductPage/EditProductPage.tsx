import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { useParams } from "react-router";
import { productsGetById } from "src/store/rootSelector";
import Product from "src/models/product";
import FormProduct from "./FormProduct";
import LoadProduct from "./LoadProduct";

interface IParam {
    idProduct: Product["id"];
}

export default function EditProductPage() {
    const { idProduct } = useParams<IParam>();

    const product = useCustomSelector(productsGetById, idProduct);

    return product ? <FormProduct product={product} typeForm="edit" /> : <LoadProduct idProduct={idProduct} />;
}
