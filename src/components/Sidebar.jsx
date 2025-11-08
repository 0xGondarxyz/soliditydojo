import React from "react";

const contractsByLevel = {
  beginner: [
    { id: "storage", label: "Simple Storage" },
    { id: "counter", label: "Counter Contract" },
    { id: "greeting", label: "Greeting Contract" },
  ],
  intermediate: [
    { id: "token", label: "ERC20 Token" },
    { id: "nft", label: "NFT Contract" },
    { id: "voting", label: "Voting System" },
  ],
  advanced: [
    { id: "defi", label: "DeFi Protocol" },
    { id: "dao", label: "DAO Contract" },
    { id: "proxy", label: "Proxy Pattern" },
  ],
};

export default function Sidebar({
  activeContract,
  setActiveContract,
  setActivePage,
  sidebarVisible,
  setSidebarVisible,
}) {
  const handleContractClick = (contractId) => {
    setActiveContract(contractId);
    setActivePage("home");

    if (window.innerWidth <= 768) {
      setSidebarVisible(false);
    }
  };

  return (
    <div className={`sidebar ${!sidebarVisible ? "hidden" : ""}`}>
      <div className="sidebar-section">
        <div className="sidebar-title">🔰 Beginner</div>
        {contractsByLevel.beginner.map((contract) => (
          <div
            key={contract.id}
            className={`contract-item ${
              activeContract === contract.id ? "active" : ""
            }`}
            onClick={() => handleContractClick(contract.id)}
          >
            {contract.label}
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">⚙️ Intermediate</div>
        {contractsByLevel.intermediate.map((contract) => (
          <div
            key={contract.id}
            className={`contract-item ${
              activeContract === contract.id ? "active" : ""
            }`}
            onClick={() => handleContractClick(contract.id)}
          >
            {contract.label}
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">🚀 Advanced</div>
        {contractsByLevel.advanced.map((contract) => (
          <div
            key={contract.id}
            className={`contract-item ${
              activeContract === contract.id ? "active" : ""
            }`}
            onClick={() => handleContractClick(contract.id)}
          >
            {contract.label}
          </div>
        ))}
      </div>

      <div className="about-link" onClick={() => setActivePage("about")}>
        📚 About This Project
      </div>
    </div>
  );
}
