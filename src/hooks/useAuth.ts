import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { IAuthContext } from '@models/IAuthContext';

export const useAuth = () => React.useContext<IAuthContext>(AuthContext);
