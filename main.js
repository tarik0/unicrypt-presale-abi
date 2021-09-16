const ethers = require("ethers");

/**
 * Generate Unicrypt V3 `userDeposit` key.
 * @param {Address} walletAddr Message sender address.
 * @param {UInt256} randomNumber Random number of the contract.
 * @returns userDeposit key.
 */
function getV3Key(walletAddr, randomNumber) {
    return ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["address", "uint"], [walletAddr, randomNumber]));
}