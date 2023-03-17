import React, { useEffect, useState } from "react";
import {
  GetDoughnutData,
  GetLineChartData,
  GetPriceGraphData,
  GetStockGraphData,
} from "./Analitics.helper";
import {
  StyledAnaliticsBox,
  StyledDataText,
  StyledDoughnut,
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
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useItem } from "../../Hooks/useItem";
import { Item } from "../../Models/Item";
import { useProfile } from "../../Hooks/useProfile";
import ChartComponent from "./Chart";
import { Typography } from "@mui/material";
import InStockColumnComponent from "../Inventory/InStockColumn";
import ErrorComponent from "../Error/Error";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function AnaliticsComponent() {
  const { fetchItems } = useItem();
  const [items, setItems] = useState<Item[]>();
  const [barData, setBarData] = useState<ChartData<"bar">>();
  const [doughnutData, setDoughnutData] = useState<ChartData<"doughnut">>();
  const [lineData, setLineData] = useState<ChartData<"line">>();
  const [priceBarData, setPriceBarData] = useState<ChartData<"bar">>();
  const { authentication } = useProfile();

  useEffect(() => {
    if (!authentication) return;
    fetchItems(authentication).then((res) => {
      setItems(res);
      setBarData(GetStockGraphData(res));
      setDoughnutData(GetDoughnutData(res));
      setLineData(GetLineChartData(res));
      setPriceBarData(GetPriceGraphData(res));
    });
  }, [authentication, fetchItems]);

  if (!authentication)
    return (
      <ErrorComponent
        title="Forbidden page."
        description="This page is only visible to users"
      />
    );
  return (
    <StyledAnaliticsBox>
      <ChartComponent
        title="Component count per type"
        $gridArea="1 / 1 / 6 / 9"
      >
        {barData ? <Bar data={barData} /> : <></>}
      </ChartComponent>
      <ChartComponent
        title="Stock per component (ID)"
        $gridArea="1 / 9 / 6 / 16"
      >
        {lineData ? <Line data={lineData} /> : <></>}
      </ChartComponent>
      <ChartComponent
        title="Total stock per component type"
        $gridArea="6 / 1 / 11 / 6"
      >
        {doughnutData ? <StyledDoughnut data={doughnutData} /> : <></>}
      </ChartComponent>
      <ChartComponent title="Price per component" $gridArea="6 / 6 / 11 / 11">
        {priceBarData ? <Bar data={priceBarData} /> : <></>}
      </ChartComponent>
      <ChartComponent title="Other Data" $gridArea="6 / 11 / 11 / 16">
        <StyledDataText>Total components: {items?.length}</StyledDataText>
        <Typography>
          Stock:{" "}
          <InStockColumnComponent
            percentage={
              items
                ? (items
                    ?.map((i) => i.amount)
                    .reduce((a, b) => {
                      return a + b;
                    }) /
                    1000) *
                  100
                : 0
            }
          />
        </Typography>
      </ChartComponent>
    </StyledAnaliticsBox>
  );
}

export default AnaliticsComponent;
