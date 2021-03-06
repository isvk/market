import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { parameterState } from "src/store/rootSelector";
import ProductModel from "src/models/product";
import ListParameters from "./ListParameters/ListParameters";
import TitlePanel from "src/components/UI/TitlePanel";
import TitleFirst from "src/components/UI/TitleFirst";
import LinkButton from "src/components/UI/LinkButton";
import TitleSecond from "src/components/UI/TitleSecond";

import { IThemeProps } from "src/App";
import { Edit } from "@styled-icons/boxicons-regular/Edit";

interface IProductProps {
    product: ProductModel;
}

export default function Product(props: IProductProps) {
    const parameters = useCustomSelector(parameterState);

    return (
        <CardProduct>
            <HeadCardProduct>
                <TitlePanel>
                    <Name>{props.product.name}</Name>
                    <LinkButton to={"/products/" + props.product.id}>
                        <EditIcon size="16" />
                        Редактировать товар
                    </LinkButton>
                </TitlePanel>
            </HeadCardProduct>
            <BodyCardProduct>
                <BockDescription>
                    <TitleBlock>Описание</TitleBlock>
                    <Text>{props.product.description}</Text>
                </BockDescription>
                <BockListParameters>
                    <TitleBlock>Параметры</TitleBlock>
                    <ListParameters productParameters={props.product.parameters} libraryParameters={parameters} />
                </BockListParameters>
            </BodyCardProduct>
        </CardProduct>
    );
}

const CardProduct = styled.div`
    margin: 20px 0;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const HeadCardProduct = styled.div``;

const Name = styled(TitleFirst)``;

const EditIcon = styled(Edit)`
    padding-right: 3px;
`;

const BodyCardProduct = styled.div`
    display: flex;

    @media (max-width: ${(props: IThemeProps) => props.theme.media_tablet}px) {
        flex-direction: column-reverse;
    }
`;
const BockDescription = styled.div`
    flex-basis: 60%;
    padding-right: 30px;
`;

const TitleBlock = styled(TitleSecond)``;

const Text = styled.article`
    color: #353535;
    line-height: 1.5em;
`;

const BockListParameters = styled.div`
    flex-basis: 40%;
`;
