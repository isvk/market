import React, { useRef, useState } from "react";
import styled from "styled-components";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { createProduct, updateProduct } from "src/store/products/actions";
import { parameterState } from "src/store/rootSelector";
import ProductModel from "src/models/product";
import TitleSecond from "src/components/UI/TitleSecond";
import TitleFirst from "src/components/UI/TitleFirst";
import TitlePanel from "src/components/UI/TitlePanel";
import LinkButton from "src/components/UI/LinkButton";
import FieldInput from "src/components/UI/FieldInput";
import FieldTextarea from "src/components/UI/FieldTextarea";
import FieldSelect from "src/components/UI/FieldSelect";
import Button from "src/components/UI/Button";
import { ListUl as ListIcon } from "@styled-icons/boxicons-regular/ListUl";
import { Trash as TrashIcon } from "@styled-icons/boxicons-regular/Trash";
import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { IThemeProps } from "../../App";

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
            <TitlePanel>
                <TitleFirst>{props.typeForm === "create" ? "Создание товара" : "Редактирование товара"}</TitleFirst>
                <LinkButton to={"/products"}>
                    <ListIcon size="20" />К списку товаров
                </LinkButton>
            </TitlePanel>
            <Panel>
                <TitleSecond>Статиченые параметры</TitleSecond>
                <StaticParameter>
                    <Label>Название:</Label>
                    <FieldName value={product.name} onChange={(e) => setProduct(product.set("name", e.target.value))} />
                </StaticParameter>
                <StaticParameter>
                    <Label>Описание:</Label>
                    <FieldDescription
                        value={product.description}
                        onChange={(e) => setProduct(product.set("description", e.target.value))}
                    />
                </StaticParameter>
            </Panel>
            <Panel>
                <TitleSecond>Динамические параметры</TitleSecond>
                <ListParameters>
                    {Object.entries(product.parameters).map((keyValue) => (
                        <DynamicParameter key={keyValue[0]}>
                            <LabelParameter>{dictionaryGetByKey(keyValue[0])?.name + ":"}</LabelParameter>
                            <WrapperFieldParameter>
                                <FieldInput
                                    value={keyValue[1]}
                                    onChange={(e) => handleChangeValueParameter(keyValue[0], e.target.value)}
                                />
                            </WrapperFieldParameter>
                            <ButtonDeleteParameter onClick={() => handleDeleteParameter(keyValue[0])}>
                                <TrashIcon size="20" />
                                <TextButtonDeleteParameter>Удалить</TextButtonDeleteParameter>
                            </ButtonDeleteParameter>
                        </DynamicParameter>
                    ))}

                    {availableParameters.size > 0 && (
                        <DynamicParameter>
                            <LabelParameter>Добавить параметр:</LabelParameter>
                            <WrapperFieldParameter>
                                <FieldSelect innerRef={refSelectAddParameter}>
                                    {availableParameters.valueSeq().map((parameter) => (
                                        <option value={parameter.key} key={parameter.key}>
                                            {parameter.name}
                                        </option>
                                    ))}
                                </FieldSelect>
                            </WrapperFieldParameter>
                            <ButtonAddParameter onClick={handleAddParameter}>
                                <PlusIcon size="20" />
                                <TextButtonAddParameter>Добавить</TextButtonAddParameter>
                            </ButtonAddParameter>
                        </DynamicParameter>
                    )}
                </ListParameters>
            </Panel>
            <Panel>
                <ButtonSaveProduct onClick={handleSave}>
                    {props.typeForm === "create" ? "Создать товар" : "Сохранить товар"}
                </ButtonSaveProduct>
            </Panel>
        </>
    );
}

const Panel = styled.div`
    padding-bottom: 10px;
`;

const Label = styled.div`
    padding-right: 5px;
    font-weight: 600;
    color: #a0b0b9;
    line-height: 3em;
`;

const StaticParameter = styled.div`
    padding-bottom: 5px;
`;

const FieldName = styled(FieldInput)``;

const FieldDescription = styled(FieldTextarea)`
    height: 200px;
`;

const ListParameters = styled.div``;

const DynamicParameter = styled.div`
    display: flex;
    padding-bottom: 5px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`;

const LabelParameter = styled(Label)`
    flex-basis: 14%;
    white-space: nowrap;
    min-width: 150px;

    @media (max-width: ${(props: IThemeProps) => props.theme.media_mobile}px) {
        flex-basis: 100%;
    }
`;

const WrapperFieldParameter = styled.div`
    flex-basis: 48%;
    @media (max-width: ${(props: IThemeProps) => props.theme.media_mobile}px) {
        flex-basis: 78%;
    }
`;

const ButtonParameter = styled(Button)`
    flex-basis: 14%;

    @media (max-width: ${(props: IThemeProps) => props.theme.media_mobile}px) {
        flex-basis: 18%;
    }
`;

const ButtonDeleteParameter = styled(ButtonParameter)`
    background-color: #c41732;
    border: 1px solid #ac0020;

    &:hover {
        background-color: #d22540;
    }

    @media (max-width: ${(props: IThemeProps) => props.theme.media_tablet}px) {
        width: 30px;
    }
`;

const TextButtonDeleteParameter = styled.span`
    @media (max-width: ${(props: IThemeProps) => props.theme.media_tablet}px) {
        display: none;
    }
`;

const TextButtonAddParameter = styled.span`
    @media (max-width: ${(props: IThemeProps) => props.theme.media_tablet}px) {
        display: none;
    }
`;

const ButtonAddParameter = styled(ButtonParameter)``;

const ButtonSaveProduct = styled(Button)``;
