import { Item } from "./Models/Item";

export const GetRowID = (tableRows: Item[]) => {
  let id = 0;
  tableRows.forEach((row) => {
    if (row.id === id) id++;
  });

  return id;
};
