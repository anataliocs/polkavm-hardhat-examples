import '@parity/hardhat-polkadot';
import '@acala-network/eth-rpc-adapter'

import {HardhatUserConfig} from "hardhat/types/config";

const config: HardhatUserConfig = {
    solidity: '0.8.26',
    resolc: {
        compilerSource: "npm",
        settings: {
            optimizer: {
                enabled: true,
            }
        }
    },
    networks: {
        hardhat: {
            polkavm: true,
            chainId: 31337,
            nodeConfig: {
                nodeBinaryPath: "/Users/chrisanatalio/IdeaProjects/polkavm-hardhat-examples/westend_runtime-v1019002.compact.compressed.wasm",
                rpcPort: 8000,
                dev: true,
            },
            adapterConfig: {
                adapterBinaryPath: "/Users/chrisanatalio/IdeaProjects/polkavm-hardhat-examples/uniswap/node_modules/.bin/eth-rpc-adapter",
                dev: true,
                adapterPort: 8545,
            },
        },
        localNode: {
            polkavm: true,
            url: `http://127.0.0.1:8545`,

        },
        polkadotHubTestnet: {
            polkavm: true,
            url: 'https://testnet-passet-hub-eth-rpc.polkadot.io',
            chainId: 420420422,
        },
        kusamaHub: {
            polkavm: true,
            url: 'https://kusama-asset-hub-eth-rpc.polkadot.io/',
            chainId: 420420418,
        },
    },
};

export default config;