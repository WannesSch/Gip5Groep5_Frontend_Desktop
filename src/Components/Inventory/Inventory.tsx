import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Button, TextField, textFieldClasses } from "@mui/material";
import { StyledTableBox } from "./Inventory.styled";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Naam", width: 130 },
  { field: "type", headerName: "Type", width: 130 },
  { field: "extraInformation", headerName: "Extra Informatie", width: 130 },
  { field: "modelNumber", headerName: "Model Nummer", width: 140 },
  { field: "price", headerName: "Prijs", width: 130 },
  { field: "inStock", headerName: "Hoeveelheid", width: 130 },


 
];

const rows = [
  { id: "", name: "", type: "", extraInformation: "", modelNumber:"", price:"", inStock: "" },

];

function InventoryComponent() {
<<<<<<< HEAD
  return (
    <StyledTableBox >
      <DataGrid
        rows={rows}
        columns={columns}
        
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
       

        
      />
    </StyledTableBox>
  );
=======
  return <></>;
>>>>>>> 923ac9d7d411080dc1a7d1259aaccf6de6ffae22
}

export default InventoryComponent;
