import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './DashboardLayout.scss';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        // variants: [
        //     {
        //         props: ({ open }) => open,
        //         style: {
        //             transition: theme.transitions.create('margin', {
        //                 easing: theme.transitions.easing.easeOut,
        //                 duration: theme.transitions.duration.enteringScreen,
        //             }),
        //             marginLeft: 0,
        //         },
        //     },
        // ],
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                // width: `calc(100% - ${drawerWidth}px)`,
                // marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function DashboardLayout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { item: 'Dashboard', navigateTo: 'dashboard', icon: <DashboardIcon /> },
        { item: 'Products', navigateTo: 'productManagement', icon: <ShoppingCartIcon /> },
        { item: 'Customers', navigateTo: 'customers', icon: <PeopleAltIcon /> },
        { item: 'Orders', navigateTo: 'orders', icon: <ReceiptLongIcon /> },
        { item: 'Staff Management', navigateTo: 'staffs', icon: <AccountBoxIcon /> },
        { item: 'Inventory', navigateTo: 'inventory', icon: <InventoryIcon /> },
        { item: 'Billing', navigateTo: 'billing', icon: <ReceiptLongIcon/> },
        { item: 'Cashflow', navigateTo: 'cashflow', icon: <AccountBalanceIcon/> },
        { item: 'Expenses', navigateTo: 'expenses', icon: <CurrencyRupeeIcon/> },
    ]


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                       Sri Janardana Oil Mill
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {menuItems.map((items, index) => (
                    <List key={index}>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                onClick={() => {
                                    navigate(items.navigateTo);
                                    handleDrawerClose();
                                }
                                }
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {items.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={items.item}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                ))}
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}

export default DashboardLayout;
