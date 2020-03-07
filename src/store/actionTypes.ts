import * as searchActions from "src/store/search/actions";
import * as ticketActions from "src/store/tickets/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesInfer<T extends { [key: string]: any }> = ReturnType<InferValueTypes<T>>;

export type allActionsTypes = ActionTypesInfer<typeof searchActions | typeof ticketActions>;
