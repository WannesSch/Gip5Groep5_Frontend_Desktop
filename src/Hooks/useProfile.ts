import { create } from "zustand";
import { AuthProps } from "../Models/AuthProps";
import { InputValues } from "../Models/InputValues";
import { User } from "../Models/User";
import {
  addAdmin,
  addUser,
  createUser,
  deleteUser,
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
  removeUser: (authentication: AuthProps, id: number) => void;
  setUser: (authentication: AuthProps, user: User) => void;
  setAdmin: (authentication: AuthProps, user: User) => void;
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
  removeUser: (authentication, id) => {
    deleteUser(authentication, id);
  },
  setUser: (authentication, user) => {
    addUser(authentication, user);
  },
  setAdmin: (authentication, user) => {
    addAdmin(authentication, user);
  },
  logout: () => {
    set((state) => ({ ...state, user: undefined }));
    set((state) => ({ ...state, authentication: undefined }));
  },
}));
