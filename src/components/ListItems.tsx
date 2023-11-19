import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CategoryIcon from '@mui/icons-material/Category';

import {useNavigate} from "react-router-dom";
import {ListSubheader} from "@mui/material";

export const MainListItems = () => {
    const navigate = useNavigate();

    return (
    <React.Fragment>
        <ListItemButton onClick={() => navigate("/dashboard",{replace: true})}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>

    </React.Fragment>
)
};

export const SecondaryListItems = () => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <ListSubheader component="div" inset>Strategy</ListSubheader>
            <ListItemButton onClick={() => navigate("/categories",{replace: true})}>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Guarantees" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Acts" />
            </ListItemButton>
        </React.Fragment>
    );
}