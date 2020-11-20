import MockAdapter from "axios-mock-adapter";

export function mock(axios: any) {
    let mock = new MockAdapter(axios);

    mock.onGet("/api/products/").reply(200, [
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
    ]);
}
