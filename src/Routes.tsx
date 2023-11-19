// Routes.tsx
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RequireAuth from "./components/RequireAuth.tsx";

const RoutesWire = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RequireAuth/>}/>
                <Route path="/login" Component={Login}/>
                <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}/>
            </Routes>
        </Router>
    );
};

export default RoutesWire;
