import React, { useEffect, useMemo, useState } from "react";
import { GetDoughnutData, GetStockGraphData } from "./Analitics.helper";
import {
  StyledAnaliticsBox,
  StyledBar,
  StyledDoughnut,
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
  ChartData,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useItem } from "../../Hooks/useItem";
import { Item } from "../../Models/Item";
import { useProfile } from "../../Hooks/useProfile";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function AnaliticsComponent() {
  const { fetchItems } = useItem();
  const [items, setItems] = useState<Item[]>();
  const [barData, setBarData] = useState<ChartData<"bar">>();
  const [doughnutData, setDoughnutData] = useState<ChartData<"doughnut">>();
  const { authentication } = useProfile();

  useEffect(() => {
    if (!authentication) return;
    fetchItems(authentication).then((res) => {
      setItems(res);
      setBarData(GetStockGraphData(res));
      setDoughnutData(GetDoughnutData());
    });
  }, [authentication, fetchItems]);

  return (
    <StyledAnaliticsBox>
      <StyledStockGraphBox>
        {barData ? <StyledBar data={barData} /> : <></>}
      </StyledStockGraphBox>
      <StyledTotalStockGraphBox>
        {doughnutData ? <StyledDoughnut data={doughnutData} /> : <></>}
      </StyledTotalStockGraphBox>
      <StyledGraph1Box />
      <StyledGraph2Box />
      <StyledGraph3Box />
    </StyledAnaliticsBox>
  );
}

export default AnaliticsComponent;
