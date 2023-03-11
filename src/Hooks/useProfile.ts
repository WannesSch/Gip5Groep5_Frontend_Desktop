import axios from "axios";
import { create } from "zustand";
import { InputValues } from "../Models/InputValues";
import { Item } from "../Models/Item";
import { User } from "../Models/User";
import { getAllItems } from "../Repositories/ItemRepository";
import { getUserByEmail } from "../Repositories/UserRepository";

export interface UserStore {
  user?: User | undefined;
  fetchUser: (inputValues: InputValues) => void;
  logout: () => void;
}

export const useProfile = create<UserStore>((set) => ({
  fetchUser: async (inputValues) => {
    getUserByEmail(set, inputValues);
  },
  logout: () => {
    set((state) => ({ ...state, user: undefined }));
  },
}));
