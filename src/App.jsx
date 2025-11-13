import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Components/Styles/App.css";
import AOSInit from "./Components/AOS";

export default function App() {
  return (
    <div id="app-container" data-aos="fade-in">
      <Navbar />
      <AOSInit /> {/* Initialize AOS */}

      <div id="page-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
