# zkNet Web Wallet

![zkNet](img/zknet-banner.png)

*About zkNet*

zkNet is a privacy protocol built on the R5 Network, specifically designed to obfuscate transactions using **Private Internal Addresses** (or PIA, for short). This distinctive feature enables users to interact within a private subnetwork with an independent ledger of accounts and transactions. zkNet caters to individuals who value their privacy and wish to manage their digital assets discreetly.

## Running Locally

To run the zkNet Web Wallet locally, start by cloning the main repository:

```bash
git clone https://github.com/r5-labs/zknet-web-wallet.git
```

You can then install the dependencies using `npm`:

```bash
npm install
```

Run the develolpment environment using `npm`:

```bash
npm run dev
```

You can now access your local instance of the zkNet Web Wallet via `http://localhost:5173/`.

## Building

You can create an optimized build with `npm`:

```bash
npm run build
```

## Using Your Own RPC Node, Explorer, or Smart Contract

You can use your own RPC node, explorer, or smart contract by changing the provider details in `/src/constants/index.ts`.

***If you use your own contract:*** *Funds are not "interchangeable" between different contract addresses. They work simiarly to servers, each one with its own ledger. That means that if you fund your zkNet Web Wallet while interacting with **Contract A**, if you change the contract constant to **Contract B**, your funds will not display.*

> ⚠️ **RISK WARNING:** Only use smart contract and RPC providers you trust. The standard zkNet Smart Contract is decentralized and has no owner calls, however, if you are using a deployment from an untrusted source, there might be a considerable risk that you will lose all of your funds. **We always recommend using the canonical decentralized deployements listed below.**

## Canonical Deployments

We recommend you **always** use the deployments below when running your zkNet Web Wallet locally. If you are using the public interface at https://zknet.r5.network these are used by default.

**Mainnet**
```
N/A
```

**Testnet**
```
0x3da45449d5d7b5c27e2da4c0cfbb0c1302eef990
```

## More Information

**zkNet** *General Documentation*
https://docs.r5.network/about-r5/zknet-privacy

**zkNet API** *Function Rundown*
https://docs.r5.network/for-developers/zknet-api
