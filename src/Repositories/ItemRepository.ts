import axios from "axios";
import { ItemStore } from "../Hooks/useItem";
import { Item } from "../Models/Item";
import { Set } from "../Repositories/Set";

export const getAllItems = async (set: Set<ItemStore>) => {
  const { data } = await axios.get<Item[]>("http://127.0.0.1:808/api/v1/item");
  set((state) => ({ ...state, accounts: data }));
};
