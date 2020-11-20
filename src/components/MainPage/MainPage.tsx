import React, { useEffect } from "react";
import styled from "styled-components";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { loadProducts } from "src/store/products/actions";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/components/Alert/Alert";
import { mainGetStatusLoadingProducts } from "src/store/rootSelector";

export default function MainPage() {
    const status = useCustomSelector(mainGetStatusLoadingProducts);
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadProducts());
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper>
            {status === loadStatus.notLoaded && <Alert type="preload" text="Загрузка..." />}
            {status === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            {status === loadStatus.loaded && <></>}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 935px;
    margin: 0 auto;
    font-size: 16px;
    background-color: #fafafa;
`;
