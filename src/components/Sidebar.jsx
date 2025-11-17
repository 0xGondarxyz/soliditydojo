import React from "react";

const contractsByLevel = {
  smartContracts: [
    { id: "staking", label: "Staking Contract" },
    { id: "vesting", label: "Vesting Contract" },
    { id: "greeting", label: "Greeting Contract" },
  ],
  security: [
    { id: "token", label: "ERC20 Token" },
    { id: "nft", label: "NFT Contract" },
  ],
  // advanced: [
  //   { id: "defi", label: "DeFi Protocol" },
  //   { id: "dao", label: "DAO Contract" },
  // ],
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
        <div className="sidebar-title">🔰 Smart Contracts</div>
        {contractsByLevel.smartContracts.map((contract) => (
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
        <div className="sidebar-title">⚙️ Security</div>
        {contractsByLevel.security.map((contract) => (
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

      {/* <div className="sidebar-section">
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
      </div> */}

      <div className="about-link" onClick={() => setActivePage("about")}>
        📚 About This Project
      </div>
    </div>
  );
}
