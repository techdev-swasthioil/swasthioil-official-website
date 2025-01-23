import { Button, Divider, Grid, Icon, IconButton, Link, ListItem } from '@mui/material';
import React from 'react';
import './header.scss';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import header_icon from '../assets/images/Swasthioil-logo.jpeg';
import {useNavigate, useLocation} from 'react-router-dom';
import { NavToggleIcon, LogArrowIcon } from './icon';

function SelectArrowIcon(props) {
	return (
		<SvgIcon
			{...props}
			width="14.828"
			height="8.828"
			viewBox="0 0 14.828 8.828"
		>
			<path
				id="Path_29205"
				data-name="Path 29205"
				d="M3847.184,1022.835l6,6-6,6"
				transform="translate(1036.248 -3845.77) rotate(90)"
				fill="none"
				stroke="#02a54f"
				strokeLinecap="round"
				strokeWidth="2"
			/>
		</SvgIcon>
	);
}

function MenuArrowIcon(props) {
	return (
		<SvgIcon
			{...props}
			width="7.121"
			height="12.121"
			viewBox="0 0 7.121 12.121"
		>
			<path
				id="Path_29391"
				data-name="Path 29391"
				d="M3847.184,1022.835l5,5-5,5"
				transform="translate(-3846.123 -1021.774)"
				fill="none"
				stroke="#fff"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
		</SvgIcon>
	);
}

function NavMenuArrowIcon(props) {
	return (
		<SvgIcon {...props} width="14.12" height="8.121" viewBox="0 0 14.12 8.121">
			<path
				id="Path_29223"
				data-name="Path 29223"
				d="M3847.184,1022.835l6,6-6,6"
				transform="translate(1035.895 -3846.123) rotate(90)"
				fill="none"
				stroke="#fff"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
		</SvgIcon>
	);
}

function Header() {
	
	const [openDrawer, setOpenDrawer] = React.useState(false);

	const handleRefreshToHomePage = () => {
		window.location.href = '/';
	}

	const navigate = useNavigate();
	const location = useLocation();

	const Navbar = () => {
		return(
			<List component="nav" aria-label='main mailbox folders'>
				<ListItemButton
					selected={location.pathname==='/'}
					onClick={(e)=>{
						navigate('/');
					}}
				>
					<ListItemText primary="HOME"/>
				</ListItemButton>
	 			<ListItemButton
					selected={location.pathname==='/products'}
					onClick={(e)=>{
						navigate('/products');
					}}	
				>
	 				<ListItemText primary="SHOP"/>
	 			</ListItemButton>
	 			<ListItemButton
					selected={location.pathname==='/about'}
					onClick={(e)=>{
						navigate('/about');
					}}	
				>
	 				<ListItemText primary="ABOUT US"/>
	 			</ListItemButton>
	 			<ListItemButton
					selected={location.pathname==='/contact'}
					onClick={(e)=>{
						navigate('/contact');
					}}	
				>
					<ListItemText primary="CONTACT US"/>
				</ListItemButton>
				{/* <ListItemButton
					selected={location.pathname==='/register-now'}
					onClick={(e)=>{
						navigate('/register-now');
					}}	
				>
	 				<ListItemText primary="REGISTER NOW"/>
	 			</ListItemButton> */}
			</List>
		)
	}

	const MobileDrawer = () => {
		return (
			<div
				className={
					'mobile_drawer_container ' + (openDrawer ? 'open_drawer' : '')
				}
			>
				<Navbar />
			</div>
		);
	};

  return (
	<div className='header_container'>
		<Box>
			<div className='title_container'>
				<img src={header_icon} alt='icon' className='header_icon' onClick={handleRefreshToHomePage}/>
				<Typography className='header_title' onClick={handleRefreshToHomePage}>Swasthi Coconut Oil</Typography>
			</div>
			<Navbar/>
			<div className='right_container'>
				{/* <Button
					className="login_btn"
					variant="contained"
					startIcon={<LogInUserIcon />}
					endIcon={<LogArrowIcon />}
					onClick={(e) => {
						window.open('');
					}}
				>
					<span>LOGIN</span>
				</Button> */}
				<IconButton
					aria-label="Menu"
					className={
						'navbar_toggler_btn' + (openDrawer ? ' drawer_open' : '')
					}
					onClick={() => setOpenDrawer(!openDrawer)}
				>
					<NavToggleIcon />
				</IconButton>
			</div>
		</Box>
		<MobileDrawer/>
	</div>
  )
}

export default Header