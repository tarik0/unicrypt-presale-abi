# How Did I Extract Those ?
I've extracted those ABI's from the Unicrypt website.

# How To Use Them ?
You can import the abis like this in your JS application.

```js
const PresaleABI = require("./abis/presale_abi.json")
// ...
```

# How To Contribute To The V3 Presale Using This ?
You can use the function called `userDeposit` which takes two arguments called `uint256 _amount` and `bytes _key` in V3 contract. The first argument is the amount of tokens you wan't to contribute and the second argument is the anti-bot key that your browser generates when you click to the contribute button.

I've reverse engineered this formula from the Unicrypt's website.

```js
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
```

# What About The V4 ?
In the next version of the Unicrypt presale contract they have changed the formula of how they generate the `bytes _key` argument of the `userDeposit` function

Also they have added a hCaptcha protection to prevent bots from contributing. Now the formula is hidden in server side and the only way to get is hack the Unicrypt and see the source codes or decompile the presale contract and find it through the bytecodes. I've decided to do the second way but It really took me so many days the figure out so I've decided to make it close-sourced. You can contact me to learn info.

# Contact And Donation
All donations are welcomed, Thank you!

`BSC: 0x9D3b16055aCcC713612a18aaBEFff9Db8163F9f5`

`Discord: cool guy#4125`
`Telegram: @HichigoR35`
