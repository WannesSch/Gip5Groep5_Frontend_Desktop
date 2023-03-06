import axios from "axios";
import { create } from "zustand";
import { Item } from "../Models/Item";
import { getAllItems } from "../Repositories/ItemRepository";

export interface ItemStore {
  accounts?: Item[];
  fetchAccounts: () => void;
}

export const useItem = create<ItemStore>((set) => ({
  fetchAccounts: () => {
    getAllItems(set);
  },
}));
