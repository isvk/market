import { Record } from "immutable";

export interface IProduct {
    id: string;
    name: string;
    description: string;
}

const initialProduct: IProduct = {
    id: "",
    name: "",
    description: "",
};

export default class Product extends Record(initialProduct) {}
