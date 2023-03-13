import React, { useEffect, useMemo, useState } from "react";
import { DataGrid, GridCellEditCommitParams } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { StyledTableBox } from "./Inventory.styled";
import { Item } from "../../Models/Item";
import {
  StyledMessage,
  StyledFontAwesomeIcon,
  StyledOverlay,
  StyledAuthBox,
  StyledOverlayBox,
} from "../Shared/Shared.styled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useItem } from "../../Hooks/useItem";
import { useProfile } from "../../Hooks/useProfile";
import ErrorComponent from "../Error/Error";
import { getColumns } from "./Inventory.helper";
import AddRowComponent from "./AddRow";

function InventoryComponent() {
  const [editRow, setEditRow] = useState<string>("");
  const [isOverlayOpened, setIsoverlayOpened] = useState<boolean>(false);
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
    () => getColumns({ authentication, updateItem, removeItem, setEditRow }),
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

  return (
    <>
      {isOverlayOpened ? <AddRowComponent /> : <></>}
      {editRow && (
        <StyledMessage $background="#ba7734">{editRow}</StyledMessage>
      )}
      <StyledTableBox>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onCellEditCommit={() => {
            setEditRow("You have unsaved changes");
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
