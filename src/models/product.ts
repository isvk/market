import { Record } from "immutable";

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

export default class Product extends Record(initialProduct) {}
