import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BuilderComponent from "./Components/Builder/Builder";
import HomeComponent from "./Components/Home/Home";
import InventoryComponent from "./Components/Inventory/Inventory";
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
        <Route path="/builder" element={<BuilderComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
