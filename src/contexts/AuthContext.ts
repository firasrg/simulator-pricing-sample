import React from "react";
import {IAuthContext} from "../models/IAuthContext.ts";

export const AuthContext = React.createContext<IAuthContext>(null!);
