import { Box, styled } from "@mui/material";
import React from "react";

export const StyledAnaliticsBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gridTemplateRows: "repeat(8, 1fr)",
  gap: "1vh",
  width: "95%",
  height: "85vh",
  marginLeft: "2.5%",
  marginTop: "2.5vh",
});

const StyledGraphBox = styled(Box)({
  boxShadow: "1px 2px 9px #a3a3a3",
});

export const StyledStockGraphBox = styled(StyledGraphBox)({
  gridArea: "1 / 1 / 6 / 6",
});

export const StyledTotalStockGraphBox = styled(StyledGraphBox)({
  gridArea: "1 / 6 / 6 / 10",
});

export const StyledGraph1Box = styled(StyledGraphBox)({
  gridArea: "6 / 1 / 9 / 4",
});

export const StyledGraph2Box = styled(StyledGraphBox)({
  gridArea: "6 / 4 / 9 / 7",
});

export const StyledGraph3Box = styled(StyledGraphBox)({
  gridArea: "6 / 7 / 9 / 10",
});
