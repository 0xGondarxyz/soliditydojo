import React from "react";
import { Github, ExternalLink } from "lucide-react";

export const ContractViewer = ({ contract }) => {
  if (!contract) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Select a contract to view its code</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{contract.name}</h2>
        <div className="flex space-x-4">
          {contract.github && (
            <a
              href={contract.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              title="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {contract.videoId && (
            <a
              href={`https://www.youtube.com/watch?v=${contract.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              title="Watch Tutorial"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-4 overflow-x-auto">
        <pre className="bg-gray-50 p-4 rounded text-sm font-mono overflow-x-auto">
          <code className="language-solidity">{contract.code}</code>
        </pre>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <h3 className="font-semibold mb-2">Contract Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">License</h4>
            <p>MIT</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">
              Solidity Version
            </h4>
            <p>^0.8.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
