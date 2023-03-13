import { HttpStatusCode } from "axios";
import { create } from "zustand";
import { AuthProps } from "../Models/AuthProps";
import { Item } from "../Models/Item";
import {
  createItem,
  deleteItem,
  getAllItems,
  updateItem,
} from "../Repositories/ItemRepository";

export interface ItemStore {
  items?: Item[];
  fetchItems: (authentication: AuthProps) => Promise<Item[]>;
  saveItem: (
    authentication: AuthProps,
    item: Item
  ) => Promise<number | undefined>;
  updateItem: (
    authentication: AuthProps,
    item?: Item
  ) => Promise<number | undefined>;
  removeItem: (
    authentication: AuthProps,
    itemId?: number
  ) => Promise<number | undefined>;
}

export const useItem = create<ItemStore>((set) => ({
  fetchItems: async (authentication) => {
    return await getAllItems(set, authentication);
  },
  saveItem: async (authentication: AuthProps, item: Item) => {
    return await createItem(authentication, item);
  },
  updateItem: async (authentication: AuthProps, item?: Item) => {
    return await updateItem(authentication, item!);
  },
  removeItem: async (authentication: AuthProps, itemId?: number) => {
    return await deleteItem(authentication, itemId!);
  },
}));
