import React, { SetStateAction, useState } from "react";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridRowEntry,
  GridRowId,
  GridSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import {
  Box,
  Button,
  Select,
  TextField,
  textFieldClasses,
} from "@mui/material";
import { StyledButton,  StyledTableBox } from "./Inventory.styled";
import { Item } from "../../Models/Item";
import { GetRowID } from "../../Utils";
import { StyledFontAwesomeIcon } from "../Shared/Shared.styled";
import { faCross, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, editable: false },
  { field: "name", headerName: "Naam", width: 130, editable: true },
  { field: "type", headerName: "Type", width: 130, editable: true },
  {
    field: "extraInformation",
    headerName: "Extra Informatie",
    width: 130,
    editable: true,
  },
  {
    field: "modelNumber",
    headerName: "Model Nummer",
    width: 140,
    editable: true,
  },
  { field: "price", headerName: "Prijs", width: 130, editable: true },
  { field: "inStock", headerName: "Hoeveelheid", width: 130, editable: true },
];

const items: Item[] = [
  {
    id: 0,
    name: "Test0",
    type: "Test0",
    extraInformation: "Test0",
    modelNumber: "Test0",
    price: 400,
    inStock: 5,
  },
  {
    id: 1,
    name: "Test1",
    type: "Test1",
    extraInformation: "Test1",
    modelNumber: "Test1",
    price: 400,
    inStock: 5,
  },

  {
    id: 2,
    name: "Test2",
    type: "Test2",
    extraInformation: "Test2",
    modelNumber: "Test2",
    price: 400,
    inStock: 5,
  },
];

function InventoryComponent() {
  const [rows, setRows] = useState<Item[]>(items);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const createRow = () => {
    return {
      id: GetRowID(rows),
      name: "",
      type: "",
      extraInformation: "",
      modelNumber: "",
      price: 0,
      inStock: 0,
    };
  };

  const handleAddRow = () => {
    setRows((rows) => [...rows, createRow()]);
  };

  const handleDeleteRow = () => {
    const selectedIDs = new Set(selectionModel);
    setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
  };

  const handleRowEditCommit = (editableRow: GridCellEditCommitParams) => {
    let row = rows.filter((r) => r.id == editableRow.id)[0];

    switch (editableRow.field) {
      case "name":
        row.name = editableRow.value;
        break;
      case "type":
        row.type = editableRow.value;
        break;
      case "extraInformation":
        row.extraInformation = editableRow.value;
        break;
      case "modelNumber":
        row.modelNumber = editableRow.value;
        break;
      case "price":
        row.price = editableRow.value;
        break;
      case "inStock":
        row.inStock = editableRow.value;
        break;
    }
    console.log(row); //-> naar server voor op te slagen
  };

  if (!rows) return <></>;
  return (
    <StyledTableBox>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          setSelectionModel(ids);
        }}
        onCellEditCommit={(row) => {
          handleRowEditCommit(row);
        }}
      />
      <Box>
        <StyledButton onClick={handleAddRow}><StyledFontAwesomeIcon $color={"green"}icon={faPlus}/></StyledButton>
       
        <Button onClick={handleDeleteRow}><StyledFontAwesomeIcon $color={"red"} icon={faTrash}/></Button>
      </Box>
    </StyledTableBox>
  )
}

export default InventoryComponent;
