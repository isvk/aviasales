import { useSelector } from "react-redux";
import { IStore } from "src/store/rootReducer";
import * as rootSelector from "src/store/rootSelector";

type InferSelectorFunctionsTypes<T> = T extends { [key: string]: infer U } ? U : never;

type InferredTypes = InferSelectorFunctionsTypes<typeof rootSelector>;

export default function useCustomSelector<T extends InferredTypes>(selector: T) {
    return useSelector((state: IStore) => selector(state) as ReturnType<T>);
}
