import Contracts from '../config/contracts.js';

export const networkOptions = [
    { 
      chainId: 1,
      label: 'Ethereum Mainnet',
      value: '1',
      icon: require('../static/image/logo/Ethereum.png'),
      stakeContractAddress: Contracts.ethStakeContractAddress,
      hpoContractAddress: Contracts.ethHpoContractAddress,
      bridgeContractAddress: Contracts.ethBridgeContractAddress,
      bridgeContractHandler: Contracts.handlerETHAddress,
      stakeContractAbi: Contracts.stake2ContractAbi,
    },
    { 
      chainId: 56,
      label: 'Binance Smart Chain',
      value: '3',
      icon: require('../static/image/logo/BinanceSmartChain.png'),
      stakeContractAddress: Contracts.bscStakeContractAddress,
      hpoContractAddress: Contracts.bscHpoContractAddress,
      bridgeContractAddress: Contracts.bscBridgeContractAddress,
      bridgeContractHandler: Contracts.handlerBscAddress,
      stakeContractAbi: Contracts.stakeContractAbi,
    },
  ];
