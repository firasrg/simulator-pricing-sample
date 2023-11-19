// import './App.css'
import RoutesWire from "./Routes.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import {ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme();

function App() {

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <RoutesWire/>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
