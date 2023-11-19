import React from "react";
import {tempAuthProvider} from "../businessLogic/authProvider.ts";
import {AuthContext} from "../contexts/AuthContext.ts";

export default function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = React.useState<unknown>(null);

    const signin = (newUser: string, callback: VoidFunction) => {
        return tempAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    const signout = (callback: VoidFunction) => {
        return tempAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    const value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
