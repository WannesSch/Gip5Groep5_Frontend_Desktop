import React from "react";
import { GetStockGraphConfig } from "./Analitics.helper";
import {
  StyledAnaliticsBox,
  StyledGraph1Box,
  StyledGraph2Box,
  StyledGraph3Box,
  StyledStockGraphBox,
  StyledTotalStockGraphBox,
} from "./Analitics.styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AnaliticsComponent() {
  const stockGraphConfig = GetStockGraphConfig();
  return (
    <StyledAnaliticsBox>
      <StyledStockGraphBox>
        <Bar data={stockGraphConfig} />
      </StyledStockGraphBox>
      <StyledTotalStockGraphBox />
      <StyledGraph1Box />
      <StyledGraph2Box />
      <StyledGraph3Box />
    </StyledAnaliticsBox>
  );
}

export default AnaliticsComponent;
