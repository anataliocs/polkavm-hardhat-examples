import "@parity/hardhat-polkadot"
import "@nomicfoundation/hardhat-toolbox"
import {HardhatNetworkUserConfig, HardhatUserConfig} from "hardhat/types/config";

type PolkadotHardhatConfig
    = Extract<HardhatUserConfig, HardhatNetworkUserConfig>;

const config: PolkadotHardhatConfig = {
    solidity: '0.8.26',
    networks: {
        hardhat: {
            throwOnCallFailures: true,
            throwOnTransactionFailures: true,
            docker: true,
            polkavm: true,
        },
    },
};

export default config;