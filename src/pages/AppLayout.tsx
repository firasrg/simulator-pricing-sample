// Layout.jsx
import React from 'react';
import Drawer from '../components/Drawer.tsx'; // Import your topbar and drawer components
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "../components/AppBar.tsx";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {MainListItems, SecondaryListItems} from "../components/ListItems.tsx";
import Box from "@mui/material/Box";
import {useAuth} from "../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";

const Layout = ({ children }: {children?: React.ReactNode}): React.ReactElement => {

    const {signout} = useAuth();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{display: 'flex'}} >
            <CssBaseline/>
            <AppBar position="absolute" open={open}>
                <Toolbar sx={{pr: '24px'}}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{flexGrow: 1}}
                    >
                        Dashboard
                    </Typography>
                    <IconButton
                        color="inherit"
                        onClick={() => {
                            signout(() => navigate("/login"))
                        }}
                    >
                        <LogoutIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </Toolbar>
                <Divider/>
                <List component="nav">
                    <MainListItems/>
                    <Divider sx={{my: 1}}/>
                    <SecondaryListItems/>
                </List>
            </Drawer>
            <main style={{flex:1}}>{children}</main>
        </Box>
    );
};

export default Layout;
