import React, { useEffect, useState } from "react";
import {
  StyledColumnBox,
  StyledPercentageText,
  StyledProgressBar,
} from "./Inventory.styled";

type ColumnProps = {
  percentage: number;
};

function InStockColumnComponent({ percentage }: ColumnProps) {
  const [color, setColor] = useState("#3a7a1f");

  useEffect(() => {
    if (percentage <= 20) setColor("#ba2d2d");
    if (percentage < 75 && percentage > 20) setColor("#a3622c");
  }, [percentage]);
  return (
    <StyledColumnBox>
      <StyledProgressBar percentage={percentage} $color={color} />
      <StyledPercentageText>{percentage}%</StyledPercentageText>
    </StyledColumnBox>
  );
}

export default InStockColumnComponent;
