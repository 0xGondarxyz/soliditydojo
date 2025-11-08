import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [activeContract, setActiveContract] = useState("storage");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setSidebarVisible={setSidebarVisible}
        sidebarVisible={sidebarVisible}
      />

      <div className="container">
        <Sidebar
          activeContract={activeContract}
          setActiveContract={setActiveContract}
          setActivePage={setActivePage}
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />

        <MainContent
          activePage={activePage}
          activeContract={activeContract}
          setActivePage={setActivePage}
        />
      </div>

      <Footer />
    </div>
  );
}
