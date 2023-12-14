require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {},
      },
      {
        version: "0.4.17",
        settings: {},
      },
    ],
  },
};
