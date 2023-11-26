import RoutesWiring from "./navigation/RoutesWiring";
import AuthProvider from "./providers/AuthProvider";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {Provider as ReduxProvider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "@app-redux/storeSetup";

// this is the easiest way to define a theme
const theme = createTheme();

function App() {

    return (
        <ThemeProvider theme={theme}>
            <ReduxProvider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AuthProvider>
                        <RoutesWiring/>
                    </AuthProvider>
                </PersistGate>
            </ReduxProvider>
        </ThemeProvider>
    )
}

export default App
