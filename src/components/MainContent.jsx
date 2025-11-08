import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

export default function MainContent({
  activePage,
  activeContract,
  setActivePage,
}) {
  return (
    <div className="main-content">
      <div className={`page ${activePage === "home" ? "active" : ""}`}>
        <HomePage activeContract={activeContract} />
      </div>

      <div className={`page ${activePage === "about" ? "active" : ""}`}>
        <AboutPage />
      </div>
    </div>
  );
}
