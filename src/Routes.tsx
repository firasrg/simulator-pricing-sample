// Routes.tsx
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageDashboard from './pages/PageDashboard.tsx';
import RequireAuth from "./components/RequireAuth.tsx";
import PageLogin from "./pages/PageLogin.tsx";
import PageListCategories from "./pages/PageListCategories.tsx";

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
