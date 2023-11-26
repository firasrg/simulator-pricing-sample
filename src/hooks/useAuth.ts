import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import {IAuthContext} from "../models/IAuthContext";

export function useAuth() {
    return React.useContext<IAuthContext>(AuthContext);
}
