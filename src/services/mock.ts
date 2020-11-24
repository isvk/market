import MockAdapter from "axios-mock-adapter";

export function mock(axios: any) {
    let mock = new MockAdapter(axios, { delayResponse: 1000 });

    /* Products */
    const products = [
        {
            id: "7df78ad8902c6313",
            name: "Apple iPhone SE 2 2020",
            description:
                "Смартфон Apple iPhone SE выделяется классическим минималистским исполнением и мощными характеристиками. Металлический корпус смартфона защищен от пыли и воды, а также способен выдерживать погружение под воду. На 4.7-дюймовом дисплее IPS отображается детализированная картинка с сочными и реалистичными цветами.",
            parameters: {
                manufacturer: "Apple",
                model: "iPhone SE 2",
                price: "42749",
            },
        },
        {
            id: "5879b0f65a56a454",
            name: "SAMSUNG Galaxy S20",
            description:
                "Смартфон Samsung в светло-серебристом корпусе из стекла смотрится очень эффектно. При этом модель объединила в себе такие возможности, которые позволяют ей всерьез конкурировать с профессиональными фото- и видеокамерами. Основная камера состоит из 3 модулей, обладает 30-кратным зумом и способна делать фото с разрешением до 64+12+12 Мп.",
            parameters: {
                manufacturer: "SAMSUNG",
                model: "Galaxy S20",
                price: "56499",
            },
        },
    ];

    //loadAll
    mock.onGet("/api/products/").reply(200, products);

    //create
    mock.onPut("/api/products/").reply((config) => {
        const product = { ...JSON.parse(config.data), id: Date.now().toString() };
        products.push(product);

        mock.onPost("/api/products/" + product.id).reply((config) => {
            return [200, JSON.parse(config.data)];
        });

        return [200, product];
    });

    //read
    products.forEach((product) => {
        mock.onGet("/api/products/" + product.id).reply(200, product);
    });

    //update
    products.forEach((product) => {
        mock.onPost("/api/products/" + product.id).reply((config) => {
            return [200, JSON.parse(config.data)];
        });
    });
    /* End Products */

    /* Parameters */
    const parameters = [
        {
            key: "manufacturer",
            name: "Производитель",
            description: "",
            prefix: "",
            suffix: "",
        },
        {
            key: "model",
            name: "Модель",
            description: "",
            prefix: "",
            suffix: "",
        },
        {
            key: "price",
            name: "Цена",
            description: "",
            prefix: "",
            suffix: "р.",
        },
    ];

    //loadAll
    mock.onGet("/api/parameters/").reply(200, parameters);
    /* End Parameters */
}
