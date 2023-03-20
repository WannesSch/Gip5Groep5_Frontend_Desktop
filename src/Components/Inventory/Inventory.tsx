import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { StyledTableBox } from "./Inventory.styled";
import { Item } from "../../Models/Item";
import { StyledMessage, StyledFontAwesomeIcon } from "../Shared/Shared.styled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useItem } from "../../Hooks/useItem";
import { useProfile } from "../../Hooks/useProfile";
import ErrorComponent from "../Error/Error";
import { getColumns } from "./Inventory.helper";
import AddRowComponent from "./AddRow";

function InventoryComponent() {
  const [editRow, setEditRow] = useState<string>("");
  const [overlayOpened, setOverlayOpened] = useState<boolean>(false);
  const { authentication } = useProfile();
  const { fetchItems, updateItem, removeItem } = useItem();
  const [rows, setRows] = useState<Item[]>([]);

  useEffect(() => {
    if (!authentication) return;
    updateItems();
    //eslint-disable-next-line
  }, [authentication, fetchItems]);

  const updateItems = () => {
    fetchItems(authentication!).then((res) => {
      setRows(res);
    });
  };

  const columns = useMemo(
    () =>
      getColumns({
        authentication,
        updateItem,
        removeItem,
        setEditRow,
        updateItems,
      }),
    //eslint-disable-next-line
    [rows]
  );

  if (!authentication)
    return (
      <ErrorComponent
        title="Forbidden page."
        description="This page is only visible to users"
      />
    );

  const handleCellCommit = () => {
    setEditRow("You have unsaved changes");
  };
  const handleAddRow = () => {
    setOverlayOpened(true);
  };

  return (
    <>
      {overlayOpened ? (
        <AddRowComponent
          isOverlayOpened={overlayOpened}
          onClose={() => setOverlayOpened(false)}
          updateItems={updateItems}
        />
      ) : (
        <></>
      )}
      {editRow && (
        <StyledMessage $background="#ba7734">{editRow}</StyledMessage>
      )}
      <StyledTableBox>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onCellEditCommit={handleCellCommit}
        />
        <Box>
          {authentication.roles === "ADMIN" ? (
            <Button onClick={handleAddRow}>
              <StyledFontAwesomeIcon $color={"green"} icon={faPlus} />
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </StyledTableBox>
    </>
  );
}

export default InventoryComponent;
