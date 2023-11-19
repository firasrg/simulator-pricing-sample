import React from "react";
import {fakeAuthProvider} from "../businessLogic/authProvider.ts";
import {AuthContext} from "../contexts/AuthContext.ts";

export default function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = React.useState<unknown>(null);

    const signin = (newUser: string, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    const signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    const value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
