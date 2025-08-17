import '@parity/hardhat-polkadot';
import "@parity/hardhat-polkadot-node";
const config = {
    solidity: '0.8.28',
    resolc: {
        compilerSource: "npm"
    },
    networks: {
        hardhat: {
            polkavm: true,
            chainId: 31337,
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
