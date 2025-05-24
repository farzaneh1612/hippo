// src/context/NetworkContext.js
import React, { createContext, useContext, useState } from "react";
import { networkOptions } from "../config/NetworkOptions"; // path to your array
import { useAppKitNetwork } from "@reown/appkit/react";
import { bsc, mainnet } from "@reown/appkit/networks";

const NetworkContext = createContext();

export const useNetwork = () => useContext(NetworkContext);

export const NetworkProvider = ({ children }) => {
  // Default to first network or read from localStorage
  const savedNetwork = JSON.parse(localStorage.getItem("selectedNetwork"));
  const [selectedNetwork, setSelectedNetwork] = useState(
    savedNetwork || networkOptions[0]
  );


  const { chainId, switchNetwork } = useAppKitNetwork();
  if(chainId !== selectedNetwork.chainId){
    setSelectedNetwork(networkOptions.find(item => item.chainId === chainId));
  }

  const updateNetwork = (network) => {
    setSelectedNetwork(network);
    switchNetwork(
      network.chainId === 1 ? mainnet : network.chainId === 56 ? bsc : null
    );
    localStorage.setItem("selectedNetwork", JSON.stringify(network)); // persist on refresh
  };

  return (
    <NetworkContext.Provider
      value={{ networkOptions, selectedNetwork, updateNetwork }}
    >
      {children}
    </NetworkContext.Provider>
  );
};
