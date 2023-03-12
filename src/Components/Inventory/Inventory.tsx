import React, { useEffect, useMemo, useState } from "react";
import { DataGrid, GridCellEditCommitParams } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { StyledTableBox } from "./Inventory.styled";
import { Item } from "../../Models/Item";
import { StyledMessage, StyledFontAwesomeIcon } from "../Shared/Shared.styled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useItem } from "../../Hooks/useItem";
import { useProfile } from "../../Hooks/useProfile";
import ErrorComponent from "../Error/Error";
import { getColumns } from "./Inventory.helper";

function InventoryComponent() {
  const [editRow, setEditRow] = useState();
  const { authentication } = useProfile();
  const { fetchItems, updateItem, removeItem } = useItem();
  const [rows, setRows] = useState<Item[]>([]);

  useEffect(() => {
    if (!authentication) return;
    fetchItems(authentication).then((res) => {
      setRows(res);
    });
  }, [authentication, fetchItems]);

  const columns = useMemo(
    () => getColumns({ authentication, updateItem, removeItem }),
    [authentication, updateItem, removeItem]
  );
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

  return (
    <>
      {editRow ? (
        <StyledMessage $background="#ba7734">
          You have unsaved changes
        </StyledMessage>
      ) : (
        <></>
      )}
      <StyledTableBox>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onCellEditCommit={(row) => {
            handleRowEditCommit(row);
          }}
        />
        <Box>
          <Button onClick={handleAddRow}>
            <StyledFontAwesomeIcon $color={"green"} icon={faPlus} />
          </Button>
        </Box>
      </StyledTableBox>
    </>
  );
}

export default InventoryComponent;
