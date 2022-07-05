import { createAction, props } from '@ngrx/store';

//create action for login
export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

//create action for login success
export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ token: string }>()
);

//create action for login failure
export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ error: any }>()
);

//create action for logout
export const logout = createAction('[Login Page] Logout');
//create action for logout success
export const logoutSuccess = createAction('[Login Page] Logout Success');
//create action for logout failure
export const logoutFailure = createAction('[Login Page] Logout Failure');
