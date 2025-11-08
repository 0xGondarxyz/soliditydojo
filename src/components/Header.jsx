import React from "react";

export default function Header({
  activePage,
  setActivePage,
  mobileMenuOpen,
  setMobileMenuOpen,
  setSidebarVisible,
  sidebarVisible,
}) {
  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="header">
      <div className="logo">⚡ SolidityDojo</div>

      <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav ${mobileMenuOpen ? "show" : ""}`}>
        <button
          className={`nav-btn ${activePage === "home" ? "active" : ""}`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </button>
        <button
          className={`nav-btn ${activePage === "about" ? "active" : ""}`}
          onClick={() => handleNavClick("about")}
        >
          About
        </button>
        <button className="nav-btn" onClick={toggleSidebar}>
          Menu
        </button>
      </div>
    </div>
  );
}
