// Routes.tsx
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageDashboard from './pages/PageDashboard.tsx';
import RequireAuth from "./components/RequireAuth.tsx";
import PageLogin from "./pages/PageLogin.tsx";

const RoutesWire = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={PageLogin}/>
                <Route path="/" element={<RequireAuth><PageDashboard/></RequireAuth>}/>
            </Routes>
        </Router>
    );
};

export default RoutesWire;
