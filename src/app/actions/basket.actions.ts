import {createAction, props} from "@ngrx/store";
import {Product} from "../interfaces/product";

export const addProduct = createAction('[BASKET] Add product to basket', props<Product>());
export const removeProduct = createAction('[BASKET] Remove product of basket', props<{ id: number }>());
export const reset = createAction('[BASKET] Reset basket ');
