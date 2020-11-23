import { Record } from "immutable";
import { TStoreProduct } from "src/store/products/reducer";

export interface IProduct {
    id: string;
    name: string;
    description: string;
    parameters: { [key: string]: string };
}

const initialProduct: IProduct = {
    id: "",
    name: "",
    description: "",
    parameters: {},
};

export const filterBySearchWord = (products: Readonly<TStoreProduct>, searchWord: string) => {
    return products.filter((product) => {
        const reg = new RegExp(searchWord, "i");

        return [...Object.values(product.parameters), product.name, product.description].join("|").search(reg) !== -1;
    });
};

export default class Product extends Record(initialProduct) {}
