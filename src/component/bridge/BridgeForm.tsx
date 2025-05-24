import React, { useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectWithImage from "../exchange/SelectWithImage.tsx";
import "./BridgeForm.css";
import { BridgeButton } from "../../logic/bridge_button.js";
import { useNetwork } from "../../context/NetworkContext";
import { isAddress } from "ethers";
import { ConnectButton } from "../../logic/connect_button.js";

export default function BridgeForm() {
  const {
    selectedNetwork: network,
    updateNetwork,
    networkOptions,
  } = useNetwork();

  const [toNetwork, setToNetwork] = useState(networkOptions[1]);
  const [toAnotherAddress, setToAnotherAddress] = useState(false);
  const { isConnected } = useAppKitAccount();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      amount: "",
      WalletAddress: "",
      fromNetwork: network.value,
      toNetwork: toNetwork.value,
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .typeError("Amount must be a number")
        .required("Amount is required")
        .moreThan(0, "Amount must be greater than zero"),

      WalletAddress: Yup.string()
        .test("is-evm-address", "Invalid Ethereum address", (value) => {
          if (!toAnotherAddress) return true;
          return isAddress(value || "");
        })
        .when("$toAnotherAddress", {
          is: true,
          then: (schema) => schema.required("Wallet address is required"),
          otherwise: (schema) => schema.notRequired(),
        }),

      fromNetwork: Yup.string().required(),
      toNetwork: Yup.string()
        .required()
        .test(
          "networks-not-equal",
          "From and To network cannot be the same",
          function (value) {
            return value !== this.parent.fromNetwork;
          }
        ),
    }),
    context: { toAnotherAddress },
    onSubmit: () => {},
  } as any);

  // 🔐 DISABLE button logic
  const isBridgeDisabled =
    !formik.isValid ||
    !formik.dirty ||
    formik.isSubmitting ||
    (toAnotherAddress && !formik.values.WalletAddress);

  return (
    <>
      <div className="stake-form">
        {/* From Network */}
        <label className="form-label">From Network</label>
        <SelectWithImage
          value={network.value}
          options={networkOptions}
          onChange={(option) => {
            updateNetwork(option);
            formik.setFieldValue("fromNetwork", option.value);
          }}
        />

        {/* To Network */}
        <label className="form-label">To Network</label>
        <SelectWithImage
          value={toNetwork.value}
          options={networkOptions}
          onChange={(option) => {
            setToNetwork(option);
            formik.setFieldValue("toNetwork", option.value);
          }}
        />
        {formik.touched.toNetwork &&
          typeof formik.errors.toNetwork === "string" && (
            <span className="error-message">{formik.errors.toNetwork}</span>
          )}

        {/* Amount */}
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
        <small className="balance-text">Total Balance: 0 ETH / HPO</small>
        {formik.touched.amount && typeof formik.errors.amount === "string" && (
          <span className="error-message">{formik.errors.amount}</span>
        )}

        {/* To Another Address */}
        <div className="toggle-container">
          <label className="toggle-label">To another address</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={toAnotherAddress}
              onChange={() => {
                const nextValue = !toAnotherAddress;
                setToAnotherAddress(nextValue);

                if (!nextValue) {
                  formik.setFieldValue("WalletAddress", "");
                  formik.setFieldTouched("WalletAddress", false);
                  formik.setFieldError("WalletAddress", undefined);
                }

                formik.validateForm(); // revalidate
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {toAnotherAddress && (
          <div className="anotherAddress">
            <span className="anotherAdress-span">Wallet address</span>
            <input
              type="text"
              name="WalletAddress"
              className="anotherAddress-input"
              placeholder="Enter wallet address here"
              value={formik.values.WalletAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.WalletAddress &&
              typeof formik.errors.WalletAddress === "string" && (
                <span className="error-message">
                  {formik.errors.WalletAddress}
                </span>
              )}
          </div>
        )}
        <p className="toggle-description">
          You can send bridge amount to another address by turning on “To
          another address”.
        </p>

        {/* Notes */}
        <div className="note-box">
          <div className="note-title">
            <img
              className="noteImage"
              src={require("../../static/image/error.png")}
              alt="error"
              width={20}
              height={20}
            />{" "}
            Notes:
          </div>
          <div className="note-body">
            <li>Cross-chain fee is 0.00% + Network gas fee</li>
            <li>Estimated time of cross-chain arrival is 1–3 min</li>
          </div>
        </div>

        {/* Bridge Button */}
        {isConnected ? (
          <BridgeButton
            destination={toNetwork}
            amountProps={formik.values.amount}
            addressProp={formik.values.WalletAddress}
            disabledProp={isBridgeDisabled}
            formik={formik}
            setAction={() => {}}
          />
        ) : (
          <ConnectButton />
        )}
      </div>
      <div style={{ height: "80px" }} />
    </>
  );
}
