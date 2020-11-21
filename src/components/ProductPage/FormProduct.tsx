import React, { useState } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import ProductModel from "src/models/product";
import { createProduct, updateProduct } from "src/store/products/actions";
import { Link } from "react-router-dom";

interface IProductFormProps {
    product: ProductModel;
    typeForm: "create" | "edit";
}

export default function FormProduct(props: IProductFormProps) {
    const dispatch = useCustomDispatch();

    const [product, setProduct] = useState(props.product);

    const handleSave = () =>
        dispatch(props.typeForm === "create" ? createProduct(product) : updateProduct(product.id, product));

    return (
        <>
            <Link to={"/products"}>К списку товаров</Link>
            <h1>{props.typeForm === "create" ? "Создание товара" : "Редактирование товара"}</h1>
            <div>
                <div>Название:</div>
                <div>
                    <input value={product.name} onChange={(e) => setProduct(product.set("name", e.target.value))} />
                </div>
            </div>
            <div>
                <div>Описание:</div>
                <div>
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct(product.set("description", e.target.value))}
                    />
                </div>
            </div>
            <div>
                <button onClick={handleSave}>
                    {props.typeForm === "create" ? "Создать товар" : "Сохранить товар"}
                </button>
            </div>
        </>
    );
}
