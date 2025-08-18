import "@parity/hardhat-polkadot";
import "@nomicfoundation/hardhat-toolbox";
import { HardhatNetworkUserConfig, HardhatUserConfig } from "hardhat/types/config";
type PolkadotHardhatConfig = Extract<HardhatUserConfig, HardhatNetworkUserConfig>;
declare const config: PolkadotHardhatConfig;
export default config;
