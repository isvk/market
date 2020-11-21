import React from "react";
import Product from "src/models/product";
import FormProduct from "./FormProduct";

export default function CreateProductPage() {
    const product = new Product();

    return <FormProduct product={product} typeForm="create" />;
}
