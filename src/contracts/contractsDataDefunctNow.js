// // contracts/beginner/SimpleStorage.js
// export default {
//   id: 'storage',
//   level: 'beginner',
//   title: "Simple Storage",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract SimpleStorage {
//     uint256 private storedData;

//     function set(uint256 x) public {
//         storedData = x;
//     }

//     function get() public view returns (uint256) {
//         return storedData;
//     }
// }`,
//   description: "This Simple Storage contract demonstrates the basics of Solidity programming. It includes a state variable to store data and two functions: one to set the value and another to retrieve it.",
//   github: "https://github.com/yourusername/simple-storage"
// };

// // contracts/beginner/Counter.js
// export default {
//   id: 'counter',
//   level: 'beginner',
//   title: "Counter Contract",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract Counter {
//     uint256 public count;

//     function increment() public {
//         count += 1;
//     }

//     function decrement() public {
//         require(count > 0, "Counter cannot be negative");
//         count -= 1;
//     }
// }`,
//   description: "A simple counter contract that demonstrates state management and require statements for input validation.",
//   github: "https://github.com/yourusername/counter"
// };

// // contracts/beginner/Greeting.js
// export default {
//   id: 'greeting',
//   level: 'beginner',
//   title: "Greeting Contract",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract Greeting {
//     string private greeting;

//     constructor() {
//         greeting = "Hello, World!";
//     }

//     function setGreeting(string memory _greeting) public {
//         greeting = _greeting;
//     }

//     function getGreeting() public view returns (string memory) {
//         return greeting;
//     }
// }`,
//   description: "Learn how to work with strings and constructors in this friendly greeting contract.",
//   github: "https://github.com/yourusername/greeting"
// };

// // contracts/intermediate/ERC20Token.js
// export default {
//   id: 'token',
//   level: 'intermediate',
//   title: "ERC20 Token",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract ERC20Token {
//     string public name = "MyToken";
//     string public symbol = "MTK";
//     uint256 public totalSupply;
//     mapping(address => uint256) public balanceOf;

//     function transfer(address to, uint256 amount) public {
//         require(balanceOf[msg.sender] >= amount);
//         balanceOf[msg.sender] -= amount;
//         balanceOf[to] += amount;
//     }
// }`,
//   description: "Build your own cryptocurrency! This contract implements the basic ERC20 token standard.",
//   github: "https://github.com/yourusername/erc20-token"
// };

// // contracts/intermediate/NFT.js
// export default {
//   id: 'nft',
//   level: 'intermediate',
//   title: "NFT Contract",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract NFT {
//     mapping(uint256 => address) public ownerOf;
//     uint256 public tokenCounter;

//     function mint() public {
//         ownerOf[tokenCounter] = msg.sender;
//         tokenCounter++;
//     }

//     function transfer(address to, uint256 tokenId) public {
//         require(ownerOf[tokenId] == msg.sender);
//         ownerOf[tokenId] = to;
//     }
// }`,
//   description: "Create and manage NFTs with this simplified implementation of the ERC721 standard.",
//   github: "https://github.com/yourusername/nft"
// };

// // contracts/intermediate/Voting.js
// export default {
//   id: 'voting',
//   level: 'intermediate',
//   title: "Voting System",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract Voting {
//     mapping(address => bool) public hasVoted;
//     mapping(string => uint256) public votes;

//     function vote(string memory candidate) public {
//         require(!hasVoted[msg.sender], "Already voted");
//         hasVoted[msg.sender] = true;
//         votes[candidate]++;
//     }
// }`,
//   description: "Implement a decentralized voting system with transparency and immutability.",
//   github: "https://github.com/yourusername/voting"
// };

// // contracts/advanced/DeFiProtocol.js
// export default {
//   id: 'defi',
//   level: 'advanced',
//   title: "DeFi Protocol",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract DeFiProtocol {
//     mapping(address => uint256) public deposits;

//     function deposit() public payable {
//         deposits[msg.sender] += msg.value;
//     }

//     function withdraw(uint256 amount) public {
//         require(deposits[msg.sender] >= amount);
//         deposits[msg.sender] -= amount;
//         payable(msg.sender).transfer(amount);
//     }
// }`,
//   description: "Explore decentralized finance with this basic lending/borrowing protocol implementation.",
//   github: "https://github.com/yourusername/defi-protocol"
// };

// // contracts/advanced/DAO.js
// export default {
//   id: 'dao',
//   level: 'advanced',
//   title: "DAO Contract",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract DAO {
//     struct Proposal {
//         string description;
//         uint256 voteCount;
//         bool executed;
//     }

//     Proposal[] public proposals;

//     function createProposal(string memory desc) public {
//         proposals.push(Proposal(desc, 0, false));
//     }

//     function vote(uint256 proposalId) public {
//         proposals[proposalId].voteCount++;
//     }
// }`,
//   description: "Build decentralized autonomous organizations with proposal and voting mechanisms.",
//   github: "https://github.com/yourusername/dao"
// };

// // contracts/advanced/Proxy.js
// export default {
//   id: 'proxy',
//   level: 'advanced',
//   title: "Proxy Pattern",
//   video: "dQw4w9WgXcQ",
//   code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract Proxy {
//     address public implementation;

//     function upgrade(address newImpl) public {
//         implementation = newImpl;
//     }

//     fallback() external payable {
//         address impl = implementation;
//         assembly {
//             calldatacopy(0, 0, calldatasize())
//             let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)
//             returndatacopy(0, 0, returndatasize())
//         }
//     }
// }`,
//   description: "Master upgradeable contracts with the proxy pattern for production-ready dApps.",
//   github: "https://github.com/yourusername/proxy-pattern"
// };
