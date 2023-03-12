import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { AuthProps } from "../../Models/AuthProps";
import { Item } from "../../Models/Item";
import { StyledFontAwesomeIcon } from "../Shared/Shared.styled";
import InStockColumnComponent from "./InStockColumn";

type ColumnFunctionProps = {
  authentication?: AuthProps;
  updateItem: (authentication: AuthProps, item?: Item) => void;
  removeItem: (authentication: AuthProps, itemId?: number) => void;
};

export const getColumns = ({
  authentication,
  updateItem,
  removeItem,
}: ColumnFunctionProps) => {
  const onSaveButtonClick = (item: Item) => {
    updateItem(authentication!, item);
  };
  const onDeleteButtonClick = (itemId: number) => {
    removeItem(authentication!, itemId);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", editable: false, flex: 1, maxWidth: 50 },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      flex: 1,
    },
    { field: "type", headerName: "Type", editable: true, flex: 1 },
    {
      field: "extraInfo",
      headerName: "Extra Information",
      editable: true,
      flex: 1,
    },
    {
      field: "modelNr",
      headerName: "Model number",
      editable: true,
      flex: 1,
    },
    { field: "price", headerName: "Price", editable: true, flex: 1 },
    { field: "amount", headerName: "Amount", editable: true, flex: 1 },
    {
      field: "In Stock",
      flex: 1,
      maxWidth: 150,
      renderCell: (cellValues) => {
        return (
          <InStockColumnComponent percentage={cellValues.row.amount * 2} />
        );
      },
    },
    {
      field: "Controls",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <>
            <Button onClick={() => onSaveButtonClick(cellValues.row)}>
              <StyledFontAwesomeIcon $color={"#3a7a1f"} icon={faSave} />
            </Button>
            <Button onClick={() => onDeleteButtonClick(cellValues.row.id)}>
              <StyledFontAwesomeIcon $color={"#ba2d2d"} icon={faTrash} />
            </Button>
          </>
        );
      },
    },
  ];

  return columns;
};
