const Contracts = {
    bscBridgeContractAddress: process.env.REACT_APP_BSC_BRIDGE_CONTRACT_ADDRESS,    
    handlerBscAddress: process.env.REACT_APP_HANDLER_BSC_ADDRESS,
    bscHpoContractAddress:process.env.REACT_APP_BSC_HPO_CONTRACT_ADDRESS,
    bscStakeContractAddress:process.env.REACT_APP_BSC_STAKE_CONTRACT_ADDRESS,

    ethHpoContractAddress: process.env.REACT_APP_ETH_HPO_CONTRACT_ADDRESS,
    ethStakeContractAddress: process.env.REACT_APP_ETH_STAKE_CONTRACT_ADDRESS,
    ethBridgeContractAddress:process.env.REACT_APP_ETH_BRIDGE_CONTRACT_ADDRESS,
    handlerETHAddress:process.env.REACT_APP_HANDLER_ETH_ADDRESS,

    stakeContractAbi: JSON.parse(process.env.REACT_APP_STAKE_ABI),
    stake2ContractAbi: JSON.parse(process.env.REACT_APP_STAKE2_ABI),
    bridgeContractAbi: JSON.parse(process.env.REACT_APP_BRIDGE_ABI),
    hpoContractAbi: JSON.parse(process.env.REACT_APP_HPO_CONTRACT_ABI),


  };

  const contractsByChain = {
    "1": {
     label: 'Ethereum Mainnet',
           value: '1',
           icon: require('../static/image/logo/Ethereum.png'),
           stakeContractAddress: Contracts.ethStakeContractAddress,
           hpoContractAddress: Contracts.ethHpoContractAddress,
           bridgeContractAddress: Contracts.ethBridgeContractAddress,
           bridgeContractHandler: Contracts.handlerETHAddress,
           stakeContractAbi: Contracts.stake2ContractAbi, 
          },
    "56": {
       label: 'Binance Smart Chain',
           value: '3',
           icon: require('../static/image/logo/BinanceSmartChain.png'),
           stakeContractAddress: Contracts.bscStakeContractAddress,
           hpoContractAddress: Contracts.bscHpoContractAddress,
           bridgeContractAddress: Contracts.bscBridgeContractAddress,
           bridgeContractHandler: Contracts.handlerBscAddress,
           stakeContractAbi: Contracts.stakeContractAbi,
         },
  };
  
  export function getContractsByChainId(chainId) {
    return contractsByChain[chainId] || null;
  }
  
  
  export default Contracts;
   