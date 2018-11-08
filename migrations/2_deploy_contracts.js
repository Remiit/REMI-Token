
// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
// var ConvertLib = artifacts.require("ConvertLib");
// var MetaCoin = artifacts.require("MetaCoin");

// var TestLib = artifacts.require("./TestLib.sol");
// var TestCoin = artifacts.require("./TestCoin.sol");

var RemiCrowdRopsten = artifacts.require("RemiCrowdRopsten");
var RemiTokenRopsten = artifacts.require("RemiTokenRopsten");
var truffleDevelopAccount0 = 0x627306090abab3a6e1400e9345bc60c78a8bef57; // crowd sale contract owner
var truffleDevelopAccount1 = 0xf17f52151ebef6c7334fad080c5704d77216b732; // crowd sale wallet

// var YeedToken = artifacts.require("./YeedToken.sol");
// var OreOreCoin = artifacts.require("OreOreCoin");
// var Escrow = artifacts.require("Escrow");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);

  // deployer.deploy(TestLib);
  // deployer.link(TestLib, TestCoin);
  // deployer.deploy(TestCoin);

  // deployer.deploy(TestLib).then(() => {
  //   deployer.link(TestLib, TestCoin);
  //   return deployer.deploy(TestCoin);
  // });
  
  // deployer.deploy(YeedToken);
  // deployer.deploy(OreOreCoin);
  // deployer.deploy(Escrow);

  deployer.deploy(RemiTokenRopsten, 100000000000) // 1000억개, 10^5
  .then(() => {
    // deployer.deploy(RemiCrowdRopsten, RemiTokenRopsten.address, truffleDevelopAccount0, truffleDevelopAccount1, 40000000000, 35, 50000, 20000);
    deployer.deploy(RemiCrowdRopsten, truffleDevelopAccount0, truffleDevelopAccount1, 40000000000, 35, 50000, 20000);
  });

};
