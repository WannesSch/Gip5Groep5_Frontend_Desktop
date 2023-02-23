import { TableRow } from "./Models/Props/TableRow";

export const GetRowID = (tableRows: TableRow[]) => {
  let id = 0;
  tableRows.forEach((row) => {
    if (row.id === id) id++;
  });

  return id;
};
