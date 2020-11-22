import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";

export interface IMain {
    statusLoadingProduct: loadStatus;
    statusLoadingProducts: loadStatus;
    statusLoadingParameters: loadStatus;
}

const initialMain: IMain = {
    statusLoadingProduct: loadStatus.notLoaded,
    statusLoadingProducts: loadStatus.notLoaded,
    statusLoadingParameters: loadStatus.notLoaded,
};

export default class Main extends Record(initialMain) {}
