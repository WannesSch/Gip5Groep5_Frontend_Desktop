import { create } from "zustand";
import { AuthProps } from "../Models/AuthProps";
import { Item } from "../Models/Item";
import { createItem, getAllItems } from "../Repositories/ItemRepository";

export interface ItemStore {
  items?: Item[];
  fetchItems: (authentication: AuthProps) => Promise<Item[]>;
  saveItem: (authentication: AuthProps, item: Item) => void;
}

export const useItem = create<ItemStore>((set) => ({
  fetchItems: async (authentication) => {
    return await getAllItems(set, authentication);
  },
  saveItem: (authentication: AuthProps, item: Item) => {
    createItem(authentication, item);
  },
}));
