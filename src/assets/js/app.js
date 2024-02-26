const MY_CONTRACT_ADDRESS = '0x5fE7D2501EaA72A32Ce8d0a40c5a283d4545fF4F';

const MY_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token_address",
        "type": "address"
      },
      {
        "internalType": "contract IERC20",
        "name": "usdt_address",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_admin1",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_admin2",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_admin3",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_admin4",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_admin5",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "buyAmt",
        "type": "uint256"
      }
    ],
    "name": "BuyRollex",
    "outputs": [
      
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "addressToUserId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "adminPercent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "admin_distribution",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "admin_income",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "buyId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "buyRecord",
    "outputs": [
      {
        "internalType": "address",
        "name": "cust_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "usdt_amt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "token_to_user",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "distribution_amt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "distrbution_to_per_level",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "admin_amt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "customerId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "directPercent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "distribute_level",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getLevelIncomeHistory",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "customer_address",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "buyAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "level",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct Rollex.LevelIncomeHistory[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sponsorAddress",
        "type": "address"
      }
    ],
    "name": "getTotalLevelIncome",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "getUSDTBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "levelCondition",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "levelHistoryInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "customer_address",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "buyAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "levelPercentages",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "partnerInfos",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "payoutPercent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "refer_address",
        "type": "address"
      }
    ],
    "name": "register",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "custid",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "rollex_rate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "sellId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "sellRecord",
    "outputs": [
      {
        "internalType": "address",
        "name": "cust_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "token",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "usdt_amt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "admin_amt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "final_amt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
      }
    ],
    "name": "sellRollex",
    "outputs": [
      
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "token",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "totalCollection",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "totalMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "totalSell",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [
      
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "name": "usdt",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userRegister",
    "outputs": [
      {
        "internalType": "address",
        "name": "customer_address",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "referral_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalDeposit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWithdraw",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalSellRLX",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "level_income",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "last_ts",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "usersInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "directDeposit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "partnerCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "con_address",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recevier",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [
      
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const USDT_CONTRACT_ADDRESS = "0xd20769b638C5229DBFE9992158F949Dd2525aCbc"; //real usdt

const USDT_CONTRACT_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "CHILD_CHAIN_ID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CHILD_CHAIN_ID_BYTES",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEPOSITOR_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ERC712_VERSION",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_CHAIN_ID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_CHAIN_ID_BYTES",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "name_", type: "string" }],
    name: "changeName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "bytes", name: "depositData", type: "bytes" },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "bytes", name: "functionSignature", type: "bytes" },
      { internalType: "bytes32", name: "sigR", type: "bytes32" },
      { internalType: "bytes32", name: "sigS", type: "bytes32" },
      { internalType: "uint8", name: "sigV", type: "uint8" },
    ],
    name: "executeMetaTransaction",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeperator",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getNonce",
    outputs: [{ internalType: "uint256", name: "nonce", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getRoleMember",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "string", name: "symbol_", type: "string" },
      { internalType: "uint8", name: "decimals_", type: "uint8" },
      { internalType: "address", name: "childChainManager", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

var MY_CONTRACT;
var USDT_CONTRACT;
var timeStep = 24 * 60 * 60;
var lang = "default";
var web3;
var accounts = [];
var userAddr;
var maticBalance = 0;
var usdtBalance = 0;
var timeLen = 22000;
var gasLimit;
var estimateGas;
var table;
var systemmatrix = 1;
const matrix_price = 2000;
var matrixcount = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
var gridscantx = "https://mumbai.polygonscan.com/tx/";
var gridscanadd = "https://mumbai.polygonscan.com/address/";
const BASE_URL = "http://localhost/rollex/";


const REFERER_DEFAULT = "0x5fE7D2501EaA72A32Ce8d0a40c5a283d4545fF4F";
const ZERO_ADDR = "0x0000000000000000000000000000000000000000";


var MY_CONTRACT;
var USDT_CONTRACT;
var polyChainId = '80001';
var timeLen = 5e3;
var web3;
var accounts = [];
var userAddr;
var usdtBalance = 0;

var userinfo = {
    referrer: '',
    level: 0,
    maxDeposit: 0,
    maxDepositable: 0,
    teamNum: 0,
    teamTotalDeposit: 0,
    totalFreezed: 0,
    totalRevenue: 0,
    unfreezeIndex: 0,
    startTime: 0,
    totalUsdt: 0,
    isMaxFreezing: !1
};

var rewardinfo={
    capitals: 0,
    statics: 0,
    invited: 0,
    bonusFreezed: 0,
    bonusReleased: 0,
    l5Freezed: 0,
    l5Released: 0,
    activation: 0,
    lastWithdaw: 0
};

var orderInfo = {
    amount: 0,
    start: 0,
    unfreeze: 0,
    isUnfreezed: false
}
var refer;
var orders = [];
var feeReceiver = '';
var defaultRefer = '';
var startTime = 1689323400 * 1e3;
var totalUsers = '';
var totalDeposit = '';
var freezedTimes = '';
var freezeTime = '';
var unfreezeTime;
var freezing = false;
var currentTime = '';
var secondInDay = 86400;
var dayLeft = 0;
var curDay = 0;
var maxDayNewbies = 0;
var dayNewbies = 0;
var unfreezeIndex = 0;
var contractInfo, userInfo, userTeamDepositInfo;
var maxTeam = 0, otherTeam = 0, totalTeam = 0;

const web3init = async() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if(vw < 768)
    {
        $('.sidebar.collapse').removeClass('show');
    }
    if (window.ethereum) 
    {
        web3 = new Web3(window.ethereum);
        try
        {
            polyChainId = '80001'; 
            chId = web3.utils.toHex(polyChainId);
            // await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: chId }], });
            accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            userAddr = accounts[0];
            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });
        }
        catch(e)
        {
            console.log(e);
        }
    }
    else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
    }
    else
    {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ethereum Node Not Found',
            text: 'Provider of window ethereum node not found.',
            showConfirmButton: false,
            timer: timeLen,
            timerProgressBar: true,
            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
            color: 'white'
        });
        return false;
    }
    
    var userShortAddress = userAddr.substring(0,8) + "..." + userAddr.substring(userAddr.length - 8);
    $('.loginUser').text(userShortAddress);
    MY_CONTRACT = new web3.eth.Contract(MY_CONTRACT_ABI,MY_CONTRACT_ADDRESS);
    USDT_CONTRACT = new web3.eth.Contract(USDT_CONTRACT_ABI,USDT_CONTRACT_ADDRESS);

    usdtBalance = parseFloat(await USDT_CONTRACT.methods.balanceOf(userAddr).call()) / 1e6;
    
    tokenBalance = parseFloat(await MY_CONTRACT.methods.balanceOf(userAddr).call()) / 1e18;

    console.log(tokenBalance);

    // contractInfo = await MY_CONTRACT.methods.getContractInfos().call();

    // feeReceiver = contractInfo[0][1]
    // defaultRefer = contractInfo[0][2]
    // startTime = parseInt(contractInfo[1][0]) * 1e3;
    // totalUsers = parseInt(contractInfo[1][1]);
    // totalDeposit = parseInt(contractInfo[1][2]);
    // freezedTimes = parseInt(contractInfo[1][3]);
    // freezeTime = parseInt(contractInfo[1][4]);
    // unfreezeTime = parseInt(contractInfo[1][5]);

    // freezing = contractInfo[2];
    coinRate = await MY_CONTRACT.methods.rollex_rate().call();
    c_rate= parseInt(coinRate) / 1e6;   
    $('.live_rate').text(c_rate +" USDT");

    totalSupply = await MY_CONTRACT.methods.totalSupply().call();
    t_sypply= parseInt(totalSupply) / 1e18 ;   
    $('.total_supply').text(t_sypply +" RLX");

    totalBuy = await MY_CONTRACT.methods.getUSDTBalance().call();
    t_buy= parseInt(totalBuy) / 1e6 ;   
    $('.total_buy').text(t_buy +" USDT");

    totalSell = await MY_CONTRACT.methods.totalSell().call();
    t_sell= parseFloat(totalSell) / 1e18 ;   
    $('.total_sell').text(t_sell +" RLX");

    userId = await MY_CONTRACT.methods.addressToUserId(userAddr).call();
    userInfo = await MY_CONTRACT.methods.userRegister(userId).call();
   

    referral_address = userInfo.referral_address;
    totalDeposit = parseInt(userInfo.totalDeposit)/ 1e6;   
    totalWithdraw = parseInt(userInfo.totalWithdraw)/ 1e6;
    totalSellRLX = parseInt(userInfo.totalSellRLX)/ 1e18;
    level_income = parseInt(userInfo.level_income) / 1e18;
    last_ts = parseInt(userInfo.last_ts);
  

    // rewardinfo.capitals = parseInt(userInfo['reward'].capitals) / 1e6;
    // rewardinfo.statics = parseInt(userInfo['reward'].statics) / 1e6;
    // rewardinfo.invited = parseInt(userInfo['reward'].invited) / 1e6;
    // rewardinfo.bonusFreezed = parseInt(userInfo['reward'].bonusFreezed) / 1e6;
    // rewardinfo.bonusReleased = parseInt(userInfo['reward'].bonusReleased) / 1e6;
    // rewardinfo.l5Freezed = parseInt(userInfo['reward'].l5Freezed) / 1e6;
    // rewardinfo.l5Released = parseInt(userInfo['reward'].l5Released) / 1e6;
    // rewardinfo.activation = parseInt(userInfo['reward'].activation) / 1e6;
    // rewardinfo.lastWithdaw = parseInt(userInfo['reward'].lastWithdaw) / 1e6;

    // userTeamDepositInfo = await MY_CONTRACT.methods.getTeamDeposit(userAddr).call();
    // maxTeam = (parseInt(userTeamDepositInfo.maxTeam) / 1e6);
    // otherTeam = (parseInt(userTeamDepositInfo.otherTeam) / 1e6);
    // totalTeam = (parseInt(userTeamDepositInfo.totalTeam) / 1e6);
    // localStorage.setItem("totalRegisterUser", '-');
}
(async() =>{
	await web3init();
    setInterval(async() => {
        isRegisteredCheck();
        if($('body').is('.dashboardPage'))
        {
            //isRegisterEventCalled();
            var userShortAddress = userAddr.substring(0,6) + "..." + userAddr.substring(userAddr.length - 6);
            $(".user-short-address").text(userShortAddress);
            if(userinfo.level < 4)
            {
                $('.detail-profile.bg-orion .levels-acheived').css({ display: 'none'});
                $('.detail-profile.bg-cygnus .levels-acheived').css({ display: 'none'});
            }
            else if(userinfo.level == 4)
            {
                $('.detail-profile.bg-orion .levels-acheived').css({ display: 'block'})
            }
            else if(userinfo.level == 5)
            {
                $('.detail-profile.bg-cygnus .levels-acheived').css({ display: 'block'})
            }
            
            var tokenBalance1 = tokenBalance;

            const rate = c_rate;
            const showRate=rate.toFixed(18);
            const myUSDTValue= tokenBalance1* showRate;
            
            $(".myBuy").text(totalDeposit.toFixed(2) + " USDT");
            $(".mySell").text(totalWithdraw.toFixed(2) + " USDT");
            $(".levelIncome").text(level_income.toFixed(2) + " RLX");
            $(".myHolding").text(tokenBalance1.toFixed(2) + " RLX");
            $(".myUsdtValue").text(myUSDTValue.toFixed(2) + " USDT");
            
            
            $(".usdtBal").text(usdtBalance.toFixed(2));
            $('.activationBal').text(rewardinfo.activation.toFixed(2));
            var myReferShort = userinfo.referrer.substring(0,4) + "..." + userinfo.referrer.substring(userinfo.referrer.length - 4);
            $(".my-referral").text(myReferShort);
            var inviteLink = window.location.protocol+"//"+window.location.host + getUrlRelativePath() + "?ref=" + userAddr;
            $('#ref-link').val(inviteLink);
            
            $('.myInvestment').text(userinfo.totalFreezed);
            $('.myteamCount').text(userinfo.teamNum);
            $('.myStrongLeg').text(maxTeam);
            $('.myRestLeg').text(otherTeam);
            unfreezeIndex = userinfo.unfreezeIndex > 0 ? userinfo.unfreezeIndex : 0;
            // updateTimeInfo(unfreezeIndex);
            //updateLatestDepositTodayInfo();

            // orion-progress 
            let orionpackageprogess = ((parseInt(userinfo.totalFreezed) / 2000)*100);
            let orionteamprogess = ((parseInt(userinfo.teamNum) / 50)*100).toFixed(2);
            let orionstronglegprogess = ((parseInt(maxTeam) / 10000)*100);
            let orionrestlegprogess = ((parseInt(otherTeam) / 10000)*100);
            $('.orion-progress .package-progress').attr('aria-valuenow', orionpackageprogess).css({ width: `${orionpackageprogess}%`});
            $('.orion-progress .package-progress').text(`${orionpackageprogess}%`);
            $('.orion-progress .team-progress').attr('aria-valuenow', orionteamprogess).css({ width: `${orionteamprogess}%`});
            $('.orion-progress .team-progress').text(`${orionteamprogess}%`);
            $('.orion-progress .strongleg-progress').attr('aria-valuenow', orionstronglegprogess).css({ width: `${orionstronglegprogess}%`});
            $('.orion-progress .strongleg-progress').text(`${orionstronglegprogess}%`);
            $('.orion-progress .restleg-progress').attr('aria-valuenow', orionrestlegprogess).css({ width: `${orionrestlegprogess}%`});
            $('.orion-progress .restleg-progress').text(`${orionrestlegprogess}%`);
                
            // cygnus-progress
            let cygnuspackageprogess = ((parseInt(userinfo.totalFreezed) / 3000)*100);
            let cygnusteamprogess = ((parseInt(userinfo.teamNum) / 200)*100).toFixed(2);
            let cygnusstronglegprogess = ((parseInt(maxTeam) / 60000)*100);
            let cygnusrestlegprogess = ((parseInt(otherTeam) / 60000)*100);
            $('.cygnus-progress .package-progress').attr('aria-valuenow', cygnuspackageprogess).css({ width: `${cygnuspackageprogess}%`});
            $('.cygnus-progress .package-progress').text(`${cygnuspackageprogess}%`);
            $('.cygnus-progress .team-progress').attr('aria-valuenow', cygnusteamprogess).css({ width: `${cygnusteamprogess}%`});
            $('.cygnus-progress .team-progress').text(`${cygnusteamprogess}%`);
            $('.cygnus-progress .strongleg-progress').attr('aria-valuenow', cygnusstronglegprogess).css({ width: `${cygnusstronglegprogess}%`});
            $('.cygnus-progress .strongleg-progress').text(`${cygnusstronglegprogess}%`);
            $('.cygnus-progress .restleg-progress').attr('aria-valuenow', cygnusrestlegprogess).css({ width: `${cygnusrestlegprogess}%`});
            $('.cygnus-progress .restleg-progress').text(`${cygnusrestlegprogess}%`);
        }
        else
        {
            // unfreezeIndex = userinfo.unfreezeIndex > 0 ? userinfo.unfreezeIndex : 0;
            // updateTimeInfo(unfreezeIndex);
        }
        if($('body').is('.depositPage')){
            //$('.max-depositable-amount').text(userinfo.maxDepositable == 0 ? 500+' USDT' : (parseFloat(userinfo.maxDepositable) / 1e6).toFixed(0)+' USDT');
        }
        if($('body').is('.depositHistoryPage'))
        {
            await depositDetails();
        }
        if($('body').is('.withdrawPage'))
        {
             $(".available-amount").text(tokenBalance.toFixed(2)+ " RLX");
        }
        if($('body').is('.transferUsdtFundPage'))
        {
            $('.availableUsdt').text(userinfo.totalUsdt.toFixed(2)+" USDT");
        }
        if($('body').is('.transferActivationFundPage'))
        {
            $('.activation-balance-amount').text(rewardinfo.activation.toFixed(2)+" USDT");            
        }
        if($('body').is('.depositByActivationFundPage'))
        {
            $('.activation-balance-amount').text(rewardinfo.activation.toFixed(2)+" USDT");
            $('.usdt-balance-amount').text(userinfo.totalUsdt.toFixed(2)+" USDT");
        }
        if($('body').is('.teamPage'))
        {  
            $('.team-total-deposit').text(`$ ${totalTeam.toFixed(2)}`);
            $('.max-deposit').text(`$ ${maxTeam.toFixed(2)}`);
            $('.other-deposit').text(`$ ${otherTeam.toFixed(2)}`);
            $('.team-number').text(userinfo.teamNum);
        }
    }, 3000);

    if($('body').is('.dashboardPage'))
    {
        $(".copyLink").on("click", function(){
            var copyText = document.getElementById('ref-link');
            copyText.readOnly = true;
            copyText.type = 'text';
            copyText.select();
		    copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value)
            document.execCommand("copy");
            copyText.type = 'hidden';
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Your inviter link copied Successfully',
                showConfirmButton: false,
                timer: 5000,
                background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                color: 'white'
            });
            return false;
        });

        $(".register-confirm").on("click", async function() {
            $(this).remove();
            $('#invite').modal('hide');
            $('.waitingConfirm').html('Please wait while confirming your request...');            
            //minDeposit = web3.utils.fromWei(userInfo['user'].maxDeposit, 'ether');
            if(REFERER_DEFAULT !== '0x5fE7D2501EaA72A32Ce8d0a40c5a283d4545fF4F')
            {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'This is inactive refer wallet address.',
                    showConfirmButton: false,
                    timer: timeLen,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            }

            await MY_CONTRACT.methods.register(refer).send({ from: userAddr, maxPriorityFeePerGas: 3e10 })
            .on('transactionHash', function(hash){
                $(".input-amount").val('');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Registration Request Submitted`,
                    text: `Your transaction hash \n ${hash}`,
                    showConfirmButton: false,
                    timer: 25000,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            })
            .on('confirmation', function(confirmationNumber, receipt){
                if(confirmationNumber > 0 && confirmationNumber < 2)
                {
                    $(".input-amount").val('');
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Registration Completed Successfully.`,
                        text: `Your transaction hash \n ${receipt.transactionHash}`,
                        showConfirmButton: false,
                        timer: timeLen,
                        timerProgressBar: true,
                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                        color: 'white'
                    });
                    window.location.href = './dashboard.php';
                    return false;
                }
            })
            .on('error', function(error, receipt) {
                if(error)
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Registration Failed.',
                        text: `${error.message}`,
                        showConfirmButton: false,
                        timer: timeLen,
                        timerProgressBar: true,
                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                        color: 'white'
                    });
                    return false;
                }
            }).catch((error) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Catch error while registration.',
                    text: error.message,
                    showConfirmButton: false,
                    timer: timeLen,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            })
        });
    }

    if($('body').is('.depositPage'))
    {
        
        $(".input-amount").on("input",(async function(){
            let depositAmount1 = parseInt($(".input-amount").val());
            if(depositAmount1 > 0)
            {
                $(".deposit-confirm-btn").css({background:"gray"});
                $(".renwal-confirm-btn").css({background: "#0DDC85"});
            }
            else
            {

                $(".deposit-confirm-btn").css({background:"gray"});
                $(".renwal-confirm-btn").css({background:"gray"});
                // $(".deposit-confirm-btn").eq(0).css({background: "#0DDC85"});
            }
                
        }));

        $(".deposit-confirm-btn").on("click",(async function(){
            var amount = parseFloat($(".input-amount").val());
                        //var minDeposit = (parseInt(userinfo.maxDeposit) / 1e6);
            minDeposit = 1   
            maxDeposit = 1250;
            // minimum 50 balance required
            if(parseInt(amount) < parseInt(minDeposit))
            {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Please deposit minimum ${minDeposit} USDT TOKEN.`,
                    showConfirmButton: false,
                    timer: timeLen,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            }

            // multiple of 50 balance required
            if(parseInt(amount) % 1 != '0')
            {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Please enter multiple of 1 USDT TOKEN.',
                    text: 'Deposit amount must be multiple of 1 USDT TOKEN.',
                    showConfirmButton: false,
                    timer: timeLen,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            }

            // maximum 3000 balance required
            if(parseInt(amount) > 1250)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `You can deposit maximum 1250 USDT TOKEN.`,
                    showConfirmButton: false,
                    timer: timeLen,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            }

            if(parseInt(amount) > parseInt(usdtBalance))
            {
                const userUsdtBalance = await USDT_CONTRACT.methods.balanceOf(userAddr).call();
                console.log("usdtBalance", userUsdtBalance);
                console.log("amount", amount);
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Insufficient USDT Balance.',
                  showConfirmButton: false,
                  timer: timeLen,
                  timerProgressBar: true,
                  background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                  color: 'white'
                });
                return false;
            }

            var damount = parseInt(amount * 1e6);
            var isAppr = await isApprove(MY_CONTRACT_ADDRESS);
            console.log(damount);
            if(isAppr)
            {     console.log("Buy amount", damount);
                await MY_CONTRACT.methods.BuyRollex(damount).send({ from: userAddr, maxPriorityFeePerGas: 3e10 })
                .on('transactionHash', function(transactionHash){
                    $(".input-amount").val('');
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Deposit Request Submitted`,
                        text: `Your transaction hash \n ${transactionHash}`,
                        showConfirmButton: false,
                        timer: 25000,
                        timerProgressBar: true,
                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                        color: 'white'
                    });
                    return false;
                })
                .on('confirmation', function(confirmationNumber, receipt){
                    if(confirmationNumber > 0 && confirmationNumber < 2)
                    {
                        $(".input-amount").val('');
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Deposit Request Confirmed`,
                            text: `Your transaction hash \n ${receipt.transactionHash}`,
                            showConfirmButton: false,
                            timer: timeLen,
                            timerProgressBar: true,
                            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                            color: 'white'
                        });
                        window.location.href = './deposit-history.php';
                        return true;
                    }
                })
                .on('error', function(error, receipt) {
                    if(error)
                    {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'We are facing error while creating deposit transaction.',
                            text: `${error.message}`,
                            showConfirmButton: false,
                            timer: timeLen,
                            timerProgressBar: true,
                            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                            color: 'white'
                        });
                        return false;
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Catch error while deposit USDT.',
                        text: error.message,
                        showConfirmButton: false,
                        timer: timeLen,
                        timerProgressBar: true,
                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                        color: 'white'
                    });
                    return false;
                });
            }
            else
            {
                setApprove(MY_CONTRACT_ADDRESS).then(async function(error){
                    if(error)
                    {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'We are received error while approving USDT TOKEN.',
                            text: error.message,
                            showConfirmButton: false,
                            timer: timeLen,
                            timerProgressBar: true,
                            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                            color: 'white'
                        });
                        return false;
                    }
                    else
                    {
                        await MY_CONTRACT.methods.BuyRollex(amount).estimateGas({from: userAddr}).then(async function(gasAmount){
                            if(gasAmount >= 8000000)
                            {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: 'Please deposit after sometime polygon node is busy. Gas Fees is high.',
                                    showConfirmButton: false,
                                    timer: timeLen,
                                    timerProgressBar: true,
                                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                                    color: 'white'
                                });
                                return false;
                            }
                            else
                            {
                                await MY_CONTRACT.methods.BuyRollex(amount).send({ from: userAddr, maxPriorityFeePerGas: 3e10 })
                                .on('transactionHash', function(transactionHash){
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: `Deposit Request Submitted`,
                                        text: `Your transaction hash \n ${transactionHash}`,
                                        showConfirmButton: false,
                                        timer: 25000,
                                        timerProgressBar: true,
                                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                                        color: 'white'
                                    });
                                    return false;
                                })
                                .on('confirmation', function(confirmationNumber, receipt){
                                    if(confirmationNumber > 0 && confirmationNumber < 2)
                                    {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: `Deposit Request Confirmed`,
                                            text: `Your transaction hash \n ${receipt.transactionHash}`,
                                            showConfirmButton: false,
                                            timer: timeLen,
                                            timerProgressBar: true,
                                            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                                            color: 'white'
                                        });
                                        window.location.href = './deposit-history.php';
                                        return true;
                                    }
                                })
                                .on('error', function(error, receipt) {
                                    if(error)
                                    {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'We are facing error after approve USDT TOKEN while creating deposit transaction.',
                                            text: `${error}`,
                                            showConfirmButton: false,
                                            timer: timeLen,
                                            timerProgressBar: true,
                                            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                                            color: 'white'
                                        });
                                        return false;
                                    }
                                }).catch((error) => {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: 'Catch error while Deposit USDT.',
                                        text: error.message,
                                        showConfirmButton: false,
                                        timer: timeLen,
                                        timerProgressBar: true,
                                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                                        color: 'white'
                                    });
                                    return false;
                                });
                            }

                        });
                    }
                    
                });
            }
        }));       
    }
    if($('body').is('.withdrawPage'))
    {
            
            
        $('.withdraw-confirm-btn').on('click', (async function(){

          
          var amount = parseFloat($(".input-amount").val());
          console.log("Input amount", amount);
          //var minDeposit = (parseInt(userinfo.maxDeposit) / 1e6);
          minDeposit = 10000          
          maxDeposit = 125000;
          // minimum 50 balance required
          if(parseInt(amount) < parseInt(minDeposit))
          {
              Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: `Please sell minimum ${minDeposit}  USDT TOKEN.`,
                  showConfirmButton: false,
                  timer: timeLen,
                  timerProgressBar: true,
                  background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                  color: 'white'
              });
              return false;
          }
          // maximum 1250 balance required
          if(parseInt(amount) > maxDeposit)
          {
              Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: `You can deposit maximum 1250 USDT TOKEN.`,
                  showConfirmButton: false,
                  timer: timeLen,
                  timerProgressBar: true,
                  background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                  color: 'white'
              });
              return false;
          }

          if(parseInt(amount) > parseInt(tokenBalance))
          {
              Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Insufficient USDT Balance.',
                  showConfirmButton: false,
                  timer: timeLen,
                  timerProgressBar: true,
                  background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                  color: 'white'
              });
              return false;
          }
          console.log("Input amount", amount);
          var damount = amount+''+'000000000000000000';
          console.log("Damount", damount);
            await MY_CONTRACT.methods.sellRollex(damount)
            .send({ from: userAddr, maxPriorityFeePerGas: 3e10 })
            .on('transactionHash', function(transactionHash){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Withdraw Request Submitted`,
                    text: `Your transaction hash \n ${transactionHash}`,
                    showConfirmButton: false,
                    timer: 25000,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            })
            .on('confirmation', function(confirmationNumber, receipt){
                if(confirmationNumber > 0 && confirmationNumber < 2)
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Withdraw Request Confirmed`,
                        text: `Your transaction hash \n ${receipt.transactionHash}`,
                        showConfirmButton: false,
                        timer: timeLen,
                        timerProgressBar: true,
                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                        color: 'white'
                    });
                    window.location.href = './withdraw.php';
                    return true;
                }
            })
            .on('error', function(error, receipt) {
                if(error)
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'We are facing error on withdraw while creating Withdraw transaction.',
                        text: `${error.message}`,
                        showConfirmButton: false,
                        timer: timeLen,
                        timerProgressBar: true,
                        background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                        color: 'white'
                    });
                    return false;
                }
            }).catch((error) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Catch error while withdraw USDT.',
                    text: error.message,
                    showConfirmButton: false,
                    timer: timeLen,
                    timerProgressBar: true,
                    background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                    color: 'white'
                });
                return false;
            })
        }));
    }

  
    if($('body').is('.depositHistoryPage'))
    {
        await depositDetails();
    }
   
})();

const isRegisteredCheck = async () => {
    //var { referrer } = (await MY_CONTRACT.methods.isRegistered(userAddr).call())[0];

    isCheck = await MY_CONTRACT.methods.isRegistered(userAddr).call();
    console.log("isCheck", isCheck);
    if(isCheck){

    }
    else{
      referrer = "0x0000000000000000000000000000000000000000";

      refer = referrer;    
    }
   
    if(refer === ZERO_ADDR)
    {
        $("#invite").modal("show");
        refer = getQueryVariable("ref");        
        if(refer === REFERER_DEFAULT)
        {
            $('.register-confirm').remove();
        }
        if(refer == '')
        {
            messageJoin = '<h4 class="text-danger">This is deafult referer</h3>';
            refer = REFERER_DEFAULT;
            if(refer == REFERER_DEFAULT)
            {
                $('.register-confirm').remove();
            }
        }
        else
        {
            // let { maxDeposit } = (await MY_CONTRACT.methods.getUserInfos(refer).call())['user'];
            // minDeposit = ((parseInt(maxDeposit) / 1e6));
            // if(parseInt(minDeposit) < 50 && refer != REFERER_DEFAULT)
            // {
            //     messageJoin = '<h4 class="text-danger">This is inactive refer wallet address.</h4>';
            // }
            // else
            // {
            //     messageJoin = '<h4 class="text-warning">This is your referer</h4>';
            // }
            messageJoin = '<h4 class="text-warning">This is your referer</h4>';
        }
        $(".messageJoin").html(messageJoin);
        $(".inviter-addr").text(refer);
    }
    
}

const isRegisterEventCalled = async () => {
    const url = 'https://api.polygonscan.com/api?module=logs&action=getLogs&fromBlock=44115520&toBlock=latest&address=0xb5e1E11807Fb56C5e26C1E8a7f574a4272781025&topic0=0x98ada70a1cb506dc4591465e1ee9be3fd7a2b6c73ecf3b949009718c9a351519&apikey=2XJ75SG4P4JCS8HQBGU5T3ZHDT6X1V3MU9';
    const response = await fetch(url);
    var data = await response.json();
    localStorage.setItem("totalRegisterUser", data.result.length);
    $('.totalRegister').text(localStorage.getItem("totalRegisterUser"));
}

// const depositDetails = async () => {
//   userInfo = await MY_CONTRACT.methods.getUserInfos(userAddr).call();

//   var length = parseInt(userInfo['orders'].length);
//   let depositData = "";
//   for(i = length - 1; i >= 0; i--)
//   {
//       var myDepositRow = userInfo['orders'][i];
//       let amount = parseInt(myDepositRow.amount) / 1e6;
//       let start = myDepositRow.start;
//       let unfreeze = myDepositRow.unfreeze;
//       let isUnfreezed = myDepositRow.isUnfreezed;
//       let reward = parseFloat((15 * amount) / 100).toFixed(2);
//       let date = new Date();
//       let timeNow = date.getTime()
//       let status = (timeNow < unfreeze ? 'In-Freezed' : (isUnfreezed === true ? 'Completed' : 'In-Progress'));                
//       let row=`
//       <tr>
//           <td>
//               <div class='main-latest-despositor-data-amount deposit-detail'>
//                   <img src='./assets/img/t-icon.png' height='18' />
//                   <h3>${amount.toFixed(2)}</h3>
//               </div>
//           </td>
//           <td>${getDate(start * 1e3)}</td>
//           <td>${getDate(unfreeze * 1e3)}</td>
//           <td>
//               <div class='main-latest-despositor-data-amount'>
//                   <img src='./assets/img/t-icon.png' height='18' />
//                   <h3 class ='text-g'>${reward}</h3>
//               </div>
//           </td>
//           <td><p class='${status.toLowerCase()}'>${status}</p></td>
//       </tr>`;
//       depositData +=row;
//   }
  
//   if(length > 0)
//   {
//       $(".orders-table tbody").empty();
//       $(".orders-table tbody").append(depositData);
//   }
// }

const isApprove = async (to) => {
    let res = await USDT_CONTRACT.methods.allowance(userAddr, to).call();
    var allowanceAmount = (res);
    if(allowanceAmount > 1e11) {
        return true;
    }
    else
    {
        return false;
    }
}

const setApprove = async (to) => {

    var amount = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
    await USDT_CONTRACT.methods.approve(to, amount)
    .send({ from: userAddr, maxPriorityFeePerGas: 3e10 })
    .on('transactionHash', function(transactionHash){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Approved USDT Token successfully. Wait for Deposit...`,
            text: `Your transaction hash \n ${transactionHash}`,
            showConfirmButton: false,
            timer: 18000,
            timerProgressBar: true,
            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
            color: 'white'
        });
        return false;
    })
    .on('error', function(error, receipt) {
        if(error)
        {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Approve USDT Failed.',
                text: error.message,
                showConfirmButton: false,
                timer: timeLen,
                timerProgressBar: true,
                background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
                color: 'white'
            });
            return false;
        }
    })
    .catch((error) => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Catch error while approving USDT TOKEN.',
            text: error.message,
            showConfirmButton: false,
            timer: timeLen,
            timerProgressBar: true,
            background: 'linear-gradient(180deg, #bb1f87 0%, #2c1d5b 100%)',
            color: 'white'
        });
        return false;
    });
}

const formatDate = (startTime, endTime) => {
    var formatTime;
    if(startTime < endTime){
        var perDay = 24 * 60 * 60 * 1000; 
        var perHour = 60 * 60 * 1000;
        var perMinute = 60 * 1000;
        var perSecond = 1 * 1000;
        var compareTime = endTime - startTime;
        day = Math.floor(compareTime / perDay);
        var hours =Math.floor(compareTime % perDay / perHour);
        var miniutes = Math.floor(compareTime % perDay % perHour / perMinute);
        var seconds = Math.floor(compareTime % perDay % perHour % perMinute / perSecond);
        if(day < 10){
            day = "0" + day
        }

        if(hours < 10){
            hours = "0" + hours
        }

        if(miniutes < 10){
            miniutes = "0" + miniutes
        }
        
        if(seconds < 10){
            seconds = "0" + seconds
        }
        formatTime = day + ":" + hours + ":" + miniutes + ":" + seconds;
    }else{
        formatTime = "00:00:00:00";
    }
    return formatTime;
}

const getDate = (timstamp) => {
    var date = new Date(timstamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var forMatDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return forMatDate
}

const getUrlRelativePath = () => {
    var url = document.location.toString();
    var arrUrl = url.split("//");
    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);
    if(relUrl.indexOf("?") != -1)
    {
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}

const getQueryVariable = (variable) => {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

// $('img.nav-logo').on('click', function(){
//     window.location.href = './dashboard.php';
// });