import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnaliticsComponent from "./Components/Analitics/Analitics";
import HomeComponent from "./Components/Home/Home";
import InventoryComponent from "./Components/Inventory/Inventory";
import FooterComponent from "./Components/Shared/Footer/Footer";
import NavBarComponent from "./Components/Shared/Navbar/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <NavBarComponent />

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/inventory" element={<InventoryComponent />} />
        <Route path="/analitics" element={<AnaliticsComponent />} />
      </Routes>

      <FooterComponent />
    </Router>
  </React.StrictMode>
);
