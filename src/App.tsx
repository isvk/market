import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import EditProductPage from "./components/ProductPage/EditProductPage";
import CreateProductPage from "./components/ProductPage/CreateProductPage";

function App() {
    return (
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
    );
}

const Wrapper = styled.div`
    max-width: 935px;
    margin: 0 auto;
    font-size: 16px;
    background-color: #fafafa;
`;

export default App;
