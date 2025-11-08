// contracts/advanced/DAO.js
export default {
  id: "dao",
  level: "advanced",
  title: "DAO Contract",
  video: "dQw4w9WgXcQ",
  code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract DAO is ReentrancyGuard {
    // Token contract
    IERC20 public token;

    // DAO parameters
    uint256 public proposalCount;
    uint256 public votingPeriod = 3 days;
    uint256 public minimumQuorum = 4; // 4% of total supply
    uint256 public debatePeriod = 1 days;

    // Proposal structure
    struct Proposal {
        uint256 id;
        address proposer;
        address target;
        uint256 value;
        bytes data;
        string description;
        uint256 createTime;
        uint256 startTime;
        uint256 endTime;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
        bool canceled;
        mapping(address => bool) hasVoted;
    }

    // Voter info
    struct Voter {
        uint256 votes; // Current votes held
        uint256 lastProposalIndex; // Last proposal index voted on
    }

    // State variables
    mapping(uint256 => Proposal) public proposals;
    mapping(address => Voter) public voters;

    // Events
    event ProposalCreated(
        uint256 id,
        address proposer,
        address target,
        uint256 value,
        string description,
        uint256 startTime,
        uint256 endTime
    );

    event VoteCast(
        address indexed voter,
        uint256 proposalId,
        bool support,
        uint256 votes
    );

    event ProposalExecuted(uint256 id);
    event ProposalCanceled(uint256 id);

    // Modifiers
    modifier onlyTokenHolder() {
        require(token.balanceOf(msg.sender) > 0, "Not a token holder");
        _;
    }

    constructor(address _token) {
        token = IERC20(_token);
    }

    // Create a new proposal
    function propose(
        address _target,
        uint256 _value,
        bytes calldata _data,
        string calldata _description
    ) external onlyTokenHolder returns (uint256) {
        uint256 votes = token.balanceOf(msg.sender);
        require(votes > 0, "No voting power");

        uint256 proposalId = proposalCount++;
        Proposal storage newProposal = proposals[proposalId];

        newProposal.id = proposalId;
        newProposal.proposer = msg.sender;
        newProposal.target = _target;
        newProposal.value = _value;
        newProposal.data = _data;
        newProposal.description = _description;
        newProposal.createTime = block.timestamp;
        newProposal.startTime = block.timestamp + debatePeriod;
        newProposal.endTime = block.timestamp + debatePeriod + votingPeriod;

        emit ProposalCreated(
            proposalId,
            msg.sender,
            _target,
            _value,
            _description,
            newProposal.startTime,
            newProposal.endTime
        );

        return proposalId;
    }

    // Cast a vote on a proposal
    function castVote(uint256 _proposalId, bool _support) external nonReentrant {
        require(_proposalId < proposalCount, "Invalid proposal ID");

        Proposal storage proposal = proposals[_proposalId];
        require(block.timestamp >= proposal.startTime, "Voting not started");
        require(block.timestamp <= proposal.endTime, "Voting ended");
        require(!proposal.hasVoted[msg.sender], "Already voted");

        uint256 votes = token.balanceOf(msg.sender);
        require(votes > 0, "No voting power");

        proposal.hasVoted[msg.sender] = true;

        if (_support) {
            proposal.forVotes += votes;
        } else {
            proposal.againstVotes += votes;
        }

        emit VoteCast(msg.sender, _proposalId, _support, votes);
    }

    // Execute a proposal
    function executeProposal(uint256 _proposalId) external nonReentrant {
        require(_proposalId < proposalCount, "Invalid proposal ID");

        Proposal storage proposal = proposals[_proposalId];

        require(block.timestamp > proposal.endTime, "Voting not ended");
        require(!proposal.executed, "Already executed");
        require(!proposal.canceled, "Proposal canceled");

        uint256 totalVotes = proposal.forVotes + proposal.againstVotes;
        uint256 totalSupply = token.totalSupply();
        uint256 quorum = (totalSupply * minimumQuorum) / 100;

        require(totalVotes >= quorum, "Quorum not reached");
        require(proposal.forVotes > proposal.againstVotes, "Proposal not passed");

        proposal.executed = true;

        // Execute the proposed function call
        (bool success, ) = proposal.target.call{value: proposal.value}(proposal.data);
        require(success, "Execution failed");

        emit ProposalExecuted(_proposalId);
    }

    // Cancel a proposal
    function cancelProposal(uint256 _proposalId) external {
        require(_proposalId < proposalCount, "Invalid proposal ID");

        Proposal storage proposal = proposals[_proposalId];

        require(msg.sender == proposal.proposer, "Not the proposer");
        require(block.timestamp < proposal.startTime, "Voting already started");
        require(!proposal.executed, "Already executed");
        require(!proposal.canceled, "Already canceled");

        proposal.canceled = true;

        emit ProposalCanceled(_proposalId);
    }

    // Get proposal details
    function getProposal(uint256 _proposalId) external view returns (
        uint256 id,
        address proposer,
        address target,
        uint256 value,
        string memory description,
        uint256 createTime,
        uint256 startTime,
        uint256 endTime,
        uint256 forVotes,
        uint256 againstVotes,
        bool executed,
        bool canceled
    ) {
        require(_proposalId < proposalCount, "Invalid proposal ID");

        Proposal storage p = proposals[_proposalId];

        return (
            p.id,
            p.proposer,
            p.target,
            p.value,
            p.description,
            p.createTime,
            p.startTime,
            p.endTime,
            p.forVotes,
            p.againstVotes,
            p.executed,
            p.canceled
        );
    }

    // Check if a proposal can be executed
    function canExecute(uint256 _proposalId) external view returns (bool) {
        if (_proposalId >= proposalCount) return false;

        Proposal storage proposal = proposals[_proposalId];

        if (proposal.executed || proposal.canceled) return false;
        if (block.timestamp <= proposal.endTime) return false;

        uint256 totalVotes = proposal.forVotes + proposal.againstVotes;
        uint256 totalSupply = token.totalSupply();
        uint256 quorum = (totalSupply * minimumQuorum) / 100;

        return totalVotes >= quorum && proposal.forVotes > proposal.againstVotes;
    }

    // Receive function to accept ETH
    receive() external payable {}
}`,
  description:
    "A comprehensive DAO (Decentralized Autonomous Organization) contract that enables token holders to create and vote on proposals. This implementation includes features like voting periods, quorum requirements, and proposal execution. It's designed to be secure, transparent, and resistant to common attacks.",
  github: "https://github.com/yourusername/dao-contract",
};
