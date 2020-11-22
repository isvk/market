import { Record } from "immutable";

export interface IParameter {
    key: string;
    name: string;
    description: string;
    prefix: string;
    suffix: string;
}

const initialParameter: IParameter = {
    key: "",
    name: "",
    description: "",
    prefix: "",
    suffix: "",
};

export default class Parameter extends Record(initialParameter) {}
