import React from "react";
import { StyledTitle } from "../Shared/Shared.styled";
import { StyledChartWrapper, StyledGraphBox } from "./Analitics.styled";

type ChartProps = {
  title?: string;
  children?: string | JSX.Element | JSX.Element[];
  $gridArea: string;
};

function ChartComponent({ children, title, $gridArea }: ChartProps) {
  return (
    <StyledGraphBox $gridArea={$gridArea}>
      <StyledTitle>{title}</StyledTitle>
      <StyledChartWrapper>{children}</StyledChartWrapper>
    </StyledGraphBox>
  );
}

export default ChartComponent;
