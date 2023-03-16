import { Item } from "../../Models/Item";

export const GetStockGraphData = (items: Item[]) => {
  const barData = {
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
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(201, 203, 207, 0.8)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return barData;
};

export const GetDoughnutData = () => {
  const doughnutData = {
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
        label: "\u20AC",
        data: [100, 300, 50, 60, 77, 36],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(201, 203, 207, 0.8)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 4,
        cutout: "60%",
      },
    ],
  };

  return doughnutData;
};
