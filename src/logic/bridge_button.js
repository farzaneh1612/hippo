import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { BrowserProvider, ethers, toBeHex, zeroPadValue } from "ethers";
import "../component/bridge/BridgeForm.css";
import { useNetwork } from "../context/NetworkContext";
import Contracts from "../config/contracts";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

/**
 * Converts a value to a padded hex string.
 * @param {number | bigint | string} value - The value to convert.
 * @param {number} bytes - Number of bytes to pad to (e.g., 32 for bytes32).
 * @returns {string} Padded hex string.
 */
const toHex = (value, bytes) => {
  return zeroPadValue(toBeHex(value), bytes);
};

/**
 * Constructs deposit data for ERC token bridging.
 * @param {number | bigint | string} tokenAmountOrID - Amount of tokens or token ID (uint256).
 * @param {number} lenRecipientAddress - Length of recipient address in bytes (e.g., 20).
 * @param {string} recipientAddress - The recipient address as a hex string (e.g., '0xabc...').
 * @returns {string} Encoded deposit data as a hex string.
 */
const createERCDepositData = (
  tokenAmountOrID,
  lenRecipientAddress,
  recipientAddress
) => {
  return (
    "0x" +
    toHex(tokenAmountOrID, 32).slice(2) +
    toHex(lenRecipientAddress, 32).slice(2) +
    recipientAddress.slice(2)
  );
};

export function BridgeButton({
  destination,
  amountProps,
  addressProp = null,
  disabledProp,
  setAction,
  formik, // ✅ receive formik instance
}) {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { selectedNetwork } = useNetwork();
  const [loading, setLoading] = useState(false);

  async function stakeAction() {
    if (!isConnected) {
      toast.error("Wallet not connected");
      return;
    }

    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      formik.setTouched({
        amount: true,
        WalletAddress: true,
        fromNetwork: true,
        toNetwork: true,
      });
      return; 
    }

    setLoading(true);
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      const bridgeContract = new ethers.Contract(
        selectedNetwork.bridgeContractAddress,
        Contracts.bridgeContractAbi,
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
        selectedNetwork.bridgeContractHandler
      );

      const destinationId =
        destination.chainId === 1 ? 1 : destination.chainId === 56 ? 3 : 0;
      const depositData = createERCDepositData(
        amount,
        20,
        addressProp || address
      );

      if (ethers.getBigInt(allowance) < amount) {
        const approve = await hpoContract.approve(
          selectedNetwork.bridgeContractHandler,
          amount
        );
        if (approve) {
          const tx = await bridgeContract.deposit(
            destinationId,
            toHex(0, 32),
            depositData
          );
          await tx.wait();
        }
      } else {
        const tx = await bridgeContract.deposit(
          destinationId,
          toHex(0, 32),
          depositData
        );
        await tx.wait();
      }

      toast.success("Bridge successful");
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error(error?.reason || "Bridge failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (setAction) setAction(() => stakeAction);
  }, [setAction]);

  return (
    <button
      type="button"
      onClick={stakeAction}
      disabled={!disabledProp || loading}
      className="stake-button"
      style={{ backgroundColor: !disabledProp ? "#30959c" : "gray" }}
    >
      {loading ? (
        <div className="spinner-wrapper">
          <span className="spinner"></span> Bridging...
        </div>
      ) : (
        "Bridge"
      )}
    </button>
  );
}
