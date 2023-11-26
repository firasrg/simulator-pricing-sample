import { useAppDispatch } from '@app-redux/reduxHooks';
import { clearData } from '@app-redux/slices/authSlice';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import { MainListItems } from '../components/ListItems';
import { useAuth } from '../hooks/useAuth';

const Layout = ({ children }: { children?: React.ReactNode }): React.ReactElement => {
  const auth = useAuth();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' })
            }}>
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Quotation Panel
          </Typography>
          <IconButton color="inherit" onClick={() => dispatch(clearData())}>
            <DeleteForeverIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => auth.signout(() => navigate('/login'))}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1]
          }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems />
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <main style={{ flex: 1 }}>{children}</main>
    </Box>
  );
};

export default Layout;
