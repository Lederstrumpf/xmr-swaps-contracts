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

    const s_a = [
      66, 122, 84, 24, 129, 247, 125, 184,
      103, 8, 24, 113, 104, 18, 80, 150,
      123, 246, 135, 119, 168, 233, 196, 222,
      109, 103, 72, 170, 62, 171, 141, 8
    ];
    const s_b = [
      32, 40, 49, 87, 254, 232, 89, 239,
      50, 110, 6, 57, 86, 71, 95, 69,
      189, 176, 117, 106, 165, 34, 250, 124,
      166, 47, 137, 109, 94, 102, 210, 12
    ];
    const pubKey_a = [
      102, 131, 157, 191, 81, 33, 222,
      165, 216, 25, 86, 206, 162, 233,
      88, 14, 189, 17, 199, 187, 171,
      111, 101, 153, 166, 62, 107, 100,
      136, 14, 212, 174
    ];
    const pubKey_b = [
      64, 18, 89, 215, 102, 66, 239, 204,
      170, 132, 153, 42, 237, 8, 162, 97,
      68, 214, 200, 207, 27, 129, 142, 194,
      80, 84, 0, 131, 99, 47, 226, 181
    ];

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
