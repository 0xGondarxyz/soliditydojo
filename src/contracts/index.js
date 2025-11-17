// contracts/index.js
// Import all contracts
import staking from "./smartContracts/staking";
import vesting from "./smartContracts/vesting";
import Greeting from "./smartContracts/Greeting";
import ERC20Token from "./security/ERC20Token";
import NFT from "./security/NFT";
import DeFiProtocol from "./advanced/DeFiProtocol";
import DAO from "./advanced/DAO";

// Array of all contracts
const allContracts = [
  staking,
  vesting,
  Greeting,
  ERC20Token,
  NFT,
  DeFiProtocol,
  DAO,
];

// Create lookup object by ID
export const contractsData = allContracts.reduce((acc, contract) => {
  acc[contract.id] = contract;
  return acc;
}, {});

// Group contracts by level for sidebar
export const contractsByLevel = allContracts.reduce((acc, contract) => {
  if (!acc[contract.level]) {
    acc[contract.level] = [];
  }
  acc[contract.level].push({
    id: contract.id,
    label: contract.title,
  });
  return acc;
}, {});

// Easy way to add new contracts:
// 1. Create a new file in the appropriate folder (beginner/intermediate/advanced)
// 2. Import it at the top of this file
// 3. Add it to the allContracts array
// That's it! The rest is automatic.
