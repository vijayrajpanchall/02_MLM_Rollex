const { expect } = require("chai");
const { ethers } = require("hardhat");

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Rollex", function () {
  async function deployTokenFixture() {
    const [
      owner,
      user,
      user2,
      user3,
      user4,
      user5,
      user6,
      user7,
      user8,
      user9,
      user10,
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
      ethers.utils.parseUnits("1000000000000000000000", 6),
      "Tether USD",
      "USDT",
      6
    );

    await tetherToken.transfer(
      user.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user2.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user3.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user4.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user5.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user6.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user7.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user8.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user9.address,
      ethers.utils.parseUnits("100000", 6)
    );
    await tetherToken.transfer(
      user10.address,
      ethers.utils.parseUnits("100000", 6)
    );

    //transfer rollex pro token to user
    await rollexProToken.transfer(
      user.address,
      ethers.utils.parseUnits("100000", 18)
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
    await tetherToken
      .connect(user2)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user3)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user4)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user5)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user6)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user7)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user8)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user9)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));
    await tetherToken
      .connect(user10)
      .approve(rollex.address, ethers.utils.parseUnits("1000000", 6));

    console.log("Token deployed to:", rollexProToken.address);
    console.log("Rollex deployed to:", rollex.address);
    console.log("Tether deployed to:", tetherToken.address);

    return {
      rollexProToken,
      tetherToken,
      rollex,
      owner,
      user,
      user2,
      user3,
      user4,
      user5,
      user6,
      user7,
      user8,
      user9,
      user10,
    };
  }
  describe("Deployment", function () {
    it("Should register a user", async function () {
      const { rollex, user } = await loadFixture(deployTokenFixture);
      await rollex.connect(user).register(rollex.address);
      expect(await rollex.isRegistered(user.address)).to.equal(true);
    });

    it("Should Buy Rollex token", async function () {
      const { rollex, user, user2, user3, user4, user5, user6,
      user7,
      user8,
      user9,
      user10, tetherToken, owner } =
        await loadFixture(deployTokenFixture);

      await rollex.connect(user).register(rollex.address);
      await rollex.connect(user2).register(user.address);
      await rollex.connect(user3).register(user2.address);
      await rollex.connect(user4).register(user3.address);
      await rollex.connect(user5).register(user4.address);
      await rollex.connect(user6).register(user3.address);
      await rollex.connect(user7).register(user3.address);
      await rollex.connect(user8).register(user4.address);
      await rollex.connect(user9).register(user4.address);
      await rollex.connect(user10).register(user5.address);


      console.log("Registration Completed");
      await rollex.connect(user).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user2).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user3).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user4).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user5).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user6).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user7).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user8).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user9).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user10).BuyRollex(ethers.utils.parseUnits("100", 6));

      console.log("BuyRollex Completed");
      const levelHistoryInfoData = await rollex.getLevelIncomeHistory(
        rollex.address
      );
      const levelHistoryInfoData1 = await rollex.getLevelIncomeHistory(
        user.address
      );
      const levelHistoryInfoData2 = await rollex.getLevelIncomeHistory(
        user2.address
      );
      const levelHistoryInfoData3 = await rollex.getLevelIncomeHistory(
        user3.address
      );
      const levelHistoryInfoData4 = await rollex.getLevelIncomeHistory(
        user4.address
      );
      const levelHistoryInfoData5 = await rollex.getLevelIncomeHistory(
        user5.address
      );
      const levelHistoryInfoData6 = await rollex.getLevelIncomeHistory(
        user6.address
      );
      const levelHistoryInfoData7 = await rollex.getLevelIncomeHistory(
        user7.address
      );
      const levelHistoryInfoData8 = await rollex.getLevelIncomeHistory(
        user8.address
      );
      const levelHistoryInfoData9 = await rollex.getLevelIncomeHistory(
        user9.address
      );
      const levelHistoryInfoData10 = await rollex.getLevelIncomeHistory(
        user10.address
      );

      console.log("Level History Info Data", levelHistoryInfoData);
      console.log("Level History Info Data1", levelHistoryInfoData1);
      console.log("Level History Info Data2", levelHistoryInfoData2);
      console.log("Level History Info Data3", levelHistoryInfoData3);
      console.log("Level History Info Data4", levelHistoryInfoData4);
      console.log("Level History Info Data5", levelHistoryInfoData5);
      console.log("Level History Info Data6", levelHistoryInfoData6);
      console.log("Level History Info Data7", levelHistoryInfoData7);
      console.log("Level History Info Data8", levelHistoryInfoData8);
      console.log("Level History Info Data9", levelHistoryInfoData9);
      console.log("Level History Info Data10", levelHistoryInfoData10);


      expect(await rollex.isRegistered(user.address)).to.equal(true);
    });

    it("Should Sell Rollex token", async function () {
      const { rollex, user } = await loadFixture(deployTokenFixture);
      await rollex.connect(user).register(rollex.address);
      await rollex.connect(user).BuyRollex(ethers.utils.parseUnits("100", 6));
      const rollexBal = await rollex.balanceOf(user.address);
      console.log("Rollex Balance", rollexBal.toString());
      //rollex token total supply
      const beforeRollexTotalSupply = await rollex.totalSupply();
      console.log("Rollex Total Supply", beforeRollexTotalSupply.toString());
      await rollex.connect(user).sellRollex(ethers.utils.parseUnits("5000", 6));
      const afterRollexTotalSupply = await rollex.totalSupply();
      console.log("Rollex Total Supply", afterRollexTotalSupply.toString());
      expect(await rollex.isRegistered(user.address)).to.equal(true);
    });

    it.only("should buy rollex token", async function () {
      const { rollex, user } = await loadFixture(deployTokenFixture);
      await rollex.connect(user).register(rollex.address);
      await rollex.connect(user).BuyRollex(ethers.utils.parseUnits("100", 6));
      await rollex.connect(user).sellRollex(ethers.utils.parseUnits("160000", 18));
      expect(await rollex.isRegistered(user.address)).to.equal(true);
    });
  });
});
