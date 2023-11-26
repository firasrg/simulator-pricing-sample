import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import {useAppDispatch} from "@app-redux/reduxHooks";
import {setUsername} from "@app-redux/slices/authSlice";

export default function AuthProvider({ children }: { children: React.ReactNode }) {

    const dispatch = useAppDispatch();

    // const [user, setUser] = React.useState<unknown>("fires@test.com");

    const signin = (username: string, callback: VoidFunction) => {
        dispatch(setUsername(username));
        callback();
    };

    const signout = (callback: VoidFunction) => {
        dispatch(setUsername(null));
        callback();

    };

    const value = { signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
