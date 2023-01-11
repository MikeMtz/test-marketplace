import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/bought.actions';
import { Product } from "../interfaces/product";

export const initialArray: Product[] = []; // Initial array for bought products

/**
 * Bought reducer functions
 */
export const boughtReducer = createReducer(
    initialArray,
    on(actions.addProduct, (state, item) => [...state, item]),
);
