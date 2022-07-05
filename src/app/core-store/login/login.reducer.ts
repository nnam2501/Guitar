import { Action, createReducer, on } from '@ngrx/store';
import * as LoginAction from './login.actions';

//create initial state (store)
export const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: '',
  token: '',
};

//create reducer for login
export const loginReducer = createReducer(
  initialState,
  on(LoginAction.login, (state) => ({
    ...state,
    isLoading: true,
    error: '',
  })),
  on(LoginAction.loginSuccess, (state, { token }) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    token,
  })),
  on(LoginAction.loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

//create reducer for logout
export const logoutReducer = createReducer(
  initialState,
  on(LoginAction.logout, (state) => ({
    ...state,
    isLoading: true,
    error: '',
  })),
  on(LoginAction.logoutSuccess, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    token: '',
  })),
  on(LoginAction.logoutFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);
