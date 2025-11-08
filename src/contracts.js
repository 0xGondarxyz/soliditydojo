export const contracts = {
  beginner: [
    {
      id: "hello-world",
      name: "Hello World",
      videoId: "gyMwXuJrbJQ",
      github: "https://github.com/example/hello-world",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message;

    constructor() {
        message = "Hello, Blockchain!";
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}`,
    },
    {
      id: "simple-storage",
      name: "Simple Storage",
      videoId: "gyMwXuJrbJQ",
      github: "https://github.com/example/simple-storage",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private favoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}`,
    },
  ],
  intermediate: [
    {
      id: "erc20-token",
      name: "ERC20 Token",
      videoId: "gyMwXuJrbJQ",
      github: "https://github.com/example/erc20-token",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20Token {
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * 10 ** uint256(decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}`,
    },
    {
      id: "voting-contract",
      name: "Voting System",
      videoId: "gyMwXuJrbJQ",
      github: "https://github.com/example/voting",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Proposal {
        string description;
        uint256 voteCount;
    }

    mapping(address => bool) public hasVoted;
    Proposal[] public proposals;

    constructor(string[] memory proposalDescriptions) {
        for (uint i = 0; i < proposalDescriptions.length; i++) {
            proposals.push(Proposal({
                description: proposalDescriptions[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint256 proposalIndex) public {
        require(!hasVoted[msg.sender], "Already voted");
        require(proposalIndex < proposals.length, "Invalid proposal");

        hasVoted[msg.sender] = true;
        proposals[proposalIndex].voteCount++;
    }
}`,
    },
  ],
  advanced: [
    {
      id: "nft-marketplace",
      name: "NFT Marketplace",
      videoId: "gyMwXuJrbJQ",
      github: "https://github.com/example/nft-marketplace",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NFTMarketplace {
    struct Listing {
        uint256 price;
        address seller;
    }

    mapping(uint256 => Listing) public listings;

    event ItemListed(uint256 indexed tokenId, uint256 price, address seller);
    event ItemSold(uint256 indexed tokenId, uint256 price, address buyer);

    function listItem(uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be greater than 0");
        listings[tokenId] = Listing(price, msg.sender);
        emit ItemListed(tokenId, price, msg.sender);
    }

    function buyItem(uint256 tokenId) external payable {
        Listing memory listing = listings[tokenId];
        require(msg.value >= listing.price, "Insufficient payment");

        delete listings[tokenId];
        payable(listing.seller).transfer(msg.value);

        emit ItemSold(tokenId, listing.price, msg.sender);
    }
}`,
    },
    {
      id: "defi-protocol",
      name: "DeFi Protocol",
      videoId: "gyMwXuJrbJQ",
      github: "https://github.com/example/defi-protocol",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeFiProtocol {
    mapping(address => uint256) public deposits;
    uint256 public totalDeposits;
    uint256 public constant INTEREST_RATE = 5; // 5% APY

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Deposit must be greater than 0");
        deposits[msg.sender] += msg.value;
        totalDeposits += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(deposits[msg.sender] >= amount, "Insufficient balance");
        deposits[msg.sender] -= amount;
        totalDeposits -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdraw(msg.sender, amount);
    }

    function calculateInterest(address user) public view returns (uint256) {
        return (deposits[user] * INTEREST_RATE) / 100;
    }
}`,
    },
  ],
};
