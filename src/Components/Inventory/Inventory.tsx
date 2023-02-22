import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Button, TextField, textFieldClasses } from "@mui/material";
import { StyledTableBox } from "./Inventory.styled";
import { TableRow } from "../../Models/Props/TableRow";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, editable:true },
  { field: "name", headerName: "Naam", width: 130, editable:true },
  { field: "type", headerName: "Type", width: 130, editable:true },
  { field: "extraInformation", headerName: "Extra Informatie", width: 130, editable:true },
  { field: "modelNumber", headerName: "Model Nummer", width: 140, editable:true },
  { field: "price", headerName: "Prijs", width: 130, editable:true },
  { field: "inStock", headerName: "Hoeveelheid", width: 130, editable:true },


 
];

const tableRows:TableRow[] = [
  { id: 0, name: "", type: "", extraInformation: "", modelNumber:"", price: 0, inStock: 0 },

];

let idCounter = 0;
const createRow = () => {
  idCounter += 1;
  return { id: idCounter, name: "", type: "", extraInformation: "", modelNumber:"", price: 0, inStock: 0 };
};


function InventoryComponent() {

   const [rows, setRows] = useState<TableRow[]>(tableRows);
   
const handleAddRow = () => {
    setRows((rows) => [...rows, createRow()]);
  };

  

  if(!rows) return<></>;
  return (
    <StyledTableBox >
      <DataGrid
        rows={rows}
        columns={columns}
        
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
               
      />
    <Box>
      <Button onClick={handleAddRow}>Add</Button>
  </Box>
    </StyledTableBox>
    
  );

}

export default InventoryComponent;
