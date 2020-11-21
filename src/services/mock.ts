import MockAdapter from "axios-mock-adapter";

export function mock(axios: any) {
    let mock = new MockAdapter(axios);

    /* Products */
    const products = [
        {
            id: "7df78ad8902c6313",
            name: "Apple iPhone SE 2",
            description: "Текстовое описание для Apple iPhone SE 2",
        },
        {
            id: "5879b0f65a56a454",
            name: "SAMSUNG Galaxy S20",
            description: "Текстовое описание для Samsung Galaxy S20",
        },
    ];

    //loadAll
    mock.onGet("/api/products/").reply(200, products);

    //create
    mock.onPut("/api/products/").reply((config) => {
        const product = { ...JSON.parse(config.data), id: Date.now().toString() };
        products.push(product);

        return [200, product];
    });

    /* End Products */
}
