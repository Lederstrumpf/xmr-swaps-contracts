const { expect } = require("chai");
const ed = require("noble-ed25519");

describe("Swap", function () {
  // function toHexString(byteArray) {
  //   return Array.from(byteArray, function (byte) {
  //     return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  //   }).join('')
  // }

  it("Should generate public key correctly", async function () {
    // const s_a = ed.utils.randomPrivateKey();
    // console.log(toHexString(s_a));
    // const s_b = ed.utils.randomPrivateKey();
    // console.log(toHexString(s_b));
    // const pubKey_a = await ed.getPublicKey(s_a);
    // console.log(toHexString(pubKey_a));
    // const pubKey_b = await ed.getPublicKey(s_b);
    // console.log(toHexString(pubKey_b));

    s_a = 0xf322fb481e386905b062b968a43fe2b205885d4cba9f30448e05dfa1b651a408
    s_b = 0x463965b3db9842f4c2028ee110e2dafc1519a209bae4b84cfd2464c005a3f002
    pubKey_a = 0xeaa25284965dbe5ccefe16286057b3028da631ac887ac61eb660a5ad9574ae24
    pubKey_b = 0x2664791cd041ca93e52e513ff3b23445477d8cf23b5fb361b442ecb6829e43ea

    const Swap = await ethers.getContractFactory("Swap");
    const swap = await Swap.deploy(pubKey_a, pubKey_b);
    await swap.deployed();

    await swap.verifySecret(s_a, pubKey_a);

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
