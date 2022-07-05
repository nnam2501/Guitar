import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';

import { Products } from '../../models/product.model';

export const initialState: ReadonlyArray<Products> = [];

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
