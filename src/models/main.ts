import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";

export interface IMain {
    statusLoadingProducts: loadStatus;
}

const initialMain: IMain = {
    statusLoadingProducts: loadStatus.notLoaded,
};

export default class Main extends Record(initialMain) {}
