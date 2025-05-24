import { useAppKit } from "@reown/appkit/react";
// import { Components } from "./call_api_func.js";
// import { StakeButton } from "./stake_button.js";
import  '../component/appBar/AppBar.css'
import {useAppKitAccount } from "@reown/appkit/react";


export function ConnectButton({backgrounColor='#30959C', colorText='var(--Gray-10, #F2F2F2)'}) {
    // 4. Use modal hook
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();


//show adress wallet function

function TruncateText({ text }) {
    const first = text.slice(0, 3);
    const last = text.slice(-3);
  
    return (
      <div className='buttonText'>
        {first}{' '}...{' '}{last}
      </div>
    );
  }
    return (
        <>
            <div className='buttonConected' style={{backgroundColor:backgrounColor}} onClick={() => open()}>
                {isConnected ?<TruncateText text= {address} />
                    :<span className='buttonText' style={{color:colorText}}>Connect to wallet</span>}
            </div>
          
          {/* //move to other component */}
            {/* <button onClick={() => open({ view: "Networks" })}>
                Open Network Modal
            </button> */}


            {/* <Components />

            <StakeButton/> */}

        </>
    );
}