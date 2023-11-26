import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {IAppBarProps} from "../models/IAppBarProps";
import {DEFAULT_DRAWER_WIDTH} from "./Drawer";

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<IAppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: DEFAULT_DRAWER_WIDTH,
        width: `calc(100% - ${DEFAULT_DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default AppBar;