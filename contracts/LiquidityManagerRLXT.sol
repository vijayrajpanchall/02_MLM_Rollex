// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns(uint256) {
    if (a == 0) {
      return 0;
    }
        uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns(uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns(uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns(uint256) {
        uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

 
contract Ownable {
  address public _owner;

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  constructor() {
    _owner = msg.sender;
    emit OwnershipTransferred(address(0), msg.sender);
  }

  modifier onlyOwner() {
    require(msg.sender == _owner);
    _;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    _transferOwnership(newOwner);
  }

  function _transferOwnership(address newOwner) internal {
    require(newOwner != address(0), "Ownable: new owner is the zero address");
    emit OwnershipTransferred(_owner, newOwner);
    _owner = newOwner;
  }
}

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
contract LiquidityManagerRLXT is Ownable {

  using SafeMath for uint256;
  using SafeERC20 for IERC20;
  IERC20 public token;
  IERC20 public usdt;
  uint256 public rlxt_rate;

  uint256 public customerId;
  uint256 public buyId;

  struct User {
      address customer_address;
      uint256 totalDeposit;
      uint256 token_from_sc;
      uint256 totalWithdraw;
  }

  struct Buyhistory {
      address cust_address;
      uint256 usd_amt;
      uint256 token_to_user;
  }

  
  mapping(uint256 => Buyhistory) public buyRecord;
  mapping(uint256 => User) public userRegister;
  mapping(address => uint256) public addressToUserId;
  mapping(address => bool) public isRegistered;

  constructor(address token_address, address _usd) {
    token = IERC20(token_address);
    usdt = IERC20(_usd);
    isRegistered[address(this)] = true;
    rlxt_rate = 1000;
  }


  function withdrawCollection(address recevier, uint256 amount) public onlyOwner {
    require(usdt.balanceOf(address(this)) >= amount, "Insufficient balance");
    usdt.transfer(recevier, amount);
  }

  function register() public returns (uint256 custid) {
    require(!isRegistered[msg.sender], "User is already registered");

    custid = ++customerId;
    userRegister[custid].customer_address = msg.sender;
    userRegister[custid].totalDeposit = 0;
    userRegister[custid].token_from_sc = 0;
    userRegister[custid].totalWithdraw = 0;

    addressToUserId[msg.sender] = custid;
    
    isRegistered[msg.sender] = true;
  }


  function BuyRlxt (uint usd_amount) public returns (uint256 id) {
    require(isRegistered[msg.sender], "User is not registered.");

    uint256 token_amt = usd_amount.mul(1 ether).div(rlxt_rate);
    console.log("token_amt", token_amt / 10**18);
    console.log("rollex Rate", rlxt_rate);
    require(IERC20(token).balanceOf(address(this)) >= token_amt, "Unable to buy RLXT.");

    usdt.safeTransferFrom(msg.sender, address(this), usd_amount);
    IERC20(token).transfer(msg.sender, token_amt);

    id = ++buyId;
    buyRecord[id].cust_address = msg.sender;
    buyRecord[id].usd_amt = usd_amount;
    buyRecord[id].token_to_user = token_amt;

    uint256 userId = addressToUserId[msg.sender];
    userRegister[userId].totalDeposit += usd_amount;
    userRegister[userId].token_from_sc += token_amt;
  }

  function updateRate(uint256 new_rate) public onlyOwner {
     rlxt_rate = new_rate;
  }

  function usdAmount() public view returns(uint256) {
     return usdt.balanceOf(address(this));
  }

  function update_sellvalue(address user_address, uint256 token_amt, uint256 usd_amount) public onlyOwner {
    require(isRegistered[user_address], "User is not registered.");

    uint256 userId = addressToUserId[user_address];
    userRegister[userId].token_from_sc -= token_amt;
    userRegister[userId].totalWithdraw += usd_amount;
  }

}