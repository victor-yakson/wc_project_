// Importing necessary modules
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains,  createConfig, getWalletClient } from '@wagmi/core';
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains';

// List of chains
const chains = [arbitrum, mainnet, polygon];

// Project ID (This would probably be supplied or replaced in actual code)
const projectId = '24f2453e8e1c87c5125455d0eb6506ef';

// Configuring chains
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

// Creating configuration
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});

// Exporting configurations and utilities for use in other files
export { chains, projectId, wagmiConfig, getWalletClient };
