// Routes.tsx
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageDashboard from './pages/PageDashboard';
import RequireAuth from "./components/RequireAuth";
import PageLogin from "./pages/PageLogin";
import PageListCategories from "./pages/PageListCategories";

const RoutesWire = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={PageLogin}/>
                <Route path="/*" element={<RequireAuth children={<PageDashboard/>}/> } />
                <Route path="/categories" element={<RequireAuth children={<PageListCategories />} /> } />
            </Routes>
        </Router>
    );
};

export default RoutesWire;
