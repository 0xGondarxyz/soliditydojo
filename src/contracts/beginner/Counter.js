// contracts/beginner/Counter.js
export default {
  id: "counter",
  level: "beginner",
  title: "Counter Contract",
  video: "dQw4w9WgXcQ",
  code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0, "Counter cannot be negative");
        count -= 1;
    }
}`,
  description:
    "A simple counter contract that demonstrates state management and require statements for input validation.",
  github: "https://github.com/yourusername/counter",
};
