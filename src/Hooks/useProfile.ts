import { create } from "zustand";
import { AuthProps } from "../Models/AuthProps";
import { InputValues } from "../Models/InputValues";
import { User } from "../Models/User";
import {
  createUser,
  getAllUsers,
  getUserByEmail,
} from "../Repositories/UserRepository";

export interface UserStore {
  user?: User | undefined;
  users?: User[] | undefined;
  authentication?: AuthProps;
  fetchUser: (inputValues: InputValues) => void;
  fetchAllUsers: (authentication: AuthProps) => Promise<User[]>;
  registerUser: (inputValues: InputValues) => void;
  logout: () => void;
}

export const useProfile = create<UserStore>((set) => ({
  fetchUser: async (inputValues) => {
    getUserByEmail(set, inputValues);
  },
  fetchAllUsers: async (authentication) => {
    return getAllUsers(set, authentication);
  },
  registerUser: async (inputValues) => {
    createUser(set, inputValues);
  },
  logout: () => {
    set((state) => ({ ...state, user: undefined }));
    set((state) => ({ ...state, authentication: undefined }));
  },
}));
