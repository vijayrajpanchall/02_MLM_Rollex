// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "hardhat/console.sol";

contract FintwigaToken is IERC20, Ownable {
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

    uint256 public totalCollection;
    uint256 public totalMint; //totalBuy
    uint256 public customerId;

    uint256 public admin_income;
    uint256 public fwt_rate = 0.5e6;
    uint256 public distribute_level = 20;
    uint256 public payoutPercent = 50;
    uint256 public directPercent = 100;
    uint256 public adminPercent = 10;

    struct User {
        address customer_address;
        address referral_address;
        uint256 totalDeposit; //for usdt
        uint256 totalWithdraw; //for usdt
        uint256 totalSellFWT; //for fwt
        uint256 level_income;
        uint256 last_ts;
        uint256 last_buy;
    }

    struct UserInfo {
        uint256 directDeposit;
        uint256 partnerCount;
        mapping(uint8 => address[]) partners;
    }

    struct LevelIncomeHistory {
        address customer_address;
        address buyAddress; // referrer address
        uint256 level; // level income
        uint256 timestamp;
        uint256 cust_buyAmount;
        uint256 cust_tokenAmount;
        uint256 ref_income; // in token
    }

    struct Buyhistory {
        address cust_address;
        uint256 usdt_amt;
        uint256 token_to_user;
        uint256 timestamp;
    }

    struct Sellhistory {
        address cust_address;
        uint256 token;
        uint256 usdt_amt;
        uint256 timestamp;
    }

    uint256 public totalSell;

    mapping(address => Buyhistory[]) public buyRecord;
    mapping(address => Sellhistory[]) public sellRecord;
    mapping(uint256 => User) public userRegister;
    mapping(address => UserInfo) public usersInfo;
    mapping(address => uint256) public addressToUserId;
    mapping(address => bool) public isRegistered;
    mapping(address => LevelIncomeHistory[]) public levelHistoryInfo;

    constructor(
        address token_address,
        IERC20 usdt_address,
        address _admin1,
        address _admin2,
        address _admin3,
        address _admin4,
        address _admin5
    ) {
        _name = "Fintwiga Token";
        _symbol = "FWT";
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
        levelPercentages[2] = 3;
        levelPercentages[3] = 2;
        levelPercentages[4] = 1;
        levelPercentages[5] = 1;
        levelPercentages[6] = 1;
        levelPercentages[7] = 1;
        levelPercentages[8] = 1;
        levelPercentages[9] = 1;
        levelPercentages[10] = 1;
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

        levelCondition[1] = 0e6;
        levelCondition[2] = 100e6;
        levelCondition[3] = 200e6;
        levelCondition[4] = 300e6;
        levelCondition[5] = 400e6;
        levelCondition[6] = 500e6;
        levelCondition[7] = 600e6;
        levelCondition[8] = 700e6;
        levelCondition[9] = 800e6;
        levelCondition[10] = 900e6;
        levelCondition[11] = 1000e6;
        levelCondition[12] = 1100e6;
        levelCondition[13] = 1200e6;
        levelCondition[14] = 1300e6;
        levelCondition[15] = 1400e6;
        levelCondition[16] = 1500e6;
        levelCondition[17] = 1600e6;
        levelCondition[18] = 1700e6;
        levelCondition[19] = 1800e6;
        levelCondition[20] = 2000e6;
    }

    function decimals() external view returns (uint256) {
        return _decimals;
    }

    function symbol() external view returns (string memory) {
        return _symbol;
    }

    function name() external view returns (string memory) {
        return _name;
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(
            sender,
            msg.sender,
            _allowances[sender][msg.sender].sub(amount)
        );
        return true;
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal {
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

    function withdraw(uint256 amount) public onlyOwner returns (bool) {
        require(
            usdt.balanceOf(address(this)) >= amount,
            "Insufficient USDT balance"
        );
        usdt.safeTransfer(msg.sender, amount);
        return true;
    }

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
        userRegister[custid].last_buy = 0;

        addressToUserId[msg.sender] = custid;

        isRegistered[msg.sender] = true;

        usersInfo[refer_address].partners[0].push(msg.sender);
        usersInfo[refer_address].partnerCount++;
    }

    function setAdminIncome(uint admin_per1) private {
        _balances[admin_distribution[1]] = _balances[admin_distribution[1]].add(
            admin_per1
        );
        // console.log("admin_distribution[1]", _balances[admin_distribution[1]]);
        emit Transfer(address(0), admin_distribution[1], admin_per1);

        _balances[admin_distribution[2]] = _balances[admin_distribution[2]].add(
            admin_per1
        );
        emit Transfer(address(0), admin_distribution[2], admin_per1);

        _balances[admin_distribution[3]] = _balances[admin_distribution[3]].add(
            admin_per1
        );
        emit Transfer(address(0), admin_distribution[3], admin_per1);

        _balances[admin_distribution[4]] = _balances[admin_distribution[4]].add(
            admin_per1
        );
        emit Transfer(address(0), admin_distribution[4], admin_per1);

        _balances[admin_distribution[5]] = _balances[admin_distribution[5]].add(
            admin_per1
        );
        emit Transfer(address(0), admin_distribution[5], admin_per1);
    }

    function BuyFwt(uint256 buyAmt) public {
        require(isRegistered[msg.sender], "User is not belongs to system");
        require(buyAmt >= 1e6, "Minimum buy limit 1 USDT");
        require(buyAmt <= 2000e6, "Maximum buy limit 2000 USDT");
        require(
            usdt.balanceOf(msg.sender) >= buyAmt,
            "Insufficient USDT balance"
        );
        uint256 userId = addressToUserId[msg.sender];

        uint256 l_last_buy = userRegister[userId].last_buy;

        require(
            buyAmt >= l_last_buy,
            "Last buy is greater than current buy amount"
        );

        uint256 fwt = buyAmt.mul(1e18).div(fwt_rate);
        // console.log("fwt",fwt);
        uint256 user_amt = fwt.mul(payoutPercent).div(100);
        // console.log("useramt", user_amt);
        uint256 refer_amt = user_amt.mul(directPercent).div(100);
        // console.log("referamt", refer_amt);
        uint256 admin_amt = user_amt.mul(adminPercent).div(100);
        // console.log("adminamt", admin_amt);

        totalCollection = totalCollection + buyAmt;
        usdt.safeTransferFrom(msg.sender, address(this), buyAmt);

        //user
        _balances[msg.sender] = _balances[msg.sender].add(user_amt);
        emit Transfer(address(0), msg.sender, user_amt);

        // admin
        uint256 admin_per1 = user_amt.mul(4).div(100);
        setAdminIncome(admin_per1);
        admin_income = admin_income.add(admin_amt);

        address currentReferrer = userRegister[userId].referral_address;
        usersInfo[currentReferrer].directDeposit += buyAmt;

        uint256 total_dis = 0;

        for (uint256 i = 1; i < distribute_level; i++) {
            uint256 nextId = addressToUserId[currentReferrer];
            if (currentReferrer == address(0)) {} else {
                if (getTotalLevelIncome(currentReferrer) >= levelCondition[i]) {
                    uint _buyAmt = buyAmt;
                    uint256 refer_per = refer_amt.mul(levelPercentages[i]).div(
                        100
                    );

                    _balances[currentReferrer] = _balances[currentReferrer].add(
                        refer_per
                    );
                    levelHistoryInfo[currentReferrer].push(
                        LevelIncomeHistory({
                            customer_address: currentReferrer,
                            buyAddress: msg.sender,
                            level: i,
                            timestamp: block.timestamp,
                            cust_buyAmount: _buyAmt,
                            cust_tokenAmount: user_amt,
                            ref_income: refer_per
                        })
                    );
                    emit Transfer(address(0), currentReferrer, refer_per);
                    total_dis += refer_per;
                    userRegister[nextId].level_income = userRegister[nextId]
                        .level_income
                        .add(refer_per);
                }
            }
            currentReferrer = userRegister[nextId].referral_address;
        }

        userRegister[userId].totalDeposit = userRegister[userId]
            .totalDeposit
            .add(buyAmt);
        userRegister[userId].last_buy = buyAmt;

        totalMint = totalMint + user_amt + total_dis + admin_amt;
        _totalSupply = _totalSupply + user_amt + total_dis + admin_amt;
        uint256 usdBalance = usdt.balanceOf(address(this));
        fwt_rate = usdBalance.mul(1e18).div(_totalSupply);

        buyRecord[msg.sender].push(
            Buyhistory({
                cust_address: msg.sender,
                usdt_amt: buyAmt,
                token_to_user: user_amt,
                timestamp: block.timestamp
            })
        );
    }

    function SellFwt(uint256 tokenAmount) public {
        require(isRegistered[msg.sender], "User is not registered");
        require(tokenAmount > 0, "Token amount must be greater than 0");
        uint256 fwtPPOPer = tokenAmount.mul(1).div(100);

        require(
            IERC20(token).balanceOf(msg.sender) >= fwtPPOPer,
            "You need 1% fwt pro tokens on withdrawal amount"
        );
        require(balanceOf(msg.sender) >= tokenAmount, "fwt balance is low ");
        uint256 userId = addressToUserId[msg.sender];
        require(
            userRegister[userId].last_ts + 1 days <= block.timestamp,
            "Sell operation can only be performed once every 24 hours"
        );

        uint256 usdtAmount = tokenAmount.mul(fwt_rate).div(1e18);
        // console.log("tokenAmount", tokenAmount);
        // console.log("usdtAmount", usdtAmount);
        // console.log("fwt_rate", fwt_rate);
        uint256 adminServiceCharge = usdtAmount.mul(15).div(100); // 10% of usdtAmount
        usdtAmount = usdtAmount.sub(adminServiceCharge);

        uint256 rewardServiceCharge = tokenAmount.mul(5).div(100); // 5% of usdtAmount

        uint256 sellPerc = rewardServiceCharge.mul(1).div(100); // 10% of usdtAmount

        setAdminIncome(sellPerc);

        // Check if the contract has enough USDT to proceed with the withdrawal
        uint contractUSDTBal = usdt.balanceOf(address(this));
        require(
            contractUSDTBal >= usdtAmount,
            "Not enough USDT in the contract to proceed with the withdrawal"
        );

        require(
            usdtAmount <= userRegister[userId].totalDeposit.mul(3),
            "Cannot withdraw more than 3x total deposit at a time"
        );
        uint256 t_Withdraw = userRegister[userId].totalWithdraw.add(usdtAmount);
        require(
            t_Withdraw <= userRegister[userId].totalDeposit.mul(3),
            "Maxmimum withdrawal will be only 3x of total deposit amount"
        );

        require(
            usdtAmount <= userRegister[userId].totalDeposit.mul(3),
            "Cannot withdraw more than 3x total deposit at a time"
        );
        require(usdtAmount >= 1e6, "Minimum USDT  withdraw limit is 1");
        require(usdtAmount <= 2000e6, "Maximum USDT withdraw limit is 2000");

        // Burn the token amount and update total supply
        _balances[msg.sender] = _balances[msg.sender].sub(tokenAmount);
        _totalSupply = _totalSupply.sub(tokenAmount);
        emit Transfer(msg.sender, address(0), tokenAmount); // Emit a transfer event to the zero address to signify burning

        usdt.safeTransfer(msg.sender, usdtAmount);

        uint256 fwtBalance = usdt.balanceOf(address(this));
        fwt_rate = fwtBalance.mul(1e18).div(_totalSupply);

        userRegister[userId].last_ts = block.timestamp;
        userRegister[userId].totalWithdraw = usdtAmount;

        sellRecord[msg.sender].push(
            Sellhistory({
                cust_address: msg.sender,
                token: tokenAmount,
                usdt_amt: usdtAmount,
                timestamp: block.timestamp
            })
        );
        totalSell += tokenAmount;
    }

    function getLevelIncomeHistory(
        address _user
    ) public view returns (LevelIncomeHistory[] memory) {
        return levelHistoryInfo[_user];
    }

    function getUserBuyRecords(
        address user
    ) public view returns (Buyhistory[] memory) {
        return buyRecord[user];
    }

    function getUserSellRecords(
        address user
    ) public view returns (Sellhistory[] memory) {
        return sellRecord[user];
    }

    function partnerInfos(
        address userAddress
    ) public view returns (address[] memory) {
        return (usersInfo[userAddress].partners[0]);
    }

    function getTotalLevelIncome(
        address sponsorAddress
    ) public view returns (uint256) {
        uint256 directDeposit = usersInfo[sponsorAddress].directDeposit;
        return directDeposit;
    }

    function getBalance() public view returns (uint256) {
        return usdt.balanceOf(address(this));
    }
}