# zkNet Web Wallet

![zkNet](img/zknet-banner.png)

## About zkNet

*Privacy-Powered Transactions on the R5 Network*

zkNet is a privacy protocol built on the R5 Network, specifically designed to obfuscate transactions using Private Internal Addresses (or PIA, for short). This distinctive feature enables users to interact within a private subnetwork with an independent ledger of accounts and transactions. zkNet caters to individuals who value their privacy and wish to manage their digital assets discreetly.

**Important:** The zkNet protocol is a privacy enhancer and not a full anonymizer; this software is provided on an "As Is" basis, with no guarantees or warranties; use it at your own risk.

---

## Table of Contents

- [zkNet Web Wallet](#zknet-web-wallet)
  - [About zkNet](#about-zknet)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Running Locally](#running-locally)
    - [Building](#building)
  - [Custom Configuration](#custom-configuration)
    - [Using Your Own RPC Node/Explorer](#using-your-own-rpc-nodeexplorer)
    - [Using Your Own Smart Contract](#using-your-own-smart-contract)
  - [Canonical Deployments](#canonical-deployments)
    - [Mainnet](#mainnet)
    - [Testnet](#testnet)
  - [Security Considerations](#security-considerations)
  - [Further Reading](#further-reading)

---

## Getting Started

### Running Locally

To run the zkNet Web Wallet locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/r5-labs/zknet-web-wallet.git
   ```
2. Install dependencies using npm:
   ```bash
   npm install
   ```
3. Start the development environment:
   ```bash
   npm run dev
   ```

### Building

To create an optimized build:
```bash
npm run build
```

## Custom Configuration

### Using Your Own RPC Node/Explorer

You can configure the wallet to use your own RPC node or explorer by modifying the provider details in `/src/constants/index.ts`. This allows you to connect to a different network or service.

**Important Notes:**
- Funds Interchangeability: If you switch to a custom contract, funds are not interchangeable with other contracts. Each contract maintains its own ledger.
- Risk Warning: Only use trusted RPC nodes and smart contracts. Custom deployments carry risks, including potential loss of funds if the provider is malicious or improperly configured.

### Using Your Own Smart Contract

To deploy your own smart contract:

1. Deploy the contract on the R5 Network using your preferred IDE.
2. Modify the contract address in /src/constants/index.ts.
3. Restart the wallet application for changes to take effect.

## Canonical Deployments

We strongly recommend using the following canonical deployments to ensure security and compatibility:

### Mainnet
```
0x1b9935414fdDF20444F47152dcfdDd8ce41F675c
```

### Testnet
```
0x3da45449d5d7b5c27e2da4c0cfbb0c1302eef990
```

These deployments are decentralized and have no owner calls, ensuring trustless operation.

## Security Considerations

- **Use Canonical Deployments:** Always use the official zkNet smart contracts to minimize risks.
- **Avoid Untrusted Providers:** Only connect to trusted RPC nodes or explorers.
- **Cycle Between Different PIAs:** You can create and destroy PIAs at will. Cycle through different addresses for maximum privacy.

## Further Reading

- [zkNet Non-Technical Documentation](https://docs.r5.network/about-r5/zknet-privacy)
- [zkNet API Function Rundown](https://docs.r5.network/for-developers/zknet-api)
