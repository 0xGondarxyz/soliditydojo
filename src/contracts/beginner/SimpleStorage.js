// contracts/beginner/SimpleStorage.js
export default {
  id: "storage",
  level: "beginner",
  title: "Simple Storage",
  video: "dQw4w9WgXcQ",
  code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}`,
  description:
    "This Simple Storage contract demonstrates the basics of Solidity programming. It includes a state variable to store data and two functions: one to set the value and another to retrieve it.",
  github: "https://github.com/yourusername/simple-storage",
};
