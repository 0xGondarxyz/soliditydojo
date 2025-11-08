import React from "react";
import { ContractCard } from "./ContractCard";

export const ContractList = ({
  contracts,
  selectedContract,
  onSelectContract,
  difficulty,
}) => {
  if (!contracts || contracts.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-gray-500">
          No contracts available in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold capitalize">{difficulty} Contracts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contracts.map((contract) => (
          <ContractCard
            key={contract.id}
            contract={{
              ...contract,
              difficulty,
              description:
                contract.description ||
                `A ${difficulty} level smart contract example.`,
            }}
            isSelected={selectedContract?.id === contract.id}
            onClick={() => onSelectContract(contract)}
          />
        ))}
      </div>
    </div>
  );
};
