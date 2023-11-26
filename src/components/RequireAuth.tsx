import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "@app-redux/reduxHooks";
import {auth as selectAuth} from "@app-redux/slices/authSlice";

export default function RequireAuth({ children }: { children?: React.ReactElement}) {

    const auth = useAppSelector(selectAuth);

    const location = useLocation();

    if (!auth.username || !children) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
