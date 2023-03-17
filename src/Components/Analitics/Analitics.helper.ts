import { Item } from "../../Models/Item";

export const GetStockGraphData = (items: Item[]) => {
  const data = {
    labels: ["CPU", "RAM", "MOEDERBORD", "GPU", "SSD", "HDD"],
    datasets: [
      {
        label: "Component Type Count",
        data: [
          items.filter((i) => i.type === "CPU").length,
          items.filter((i) => i.type === "RAM").length,
          items.filter((i) => i.type === "MOTHERBOARD").length,
          items.filter((i) => i.type === "GPU").length,
          items.filter((i) => i.type === "SSD").length,
          items.filter((i) => i.type === "HDD").length,
        ],
        backgroundColor: [
          "#152745",
          "rgba(255, 159, 64, 0.8)",
          "#295e29",
          "#8c262a",
          "#286075",
          "#4d2875",
        ],
        borderWidth: 1,
      },
    ],
  };

  return data;
};

export const GetDoughnutData = (items: Item[]) => {
  const data = {
    labels: [
      "CPU Stock",
      "RAM Stock",
      "MOEDERBORD Stock",
      "GPU Stock",
      "SSD Stock",
      "HDD Stock",
    ],

    datasets: [
      {
        label: "",
        data: [
          items
            .filter((i) => i.type === "CPU")
            .map((i) => i.amount)
            .reduce((a, b) => {
              return a + b;
            }),
          items
            .filter((i) => i.type === "RAM")
            .map((i) => i.amount)
            .reduce((a, b) => {
              return a + b;
            }),
          items
            .filter((i) => i.type === "MOTHERBOARD")
            .map((i) => i.amount)
            .reduce((a, b) => {
              return a + b;
            }),
          items
            .filter((i) => i.type === "SSD")
            .map((i) => i.amount)
            .reduce((a, b) => {
              return a + b;
            }),
          items
            .filter((i) => i.type === "HDD")
            .map((i) => i.amount)
            .reduce((a, b) => {
              return a + b;
            }),
        ],
        backgroundColor: [
          "#152745",
          "rgba(255, 159, 64, 0.8)",
          "#295e29",
          "#8c262a",
          "#286075",
          "#4d2875",
        ],
        borderWidth: 2,
        cutout: "60%",
      },
    ],
  };

  return data;
};

export const GetLineChartData = (items: Item[]) => {
  const max = 50;
  const min = 5;

  const data = {
    labels: items.map((i) => i.id),
    datasets: [
      {
        label: "Stock per component",
        data: items.map((i) => i.amount),
        borderColor: "#152745",
        backgroundColor: "#1d5378",
      },
      {
        label: "Max capacity",
        data: new Array(items.length).fill(max),
        borderColor: "#295e29",
        backgroundColor: "#3b8c3b",
      },
      {
        label: "Min capacity",
        data: new Array(items.length).fill(min),
        borderColor: "#591f21",
        backgroundColor: "#8c262a",
      },
    ],
  };

  return data;
};

export const GetPriceGraphData = (items: Item[]) => {
  console.log();
  const priceArr = items.map((i) => parseInt(i.price));
  const data = {
    labels: items.map((i) => i.id),
    datasets: [
      {
        label: "Component Price \u20AC",
        data: priceArr ? priceArr : [],
        borderColor: "#295e29",
        backgroundColor: "#3b8c3b",
        borderWidth: 1,
      },
    ],
  };

  return data;
};
