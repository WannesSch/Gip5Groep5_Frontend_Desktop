import { create } from "zustand";
import { AuthProps } from "../Models/AuthProps";
import { InputValues } from "../Models/InputValues";
import { User } from "../Models/User";
import { getUserByEmail } from "../Repositories/UserRepository";

export interface UserStore {
  user?: User | undefined;
  authentication?: AuthProps;
  fetchUser: (inputValues: InputValues) => void;
  logout: () => void;
}

export const useProfile = create<UserStore>((set) => ({
  fetchUser: async (inputValues) => {
    getUserByEmail(set, inputValues);
  },
  logout: () => {
    set((state) => ({ ...state, user: undefined }));
    set((state) => ({ ...state, password: undefined }));
  },
}));
