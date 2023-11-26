import React from 'react';
import Drawer from '../components/Drawer';
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "../components/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {MainListItems} from "../components/ListItems";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {clearData, signOut} from "@app-redux/slices/authSlice";
import {useAppDispatch} from "@app-redux/reduxHooks";

const Layout = ({ children }: {children?: React.ReactNode}): React.ReactElement => {

    const dispatch = useAppDispatch();

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
                        onClick={() => dispatch(clearData())}
                    >
                        <ClearAllIcon/>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={ () => {
                            dispatch(signOut());
                            navigate("/login");
                        }}                    >
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
                </List>
            </Drawer>
            <main style={{flex:1}}>{children}</main>
        </Box>
    );
};

export default Layout;
