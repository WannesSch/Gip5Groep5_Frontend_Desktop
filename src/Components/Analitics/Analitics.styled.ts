import { Box, styled } from "@mui/material";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

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
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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

export const StyledBar = styled(Bar)({
  margin: "1vh",
  width: "90%",
  height: "90%",
});

export const StyledDoughnut = styled(Doughnut)({
  width: "100px",
  height: "100px",
  margin: "1vh",
  display: "block",
});
