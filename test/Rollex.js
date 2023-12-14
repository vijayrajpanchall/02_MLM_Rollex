const { expect } = require("chai");
const { ethers } = require("hardhat");

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Rollex", function () {
  async function deployTokenFixture() {
    const [
      owner,
      user,
      indiaAddress,
      pakistanAddress,
      vietnamAddress,
      socialmediaAddress,
      admin1,
      admin2,
      admin3,
      admin4,
      admin5,
    ] = await ethers.getSigners();

    const RollexProToken = await ethers.getContractFactory("RollexProToken");
    const TetherToken = await ethers.getContractFactory("TetherToken");

    const rollexProToken = await RollexProToken.deploy(
      indiaAddress.address,
      pakistanAddress.address,
      vietnamAddress.address,
      socialmediaAddress.address
    );

    const tetherToken = await TetherToken.deploy(
      ethers.utils.parseUnits("1000000", 6),
      "Tether USD",
      "USDT",
      6
    );

    await tetherToken.transfer(
      user.address,
      ethers.utils.parseUnits("100000", 6)
    );

    
    const Rollex = await ethers.getContractFactory("Rollex");
    const rollex = await Rollex.deploy(
      rollexProToken.address,
      tetherToken.address,
      admin1.address,
      admin2.address,
      admin3.address,
      admin4.address,
      admin5.address
      );

    await tetherToken
      .connect(user)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    const bal = await tetherToken.balanceOf(user.address);
    console.log("bal", bal.toString());

    console.log("Token deployed to:", rollexProToken.address);
    console.log("Rollex deployed to:", rollex.address);
    console.log("Tether deployed to:", tetherToken.address);

    return { rollexProToken,tetherToken,  rollex, owner, user };
  }
  describe("Deployment", function () {
    it("Should register a user", async function () {
      const { rollex, user } = await loadFixture(deployTokenFixture);
      await rollex.connect(user).register(rollex.address);
      expect(await rollex.isRegistered(user.address)).to.equal(true);
    });

    it.only("Should Buy Rollex token", async function () {
      const { rollex, user, tetherToken, owner } = await loadFixture(
        deployTokenFixture
      );

      await rollex.connect(user).register(rollex.address);
      const allowance = await tetherToken.allowance(user.address, rollex.address);

      console.log("allowance", allowance.toString());
      await rollex.connect(user).BuyRollex(ethers.utils.parseUnits("100", 6));
      expect(await rollex.isRegistered(user.address)).to.equal(true);
    });

    it("Should Sell Rollex token", async function () {
      const { rollex, user } = await loadFixture(deployTokenFixture);
      await rollex.connect(user).register(rollex.address);
      await rollex.connect(user).SellRollex(ethers.utils.parseUnits("100", 6));
      expect(await rollex.isRegistered(user.address)).to.equal(true);
    }
  });
});

