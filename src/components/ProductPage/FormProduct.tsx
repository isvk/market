import React, { useRef, useState } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { createProduct, updateProduct } from "src/store/products/actions";
import { parameterState } from "src/store/rootSelector";
import ProductModel from "src/models/product";
import { Link } from "react-router-dom";

interface IProductFormProps {
    product: ProductModel;
    typeForm: "create" | "edit";
}

export default function FormProduct(props: IProductFormProps) {
    const dispatch = useCustomDispatch();
    const libraryParameters = useCustomSelector(parameterState);
    const [product, setProduct] = useState(props.product);
    const refSelectAddParameter = useRef<HTMLSelectElement>(null);

    const availableParameters = libraryParameters.filter(
        (libraryParameter) => !(libraryParameter.key in product.parameters)
    );

    const dictionaryGetByKey = (key: string) =>
        libraryParameters.find((libraryParameter) => libraryParameter.key === key);

    const handleChangeValueParameter = (key: string, value: string) => {
        setProduct(product.set("parameters", { ...product.parameters, [key]: value }));
    };

    const handleAddParameter = () => {
        if (refSelectAddParameter.current)
            setProduct(product.set("parameters", { ...product.parameters, [refSelectAddParameter.current.value]: "" }));
    };

    const handleDeleteParameter = (key: string) => {
        Reflect.deleteProperty(product.parameters, key);
        setProduct(product.set("parameters", { ...product.parameters }));
    };

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
                <div>Параметры:</div>
                <div>
                    {Object.entries(product.parameters).map((keyValue) => (
                        <div key={keyValue[0]}>
                            <div>{dictionaryGetByKey(keyValue[0])?.name}:</div>
                            <div>
                                <input
                                    value={keyValue[1]}
                                    onChange={(e) => handleChangeValueParameter(keyValue[0], e.target.value)}
                                />
                            </div>
                            <div>
                                <button onClick={() => handleDeleteParameter(keyValue[0])}>Удалить</button>
                            </div>
                        </div>
                    ))}

                    {availableParameters.size > 0 && (
                        <div>
                            <select ref={refSelectAddParameter}>
                                {availableParameters.valueSeq().map((parameter) => (
                                    <option value={parameter.key} key={parameter.key}>
                                        {parameter.name}
                                    </option>
                                ))}
                            </select>
                            <button onClick={handleAddParameter}>Добавить параметр</button>
                        </div>
                    )}
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
