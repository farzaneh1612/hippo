import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SelectWithImage from './SelectWithImage.tsx';
import './StakeForm.css';
import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { BrowserProvider, ethers } from "ethers";
import { StakeButton } from '../../logic/stake_button.js';
import { useNetwork } from '../../context/NetworkContext';
import { ConnectButton } from "../../logic/connect_button.js";
import { toast } from "react-toastify";

export default function StakeForm() {
  const { selectedNetwork: network, updateNetwork, networkOptions } = useNetwork();
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (isConnected && network) {
      getPlansInfo();
    }
  }, [isConnected, network]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { amount: '' },
    validationSchema: Yup.object({
      amount: Yup.number()
        .typeError('Amount must be a number')
        .required('Amount is required')
        .min(
          selectedPlan?.value.minAmount || 0,
          `Minimum amount is ${selectedPlan?.value.minAmount || 0}`
        ),
    }),
    onSubmit: (values) => {
      // Optional: handle submit or leave empty, since StakeButton triggers stakeAction directly
      console.log('Form submitted', values);
    },
  });

 async function getPlansInfo() {
    if (!isConnected) {
      toast.error("Wallet not connected");
      return;
    }
    if (network.chainId === 1) {
      const index = 0;
      const releaseDuration = 30;
      const ratio = "6%";
      const minAmount = 3000;
      setPlans({
        label: `6% Profit - 1 Month`,
        value: { index, releaseDuration, ratio, minAmount },
        icon: "",
      });
    } else {
      try {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const contract = new ethers.Contract(
          network.stakeContractAddress,
          network.stakeContractAbi,
          signer
        );

        const plans = await contract.getPlans();

        const formattedPlans = plans.map((plan, index) => {
          const releaseDuration = parseInt(plan[0]) / 3600 / 24;
          const ratio = parseInt(plan[1]) / 100;
          const minAmount = parseInt(plan[2]) / 1e18;

          return {
            label: `${ratio}% Profit - ${parseInt(releaseDuration / 30)} Month`,
            value: { index, releaseDuration, ratio, minAmount },
            icon: "",
          };
        });

        setPlans(formattedPlans);
        if (formattedPlans.length > 0) setSelectedPlan(formattedPlans[0]);
      } catch (error) {
        toast.error("Failed to fetch plans info.");
        console.error(error);
      }
    }
  }

  // Determine if StakeButton should be disabled
  const isStakeButtonDisabled =
    !formik.isValid || !formik.dirty || !selectedPlan || formik.isSubmitting;

  return (
    <>
      <div className="stake-form">
        {/* Network Selector */}
        <label className="form-label">Network</label>
        <SelectWithImage
          value={network?.value}
          options={networkOptions}
          onChange={option => {
            updateNetwork(option);
            formik.setFieldValue('amount', ''); // reset amount on network change
            setSelectedPlan(null);
          }}
        />

        {/* Amount Input */}
        <label className="form-label">Amount</label>
        <div className="input-wrapper">
          <div className="logoContain">
            <img
              src={require("../../static/image/logo/Logo.png")}
              alt="HPO"
              className="input-icon"
            />
            <span className="input-symbol">HPO</span>
          </div>
          <input
            type="text"
            name="amount"
            className="form-input"
            placeholder="0.000"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <small className="balance-text">
          Total Balance: {formik.values.amount} ETH / HPO
        </small>
        {formik.touched.amount && formik.errors.amount && (
          <span
            style={{ paddingBottom: "24px", color: "red" }}
            className="form-input"
          >
            {formik.errors.amount}
          </span>
        )}

        {/* Plan Selector */}
        <label className="form-label">Plan</label>
        {isConnected ? (
          <SelectWithImage
            value={selectedPlan?.value}
            options={plans}
            onChange={(option) => setSelectedPlan(option)}
          />
        ) : (
          <div style={{ display: "flex", gap: "4px" }}>
            <img
              src={require("../../static/image/warning.png")}
              alt="warning"
              className="input-icon"
            />
            <span className="warning-text">
              To use staking, you need to first connect to your wallet.
            </span>
          </div>
        )}

        {/* Stake Button */}
        {isConnected ? (
          <StakeButton
            indexPlan={selectedPlan?.value.index}
            amountProps={formik.values.amount}
            disabled={isStakeButtonDisabled}
          />
        ) : (
          <ConnectButton />
        )}
      </div>
      <div style={{ height: "80px" }} />
    </>
  );
}
