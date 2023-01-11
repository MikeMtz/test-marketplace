import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/basket.actions';
import { Product } from "../interfaces/product";

export const initialArray: Product[] = []; // Initial array for basket

/**
 * Basket reducer functions
 */
export const basketReducer = createReducer(
    initialArray,
    on(actions.addProduct, (state, item) => [...state, item]),
    on(actions.removeProduct, (state, { id }) => state.filter(pr => pr.id !== id)),
    on(actions.reset, () => initialArray),
);
