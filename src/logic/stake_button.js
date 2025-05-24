import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { BrowserProvider, ethers } from "ethers";
import { toast } from "react-toastify";
import { useNetwork } from "../context/NetworkContext";
import "../component/exchange/StakeForm.css";
import Contracts from "../config/contracts";
import { useState } from "react";

export function StakeButton({ indexPlan, amountProps, disabled }) {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { selectedNetwork } = useNetwork();
  const [loading, setLoading] = useState(false);

  async function stakeAction() {
    if (!isConnected) {
      toast.error("Wallet is disconnected. Please connect your wallet.");
      return;
    }

    setLoading(true);
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      const stakeContract = new ethers.Contract(
        selectedNetwork.stakeContractAddress,
        selectedNetwork.stakeContractAbi,
        signer
      );

      const hpoContract = new ethers.Contract(
        selectedNetwork.hpoContractAddress,
        Contracts.hpoContractAbi,
        signer
      );

      const amount = ethers.parseUnits(amountProps, 18);

      const allowance = await hpoContract.allowance(
        address,
        selectedNetwork.stakeContractAddress
      );
      const amountAllowance = ethers.getBigInt(allowance);

      if (amountAllowance < amount) {
        const approve = await hpoContract.approve(
          selectedNetwork.stakeContractAddress,
          amount
        );
        if (approve) {
          const tx = await stakeContract.stake(amount, indexPlan);
          await tx.wait();
          toast.success("Staking successful!");
          return;
        }
      }

      const tx = await stakeContract.stake(amount, indexPlan);
      await tx.wait();
      toast.success("Staking successful!");
    } catch (error) {
      console.error("Staking failed:", error);
      toast.error(error.reason || "Staking failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={stakeAction}
      className="stake-button"
      disabled={disabled || loading}
      style={{ backgroundColor: !disabled ? "#30959c" : "gray" }}
    >
      {loading ? (
        <div className="spinner-wrapper">
          <span className="spinner"></span> Staking...
        </div>
      ) : (
        "Stake"
      )}
    </button>
  );
}
