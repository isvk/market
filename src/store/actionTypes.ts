import * as mainActions from "src/store/main/actions";
import * as parameterActions from "src/store/parameters/actions";
import * as productActions from "src/store/products/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesInfer<T extends { [key: string]: any }> = ReturnType<InferValueTypes<T>>;

export type allActionsTypes = ActionTypesInfer<typeof mainActions | typeof parameterActions | typeof productActions>;
