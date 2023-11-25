// import './App.css'
import RoutesWire from "./Routes.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {Provider as ReduxProvider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "@app-redux/storeSetup.ts";

const theme = createTheme();

function App() {

    return (
        <ThemeProvider theme={theme}>
            <ReduxProvider store={store}>
                <PersistGate persistor={persistor}>
                    <AuthProvider>
                        <RoutesWire/>
                    </AuthProvider>
                </PersistGate>
            </ReduxProvider>
        </ThemeProvider>
    )
}

export default App
