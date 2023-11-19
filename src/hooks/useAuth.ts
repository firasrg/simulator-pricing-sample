import React from "react";
import {AuthContext} from "../contexts/AuthContext.ts";
import {IAuthContext} from "../models/IAuthContext.ts";

export function useAuth() {
    return React.useContext<IAuthContext>(AuthContext);
}
