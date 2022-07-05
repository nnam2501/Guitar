import { createSelector } from '@ngrx/store';

//create selector for login
export const loginSelector = createSelector(
  (state: any) => state.login,
  (login) => login
);
