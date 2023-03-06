import axios from "axios";
import { ItemStore } from "../Hooks/useItem";
import { Item } from "../Models/Item";

export type Set<TStore> = (
  partial:
    | TStore
    | Partial<TStore>
    | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void;

export const getAllItems = async (set: Set<ItemStore>) => {
  const { data } = await axios.get<Item[]>("http://127.0.0.1:808/api/v1/item");
  set((state) => ({ ...state, accounts: data }));
};
