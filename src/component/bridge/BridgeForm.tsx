import React, { useState } from 'react';
import SelectWithImage, { OptionWithImage } from '../exchange/SelectWithImage.tsx';
import './BridgeForm.css'

const fromNetworkOptions: OptionWithImage[] = [
    {
        label: 'Ethereum Mainnet',
        value: 'Ethereum Mainnet',
        icon: require('../../static/image/logo/Ethereum.png'),
      },
    
  {
    label: 'Binance Smart Chain',
    value: 'Binance Smart Chain',
    icon: require('../../static/image/logo/BinanceSmartChain.png'),
  },
];

const toNetworkOption : OptionWithImage[] = [
  {
    label: '6% Profit – 1 Month',
    value: 'Ethereum Mainnet',
    icon: '',
  },
  {
    label: '12% Profit – 3 Months',
    value: '12',
    icon:'',
  },
  {
    label: '25% Profit – 6 Months',
    value: '25',
    icon:'',
  },
  ]


export default function BridgeForm() {
  const [network, setNetwork] = useState<OptionWithImage>(fromNetworkOptions[0]);
  const [amount, setAmount] = useState('');
  const [toNetwork, setToNetwork] = useState<OptionWithImage>(toNetworkOption[0]);
  const [toAnotherAddress, setToAnotherAddress] = useState(false);


  return (<>
    <div className="stake-form">
      {/* Network Dropdown */}
      <label className="form-label">From Network</label>
      <SelectWithImage
        value={network.value}
        options={fromNetworkOptions}
        onChange={(option) => setNetwork(option)}
      />

      {/* toNetwork Select */}
      <label className="form-label">To Network</label>

        <SelectWithImage
        value={toNetwork.value}
        options={toNetworkOption}
        onChange={(option) => setToNetwork(option)}
      />
       
             {/* Amount Input */}
      <label className="form-label">Amount</label>
      <div className="input-wrapper">
        <div className='logoContain'> 
          <img src={require('../../static/image/logo/Logo.png')} alt="HPO" className="input-icon" />
          <span className="input-symbol">HPO</span>
        </div>
       
        <input
          type="text"
          className="form-input"
          placeholder="0.000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <small className="balance-text">Total Balance: 0 ETH / HPO</small>

      {/* Toggle Section */}
      <div className="toggle-container">
        <label className="toggle-label">To another address</label>
        <label className="switch">
          <input
            type="checkbox"
            checked={toAnotherAddress}
            onChange={() => setToAnotherAddress(!toAnotherAddress)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <p className="toggle-description">
        You can send bridge amount to another address by turning on “To another address”.
      </p>

      {/* Notes Section */}
      <div className="note-box">
        <div className="note-title"><img className='noteImage' src={require('../../static/image/error.png')} alt="error" width={20} height={20} /> Notes:</div>
        <div className='note-body'>
          <li>Cross-chain fee is 0.00% + Network gas fee</li>
          <li>Estimated time of cross-chain arrival is 1–3 min</li>
        </div>
      </div>

      {/* Submit Button */}
      <button className="stake-button">Stake</button>
    </div>
    <div style={{height:'80px'}}/>
    </>
  );
}
