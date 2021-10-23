const { expect } = require("chai");
const ed = require("noble-ed25519");

describe("Swap", function () {
  it("Should generate public key correctly", async function () {
    const s_a = ed.utils.randomPrivateKey();
    const s_b = ed.utils.randomPrivateKey();
    const pubKey_a = await ed.getPublicKey(s_a);
    const pubKey_b = await ed.getPublicKey(s_b);

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
