import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { auto } from "@popperjs/core";

type ProgressBarProps = {
  percentage: number;
  $color: string;
};

export const StyledTableBox = styled(Box)({
  height: "70vh",
  width: "70vw",
  margin: auto,
  paddingTop: 70,
});

export const StyledColumnBox = styled(Box)({
  width: "90%",
  position: "relative",
  height: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50px",
  background: "#ebebeb",
  overflow: "hidden",
});

export const StyledProgressBar = styled(Box)<ProgressBarProps>(
  ({ percentage, $color }) => ({
    position: "absolute",
    width: `${percentage}%`,
    left: 0,
    height: "100%",
    background: $color,
    borderRadius: "50px",
  })
);

export const StyledPercentageText = styled(Typography)({
  position: "relative",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  color: "#424242",
});
