import axios from "axios";
import { api_url } from "../Global";
import { ItemStore } from "../Hooks/useItem";
import { Item } from "../Models/Item";
import { Set } from "../Repositories/Set";
import { AuthProps } from "../Models/AuthProps";

export const getAllItems = async (
  set: Set<ItemStore>,
  authentication: AuthProps
) => {
  const { data } = await axios.get<Item[]>(`${api_url}/api/v1/item/getall`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    auth: {
      username: authentication.username,
      password: authentication.password,
    },
  });

  set((state) => ({ ...state, accounts: data }));

  return data;
};

export const createItem = async (authentication: AuthProps, item: Item) => {
  if (!authentication) return;

  const { status } = await axios.post<Item>(
    `${api_url}/api/v1/item/add`,
    item,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      auth: {
        username: authentication.username,
        password: authentication.password,
      },
    }
  );
  return status;
};

export const updateItem = async (authentication: AuthProps, item: Item) => {
  if (!authentication) return;
  console.log(item);
  const { status } = await axios.put<Item>(
    `${api_url}/api/v1/item/update/${item.id}`,
    item,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      auth: {
        username: authentication.username,
        password: authentication.password,
      },
    }
  );
  return status;
};

export const deleteItem = async (authentication: AuthProps, itemId: number) => {
  if (!authentication) return;

  const { status } = await axios.delete<Item>(
    `${api_url}/api/v1/item/delete/${itemId}`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      auth: {
        username: authentication.username,
        password: authentication.password,
      },
    }
  );
  return status;
};
