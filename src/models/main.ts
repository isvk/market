import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";

export interface IMain {
    statusLoadingProduct: loadStatus;
    statusLoadingProducts: loadStatus;
    statusLoadingParameters: loadStatus;
    searchWord: string;
}

const initialMain: IMain = {
    statusLoadingProduct: loadStatus.notLoaded,
    statusLoadingProducts: loadStatus.notLoaded,
    statusLoadingParameters: loadStatus.notLoaded,
    searchWord: "",
};

export default class Main extends Record(initialMain) {}
