import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import PageDashboard from '../pages/PageDashboard';
import PageLogin from "../pages/PageLogin";
import RequireAuth from "./RequireAuth";

const RoutesWiring = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={PageLogin}/>
                <Route path="*" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<RequireAuth child={<PageDashboard />} />} />
            </Routes>
        </Router>
    );
};

export default RoutesWiring;
