import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Products } from '../../models/product.model';

export const getProducts = (state: any) => state.products;

export const getProductsSelector =
  //   createFeatureSelector<ReadonlyArray<Products>>('products');
  createSelector(getProducts, (products) => products);
