/**
 *Submitted for verification at BscScan.com on 2023-10-31
*/

// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// interface IERC20 {

//   function totalSupply() external view returns(uint256);

//   function decimals() external view returns(uint256);

//   function symbol() external view returns(string memory);

//   function name() external view returns(string memory);

//   function getOwner() external view returns(address);

//   function balanceOf(address account) external view returns(uint256);

//   function transfer(address recipient, uint256 amount) external returns(bool);

//   function allowance(address _owner, address spender) external view returns(uint256);

//   function approve(address spender, uint256 amount) external returns(bool);

//   function transferFrom(address sender, address recipient, uint256 amount) external returns(bool);

//   event Transfer(address indexed from, address indexed to, uint256 value);

//   event Approval(address indexed owner, address indexed spender, uint256 value);
// }


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
  address _owner;

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
contract Rollex is IERC20, Ownable {
  using SafeERC20 for IERC20;
  using SafeMath for uint256;

  mapping(address => uint256) private _balances;

  mapping(address => mapping(address => uint256)) private _allowances;
  mapping(uint256 => address) public admin_distribution;
  uint256[30] public levelPercentages; 
  uint256[30] public levelCondition; 
  
  uint256 private _totalSupply;
  uint256 private _decimals;
  string private _symbol;
  string private _name;
  address public token;
  IERC20 public usdt;


  uint256 public totalCollection ;
  uint256 public totalMint ;
  uint256 public customerId;
  uint256 public buyId;
  uint256 public sellId;

  uint256 public admin_income;

  constructor(address token_address, IERC20 usdt_address, address _admin1, address _admin2, address _admin3, address _admin4, address _admin5) {
    _name = "Rollex";
    _symbol = "RLX";
    _decimals = 18;
    _totalSupply = 0 * 10 ** _decimals;
    _balances[msg.sender] = _totalSupply;
    emit Transfer(address(0), msg.sender, _totalSupply);
    totalCollection = 0;
    totalMint = 0;
    token = token_address;
    usdt = usdt_address;
    isRegistered[address(this)] = true;

    admin_distribution[1] = _admin1;
    admin_distribution[2] = _admin2;
    admin_distribution[3] = _admin3;
    admin_distribution[4] = _admin4;
    admin_distribution[5] = _admin5;

    levelPercentages[1] = 10;
    levelPercentages[2] = 6;
    levelPercentages[3] = 4;
    levelPercentages[4] = 3;
    levelPercentages[5] = 2;
    levelPercentages[6] = 2;
    levelPercentages[7] = 2;
    levelPercentages[8] = 2;
    levelPercentages[9] = 2;
    levelPercentages[10] = 2;
    levelPercentages[11] = 1;
    levelPercentages[12] = 1;
    levelPercentages[13] = 1;
    levelPercentages[14] = 1;
    levelPercentages[15] = 1;
    levelPercentages[16] = 1;
    levelPercentages[17] = 1;
    levelPercentages[18] = 1;
    levelPercentages[19] = 1;
    levelPercentages[20] = 1;
    levelPercentages[21] = 1;
    levelPercentages[22] = 1;
    levelPercentages[23] = 1;
    levelPercentages[24] = 1;
    levelPercentages[25] = 1;

    levelCondition[1] = 0e6;
    levelCondition[2] = 100e6;
    levelCondition[3] = 150e6;
    levelCondition[4] = 200e6;
    levelCondition[5] = 250e6;
    levelCondition[6] = 300e6;
    levelCondition[7] = 350e6;
    levelCondition[8] = 400e6;
    levelCondition[9] = 450e6;
    levelCondition[10] = 500e6;
    levelCondition[11] = 550e6;
    levelCondition[12] = 600e6;
    levelCondition[13] = 650e6;
    levelCondition[14] = 700e6;
    levelCondition[15] = 750e6;
    levelCondition[16] = 800e6;
    levelCondition[17] = 850e6;
    levelCondition[18] = 900e6;
    levelCondition[19] = 950e6;
    levelCondition[20] = 1000e6;
    levelCondition[21] = 1050e6;
    levelCondition[22] =  1100e6;
    levelCondition[23] =  1150e6;
    levelCondition[24] =  1200e6;
    levelCondition[25] =  1250e6;
  }

  function getOwner() external view returns(address) {
    return _owner;
  }

  function decimals() external view returns(uint256) {
    return _decimals;
  }

  function symbol() external view returns(string memory) {
    return _symbol;
  }

  function name() external view returns(string memory) {
    return _name;
  }

  function totalSupply() external view returns(uint256) {
    return _totalSupply;
  }

  function balanceOf(address account) external view returns(uint256) {
    return _balances[account];
  }

  function transfer(address recipient, uint256 amount) public returns(bool) {
    _transfer(msg.sender, recipient, amount);
    return true;
  }

  function allowance(address owner, address spender) external view returns(uint256) {
    return _allowances[owner][spender];
  }

  function approve(address spender, uint256 amount) public returns(bool) {
    _approve(msg.sender, spender, amount);
    return true;
  }

  function transferFrom(address sender, address recipient, uint256 amount) public returns(bool) {
    _transfer(sender, recipient, amount);
    _approve(sender, msg.sender, _allowances[sender][msg.sender].sub(amount));
    return true;
  }

  function _transfer(address sender, address recipient, uint256 amount) internal {
    require(sender != address(0), "BEP20: transfer from the zero address");
    require(recipient != address(0), "BEP20: transfer to the zero address");

    _balances[sender] = _balances[sender].sub(amount);
    _balances[recipient] = _balances[recipient].add(amount);
    emit Transfer(sender, recipient, amount);
  }

  function _approve(address owner, address spender, uint256 amount) internal {
    require(owner != address(0), "BEP20: approve from the zero address");
    require(spender != address(0), "BEP20: approve to the zero address");

    _allowances[owner][spender] = amount;
    emit Approval(owner, spender, amount);
  }

  function getUSDTBalance() public view returns (uint256) {
    return usdt.balanceOf(address(this));
  }

  function withdraw(address con_address, address recevier, uint256 amount) public onlyOwner {
    address payable to = payable(recevier);
    IERC20(con_address).transfer(to, amount);
  }

  uint256 public rollex_rate = 0.00025e6;

  uint256 public distribute_level = 25;

  uint256 public payoutPercent = 40;
  uint256 public directPercent = 100;
  uint256 public adminPercent = 10;
  

  struct User {
        address customer_address;
        address referral_address;
        uint256 totalDeposit;
        uint256 totalWithdraw;
        uint256 level_income;
        uint256 last_ts;
  }

  struct LevelIncomeHistory{
    address customer_address;
    address buyAddress;   // referrer address
    uint256 tokenAmount; //rollex token amount
    uint256 level;    // level income 
    uint256 timestamp;      
  }


  struct Buyhistory {
    address cust_address;
    uint256 usdt_amt;
    uint256 token_to_user;
    uint256 distribution_amt;
    uint256 distrbution_to_per_level;
    uint256 admin_amt;
  }

  struct Sellhistory {
    address cust_address;
    uint256 token;
    uint256 usdt_amt;
    uint256 admin_amt;
    uint256 final_amt;
  }

  mapping(uint256 => Buyhistory) public buyRecord;
  mapping(uint256 => Sellhistory) public sellRecord;
  mapping(uint256 => User) public userRegister;
  mapping(address => uint256) public addressToUserId;
  mapping(address => bool) public isRegistered;
  mapping(address=>LevelIncomeHistory[]) private levelHistoryInfo;
  function register(address refer_address) public returns (uint256 custid) {
    require(refer_address != msg.sender, "Cannot refer yourself");
    require(!isRegistered[msg.sender], "User is already registered");
    require(isRegistered[refer_address], "Invaild referral address");

    custid = ++customerId;
    userRegister[custid].customer_address = msg.sender;
    userRegister[custid].referral_address = refer_address;
    userRegister[custid].totalDeposit = 0;
    userRegister[custid].totalWithdraw = 0;
    userRegister[custid].level_income = 0;
    userRegister[custid].last_ts = 0;  

    addressToUserId[msg.sender] = custid;
    
    isRegistered[msg.sender] = true;
  }


  function getTotalLevelIncome(address sponsorAddress) public view returns (uint256) {
    uint256 count = 0;

    for (uint256 i = 1; i <= customerId; i++) {
        if (userRegister[i].referral_address == sponsorAddress) {
            count += userRegister[i].totalDeposit;
        }
    }

    return count;
  }


  function BuyRollex (uint256 buyAmt) public returns (uint256 id) {
    require(isRegistered[msg.sender], "User is not belongs to system");
    require(buyAmt > 1e6 , "Minimum buy limit 1 USDT");
    require(buyAmt <= 1250e6 , "Maximum buy limit 1250 USDT");
    require(usdt.balanceOf(msg.sender) >= buyAmt , "Insufficient USDT balance");

    console.log("buyAmt*1*6", buyAmt.mul(1e6));
    uint256 rollex = buyAmt.mul(1e6).div(rollex_rate);
    console.log("Rollex_rate", rollex_rate);
    console.log("rollex", rollex);

    uint256 user_amt = rollex.mul(payoutPercent).div(100);
    console.log("user_amt", user_amt);

    uint256 refer_amt = user_amt.mul(directPercent).div(100);
    console.log("refer_amt", refer_amt);

    uint256 admin_amt = user_amt.mul(adminPercent).div(100);
    console.log("admin_amt", admin_amt);
    totalCollection = totalCollection + buyAmt;
    console.log("totalCollection", totalCollection);
    // console.log("usdt", usdt);
    console.log("sender balance", usdt.balanceOf(msg.sender));
    // IERC20(usdt).approve(msg.sender, buyAmt);
    usdt.safeTransferFrom(msg.sender, address(this), buyAmt);

    //user
    _balances[msg.sender] = _balances[msg.sender].add(user_amt);
    emit Transfer(address(0), msg.sender, user_amt);

    // admin
    uint256 admin_per1 = user_amt.mul(1).div(100);
    uint256 admin_per2 = user_amt.mul(2).div(100);
    uint256 admin_per3 = user_amt.mul(3).div(100);
    

    _balances[admin_distribution[1]] = _balances[admin_distribution[1]].add(admin_per1);
    emit Transfer(address(0), admin_distribution[1], admin_per1);

    _balances[admin_distribution[2]] = _balances[admin_distribution[2]].add(admin_per1);
    emit Transfer(address(0), admin_distribution[2], admin_per2);

    _balances[admin_distribution[3]] = _balances[admin_distribution[3]].add(admin_per2);
    emit Transfer(address(0), admin_distribution[3], admin_per2);

    _balances[admin_distribution[4]] = _balances[admin_distribution[4]].add(admin_per3);
    emit Transfer(address(0), admin_distribution[4], admin_per3);

    _balances[admin_distribution[5]] = _balances[admin_distribution[5]].add(admin_per3);
    emit Transfer(address(0), admin_distribution[5], admin_per3);

    admin_income = admin_income.add(admin_amt);

    uint256 userId = addressToUserId[msg.sender];
    address currentReferrer = userRegister[userId].referral_address;
    
    uint256 total_dis = 0;

    for (uint256 i = 1; i < distribute_level; i++) {

      uint256 nextId = addressToUserId[currentReferrer];
      if (currentReferrer == address(0)) {}
      else {
          if(getTotalLevelIncome(currentReferrer) >= levelCondition[i])
          {
            uint256 refer_per = refer_amt.mul(levelPercentages[i]).div(100);

            _balances[currentReferrer] = _balances[currentReferrer].add(refer_per);
            emit Transfer(address(0), currentReferrer, refer_per);
            total_dis += refer_per;
            userRegister[nextId].level_income = userRegister[nextId].level_income.add(refer_per);
          }
      }
      currentReferrer = userRegister[nextId].referral_address;
    }

    userRegister[userId].totalDeposit = userRegister[userId].totalDeposit.add(buyAmt);

    totalMint = totalMint + user_amt + total_dis + admin_amt;
    _totalSupply = _totalSupply + user_amt + total_dis + admin_amt;
    rollex_rate = address(this).balance.mul(1 ether).div(_totalSupply);

    id = ++buyId;
    buyRecord[id].cust_address = msg.sender;
    buyRecord[id].usdt_amt = buyAmt;
    buyRecord[id].token_to_user = user_amt;
    buyRecord[id].distribution_amt = total_dis;
    buyRecord[id].distrbution_to_per_level = 0;
    buyRecord[id].admin_amt = admin_amt;

  }



function sellRollex(uint256 tokenAmount) public returns (uint256 id) {
    require(isRegistered[msg.sender], "User is not registered");
    require(tokenAmount > 0, "Token amount must be greater than 0");
    uint256 rollexPPOPer = tokenAmount.mul(1).div(100);
    require(IERC20(token).balanceOf(msg.sender) >= rollexPPOPer , "You need 1% Rollex pro tokens on withdrawal amount");

    uint256 userId = addressToUserId[msg.sender];
    // Ensure the last sell operation was more than 24 hours ago
    require(userRegister[userId].last_ts + 1 days <= block.timestamp, "Sell operation can only be performed once every 24 hours");

    uint256 usdtAmount = tokenAmount.mul(rollex_rate).div(1 ether);
    uint256 adminServiceCharge = usdtAmount.mul(15).div(100); // 15% of usdtAmount
    usdtAmount = usdtAmount.sub(adminServiceCharge);

    // Check if the contract has enough USDT to proceed with the withdrawal
    require(address(this).balance >= usdtAmount, "Not enough USDT in the contract to proceed with the withdrawal");

    // Ensure the usdtAmount is less than or equal to the total deposit of the user
    require(usdtAmount <= userRegister[userId].totalDeposit.mul(3), "Cannot withdraw more than 3x total deposit at a time");

    // Ensure the usdtAmount is greater than or equal to 1 USDT
    require(usdtAmount >= 1e6, "Minimum USDT  withdraw limit is 1");

    // Ensure the usdtAmount is less than or equal to 1250 USDT
    require(usdtAmount <= 1250e6, "Maximum USDT withdraw limit is 1250");

    // Burn the token amount and update total supply
    _balances[msg.sender] = _balances[msg.sender].sub(tokenAmount);
    _totalSupply = _totalSupply.sub(tokenAmount);
    emit Transfer(msg.sender, address(0), tokenAmount); // Emit a transfer event to the zero address to signify burning

    // Send USDT to the user's address
    payable(msg.sender).transfer(usdtAmount);
    rollex_rate = address(this).balance.mul(1 ether).div(_totalSupply);

    // Update the last sell timestamp
    userRegister[userId].last_ts = block.timestamp;
    // update the totalwithdraw
    userRegister[userId].totalWithdraw = usdtAmount;
   
   // Record the sell history
    id = ++sellId;
    sellRecord[id] = Sellhistory({
        cust_address: msg.sender,
        token: tokenAmount,
        usdt_amt: usdtAmount,
        admin_amt: adminServiceCharge,
        final_amt: usdtAmount
    });

    return id;
}
}