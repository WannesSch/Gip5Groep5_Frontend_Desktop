import { create } from "zustand";
import { AuthProps } from "../Models/AuthProps";
import { InputValues } from "../Models/InputValues";
import { User } from "../Models/User";
import {
  createUser,
  deleteUser,
  demoteAdmin,
  getAllUsers,
  getUserByEmail,
  promoteAdmin,
} from "../Repositories/UserRepository";

export interface UserStore {
  user?: User | undefined;
  users?: User[] | undefined;
  authentication?: AuthProps;
  fetchUser: (inputValues: InputValues) => Promise<number | undefined>;
  fetchAllUsers: (authentication: AuthProps) => Promise<User[]>;
  registerUser: (inputValues: InputValues) => Promise<number | undefined>;
  removeUser: (
    authentication: AuthProps,
    id: number
  ) => Promise<number | undefined>;
  setUser: (authentication: AuthProps, userId: number) => void;
  setAdmin: (authentication: AuthProps, userId: number) => void;
  logout: () => void;
}

export const useProfile = create<UserStore>((set) => ({
  fetchUser: async (inputValues) => {
    return getUserByEmail(set, inputValues);
  },
  fetchAllUsers: async (authentication) => {
    return getAllUsers(set, authentication);
  },
  registerUser: async (inputValues) => {
    return createUser(set, inputValues);
  },
  removeUser: (authentication, id) => {
    return deleteUser(authentication, id);
  },
  setUser: (authentication, userId) => {
    demoteAdmin(authentication, userId);
  },
  setAdmin: (authentication, userId) => {
    promoteAdmin(authentication, userId);
  },
  logout: () => {
    set((state) => ({ ...state, user: undefined }));
    set((state) => ({ ...state, authentication: undefined }));
  },
}));
