import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { infuraApiKey } from './config/settings'

//import { BscConnector } from '@binance-chain/bsc-connector';

export const supportedChainIds = [1,3];

export const MetaMask = new InjectedConnector({supportedChainIds:supportedChainIds})
//export const BSCConnector = new BscConnector();

const RPC_URL_ETH_MAINNET = 'https://mainnet.infura.io/v3/' + infuraApiKey

const POLLING_INTERVAL = 3600000
const rpcUrls = {
    1: RPC_URL_ETH_MAINNET,
}
export const WalletConnect = new WalletConnectConnector({
    rpc: { 1: rpcUrls[1] },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
});

