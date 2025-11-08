import React from "react";

export const ContractCard = ({ contract, isSelected, onClick }) => {
  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
        isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <h3 className="font-medium text-lg mb-1">{contract.name}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        {contract.description || "No description available"}
      </p>
      <div className="flex items-center text-xs text-gray-500 space-x-3">
        <span className="px-2 py-1 bg-gray-100 rounded-full">
          {contract.id}
        </span>
        {contract.difficulty && (
          <span className="px-2 py-1 bg-gray-100 rounded-full capitalize">
            {contract.difficulty}
          </span>
        )}
      </div>
    </div>
  );
};
