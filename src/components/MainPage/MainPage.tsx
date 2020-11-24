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
import { updateSearchWord } from "src/store/main/actions";
import Alert from "src/components/Alert/Alert";
import LoadParameters from "src/components/Loading/LoadParameters";
import LoadProducts from "src/components/Loading/LoadProducts";
import TitleFirst from "src/components/UI/TitleFirst";
import TitleSecond from "src/components/UI/TitleSecond";
import TitlePanel from "src/components/UI/TitlePanel";
import LinkButton from "src/components/UI/LinkButton";
import FormSearch from "src/components/FormSearch/FormSearch";
import ListProducts from "src/components/ListProducts/ListProducts";

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
                    {products.size > 0 ? (
                        <ListProducts products={products} />
                    ) : (
                        <TitleSecond>Товар не найден</TitleSecond>
                    )}
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
