import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import {useAppDispatch} from "@app-redux/reduxHooks";
import {signIn, signOut} from "@app-redux/slices/authSlice";

export default function AuthProvider({ children }: { children: React.ReactNode }) {

    const dispatch = useAppDispatch();

    // const [user, setUser] = React.useState<unknown>("fires@test.com");

    const signin = (username: string, navigationCallback: VoidFunction) => {
        dispatch(signIn(username));
        navigationCallback();
    };

    const signout = (navigationCallback: VoidFunction) => {
        dispatch(signOut());
        navigationCallback();
    };

    const value = { signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
