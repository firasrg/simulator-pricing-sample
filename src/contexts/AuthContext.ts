import React from "react";
import {IAuthContext} from "../models/IAuthContext";

export const AuthContext = React.createContext<IAuthContext>(null!);
