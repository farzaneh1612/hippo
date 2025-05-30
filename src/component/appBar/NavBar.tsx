import React from 'react'
import image from '../../static/image/fotter.png'
import "./AppBar.css";

const socialsLogo=[{name:'telegram', src:require('../../static/image/logo/social/TelegramLogo.png'), url:'https://t.me/hippowallet'}, {name:'instagram', src:require('../../static/image/logo/social/InstagramLogo.png'), url:'https://www.instagram.com/hippo_wallet?igsh=NDdlZXRlMDRid2w2&utm_source=qr'}, {name:'discord', src:require('../../static/image/logo/social/DiscordLogo.png'), url:'https://discord.com/invite/5KW493NV8R'}, {name:'linkedin',src:require('../../static/image/logo/social/linkedin-fill.png'), url:'https://www.linkedin.com/company/80176304/admin/dashboard/'}, {name:'x',src:require('../../static/image/logo/social/XLogo.png'), url:'https://x.com/HippoWallet'}]
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
                    <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                    <div className='socialButton'>
                        <img className='socialLogo' src={social.src} width={'100%'} height={'100%'} alt="logosocial"/>            

                    </div></a>
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
