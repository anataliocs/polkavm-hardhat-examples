import "@parity/hardhat-polkadot";
import "@nomicfoundation/hardhat-toolbox";
const config = {
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
