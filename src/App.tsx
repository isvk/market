import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import EditProductPage from "./components/ProductPage/EditProductPage";
import CreateProductPage from "./components/ProductPage/CreateProductPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/products" />
                    </Route>
                    <Route exact path="/products" component={MainPage} />
                    <Route exact path="/products/create" component={CreateProductPage} />
                    <Route exact path="/products/:idProduct" component={EditProductPage} />
                </Switch>
            </Wrapper>
        </ThemeProvider>
    );
}

export interface IThemeProps {
    theme: {
        media_tablet: number;
        color_main: string;
        color_title: string;
    };
}

export const theme = {
    media_tablet: 768,
    color_main: "#2196f3",
    color_title: "#2196f3",
};

const Wrapper = styled.div`
    max-width: 935px;
    margin: 0 auto;
    font-size: 16px;
    background-color: #fafafa;
`;

export default App;
