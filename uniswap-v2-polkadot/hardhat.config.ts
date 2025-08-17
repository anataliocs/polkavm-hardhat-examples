import '@parity/hardhat-polkadot';

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
                nodeBinaryPath: "path/to/dev-node/binary",
                rpcPort: 8000,
                dev: true,
            },
            adapterConfig: {
                adapterBinaryPath: "path/to/eth-rpc-adapter",
                dev: true,
            },
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