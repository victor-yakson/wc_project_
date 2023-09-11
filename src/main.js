// Importing necessary modules
import { EthereumClient } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/html';
import { chains, projectId, wagmiConfig, getWalletClient } from './config.js'; // importing from config.js

// Creating an Ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

// Initializing Web3Modal with the Ethereum client
const web3modal = new Web3Modal({ projectId }, ethereumClient);

// Add additional logic or functions here as needed

const walletClient = await getWalletClient()
console.log(walletClient);