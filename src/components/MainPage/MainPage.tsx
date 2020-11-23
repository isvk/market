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
                    <FormSearch handleChangeSearch={handleChangeSearch} />
                    <ListProducts products={products} />
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
