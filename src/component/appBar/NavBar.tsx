import React from 'react'
import image from '../../static/image/fotter.png'
import "./AppBar.css";

const socialsLogo=[{src:require('../../static/image/logo/social/TelegramLogo.png')}, {src:require('../../static/image/logo/social/InstagramLogo.png')}, {src:require('../../static/image/logo/social/DiscordLogo.png')}, {src:require('../../static/image/logo/social/linkedin-fill.png')}, {src:require('../../static/image/logo/social/facebook.png')}]
export default function NavBar() {
  return (
    <div className='navBar' style={{backgroundImage:`url(${image})`}}>
        <div className='navbarDiv'>
            <div className='lologoandsocialDiv'>
                <div className='logoandsocialcontainer'>
                    <img className='logoNav' src={require('../../static/image/logo/Logo.png')} width={'100%'} height={'100%'} alt="logo"/>            
                    <img className='hpoIcon' src={require('../../static/image/Vector.png')} width={'100%'} height={'100%'} alt="HPOtoken"/>
                </div>
                <div style={{display:'flex', gap:8, marginTop:'16px'}}>
                {socialsLogo.map((social) => (
                    <div className='socialButton'>
                        <img className='socialLogo' src={social.src} width={'100%'} height={'100%'} alt="logosocial"/>            

                    </div>
                ))}
                </div>
            </div>
            <div style={{display:'flex', gap:8, marginTop:'32px'}}>
                <button className='buttonDownload'>
                    <span className='buttonDownloadTypography'>Download Hippo Wallet</span>
                </button>
                <button className='buttonDownload'>
                    <span className='buttonDownloadTypography'>Download Whitepaper</span>
                </button>
            </div>
            <p className="footer-copy">© 2025 HPOtoken. All rights reserved</p>

        </div>
    </div>
  )
}
