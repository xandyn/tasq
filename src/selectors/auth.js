import { createSelector } from 'reselect';


export const getAuthState = state => state.auth.meta.isAuth;
