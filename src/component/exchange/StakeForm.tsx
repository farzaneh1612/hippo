import React, { useState } from 'react';
import SelectWithImage, { OptionWithImage } from './SelectWithImage.tsx';
import './StakeForm.css';

const networkOptions: OptionWithImage[] = [

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

const planOption : OptionWithImage[] = [
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
  ]


export default function StakeForm() {
  const [network, setNetwork] = useState<OptionWithImage>(networkOptions[0]);
  const [amount, setAmount] = useState('');
  const [plan, setPlan] = useState<OptionWithImage>(planOption[0]);

  return (<>
    <div className="stake-form">
      {/* Network Dropdown */}
      <label className="form-label">Network</label>
      <SelectWithImage
        value={network.value}
        options={networkOptions}
        onChange={(option) => setNetwork(option)}
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

      {/* Plan Select */}
      <label className="form-label">Plan</label>

        <SelectWithImage
        value={plan.value}
        options={planOption}
        onChange={(option) => setPlan(option)}
      />
       

      {/* Submit Button */}
      <button className="stake-button">Stake</button>
    </div>
    <div style={{height:'80px'}}/>
    </>
  );
}
