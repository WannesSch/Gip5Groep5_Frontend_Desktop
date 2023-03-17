import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Doughnut } from "react-chartjs-2";

type GridBoxProps = {
  $gridArea: string;
};

export const StyledAnaliticsBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(15, 1fr)",
  gridTemplateRows: "repeat(10, 1fr)",
  gap: "1vh",
  width: "95%",
  height: "85vh",
  marginLeft: "2.5%",
  marginTop: "2.5vh",
});

export const StyledGraphBox = styled(Box)(({ $gridArea }: GridBoxProps) => ({
  boxShadow: "1px 2px 9px #a3a3a3",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gridArea: $gridArea,
  flexDirection: "column",
}));

export const StyledChartWrapper = styled(Box)({
  height: "80%",
  width: "95%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
});

export const StyledDoughnut = styled(Doughnut)({
  width: "100%",
  maxHeight: "100%",
  display: "block",
});

export const StyledDataText = styled(Typography)({
  fontSize: "1.5rem",
  color: "#022B3A",
  marginBlock: "5vh",
});
