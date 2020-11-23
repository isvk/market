import React from "react";
import styled from "styled-components";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import {
    mainGetStatusLoadingParameters,
    mainGetStatusLoadingProducts,
    productGetProductsFilterBySearchWord,
} from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/components/Alert/Alert";
import LoadParameters from "./LoadParameters";
import LoadProducts from "./LoadProducts";
import ListProducts from "src/components/ListProducts/ListProducts";
import FormSearch from "./FormSearch";
import { updateSearchWord } from "src/store/main/actions";
import TitleFirst from "src/components/UI/TitleFirst";
import TitlePanel from "src/components/UI/TitlePanel";
import LinkButton from "src/components/UI/LinkButton";
import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";

export default function MainPage() {
    const dispatch = useCustomDispatch();
    const statusProducts = useCustomSelector(mainGetStatusLoadingProducts);
    const statusParameters = useCustomSelector(mainGetStatusLoadingParameters);
    const products = useCustomSelector(productGetProductsFilterBySearchWord);

    const handleChangeSearch = (searchWord: string) => {
        dispatch(updateSearchWord(searchWord));
    };

    if (statusParameters !== loadStatus.loaded) {
        return (
            <>
                {statusParameters === loadStatus.notLoaded && <LoadParameters />}
                {statusParameters === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            </>
        );
    }

    return (
        <Wrapper>
            {statusProducts === loadStatus.notLoaded && <LoadProducts />}
            {statusProducts === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            {statusProducts === loadStatus.loaded && (
                <>
                    <TitlePanel>
                        <TitleFirst>Список товары</TitleFirst>
                        <LinkButton to="/products/create">
                            <PlusIcon size="20" />
                            Создать товар
                        </LinkButton>
                    </TitlePanel>
                    <FormSearch handleChangeSearch={handleChangeSearch} />
                    <ListProducts products={products} />
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
