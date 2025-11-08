// contracts/advanced/DeFiProtocol.js
export default {
  id: "defi",
  level: "advanced",
  title: "DeFi Protocol",
  video: "dQw4w9WgXcQ",
  code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract DeFiProtocol is ReentrancyGuard {
    // State variables
    IERC20 public token;
    address public owner;
    uint256 public totalStaked;
    uint256 public rewardRate = 10; // 10% APY
    uint256 public constant REWARD_INTERVAL = 365 days;

    // User info
    struct UserInfo {
        uint256 amount;     // How many tokens the user has staked
        uint256 rewardDebt; // Reward debt for proper reward calculation
        uint256 lastUpdate; // Last time rewards were calculated
    }

    mapping(address => UserInfo) public userInfo;

    // Events
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier updateReward(address account) {
        UserInfo storage user = userInfo[account];

        if (account != address(0)) {
            // Calculate pending rewards
            uint256 pending = pendingReward(account);
            if (pending > 0) {
                user.rewardDebt += pending;
                emit RewardPaid(account, pending);
            }

            // Update last update time
            user.lastUpdate = block.timestamp;
        }
        _;
    }

    constructor(address _token) {
        token = IERC20(_token);
        owner = msg.sender;
    }

    // Stake tokens to earn rewards
    function stake(uint256 _amount) external nonReentrant updateReward(msg.sender) {
        require(_amount > 0, "Cannot stake 0");

        UserInfo storage user = userInfo[msg.sender];

        // Transfer tokens to this contract
        bool success = token.transferFrom(msg.sender, address(this), _amount);
        require(success, "Token transfer failed");

        // Update user and total staked
        user.amount += _amount;
        totalStaked += _amount;

        emit Staked(msg.sender, _amount);
    }

    // Withdraw staked tokens
    function withdraw(uint256 _amount) public nonReentrant updateReward(msg.sender) {
        require(_amount > 0, "Cannot withdraw 0");

        UserInfo storage user = userInfo[msg.sender];
        require(user.amount >= _amount, "Insufficient balance");

        // Update user and total staked
        user.amount -= _amount;
        totalStaked -= _amount;

        // Transfer tokens back to user
        bool success = token.transfer(msg.sender, _amount);
        require(success, "Token transfer failed");

        emit Withdrawn(msg.sender, _amount);
    }

    // Claim rewards
    function claimReward() public nonReentrant updateReward(msg.sender) {
        uint256 reward = userInfo[msg.sender].rewardDebt;
        if (reward > 0) {
            userInfo[msg.sender].rewardDebt = 0;
            bool success = token.transfer(msg.sender, reward);
            require(success, "Token transfer failed");
            emit RewardPaid(msg.sender, reward);
        }
    }

    // Calculate pending rewards for a user
    function pendingReward(address _user) public view returns (uint256) {
        UserInfo storage user = userInfo[_user];

        if (user.amount == 0 || user.lastUpdate == 0) {
            return user.rewardDebt;
        }

        uint256 timeElapsed = block.timestamp - user.lastUpdate;
        uint256 reward = (user.amount * rewardRate * timeElapsed) / (REWARD_INTERVAL * 100);

        return user.rewardDebt + reward;
    }

    // Emergency withdraw without caring about rewards
    function emergencyWithdraw() external nonReentrant {
        UserInfo storage user = userInfo[msg.sender];
        uint256 amount = user.amount;

        require(amount > 0, "Nothing to withdraw");

        // Reset user data
        user.amount = 0;
        user.rewardDebt = 0;
        user.lastUpdate = 0;

        // Update total staked
        totalStaked -= amount;

        // Transfer tokens back to user
        bool success = token.transfer(msg.sender, amount);
        require(success, "Token transfer failed");

        emit Withdrawn(msg.sender, amount);
    }

    // Owner functions
    function setRewardRate(uint256 _rate) external onlyOwner {
        require(_rate <= 100, "Rate too high"); // Max 100% APY
        rewardRate = _rate;
    }

    function recoverERC20(address _token, uint256 _amount) external onlyOwner {
        require(_token != address(token) || _amount <= totalStaked, "Cannot recover staked tokens");
        IERC20(_token).transfer(owner, _amount);
    }

    // Get user info
    function getUserInfo(address _user) external view returns (uint256 staked, uint256 pending) {
        UserInfo memory user = userInfo[_user];
        return (user.amount, pendingReward(_user));
    }
}`,
  description:
    "A complete DeFi staking protocol that allows users to stake ERC20 tokens and earn rewards. This contract includes features like reward calculation, emergency withdrawal, and owner controls. It's secured with reentrancy protection and proper access control.",
  github: "https://github.com/yourusername/defi-protocol",
};
