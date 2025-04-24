// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// // import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['About Hippo', 'Staking', 'Buy'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar style={{backgroundColor:'rgba(31, 31, 31, 1)'}} position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <img src={require('../../static/image/logo.png')} width={40} height={40} alt="logo"/>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               color: 'rgba(69, 122, 108, 1)',
//               textDecoration: 'none',
//               fontSize:20,
//               ml: '12px'
//             }}
//           >
//             Hippo Wallet
//           </Typography>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
// Hippo Wallet
//           </Typography>
//           <Box sx={{ flexGrow: 1, justifyContent:'center', display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 1 }}>
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: '4px' }}>
//                 <Avatar sx={{bgcolor: '#366B5D', borderColor:'#F0F0F0', border:1,width: '191px !important', height: '40px !important', borderRadius:'20px' }}  alt="Remy Sharp">
//                 <Typography
//             noWrap
//             sx={{
//              fontSize:18,
//              color:'#F0F0F0'
//             }}
//           >
//             Start To Stake/Bridge
//             </Typography>
//                 </Avatar>
//               </IconButton>
// {/*   
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu> */}
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: 'center' ,}}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;


import React, { useState } from "react";
import "./ResponsiveAppBar.css";
import logo from "../../static/image/logo/Logo.png"; // adjust path as needed
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "../menu/Menu.tsx";
const isMobile = window.innerWidth <= 768;


const ResponsiveAppBar: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        <img src={logo} alt="HPO Logo" className="navbar-logo" />
        {!isMobile && 
        <span className="navbar-brand">HPOtoken</span>
        }
        
      </div>
      {isMobile ? 
      <button className="navbar-button-start">
        <span>Start To Stake/Bridge</span>
        </button> 
        :
      <div className="navbar-center">
        <a href="#about">About HPO</a>
        <a href="#staking">Staking</a>
        <a href="#buy">Buy</a>
      </div>
      }
      {isMobile ? <>
      <MenuIcon  className="navbar-menu" onClick={toggleDrawer} /> 
      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>

        {/* Drawer Content */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}><Menu/></div> </>
      :
      <div className="navbar-right">
        <button className="stake-button">Start To Stake / Bridge</button>
      </div>
      }
    </nav>
  );
};

export default ResponsiveAppBar;
