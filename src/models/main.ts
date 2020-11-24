import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";
import { saveStatus } from "src/store/saveStatus";

export interface IMain {
    statusLoadingProduct: loadStatus;
    statusLoadingProducts: loadStatus;
    statusLoadingParameters: loadStatus;
    statusSavingProduct: saveStatus;
    searchWord: string;
}

const initialMain: IMain = {
    statusLoadingProduct: loadStatus.notLoaded,
    statusLoadingProducts: loadStatus.notLoaded,
    statusLoadingParameters: loadStatus.notLoaded,
    statusSavingProduct: saveStatus.notSaved,
    searchWord: "",
};

export default class Main extends Record(initialMain) {}
