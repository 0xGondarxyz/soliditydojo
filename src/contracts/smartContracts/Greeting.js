// contracts/beginner/Greeting.js
export default {
  id: "greeting",
  level: "beginner",
  title: "Greeting Contract",
  video: "dQw4w9WgXcQ",
  code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeting {
    string private greeting;

    constructor() {
        greeting = "Hello, World!";
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}`,
  description:
    "Learn how to work with strings and constructors in this friendly greeting contract.",
  github: "https://github.com/yourusername/greeting",
};
