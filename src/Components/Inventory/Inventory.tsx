import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { StyledTableBox } from "./Inventory.styled";
import { Item } from "../../Models/Item";
import { StyledFontAwesomeIcon } from "../Shared/Shared.styled";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useItem } from "../../Hooks/useItem";
import { useProfile } from "../../Hooks/useProfile";
import ErrorComponent from "../Error/Error";
import InStockColumnComponent from "./InStockColumn";

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
      return <InStockColumnComponent percentage={cellValues.row.amount * 2} />;
    },
  },
];

function InventoryComponent() {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const { authentication } = useProfile();
  const { fetchItems } = useItem();
  const [rows, setRows] = useState<Item[]>([]);

  useEffect(() => {
    if (!authentication) return;
    fetchItems(authentication).then((res) => {
      setRows(res);
    });
  }, [authentication, fetchItems]);

  if (!authentication)
    return (
      <ErrorComponent
        title="Forbidden page."
        description="This page is only visible to users"
      />
    );

  const createRow = () => {
    return {
      name: "",
      type: "",
      extraInfo: "",
      modelNr: "",
      price: "",
      amount: 0,
    };
  };

  const handleAddRow = () => {
    setRows((rows) => [...rows, createRow()]);
  };

  const handleDeleteRow = () => {
    const selectedIDs = new Set(selectionModel);
    setRows((r) => r.filter((x) => x.id != null && !selectedIDs.has(x.id)));
  };

  const handleRowEditCommit = (editableRow: GridCellEditCommitParams) => {
    let row = rows.filter((r) => r.id === editableRow.id)[0];

    switch (editableRow.field) {
      case "name":
        row.name = editableRow.value;
        break;
      case "extraInfo":
        row.extraInfo = editableRow.value;
        break;
      case "modelNr":
        row.modelNr = editableRow.value;
        break;
      case "price":
        row.price = editableRow.value;
        break;
      case "amount":
        row.amount = editableRow.value;
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
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          setSelectionModel(ids);
        }}
        onCellEditCommit={(row) => {
          handleRowEditCommit(row);
        }}
      />
      <Box>
        <Button onClick={handleAddRow}>
          <StyledFontAwesomeIcon $color={"green"} icon={faPlus} />
        </Button>

        <Button onClick={handleDeleteRow}>
          <StyledFontAwesomeIcon $color={"red"} icon={faTrash} />
        </Button>
      </Box>
    </StyledTableBox>
  );
}

export default InventoryComponent;
