# PolkaVM Hardhat Examples

This repository contains a collection of basic examples demonstrating how to deploy and interact with
Ethereum-compatible smart contracts on PolkaVM using Hardhat.

## Project Structure

This repository contains the following example projects:

- [**uniswap-v2-polkadot**](./uniswap-v2-polkadot/) - implementation of the Uniswap V2 codebase using `hardhat-polkadot`

Each subfolder is a standalone Hardhat project with its own configuration, contracts, deployment scripts, and tests.

## Getting Started

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/polkavm-hardhat-examples.git
   cd polkavm-hardhat-examples
   ```

2. Navigate to any of the example directories
   ```bash
   cd storage-hardhat
   ```

## Documentation

Each example folder contains its own README with specific instructions and explanations for that particular smart
contract implementation.

For comprehensive guidance on deploying contracts to PolkaVM using Hardhat, visit
the [Hardhat Development Environment]((https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/dev-environments/hardhat/))
page in the official Polkadot documentation. This resource provides step-by-step instructions, configuration details,
and best practices for smooth integration.

Compile

```terminaloutput
npx hardhat compile
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.